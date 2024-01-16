import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { colorInput } from '@sanity/color-input';
import { media } from 'sanity-plugin-media';
import { aiToolkit } from '@focus-reactive/sanity-ai-toolkit';

import { schemaTypes } from '@/sanity/schemas';
import config from '@/sanity/config';
import { defaultDocumentNode, deskStructure } from '@/sanity/deskStructure';

export default defineConfig({
  name: 'default',
  title: 'Next.js + Sanity MVP',

  basePath: '/admin',

  ...config,

  plugins: [
    deskTool({
      structure: deskStructure,
      defaultDocumentNode,
    }),
    visionTool(),
    media(),
    colorInput(),
    aiToolkit({
      openAiToken: process.env.SANITY_STUDIO_OPENAI_TOKEN as string,
      featuresConfig: {
        translate: { enabled: true },
        summary: { enabled: true },
        tags: { enabled: true },
      },
    }),
  ],

  schema: {
    // @ts-ignore
    types: schemaTypes,
  },
});
