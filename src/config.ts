// Global site data.

export const SITE_TITLE = 'AG Nexum Canada';
export const SITE_DESCRIPTION = 'Un cabinet canadien multidisciplinaire au service de la mobilité, du capital et de la performance.';
export const SITE_URL = 'https://agnexum.ca';
export const REPOSITORY_URL = 'https://github.com/z0gg/agnexum';

// Brand Settings
export const BRAND_NAME = 'AG NEXUM CANADA';

// Social Links kept empty until official profiles are confirmed.
export const SOCIAL_LINKS = {
  twitter: '#',
  github: REPOSITORY_URL,
  linkedin: '#',
};

// Navigation Links
export const NAV_LINKS = [
  { href: '/', label: 'Accueil' },
  { href: '/#a-propos', label: 'À propos' },
  { href: '/#divisions', label: 'Divisions' },
  { href: '/#equipe', label: 'Équipe' },
  { href: '/#contact', label: 'Contact' },
];

// Footer Links
export const FOOTER_LINKS = [
  {
    title: 'Liens rapides',
    links: [
      { label: 'Accueil', href: '/' },
      { label: 'À propos', href: '/#a-propos' },
      { label: 'Divisions', href: '/#divisions' },
      { label: 'Équipe', href: '/#equipe' },
      { label: 'Contact', href: '/#contact' },
    ],
  },
  {
    title: 'Divisions',
    links: [
      { label: 'ImmiCan', href: '/#divisions' },
      { label: 'AL Escape-ImmiCan', href: '/#divisions' },
      { label: 'AG Nexum Recouvrement', href: '/#divisions' },
      { label: 'AG HVAC Solutions', href: '/#divisions' },
    ],
  },
  {
    title: 'Réseau international',
    links: [
      { label: "Côte d'Ivoire", href: '/#reseau' },
      { label: 'Guinée', href: '/#reseau' },
      { label: 'Cameroun', href: '/#reseau' },
      { label: 'Sénégal', href: '/#reseau' },
    ],
  },
  {
    title: 'Légal',
    links: [
      { label: 'Politique de confidentialité', href: '/politique-confidentialite/' },
      { label: 'Conditions d’utilisation', href: '/conditions-utilisation/' },
    ],
  },
];
