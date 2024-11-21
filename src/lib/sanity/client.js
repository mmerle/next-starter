import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId, useCdn, studioUrl } from './api.js';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  perspective: 'published',
  stega: { studioUrl },
});
