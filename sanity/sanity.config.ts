import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';
import { simplerColorInput } from 'sanity-plugin-simpler-color-input';
import { media } from 'sanity-plugin-media';

export default defineConfig({
  name: 'default',
  title: 'Next.js + Sanity MVP',

  projectId: 'q7v95rg2',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), media(), simplerColorInput()],

  schema: {
    types: schemaTypes,
  },
});
