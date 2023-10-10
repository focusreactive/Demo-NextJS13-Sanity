import { MetadataRoute } from 'next';
import { getPageSitemapData } from '@/model/getPageSitemapData';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.VERCEL_URL || (`http://localhost:${process.env.PORT}` as string);

  const pages = await getPageSitemapData();

  return pages.map(({ slug, updatedAt }) => ({
    url: slug === '/' ? baseUrl : `${baseUrl}/${slug}`,
    lastModified: new Date(updatedAt),
  }));
}
