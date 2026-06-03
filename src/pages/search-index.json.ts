export async function GET() {
  const searchIndex = [
    {
      title: 'AG Nexum Canada',
      description: 'Un cabinet canadien multidisciplinaire au service de la mobilité, du capital et de la performance.',
      slug: '/',
      type: 'Accueil',
    },
    {
      title: 'Divisions',
      description: 'ImmiCan, AL Escape-ImmiCan, AG Nexum Recouvrement et AG HVAC Solutions.',
      slug: '/#divisions',
      type: 'Section',
    },
    {
      title: 'Équipe exécutive',
      description: 'Les têtes de file des départements clés.',
      slug: '/#equipe',
      type: 'Section',
    },
  ];

  return new Response(JSON.stringify(searchIndex), {
    headers: { 'Content-Type': 'application/json' },
  });
}
