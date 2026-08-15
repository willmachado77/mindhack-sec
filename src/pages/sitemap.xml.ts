import { getCollection } from 'astro:content';

const site = 'https://mindhacksec.tech';

const xmlEscape = (value: string) => value.replace(/[<>&'\"]/g, (character) => ({
  '<': '&lt;',
  '>': '&gt;',
  '&': '&amp;',
  "'": '&apos;',
  '"': '&quot;'
})[character] ?? character);

export async function GET() {
  const [dicas, noticias, cursos] = await Promise.all([
    getCollection('dicas'),
    getCollection('noticias'),
    getCollection('cursos')
  ]);

  const pages = [
    { path: '/', lastmod: undefined },
    { path: '/dicas', lastmod: undefined },
    { path: '/noticias', lastmod: undefined },
    { path: '/cursos', lastmod: undefined },
    { path: '/sobre', lastmod: undefined },
    ...dicas.map((dica) => ({ path: `/dicas/${dica.id}`, lastmod: dica.data.publishedAt })),
    ...noticias.map((noticia) => ({ path: `/noticias/${noticia.id}`, lastmod: noticia.data.updatedAt ?? noticia.data.publishedAt })),
    ...cursos.map((curso) => ({ path: `/cursos/${curso.id}`, lastmod: undefined }))
  ];

  const urls = pages.map(({ path, lastmod }) => `  <url>\n    <loc>${xmlEscape(new URL(path, site).toString())}</loc>${lastmod ? `\n    <lastmod>${lastmod.toISOString().slice(0, 10)}</lastmod>` : ''}\n  </url>`).join('\n');

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' }
  });
}
