import { mkdir, readFile, writeFile, access } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

function fail(message) {
  throw new Error(`ABORTADO: ${message}`);
}

function readArgument(name) {
  const index = process.argv.indexOf(name);
  return index === -1 ? undefined : process.argv[index + 1];
}

function assertString(value, label) {
  if (typeof value !== 'string' || value.trim() === '') fail(`${label} é obrigatório.`);
  return value.trim();
}

function assertUrl(value, label) {
  const raw = assertString(value, label);
  let parsed;
  try {
    parsed = new URL(raw);
  } catch {
    fail(`${label} precisa ser uma URL válida.`);
  }
  if (!['http:', 'https:'].includes(parsed.protocol)) fail(`${label} precisa usar http ou https.`);
  return parsed.toString();
}

function yamlText(value) {
  return JSON.stringify(value);
}

function escapeMarkdown(value) {
  return value.replaceAll('[', '\\[').replaceAll(']', '\\]');
}

function formatReference(reference, label) {
  if (!reference) return null;
  const referenceLabel = assertString(reference.label, `${label}.label`);
  const referenceUrl = assertUrl(reference.url, `${label}.url`);
  return `- ${label}: [${escapeMarkdown(referenceLabel)}](${referenceUrl})`;
}

function slugify(value) {
  const slug = value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 72);
  if (!slug) fail('não foi possível formar um nome de arquivo a partir do título.');
  return slug;
}

const inputPath = readArgument('--input');
const outputDirectory = readArgument('--out-dir') ?? 'rascunhos/necropaper';

if (!inputPath) fail('informe --input /caminho/da/pauta.json.');

let pauta;
try {
  pauta = JSON.parse(await readFile(inputPath, 'utf8'));
} catch (error) {
  fail(`não foi possível ler JSON de entrada (${error.message}).`);
}

if (pauta.editorial_status !== 'aprovar') fail('editorial_status precisa ser exatamente "aprovar".');

const id = Number(pauta.collected_link_id);
if (!Number.isSafeInteger(id) || id <= 0) fail('collected_link_id precisa ser um inteiro positivo.');

const title = assertString(pauta.reviewed_title, 'reviewed_title');
const description = assertString(pauta.reviewed_summary, 'reviewed_summary');
const publishedAt = assertString(pauta.publishedAt, 'publishedAt');
if (!/^\d{4}-\d{2}-\d{2}$/.test(publishedAt) || Number.isNaN(Date.parse(`${publishedAt}T00:00:00Z`))) {
  fail('publishedAt precisa estar no formato AAAA-MM-DD e representar uma data válida.');
}

if (!Array.isArray(pauta.tags) || pauta.tags.length === 0) fail('tags precisa ter ao menos uma tag.');
const tags = pauta.tags.map((tag, index) => assertString(tag, `tags[${index}]`));

if (!pauta.primary_source || typeof pauta.primary_source !== 'object') fail('primary_source é obrigatório.');
const primaryLabel = assertString(pauta.primary_source.label, 'primary_source.label');
const primaryUrl = assertUrl(pauta.primary_source.url, 'primary_source.url');
const originalReference = formatReference(pauta.original_source, 'Fonte original');
const secondaryReference = formatReference(pauta.secondary_source, 'Fonte secundária');
const decisionReason = typeof pauta.decision_reason === 'string' && pauta.decision_reason.trim()
  ? pauta.decision_reason.trim()
  : 'Não informado.';
const editorNotes = typeof pauta.editor_notes === 'string' && pauta.editor_notes.trim()
  ? pauta.editor_notes.trim()
  : 'Não informado.';

const outputPath = path.resolve(outputDirectory, `${id}-${slugify(title)}.md`);
try {
  await access(outputPath);
  fail(`o rascunho já existe e não será sobrescrito: ${outputPath}`);
} catch (error) {
  if (error.message.startsWith('ABORTADO:')) throw error;
  if (error.code !== 'ENOENT') throw error;
}

const references = [
  `- Fonte primária: [${escapeMarkdown(primaryLabel)}](${primaryUrl})`,
  originalReference,
  secondaryReference,
].filter(Boolean).join('\n');

const document = `---
title: ${yamlText(title)}
description: ${yamlText(description)}
publishedAt: ${publishedAt}
tags: ${JSON.stringify(tags)}
source:
  label: ${yamlText(primaryLabel)}
  url: ${yamlText(primaryUrl)}
---

<!--
RASCUNHO LOCAL DO NECROPAPER — não copiar para src/content sem revisão humana.
Pauta de origem: ${id}. Não incluir esta observação no texto final.
-->

## O que aconteceu

[REVISAR] Explique o fato confirmado, quem o confirmou e quando ele ocorreu.
Diferencie a data do acontecimento da data de publicação desta matéria.

## Contexto e impacto

[REVISAR] Desenvolva o resumo revisado sem acrescentar fatos não verificados.
Separe fatos confirmados, alegações de terceiros e inferências.

## O que o leitor pode fazer

[REVISAR] Inclua apenas ações sustentadas pelas fontes. Declare limites,
condições e incertezas de modo claro, sem alarmismo.

## Fontes e limites

${references}

### Fundamentação editorial

${decisionReason}

### Notas para redação

${editorNotes}
`;

await mkdir(path.dirname(outputPath), { recursive: true });
await writeFile(outputPath, document, { encoding: 'utf8', flag: 'wx' });
console.log(`RASCUNHO_CRIADO=${outputPath}`);
