import type { APIRoute } from 'astro';
import { SITE_URL } from '../config';
import { ARTICLES } from '../data/articles';

type SitemapEntry = {
  path: string;
};

const staticEntries: SitemapEntry[] = [
  { path: '/' },
  { path: '/politique-confidentialite/' },
  { path: '/conditions-utilisation/' },
  { path: '/accessibilite/' },
  { path: '/en/' },
  { path: '/en/privacy-policy/' },
  { path: '/en/terms-of-use/' },
  { path: '/en/accessibility/' },
  { path: '/es/' },
  { path: '/es/politica-de-privacidad/' },
  { path: '/es/terminos-de-uso/' },
  { path: '/es/accesibilidad/' },
  ...ARTICLES.flatMap((article) => [
    { path: article.locales.fr.href },
    { path: article.locales.en.href },
    { path: article.locales.es.href },
  ]),
];

const escapeXml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

export const GET: APIRoute = async () => {
  const urls = staticEntries
    .map((entry) => {
      const loc = new URL(entry.path, SITE_URL).href;
      return `  <url>\n    <loc>${escapeXml(loc)}</loc>\n  </url>`;
    })
    .join('\n');

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
