import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId, useCdn } from './api.js';

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  perspective: 'published',
});
