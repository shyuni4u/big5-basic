import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const URL = 'https://wow.enzo.kr'

  return [
    {
      url: `${URL}/`, // Home Page
      lastModified: new Date(),
      priority: 1.0,
      changeFrequency: 'monthly'
    }
  ]
}
