// Global site data.

export type Locale = 'fr' | 'en' | 'es';

export const SITE_TITLE = 'AG Nexum Canada';
export const SITE_DESCRIPTION = 'Un cabinet canadien multidisciplinaire au service de la mobilité internationale, du capital et de la performance commerciale.';
export const SITE_DESCRIPTION_EN = 'A multidisciplinary Canadian firm serving international mobility, capital and commercial performance.';
export const SITE_DESCRIPTION_ES = 'Una firma canadiense multidisciplinaria al servicio de la movilidad internacional, el capital y el desempeño comercial.';
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
      { href: '/#reseau', label: 'Réseau' },
      { href: '/#ressources', label: 'Ressources' },
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
          { label: 'Réseau', href: '/#reseau' },
          { label: 'Ressources', href: '/#ressources' },
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
          { label: 'AG Nexum Prêt', href: '/#divisions' },
          { label: 'AG Expersales', href: '/#divisions' },
          { label: 'AG Business Intelligence', href: '/#divisions' },
        ],
      },
      {
        title: 'Réseau international',
        links: [
          { label: "Côte d'Ivoire", href: '/#reseau' },
          { label: 'Guinée', href: '/#reseau' },
          { label: 'Cameroun', href: '/#reseau' },
          { label: 'Sénégal', href: '/#reseau' },
          { label: 'Europe', href: '/#reseau' },
          { label: 'Amériques', href: '/#reseau' },
          { label: 'Maghreb / MO', href: '/#reseau' },
        ],
      },
      {
        title: 'Légal',
        links: [
          { label: 'Politique de confidentialité', href: '/politique-confidentialite/' },
          { label: 'Conditions d’utilisation', href: '/conditions-utilisation/' },
          { label: 'Accessibilité', href: '/accessibilite/' },
        ],
      },
    ],
    ui: {
      themeToggle: 'Basculer le thème',
      openMenu: 'Ouvrir le menu',
      cta: 'Consultation gratuite',
      rights: 'Tous droits réservés.',
      network: 'Réseau : Canada · Côte d’Ivoire · Guinée · Cameroun · Sénégal',
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
      { href: '/en/#network', label: 'Network' },
      { href: '/en/#resources', label: 'Resources' },
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
          { label: 'Network', href: '/en/#network' },
          { label: 'Resources', href: '/en/#resources' },
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
          { label: 'AG Nexum Loan', href: '/en/#divisions' },
          { label: 'AG Expersales', href: '/en/#divisions' },
          { label: 'AG Business Intelligence', href: '/en/#divisions' },
        ],
      },
      {
        title: 'International network',
        links: [
          { label: 'Côte d’Ivoire', href: '/en/#network' },
          { label: 'Guinea', href: '/en/#network' },
          { label: 'Cameroon', href: '/en/#network' },
          { label: 'Senegal', href: '/en/#network' },
          { label: 'Europe', href: '/en/#network' },
          { label: 'Americas', href: '/en/#network' },
          { label: 'Maghreb / ME', href: '/en/#network' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { label: 'Privacy Policy', href: '/en/privacy-policy/' },
          { label: 'Terms of Use', href: '/en/terms-of-use/' },
          { label: 'Accessibility', href: '/en/accessibility/' },
        ],
      },
    ],
    ui: {
      themeToggle: 'Toggle theme',
      openMenu: 'Open menu',
      cta: 'Free consultation',
      rights: 'All rights reserved.',
      network: 'Network: Canada · Côte d’Ivoire · Guinea · Cameroon · Senegal',
    },
  },
  es: {
    label: 'Español',
    shortLabel: 'ES',
    path: '/es/',
    description: SITE_DESCRIPTION_ES,
    nav: [
      { href: '/es/', label: 'Inicio' },
      { href: '/es/#acerca-de', label: 'Acerca de' },
      { href: '/es/#divisiones', label: 'Divisiones' },
      { href: '/es/#equipo', label: 'Equipo' },
      { href: '/es/#red', label: 'Red' },
      { href: '/es/#recursos', label: 'Recursos' },
      { href: '/es/#contacto', label: 'Contacto' },
    ],
    footer: [
      {
        title: 'Enlaces rápidos',
        links: [
          { label: 'Inicio', href: '/es/' },
          { label: 'Acerca de', href: '/es/#acerca-de' },
          { label: 'Divisiones', href: '/es/#divisiones' },
          { label: 'Equipo', href: '/es/#equipo' },
          { label: 'Red', href: '/es/#red' },
          { label: 'Recursos', href: '/es/#recursos' },
          { label: 'Contacto', href: '/es/#contacto' },
        ],
      },
      {
        title: 'Divisiones',
        links: [
          { label: 'ImmiCan', href: '/es/#divisiones' },
          { label: 'AL Escape-ImmiCan', href: '/es/#divisiones' },
          { label: 'AG Nexum Recuperación', href: '/es/#divisiones' },
          { label: 'AG HVAC Solutions', href: '/es/#divisiones' },
          { label: 'AG Nexum Préstamo', href: '/es/#divisiones' },
          { label: 'AG Expersales', href: '/es/#divisiones' },
          { label: 'AG Business Intelligence', href: '/es/#divisiones' },
        ],
      },
      {
        title: 'Red internacional',
        links: [
          { label: 'Côte d’Ivoire', href: '/es/#red' },
          { label: 'Guinea', href: '/es/#red' },
          { label: 'Camerún', href: '/es/#red' },
          { label: 'Senegal', href: '/es/#red' },
          { label: 'Europa', href: '/es/#red' },
          { label: 'Américas', href: '/es/#red' },
          { label: 'Magreb / MO', href: '/es/#red' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { label: 'Política de privacidad', href: '/es/politica-de-privacidad/' },
          { label: 'Términos de uso', href: '/es/terminos-de-uso/' },
          { label: 'Accesibilidad', href: '/es/accesibilidad/' },
        ],
      },
    ],
    ui: {
      themeToggle: 'Cambiar tema',
      openMenu: 'Abrir menú',
      cta: 'Consulta gratuita',
      rights: 'Todos los derechos reservados.',
      network: 'Red: Canada · Côte d’Ivoire · Guinea · Camerún · Senegal',
    },
  },
} as const;

