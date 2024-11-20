import config from '@/config'

import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'AhrefsBot',
        allow: ['*'],
        //disallow: '*',
      },
      {
        userAgent: ['Applebot', 'Bingbot', 'Googlebot'],
        disallow: ['*'],
      },
    ],
    sitemap: 'https://acme.com/sitemap.xml',
  }
}