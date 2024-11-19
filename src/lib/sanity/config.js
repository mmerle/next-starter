'use client';

import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { RobotIcon } from '@sanity/icons';
import { colorInput } from '@sanity/color-input';
import { media } from 'sanity-plugin-media';

import { apiVersion, dataset, projectId, studioUrl } from './api';
import { schemaTypes, singletons } from './schemas';
import { pageStructure, singletonPlugin } from './plugins/structure';
import { StudioNavbar } from './_components/studio';
import { CustomAction, CustomBadge } from './_components/document';

const singletonNames = singletons.map((item) => item.name);

export default defineConfig({
  projectId,
  dataset,
  basePath: studioUrl,
  name: 'next-starter',
  title: 'Next Starter',
  icon: RobotIcon,
  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      navbar: StudioNavbar,
    },
  },
  document: {
    badges: [CustomBadge],
    actions: [CustomAction],
  },
  scheduledPublishing: {
    enabled: false,
  },
  plugins: [
    structureTool({ structure: (S) => pageStructure(S, singletons) }),
    singletonPlugin(singletonNames),
    media(),
    visionTool({ defaultApiVersion: apiVersion }),
    colorInput(),
  ],
});