export const LANGUAGE_ROUTES = {
  '/': { fr: '/', en: '/en/', es: '/es/' },
  '/en/': { fr: '/', en: '/en/', es: '/es/' },
  '/es/': { fr: '/', en: '/en/', es: '/es/' },
  '/politique-confidentialite/': { fr: '/politique-confidentialite/', en: '/en/privacy-policy/', es: '/es/politica-de-privacidad/' },
  '/en/privacy-policy/': { fr: '/politique-confidentialite/', en: '/en/privacy-policy/', es: '/es/politica-de-privacidad/' },
  '/es/politica-de-privacidad/': { fr: '/politique-confidentialite/', en: '/en/privacy-policy/', es: '/es/politica-de-privacidad/' },
  '/conditions-utilisation/': { fr: '/conditions-utilisation/', en: '/en/terms-of-use/', es: '/es/terminos-de-uso/' },
  '/en/terms-of-use/': { fr: '/conditions-utilisation/', en: '/en/terms-of-use/', es: '/es/terminos-de-uso/' },
  '/es/terminos-de-uso/': { fr: '/conditions-utilisation/', en: '/en/terms-of-use/', es: '/es/terminos-de-uso/' },
  '/accessibilite/': { fr: '/accessibilite/', en: '/en/accessibility/', es: '/es/accesibilidad/' },
  '/en/accessibility/': { fr: '/accessibilite/', en: '/en/accessibility/', es: '/es/accesibilidad/' },
  '/es/accesibilidad/': { fr: '/accessibilite/', en: '/en/accessibility/', es: '/es/accesibilidad/' },
  '/articles/express-entry-afrique-francophone/': { fr: '/articles/express-entry-afrique-francophone/', en: '/en/articles/express-entry-francophone-africa/', es: '/es/articulos/express-entry-africa-francofona/' },
  '/en/articles/express-entry-francophone-africa/': { fr: '/articles/express-entry-afrique-francophone/', en: '/en/articles/express-entry-francophone-africa/', es: '/es/articulos/express-entry-africa-francofona/' },
  '/es/articulos/express-entry-africa-francofona/': { fr: '/articles/express-entry-afrique-francophone/', en: '/en/articles/express-entry-francophone-africa/', es: '/es/articulos/express-entry-africa-francofona/' },
  '/articles/actifs-non-reclames-quebec/': { fr: '/articles/actifs-non-reclames-quebec/', en: '/en/articles/unclaimed-assets-quebec/', es: '/es/articulos/activos-no-reclamados-quebec/' },
  '/en/articles/unclaimed-assets-quebec/': { fr: '/articles/actifs-non-reclames-quebec/', en: '/en/articles/unclaimed-assets-quebec/', es: '/es/articulos/activos-no-reclamados-quebec/' },
  '/es/articulos/activos-no-reclamados-quebec/': { fr: '/articles/actifs-non-reclames-quebec/', en: '/en/articles/unclaimed-assets-quebec/', es: '/es/articulos/activos-no-reclamados-quebec/' },
  '/articles/financement-urgence-quebec/': { fr: '/articles/financement-urgence-quebec/', en: '/en/articles/emergency-financing-quebec/', es: '/es/articulos/financiamiento-emergencia-quebec/' },
  '/en/articles/emergency-financing-quebec/': { fr: '/articles/financement-urgence-quebec/', en: '/en/articles/emergency-financing-quebec/', es: '/es/articulos/financiamiento-emergencia-quebec/' },
  '/es/articulos/financiamiento-emergencia-quebec/': { fr: '/articles/financement-urgence-quebec/', en: '/en/articles/emergency-financing-quebec/', es: '/es/articulos/financiamiento-emergencia-quebec/' },
} as const satisfies Record<string, Record<Locale, string>>;

// Backward-compatible exports.
export const NAV_LINKS = LOCALES.fr.nav;
export const FOOTER_LINKS = LOCALES.fr.footer;
