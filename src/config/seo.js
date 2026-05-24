import { SITE } from './site'

/** Production URL — update VITE_SITE_URL when using custom domain (e.g. https://mrnirmaninfra.com) */
const PRODUCTION_URL =
  typeof import.meta.env.VITE_SITE_URL === 'string' && import.meta.env.VITE_SITE_URL
    ? import.meta.env.VITE_SITE_URL.replace(/\/$/, '')
    : 'https://atshybrid.github.io/nirman'

export const SEO = {
  siteUrl: import.meta.env.PROD ? PRODUCTION_URL : 'http://localhost:5173',
  siteName: SITE.name,
  legalName: SITE.legalName,
  tagline: SITE.tagline,
  title:
    'MR NIRMAN Infra | Urban Service Apartments Hyderabad & Bangalore | Green Living Construction',
  description:
    'MR NIRMAN Infra offers urban service apartments, green living homes, and smart construction in Hyderabad & Bangalore. Building Trust, Creating Futures. Call +91 79977 78977.',
  keywords: [
    'MR NIRMAN',
    'MR Nirman Infra',
    'construction company Hyderabad',
    'construction company Bangalore',
    'urban service apartments Hyderabad',
    'service apartments Bangalore',
    'green living apartments',
    'smart home construction India',
    'real estate developer Hyderabad',
    'builder Bangalore',
    'sustainable construction',
    'future technology homes',
    'mrnirmaninfra',
  ].join(', '),
  locale: 'en_IN',
  email: SITE.email,
  phone: SITE.phoneTel,
  cities: SITE.cities,
  twitterHandle: '@mrnirmaninfra',
  imagePath: '/logo.png',
  get imageUrl() {
    return `${this.siteUrl}/logo.png`
  },
  get canonicalUrl() {
    return `${this.siteUrl}/`
  },
}

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SEO.siteUrl}/#organization`,
    name: SEO.legalName,
    alternateName: SEO.siteName,
    url: SEO.siteUrl,
    logo: SEO.imageUrl,
    image: SEO.imageUrl,
    description: SEO.description,
    email: SEO.email,
    telephone: SEO.phone,
    slogan: SEO.tagline,
    areaServed: SEO.cities.map((city) => ({
      '@type': 'City',
      name: city,
      containedInPlace: { '@type': 'Country', name: 'India' },
    })),
    sameAs: [],
  }
}

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    '@id': `${SEO.siteUrl}/#localbusiness`,
    name: SEO.legalName,
    alternateName: SEO.siteName,
    url: SEO.siteUrl,
    image: SEO.imageUrl,
    logo: SEO.imageUrl,
    description: SEO.description,
    email: SEO.email,
    telephone: SEO.phone,
    priceRange: '₹₹₹',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
      addressRegion: 'Telangana',
      addressLocality: 'Hyderabad',
    },
    areaServed: [
      { '@type': 'City', name: 'Hyderabad' },
      { '@type': 'City', name: 'Bangalore' },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '19:00',
      },
    ],
    knowsAbout: [
      'Urban service apartments',
      'Green building construction',
      'Smart home technology',
      'Residential construction',
      'Commercial construction',
    ],
  }
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SEO.siteUrl}/#website`,
    name: SEO.siteName,
    alternateName: SEO.legalName,
    url: SEO.siteUrl,
    description: SEO.description,
    inLanguage: 'en-IN',
    publisher: { '@id': `${SEO.siteUrl}/#organization` },
  }
}

export function getFaqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function getBreadcrumbSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SEO.siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${SEO.siteUrl}/#services` },
      { '@type': 'ListItem', position: 3, name: 'Projects', item: `${SEO.siteUrl}/#projects` },
      { '@type': 'ListItem', position: 4, name: 'Contact', item: `${SEO.siteUrl}/#contact` },
    ],
  }
}
