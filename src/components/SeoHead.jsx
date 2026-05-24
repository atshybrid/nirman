import { useEffect } from 'react'
import { faqs } from '../data/content'
import {
  SEO,
  getOrganizationSchema,
  getLocalBusinessSchema,
  getWebSiteSchema,
  getFaqSchema,
  getBreadcrumbSchema,
} from '../config/seo'

const SCHEMAS = [
  getOrganizationSchema(),
  getWebSiteSchema(),
  getLocalBusinessSchema(),
  getFaqSchema(faqs),
  getBreadcrumbSchema(),
]

function upsertMeta(attr, key, content) {
  if (!content) return
  let el = document.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel, href) {
  if (!href) return
  let el = document.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export default function SeoHead() {
  useEffect(() => {
    document.title = SEO.title
    document.documentElement.lang = 'en-IN'

    upsertMeta('name', 'description', SEO.description)
    upsertMeta('name', 'keywords', SEO.keywords)
    upsertMeta('name', 'author', SEO.legalName)
    upsertMeta('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1')
    upsertMeta('name', 'googlebot', 'index, follow')
    upsertMeta('name', 'geo.region', 'IN')
    upsertMeta('name', 'geo.placename', 'Hyderabad, Bangalore')

    upsertLink('canonical', SEO.canonicalUrl)

    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:site_name', SEO.siteName)
    upsertMeta('property', 'og:title', SEO.title)
    upsertMeta('property', 'og:description', SEO.description)
    upsertMeta('property', 'og:url', SEO.canonicalUrl)
    upsertMeta('property', 'og:image', SEO.imageUrl)
    upsertMeta('property', 'og:image:alt', `${SEO.siteName} - Construction & urban apartments`)
    upsertMeta('property', 'og:locale', 'en_IN')

    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', SEO.title)
    upsertMeta('name', 'twitter:description', SEO.description)
    upsertMeta('name', 'twitter:image', SEO.imageUrl)

    const existing = document.getElementById('seo-jsonld')
    existing?.remove()

    SCHEMAS.forEach((schema, i) => {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.id = i === 0 ? 'seo-jsonld' : undefined
      script.setAttribute('data-seo-schema', schema['@type'])
      script.textContent = JSON.stringify(schema)
      document.head.appendChild(script)
    })

    return () => {
      document.querySelectorAll('script[data-seo-schema]').forEach((s) => s.remove())
    }
  }, [])

  return null
}
