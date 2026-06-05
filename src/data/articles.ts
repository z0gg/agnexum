import type { Locale } from '../config';

export type ArticleSlug = 'express-entry-afrique-francophone' | 'actifs-non-reclames-quebec' | 'financement-urgence-quebec';

export type ArticleSource = {
  label: string;
  type: string;
  url: string;
  note: string;
};

export type ArticleContent = {
  slug: string;
  href: string;
  category: string;
  division: string;
  title: string;
  description: string;
  eyebrow: string;
  readTime: string;
  keywords: string[];
  highlights: string[];
  sections: { title: string; body: string[] }[];
  sourceIntro: string;
  ctaTitle: string;
  ctaText: string;
  ctaLabel: string;
};

export type Article = {
  id: ArticleSlug;
  color: string;
  accent: string;
  icon: string;
  publishedDate: string;
  modifiedDate: string;
  sources: ArticleSource[];
  locales: Record<Locale, ArticleContent>;
};

const pathFor = (lang: Locale, slug: string) => {
  if (lang === 'fr') return `/articles/${slug}/`;
  if (lang === 'en') return `/en/articles/${slug}/`;
  return `/es/articulos/${slug}/`;
};

export const ARTICLES: Article[] = [
  {
    id: 'express-entry-afrique-francophone',
    color: '#1b5ea8',
    accent: '#e7f0fb',
    icon: '✈️',
    publishedDate: '2026-06-01',
    modifiedDate: '2026-06-01',
    sources: [
      {
        label: 'IRCC — Rounds of invitations',
        type: 'Officiel — IRCC Canada',
        url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/rounds-invitations.html',
        note: 'Tirages officiels Express Entry, seuils CRS et invitations à présenter une demande.',
      },
      {
        label: 'ImmigrerCanada.com — Tirages Entrée Express',
        type: 'Référence — tirages temps réel',
        url: 'https://www.immigrercanada.com/tirages/entree-express',
        note: 'Liste francophone des tirages et seuils CRS récents.',
      },
      {
        label: 'EnglishStoianova.ca — Analyse tirages francophones',
        type: 'Analyse — données comparatives',
        url: 'https://englishstoianova.ca/en/articles/french/french-express-entry-draws-2026/',
        note: 'Analyse comparative des seuils francophones versus tirages généraux.',
      },
      {
        label: 'SOS Hub Canada — Guide Entrée Express Afrique francophone',
        type: 'Guide — candidats africains',
        url: 'https://soshubcanada.com/entree-express-afrique',
        note: 'Guide pratique pour TEF/TCF Canada, diplômes, WES et dossiers par pays.',
      },
      {
        label: 'IRCC — Calculateur et critères CRS officiels',
        type: 'Officiel — critères CRS',
        url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/check-score.html',
        note: 'Critères CRS officiels et vérification du score.',
      },
    ],
    locales: {
      fr: {
        slug: 'express-entry-afrique-francophone',
        href: pathFor('fr', 'express-entry-afrique-francophone'),
        category: 'Immigration canadienne',
        division: 'ImmiCan',
        title: 'Express Entry 2025–2026 : stratégies pour candidats d’Afrique francophone',
        description: 'Comprendre les tirages francophones, le score CRS, les tests de français et les étapes à prioriser pour un dossier Express Entry depuis l’Afrique francophone.',
        eyebrow: 'Article pilote SEO · Immigration',
        readTime: 'Lecture 6 min',
        keywords: ['express entry 2025 côte d’ivoire', 'immigration canada depuis guinée', 'tirage francophone CRS', 'bonus francophone express entry'],
        highlights: ['Tirages francophones à surveiller', 'Score CRS et stratégie linguistique', 'TEF/TCF Canada, diplômes et préparation documentaire'],
        sections: [
          { title: 'Pourquoi les candidats francophones doivent suivre les tirages ciblés', body: ['Express Entry ne se résume plus aux seuls tirages généraux. Les rondes ciblées pour profils francophones peuvent modifier fortement la stratégie d’un candidat d’Afrique francophone, notamment lorsque l’écart de seuil CRS avec les tirages généraux devient significatif.', 'La première étape consiste à suivre les rondes officielles publiées par IRCC, puis à comparer les seuils avec les analyses de tirages francophones récentes.'] },
          { title: 'Les priorités à travailler avant de déposer un profil', body: ['La langue demeure un levier central : un résultat solide au TEF Canada ou au TCF Canada peut changer la compétitivité du profil. Le candidat doit aussi anticiper l’évaluation des diplômes, la cohérence de l’expérience professionnelle et la preuve documentaire.', 'Pour les dossiers provenant de Guinée, Côte d’Ivoire, Cameroun ou Sénégal, il faut préparer tôt les documents scolaires, professionnels et d’état civil afin d’éviter les délais de légalisation ou de vérification.'] },
          { title: 'Le rôle d’ImmiCan', body: ['ImmiCan intervient comme plateforme d’évaluation préliminaire et d’orientation. Les conseils juridiques en immigration doivent être rendus par des consultants réglementés ou des avocats canadiens partenaires, conformément au cadre applicable.', 'L’objectif : qualifier le profil, identifier les écarts prioritaires et orienter la demande vers le bon accompagnement.'] },
        ],
        sourceIntro: 'Sources publiques utilisées pour cet article pilote :',
        ctaTitle: 'Vous voulez évaluer votre profil ?',
        ctaText: 'AG Nexum Canada peut qualifier votre demande et l’orienter vers la division ImmiCan.',
        ctaLabel: 'Demander une évaluation',
      },
      en: {
        slug: 'express-entry-francophone-africa',
        href: pathFor('en', 'express-entry-francophone-africa'),
        category: 'Canadian immigration',
        division: 'ImmiCan',
        title: 'Express Entry 2025–2026: strategies for French-speaking African candidates',
        description: 'A practical guide to francophone draws, CRS strategy, French-language testing and document preparation for Express Entry candidates from French-speaking Africa.',
        eyebrow: 'SEO pilot article · Immigration',
        readTime: '6 min read',
        keywords: ['Express Entry 2025', 'francophone CRS draw', 'Canada immigration from Africa', 'French bonus Express Entry'],
        highlights: ['Francophone draws to monitor', 'CRS and language strategy', 'TEF/TCF Canada, credentials and documentation'],
        sections: [
          { title: 'Why francophone candidates should track targeted draws', body: ['Express Entry is no longer only about general draws. Targeted rounds for French-speaking profiles can materially change the strategy for candidates from French-speaking Africa, especially when CRS thresholds differ from general rounds.', 'A practical process starts with IRCC’s official invitation rounds and then compares them with recent francophone-draw analysis.'] },
          { title: 'Priorities before submitting a profile', body: ['Language remains a major lever: strong TEF Canada or TCF Canada results can improve competitiveness. Candidates should also anticipate credential assessment, work-history consistency and document proof.', 'For files from Guinea, Côte d’Ivoire, Cameroon or Senegal, school, employment and civil-status documents should be prepared early to reduce legalization or verification delays.'] },
          { title: 'How ImmiCan fits in', body: ['ImmiCan acts as a preliminary assessment and orientation platform. Immigration legal advice must be provided by regulated consultants or Canadian partner lawyers under the applicable framework.', 'The goal is to qualify the profile, identify priority gaps and route the request toward the right support.'] },
        ],
        sourceIntro: 'Public sources used for this pilot article:',
        ctaTitle: 'Want to assess your profile?',
        ctaText: 'AG Nexum Canada can qualify your request and route it to the ImmiCan division.',
        ctaLabel: 'Request an assessment',
      },
      es: {
        slug: 'express-entry-africa-francofona',
        href: pathFor('es', 'express-entry-africa-francofona'),
        category: 'Inmigración canadiense',
        division: 'ImmiCan',
        title: 'Express Entry 2025–2026: estrategias para candidatos de África francófona',
        description: 'Guía práctica sobre sorteos francófonos, estrategia CRS, pruebas de francés y preparación documental para candidatos de África francófona.',
        eyebrow: 'Artículo piloto SEO · Inmigración',
        readTime: 'Lectura 6 min',
        keywords: ['Express Entry 2025', 'sorteo francófono CRS', 'inmigración Canadá África', 'bono francés Express Entry'],
        highlights: ['Sorteos francófonos a seguir', 'CRS y estrategia lingüística', 'TEF/TCF Canada, diplomas y documentos'],
        sections: [
          { title: 'Por qué los candidatos francófonos deben seguir los sorteos dirigidos', body: ['Express Entry ya no se limita a los sorteos generales. Las rondas dirigidas a perfiles francófonos pueden cambiar la estrategia de un candidato de África francófona, especialmente cuando los umbrales CRS se separan de los sorteos generales.', 'El proceso comienza con las rondas oficiales publicadas por IRCC y la comparación con análisis recientes de sorteos francófonos.'] },
          { title: 'Prioridades antes de presentar un perfil', body: ['El idioma sigue siendo un factor clave: buenos resultados en TEF Canada o TCF Canada pueden mejorar la competitividad. También hay que prever la evaluación de diplomas, la coherencia laboral y las pruebas documentales.', 'Para expedientes de Guinea, Côte d’Ivoire, Camerún o Senegal, conviene preparar temprano documentos escolares, profesionales y de estado civil.'] },
          { title: 'El rol de ImmiCan', body: ['ImmiCan actúa como plataforma de evaluación preliminar y orientación. La asesoría legal migratoria debe ser prestada por consultores regulados o abogados canadienses aliados.', 'El objetivo es calificar el perfil, identificar prioridades y dirigir la solicitud al acompañamiento correcto.'] },
        ],
        sourceIntro: 'Fuentes públicas utilizadas para este artículo piloto:',
        ctaTitle: '¿Quiere evaluar su perfil?',
        ctaText: 'AG Nexum Canada puede calificar su solicitud y dirigirla a la división ImmiCan.',
        ctaLabel: 'Solicitar una evaluación',
      },
    },
  },
  {
    id: 'actifs-non-reclames-quebec',
    color: '#2e7d5b',
    accent: '#eaf6ef',
    icon: '🔎',
    publishedDate: '2026-06-01',
    modifiedDate: '2026-06-01',
    sources: [
      { label: 'Revenu Québec — Biens non réclamés', type: 'Officiel — Revenu Québec', url: 'https://www.revenuquebec.ca/fr/biens-non-reclames/', note: 'Page officielle principale sur les biens non réclamés.' },
      { label: 'Revenu Québec — Registre des biens non réclamés', type: 'Officiel — registre public', url: 'https://www.revenuquebec.ca/fr/biens-non-reclames/rechercher/registre-des-biens-non-reclames/', note: 'Registre en ligne consultable gratuitement.' },
      { label: 'Juste pour tous — Chiffres clés', type: 'Officiel — vulgarisation Revenu Québec', url: 'https://justepourtous.revenuquebec.ca/fr/sujets/registre-des-biens-non-reclames', note: 'Données publiques : biens inscrits, valeur totale et montants remis.' },
      { label: 'Revenu Québec — S’informer', type: 'Officiel — administration', url: 'https://www.revenuquebec.ca/fr/biens-non-reclames/sinformer/', note: 'Rôle de Revenu Québec et avertissements sur les chercheurs de propriétaires.' },
      { label: 'Revenu Québec — Recherche et réclamation', type: 'Officiel — procédure', url: 'https://www.revenuquebec.ca/fr/biens-non-reclames/rechercher/', note: 'Étapes officielles de recherche et de réclamation.' },
    ],
    locales: {
      fr: {
        slug: 'actifs-non-reclames-quebec',
        href: pathFor('fr', 'actifs-non-reclames-quebec'),
        category: 'Actifs non réclamés',
        division: 'AG Nexum Recouvrement',
        title: 'Comment récupérer vos actifs non réclamés au Québec — Guide complet 2025',
        description: 'Un guide clair pour rechercher des biens non réclamés au Québec, comprendre la procédure officielle et éviter les frais inutiles avant restitution.',
        eyebrow: 'Article pilote SEO · Recouvrement',
        readTime: 'Lecture 5 min',
        keywords: ['actifs non réclamés québec', 'biens dormants revenu québec', 'succession non réclamée québec', 'produits financiers oubliés'],
        highlights: ['Registre public gratuit', 'Procédure officielle Revenu Québec', 'Modèle à contingence : aucun frais avant succès'],
        sections: [
          { title: 'Des centaines de milliers de biens peuvent dormir au Québec', body: ['Les biens non réclamés peuvent provenir de produits financiers oubliés, de successions, de sommes administrées par des institutions ou de dossiers dont les ayants droit n’ont pas été retrouvés.', 'Le registre officiel permet une première recherche gratuite. Pour les soldes de comptes d’institutions financières à charte fédérale, la Banque du Canada peut aussi être concernée.'] },
          { title: 'Comment lancer une réclamation', body: ['La démarche commence par une recherche au registre, puis par la préparation des pièces qui prouvent l’identité, le lien avec le propriétaire ou le statut d’ayant droit.', 'Les délais et les formulaires dépendent de la nature du bien. Les sources officielles de Revenu Québec doivent rester la référence principale pour confirmer la procédure applicable.'] },
          { title: 'Pourquoi le modèle de rémunération compte', body: ['Revenu Québec met en garde contre certains chercheurs de propriétaires qui peuvent exiger des honoraires élevés avant de transmettre des informations préliminaires.', 'AG Nexum Recouvrement se positionne sur une logique de contingence : aucun frais avant restitution effective. Cette différence doit être claire dès le premier contact.'] },
        ],
        sourceIntro: 'Sources publiques utilisées pour cet article pilote :',
        ctaTitle: 'Vous pensez avoir un actif dormant ?',
        ctaText: 'AG Nexum Recouvrement peut qualifier le dossier et vous indiquer les prochaines étapes.',
        ctaLabel: 'Faire vérifier mon dossier',
      },
      en: {
        slug: 'unclaimed-assets-quebec',
        href: pathFor('en', 'unclaimed-assets-quebec'),
        category: 'Unclaimed assets',
        division: 'AG Nexum Recovery',
        title: 'How to recover unclaimed assets in Québec — Complete 2025 guide',
        description: 'A practical guide to searching Québec unclaimed property, understanding the official process and avoiding unnecessary fees before restitution.',
        eyebrow: 'SEO pilot article · Recovery',
        readTime: '5 min read',
        keywords: ['unclaimed assets Québec', 'unclaimed property Revenu Québec', 'unclaimed estate Québec', 'forgotten financial products'],
        highlights: ['Free public registry', 'Official Revenu Québec process', 'Success-based model: no fee before recovery'],
        sections: [
          { title: 'Unclaimed property can sit dormant for years', body: ['Unclaimed property may come from forgotten financial products, estates, amounts held by institutions or files where beneficiaries were not found.', 'The official registry enables a first free search. For balances held by federally regulated financial institutions, the Bank of Canada may also be relevant.'] },
          { title: 'How a claim starts', body: ['The process begins with a registry search and then preparation of documents proving identity, the link to the owner or beneficiary status.', 'Timelines and forms depend on the type of property. Revenu Québec’s official sources should remain the reference for the applicable procedure.'] },
          { title: 'Why the fee model matters', body: ['Revenu Québec warns that some owner-search firms may require high fees before sharing preliminary information.', 'AG Nexum Recovery positions its service on a success-based model: no fee before effective restitution. This distinction should be clear from the first contact.'] },
        ],
        sourceIntro: 'Public sources used for this pilot article:',
        ctaTitle: 'Think you may have dormant assets?',
        ctaText: 'AG Nexum Recovery can qualify the file and indicate the next steps.',
        ctaLabel: 'Check my file',
      },
      es: {
        slug: 'activos-no-reclamados-quebec',
        href: pathFor('es', 'activos-no-reclamados-quebec'),
        category: 'Activos no reclamados',
        division: 'AG Nexum Recuperación',
        title: 'Cómo recuperar activos no reclamados en Québec — Guía completa 2025',
        description: 'Guía práctica para buscar bienes no reclamados en Québec, entender el proceso oficial y evitar costos innecesarios antes de la restitución.',
        eyebrow: 'Artículo piloto SEO · Recuperación',
        readTime: 'Lectura 5 min',
        keywords: ['activos no reclamados Québec', 'bienes no reclamados Revenu Québec', 'sucesión no reclamada Québec', 'productos financieros olvidados'],
        highlights: ['Registro público gratuito', 'Proceso oficial de Revenu Québec', 'Modelo a éxito: sin cargos antes de recuperar'],
        sections: [
          { title: 'Los bienes no reclamados pueden permanecer dormidos durante años', body: ['Pueden provenir de productos financieros olvidados, sucesiones, montos retenidos por instituciones o expedientes donde no se encontró a los beneficiarios.', 'El registro oficial permite una primera búsqueda gratuita. Para saldos de instituciones financieras federales, también puede intervenir el Banco de Canadá.'] },
          { title: 'Cómo iniciar una reclamación', body: ['El proceso comienza con una búsqueda en el registro y luego con documentos que prueben identidad, vínculo con el propietario o condición de beneficiario.', 'Los plazos y formularios dependen del tipo de bien. Las fuentes oficiales de Revenu Québec deben seguir siendo la referencia.'] },
          { title: 'Por qué importa el modelo de honorarios', body: ['Revenu Québec advierte que algunos buscadores de propietarios pueden exigir honorarios elevados antes de compartir información preliminar.', 'AG Nexum Recuperación se posiciona con un modelo basado en éxito: sin cargos antes de la restitución efectiva.'] },
        ],
        sourceIntro: 'Fuentes públicas utilizadas para este artículo piloto:',
        ctaTitle: '¿Cree tener activos dormidos?',
        ctaText: 'AG Nexum Recuperación puede calificar el expediente e indicar los próximos pasos.',
        ctaLabel: 'Verificar mi expediente',
      },
    },
  },
  {
    id: 'financement-urgence-quebec',
    color: '#b8263a',
    accent: '#fff0f2',
    icon: '⚖️',
    publishedDate: '2026-06-01',
    modifiedDate: '2026-06-01',
    sources: [
      { label: 'McMillan LLP — Rappel nouveau taux criminel', type: 'Référence juridique', url: 'https://mcmillan.ca/fr/perspectives/publications/rappel-le-nouveau-taux-dinteret-criminel-reduit-est-entre-en-vigueur/', note: 'Résumé pratique du plafond de 35 % TAP depuis le 1er janvier 2025.' },
      { label: 'Gazette du Canada — Décret officiel', type: 'Législatif', url: 'https://gazette.gc.ca/rp-pr/p2/2024/2024-06-19/html/si-tr25-fra.html', note: 'Texte officiel d’entrée en vigueur du nouveau cadre fédéral.' },
      { label: 'OPC Québec — Pratiques interdites', type: 'Officiel — OPC Québec', url: 'https://www.opc.gouv.qc.ca/commercant/permis-certificat/preteur-argent/droit-obligation/interdictions', note: 'Obligations et pratiques interdites pour les prêteurs d’argent au Québec.' },
      { label: 'Protégez-Vous — Prêteurs condamnés', type: 'Presse — cas concrets', url: 'https://www.protegez-vous.ca/nouvelles/argent/pret-argent-rapide-taux-eleve', note: 'Exemples de taux abusifs et plaintes récentes au Québec.' },
      { label: 'McMillan LLP — Analyse complète du cadre', type: 'Référence juridique', url: 'https://mcmillan.ca/fr/perspectives/publications/le-nouveau-taux-dinteret-criminel-entre-en-vigueur-le-1er-janvier-2025/', note: 'Analyse détaillée du nouveau cadre et de ses catégories de prêts.' },
    ],
    locales: {
      fr: {
        slug: 'financement-urgence-quebec',
        href: pathFor('fr', 'financement-urgence-quebec'),
        category: 'Micro-crédit',
        division: 'AG Nexum Prêt',
        title: 'Financement d’urgence au Québec : vos droits, le plafond de 35 %, les pièges à éviter',
        description: 'Comprendre le plafond légal de 35 % TAP, les obligations des prêteurs et les signaux d’alerte avant de signer un prêt d’urgence au Québec.',
        eyebrow: 'Article pilote SEO · Micro-crédit',
        readTime: 'Lecture 6 min',
        keywords: ['prêt d’urgence rapide québec', 'taux intérêt légal québec 2025', 'prêt argent légal québec', 'plafond taux prêt consommateur canada'],
        highlights: ['Plafond fédéral de 35 % TAP', 'Obligations OPC Québec', 'Pièges : frais cachés et taux réel'],
        sections: [
          { title: 'Le seuil de 35 % change la lecture d’un prêt rapide', body: ['Depuis le nouveau cadre entré en vigueur en 2025, le taux criminel applicable à de nombreux prêts est réduit à 35 % TAP. Un prêteur ne devrait pas annoncer, proposer ou structurer un coût qui dépasse le seuil applicable.', 'Pour le consommateur, l’enjeu n’est pas seulement le taux affiché : les frais d’administration et autres coûts doivent être compris dans l’analyse du taux annuel.'] },
          { title: 'Les signaux d’alerte à repérer', body: ['Un prêt d’urgence devient risqué lorsque le contrat met l’accent sur une mensualité séduisante sans expliquer le taux annuel réel, les frais inclus, les pénalités ou les prélèvements autorisés.', 'Les cas rapportés au Québec montrent que certains prêteurs ont affiché des taux en apparence conformes tout en générant un coût réel beaucoup plus élevé.'] },
          { title: 'Positionnement d’AG Nexum Prêt', body: ['AG Nexum Prêt doit être présenté comme une alternative transparente et conforme : montant clair, coût clair, consentement écrit explicite et respect du cadre applicable au Québec et au Canada.', 'Un tableau simple taux légal maximal / taux criminel / exemple de coût sur 1 000 $ peut aider le lecteur à comprendre avant de demander une évaluation.'] },
        ],
        sourceIntro: 'Sources publiques utilisées pour cet article pilote :',
        ctaTitle: 'Besoin d’un financement transparent ?',
        ctaText: 'AG Nexum Prêt peut qualifier votre demande et expliquer clairement les conditions applicables.',
        ctaLabel: 'Parler à AG Nexum Prêt',
      },
      en: {
        slug: 'emergency-financing-quebec',
        href: pathFor('en', 'emergency-financing-quebec'),
        category: 'Micro-credit',
        division: 'AG Nexum Loan',
        title: 'Emergency financing in Québec: your rights, the 35% cap and traps to avoid',
        description: 'Understand the 35% APR ceiling, lender obligations and warning signs before signing an emergency loan in Québec.',
        eyebrow: 'SEO pilot article · Micro-credit',
        readTime: '6 min read',
        keywords: ['emergency loan Québec', 'legal interest rate Québec 2025', 'legal money loan Québec', 'consumer loan cap Canada'],
        highlights: ['Federal 35% APR ceiling', 'OPC Québec obligations', 'Traps: hidden fees and real annual cost'],
        sections: [
          { title: 'The 35% threshold changes how quick loans should be read', body: ['Under the framework in force in 2025, the criminal interest rate for many loans was reduced to 35% APR. Lenders should not advertise, offer or structure costs above the applicable threshold.', 'For consumers, the issue is not only the displayed rate: administration fees and other costs must be included when assessing the annual rate.'] },
          { title: 'Warning signs to watch for', body: ['An emergency loan becomes risky when the contract focuses on an attractive payment without explaining the real annual rate, included fees, penalties or authorized debits.', 'Reported Québec cases show that some lenders displayed apparently compliant rates while creating a much higher real cost.'] },
          { title: 'How AG Nexum Loan is positioned', body: ['AG Nexum Loan should be presented as a transparent and compliant alternative: clear amount, clear cost, explicit written consent and respect for Québec and Canadian rules.', 'A simple table comparing legal maximum rate, criminal-rate threshold and the cost example on $1,000 can help readers understand before requesting an assessment.'] },
        ],
        sourceIntro: 'Public sources used for this pilot article:',
        ctaTitle: 'Need transparent financing?',
        ctaText: 'AG Nexum Loan can qualify your request and clearly explain applicable conditions.',
        ctaLabel: 'Talk to AG Nexum Loan',
      },
      es: {
        slug: 'financiamiento-emergencia-quebec',
        href: pathFor('es', 'financiamiento-emergencia-quebec'),
        category: 'Microcrédito',
        division: 'AG Nexum Préstamo',
        title: 'Financiamiento de emergencia en Québec: sus derechos, el límite de 35 % y los riesgos a evitar',
        description: 'Entienda el límite de 35 % TAP, las obligaciones de los prestamistas y las señales de alerta antes de firmar un préstamo de emergencia en Québec.',
        eyebrow: 'Artículo piloto SEO · Microcrédito',
        readTime: 'Lectura 6 min',
        keywords: ['préstamo de emergencia Québec', 'tasa legal Québec 2025', 'préstamo legal Québec', 'límite préstamo consumidor Canadá'],
        highlights: ['Límite federal de 35 % TAP', 'Obligaciones OPC Québec', 'Riesgos: cargos ocultos y costo real'],
        sections: [
          { title: 'El umbral de 35 % cambia la lectura de un préstamo rápido', body: ['Con el marco vigente en 2025, la tasa criminal para muchos préstamos se redujo a 35 % TAP. Un prestamista no debería anunciar, ofrecer o estructurar costos por encima del umbral aplicable.', 'Para el consumidor, el problema no es solo la tasa mostrada: los cargos administrativos y otros costos deben incluirse al evaluar la tasa anual.'] },
          { title: 'Señales de alerta', body: ['Un préstamo de emergencia se vuelve riesgoso cuando el contrato destaca una cuota atractiva sin explicar la tasa anual real, cargos incluidos, penalidades o débitos autorizados.', 'Casos reportados en Québec muestran que algunos prestamistas presentaban tasas aparentemente conformes mientras generaban un costo real mucho más alto.'] },
          { title: 'Posicionamiento de AG Nexum Préstamo', body: ['AG Nexum Préstamo debe presentarse como una alternativa transparente y conforme: monto claro, costo claro, consentimiento escrito explícito y respeto del marco de Québec y Canadá.', 'Una tabla simple con tasa legal máxima, umbral criminal y ejemplo de costo sobre 1 000 $ ayuda al lector antes de pedir una evaluación.'] },
        ],
        sourceIntro: 'Fuentes públicas utilizadas para este artículo piloto:',
        ctaTitle: '¿Necesita financiamiento transparente?',
        ctaText: 'AG Nexum Préstamo puede calificar su solicitud y explicar claramente las condiciones aplicables.',
        ctaLabel: 'Hablar con AG Nexum Préstamo',
      },
    },
  },
];

export const getArticlesForLocale = (lang: Locale) =>
  ARTICLES.map((article) => ({
    ...article,
    content: article.locales[lang],
  }));

export const findArticleByLocalizedSlug = (lang: Locale, slug: string) =>
  ARTICLES.find((article) => article.locales[lang].slug === slug);

export const getArticleAlternates = (article: Article) => ({
  fr: article.locales.fr.href,
  en: article.locales.en.href,
  es: article.locales.es.href,
});
