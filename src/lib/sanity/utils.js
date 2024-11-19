import imageUrlBuilder from '@sanity/image-url';
import { client } from './client';

const builder = imageUrlBuilder(client);

export function urlForImage(source) {
  if (!source?.asset) {
    return undefined;
  }

  return builder.image(source.asset).auto('format').fit('max');
}
