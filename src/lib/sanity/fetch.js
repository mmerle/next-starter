import { client } from './client';

export async function sanityFetch({ query, locale, params = {} }) {
  if (process.env.NODE_ENV === 'development') {
    return client.fetch(query, {
      ...params,
      ...(locale && { locale }),
      perspective: 'published',
      // disable CDN, cache & revalidate in dev for faster live preview experience
      useCdn: false,
      next: { revalidate: 0 },
    });
  }

  return client.fetch(query, {
    ...params,
    ...(locale && { locale }),
    perspective: 'published',
    useCdn: true,
    // when using `published` perspective, use time-based revalidation to match the time-to-live on sanity's API CDN (60 seconds)
    next: { revalidate: 60 },
  });
}
