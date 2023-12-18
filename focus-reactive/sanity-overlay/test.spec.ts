import { patchStringFields } from './src/enableVisualEditing';
import { expect, it } from '@jest/globals';

import page from './fixtures/page.json';
import patchedPage from './fixtures/patchedPage.json';

it(`should add stega to each text field`, () => {
  patchStringFields(page, {
    patchCb: (value, { id, type, path }) => `${id}__${type}__${path}`,
    excludedPaths: [/.*footer\.socials\[\d+\]\.icon.*/],
  });

  expect(page).toEqual(patchedPage);
});
