// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Agnexum';
export const SITE_DESCRIPTION = 'Agnexum — Astro site built from the Zenix theme.';
export const SITE_URL = 'https://agnexum.pages.dev'; // Replace with your domain
export const REPOSITORY_URL = 'https://github.com/z0gg/agnexum';

// Brand Settings
export const BRAND_NAME = 'Agnexum';
export const BRAND_LOGO_TEXT = 'A';

// Social Links
export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/farrosfr_',
  github: 'https://github.com/z0gg',
  linkedin: 'https://linkedin.com/in/yourhandle',
};

// Navigation Links
export const NAV_LINKS = [
  { href: '/#features', label: 'Features' },
  { href: '/#testimonials', label: 'Testimonials' },
  { href: '/pricing/', label: 'Pricing' },
  { href: '/blog/', label: 'Blog' },
];

// Footer Links
export const FOOTER_LINKS = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '/#features' },
      { label: 'Pricing', href: '/pricing/' },
      { label: 'Changelog', href: '/changelog/' },
      { label: 'Integrations', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '/blog/' },
      { label: 'Documentation', href: '#' },
      { label: 'Community', href: '#' },
      { label: 'Help Center', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Contact', href: '#' },
      { label: 'Privacy Policy', href: '/privacy/' },
      { label: 'Terms of Service', href: '/terms/' },
    ],
  },
];
