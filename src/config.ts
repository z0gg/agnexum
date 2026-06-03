// Global site data.

export type Locale = 'fr' | 'en';

export const SITE_TITLE = 'AG Nexum Canada';
export const SITE_DESCRIPTION = 'Un cabinet canadien multidisciplinaire au service de la mobilité, du capital et de la performance.';
export const SITE_DESCRIPTION_EN = 'A multidisciplinary Canadian firm serving mobility, capital and performance.';
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

export const LOCALES = {
  fr: {
    label: 'Français',
    shortLabel: 'FR',
    path: '/',
    description: SITE_DESCRIPTION,
    nav: [
      { href: '/', label: 'Accueil' },
      { href: '/#a-propos', label: 'À propos' },
      { href: '/#divisions', label: 'Divisions' },
      { href: '/#equipe', label: 'Équipe' },
      { href: '/#contact', label: 'Contact' },
    ],
    footer: [
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
    ],
    ui: {
      themeToggle: 'Basculer le thème',
      openMenu: 'Ouvrir le menu',
      cta: 'Consultation gratuite',
      rights: 'Tous droits réservés.',
      network: 'Réseau international : Côte d’Ivoire · Guinée · Cameroun · Sénégal',
      languageSwitchLabel: 'English',
      languageSwitchHref: '/en/',
    },
  },
  en: {
    label: 'English',
    shortLabel: 'EN',
    path: '/en/',
    description: SITE_DESCRIPTION_EN,
    nav: [
      { href: '/en/', label: 'Home' },
      { href: '/en/#about', label: 'About' },
      { href: '/en/#divisions', label: 'Divisions' },
      { href: '/en/#team', label: 'Team' },
      { href: '/en/#contact', label: 'Contact' },
    ],
    footer: [
      {
        title: 'Quick links',
        links: [
          { label: 'Home', href: '/en/' },
          { label: 'About', href: '/en/#about' },
          { label: 'Divisions', href: '/en/#divisions' },
          { label: 'Team', href: '/en/#team' },
          { label: 'Contact', href: '/en/#contact' },
        ],
      },
      {
        title: 'Divisions',
        links: [
          { label: 'ImmiCan', href: '/en/#divisions' },
          { label: 'AL Escape-ImmiCan', href: '/en/#divisions' },
          { label: 'AG Nexum Recovery', href: '/en/#divisions' },
          { label: 'AG HVAC Solutions', href: '/en/#divisions' },
        ],
      },
      {
        title: 'International network',
        links: [
          { label: 'Côte d’Ivoire', href: '/en/#network' },
          { label: 'Guinea', href: '/en/#network' },
          { label: 'Cameroon', href: '/en/#network' },
          { label: 'Senegal', href: '/en/#network' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { label: 'Privacy Policy', href: '/en/privacy-policy/' },
          { label: 'Terms of Use', href: '/en/terms-of-use/' },
        ],
      },
    ],
    ui: {
      themeToggle: 'Toggle theme',
      openMenu: 'Open menu',
      cta: 'Free consultation',
      rights: 'All rights reserved.',
      network: 'International network: Côte d’Ivoire · Guinea · Cameroon · Senegal',
      languageSwitchLabel: 'Français',
      languageSwitchHref: '/',
    },
  },
} as const;

// Backward-compatible exports.
export const NAV_LINKS = LOCALES.fr.nav;
export const FOOTER_LINKS = LOCALES.fr.footer;
