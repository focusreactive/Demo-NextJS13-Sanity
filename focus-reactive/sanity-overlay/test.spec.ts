import { patchStringFields } from './src/enableVisualEditing';
import { expect, it } from '@jest/globals';
import * as fs from 'fs';

import page from './fixtures/page.json';
import patchedPage from './fixtures/patchedPage.json';

const mark = '+++@+++';

it(`should add ${mark} to each text field`, () => {
  patchStringFields(page, (value, path) => `${value}${mark}`, [/.*footer\.socials\[\d+\]\.icon.*/]);

  expect(page).toEqual(patchedPage);
});
