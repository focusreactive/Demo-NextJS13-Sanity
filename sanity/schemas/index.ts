import { cardsSection } from './cards-section';
import { card } from './card';
import { dynamicPage } from './dynamicPage';
import common from './common';
import contentBlocks from './contentBlocks';

export const schemaTypes = [cardsSection, card, dynamicPage, ...common, ...contentBlocks];
