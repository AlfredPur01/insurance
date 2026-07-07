import type { MetadataRoute } from 'next'

const BASE_URL = 'https://aibltd.insure'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const paths = [
    '',
    '/about',
    '/services',
    '/industries',
    '/industries/energy',
    '/industries/marine',
    '/industries/aviation',
    '/industries/engineering-infrastructure',
    '/claims-advocacy',
    '/contact',
  ]

  return paths.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: path === '' ? 1 : 0.8,
  }))
}
