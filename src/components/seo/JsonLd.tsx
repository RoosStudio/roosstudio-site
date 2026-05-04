import { site } from '../../content/site'
import { SITE_ORIGIN } from '../../seo/siteOrigin'

const graph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_ORIGIN}/#organization`,
      name: site.meta.siteName,
      url: SITE_ORIGIN,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_ORIGIN}/favicon.svg`,
      },
      email: site.meta.email,
      description:
        'Software-Studio aus der Schweiz: Live-Apps (Foto, Rally, Kristall) und WireTrack als Operations-Plattform.',
      areaServed: 'CH',
      availableLanguage: ['de-CH'],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_ORIGIN}/#website`,
      url: SITE_ORIGIN,
      name: site.meta.siteName,
      inLanguage: 'de-CH',
      publisher: { '@id': `${SITE_ORIGIN}/#organization` },
    },
  ],
} as const

export function JsonLd() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
  )
}
