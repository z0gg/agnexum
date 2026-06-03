export async function GET() {
  const searchIndex = [
    {
      title: 'AG Nexum Canada',
      description: 'Un cabinet canadien multidisciplinaire au service de la mobilité, du capital et de la performance.',
      slug: '/',
      type: 'Accueil',
      lang: 'fr',
    },
    {
      title: 'Divisions',
      description: 'ImmiCan, AL Escape-ImmiCan, AG Nexum Recouvrement et AG HVAC Solutions.',
      slug: '/#divisions',
      type: 'Section',
      lang: 'fr',
    },
    {
      title: 'Équipe exécutive',
      description: 'Les têtes de file des départements clés.',
      slug: '/#equipe',
      type: 'Section',
      lang: 'fr',
    },
    {
      title: 'AG Nexum Canada',
      description: 'A multidisciplinary Canadian firm serving mobility, capital and performance.',
      slug: '/en/',
      type: 'Home',
      lang: 'en',
    },
    {
      title: 'Divisions',
      description: 'ImmiCan, AL Escape-ImmiCan, AG Nexum Recovery and AG HVAC Solutions.',
      slug: '/en/#divisions',
      type: 'Section',
      lang: 'en',
    },
    {
      title: 'Executive team',
      description: 'Leaders across the group’s key departments.',
      slug: '/en/#team',
      type: 'Section',
      lang: 'en',
    },
  ];

  return new Response(JSON.stringify(searchIndex), {
    headers: { 'Content-Type': 'application/json' },
  });
}
