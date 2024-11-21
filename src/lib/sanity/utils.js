import imageUrlBuilder from '@sanity/image-url';
import { client } from './client';
import { settingsQuery } from '~/lib/sanity/queries';

const builder = imageUrlBuilder(client);

export function urlForImage(source) {
  if (!source?.asset) {
    return undefined;
  }

  return builder.image(source.asset).auto('format').fit('max');
}

export async function loadQuery(query, params = {}) {
  try {
    const result = await client.fetch(query, {
      ...params,
      perspective: 'published',
      useCdn: true,
      next: { revalidate: 60 },
    });

    return result;
  } catch (error) {
    console.error('Error fetching Sanity data:', error);
    throw error;
  }
}

export async function loadSettings() {
  return loadQuery(settingsQuery);
}
