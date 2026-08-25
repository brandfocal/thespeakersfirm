import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://thespeakersfirm.co.za';

  const staticPages = [
    '',
    '/about',
    '/contact',
    '/book-a-speaker',
    '/join-the-speakers-firm',
    '/brief-us',
    '/executive-dialogues',
    '/gallery',
    '/media',
    '/upcoming-events',
    '/find-a-speaker',
  ];

  return staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));
}
