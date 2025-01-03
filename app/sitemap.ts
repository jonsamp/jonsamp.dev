import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://jonsamp.dev',
      lastModified: new Date(),
    },
  ];
}
