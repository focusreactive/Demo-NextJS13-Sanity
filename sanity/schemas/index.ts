import { dynamicPage } from './dynamicPage';
import common from './common';
import contentBlocks from './contentBlocks';

export const schemaTypes = [dynamicPage, ...common, ...contentBlocks];
