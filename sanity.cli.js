import { defineCliConfig } from 'sanity/cli';
import { dataset, projectId } from './src/lib/sanity/api.js';

export default defineCliConfig({ api: { projectId, dataset } });
