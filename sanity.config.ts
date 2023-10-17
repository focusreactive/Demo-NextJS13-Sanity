import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { colorInput } from '@sanity/color-input';
import { media } from 'sanity-plugin-media';

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
  ],

  schema: {
    // @ts-ignore
    types: schemaTypes,
  },
});
