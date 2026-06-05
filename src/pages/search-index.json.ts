import { ARTICLES } from '../data/articles';

export async function GET() {
  const searchIndex = [
    {
      title: 'AG Nexum Canada',
      description: 'Un cabinet canadien multidisciplinaire au service de la mobilité internationale, du capital et de la performance commerciale.',
      slug: '/',
      type: 'Page',
      lang: 'fr',
    },
    {
      title: 'Sept divisions opérationnelles',
      description: 'ImmiCan, AL Escape-ImmiCan, AG Nexum Recouvrement, AG HVAC Solutions, AG Nexum Prêt, AG Expersales et AG Business Intelligence.',
      slug: '/#divisions',
      type: 'Section',
      lang: 'fr',
    },
    {
      title: 'Ressources & expertise',
      description: 'Articles et guides pratiques sur immigration canadienne, actifs non réclamés et micro-crédit.',
      slug: '/#ressources',
      type: 'Section',
      lang: 'fr',
    },
    {
      title: 'AG Nexum Canada',
      description: 'A multidisciplinary Canadian firm serving international mobility, capital and commercial performance.',
      slug: '/en/',
      type: 'Page',
      lang: 'en',
    },
    {
      title: 'Seven operating divisions',
      description: 'ImmiCan, AL Escape-ImmiCan, AG Nexum Recovery, AG HVAC Solutions, AG Nexum Loan, AG Expersales and AG Business Intelligence.',
      slug: '/en/#divisions',
      type: 'Section',
      lang: 'en',
    },
    {
      title: 'Resources & expertise',
      description: 'Practical articles and guides on Canadian immigration, unclaimed assets and micro-credit.',
      slug: '/en/#resources',
      type: 'Section',
      lang: 'en',
    },
    {
      title: 'AG Nexum Canada',
      description: 'Una firma canadiense multidisciplinaria al servicio de la movilidad internacional, el capital y el desempeño comercial.',
      slug: '/es/',
      type: 'Page',
      lang: 'es',
    },
    {
      title: 'Siete divisiones operativas',
      description: 'ImmiCan, AL Escape-ImmiCan, AG Nexum Recuperación, AG HVAC Solutions, AG Nexum Préstamo, AG Expersales y AG Business Intelligence.',
      slug: '/es/#divisiones',
      type: 'Section',
      lang: 'es',
    },
    {
      title: 'Recursos & experiencia',
      description: 'Artículos y guías prácticas sobre inmigración canadiense, activos no reclamados y microcrédito.',
      slug: '/es/#recursos',
      type: 'Section',
      lang: 'es',
    },
    ...ARTICLES.flatMap((article) => [
      {
        title: article.locales.fr.title,
        description: article.locales.fr.description,
        slug: article.locales.fr.href,
        type: 'Article',
        lang: 'fr',
      },
      {
        title: article.locales.en.title,
        description: article.locales.en.description,
        slug: article.locales.en.href,
        type: 'Article',
        lang: 'en',
      },
      {
        title: article.locales.es.title,
        description: article.locales.es.description,
        slug: article.locales.es.href,
        type: 'Article',
        lang: 'es',
      },
    ]),
  ];

  return new Response(JSON.stringify(searchIndex), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
