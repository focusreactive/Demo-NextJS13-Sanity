import * as titleFields from './title';
import * as descriptionFields from './description';
import * as links from './links';
import * as richText from './richText';
import * as seo from './seo';
import { sectionConfig } from './section';
import { imageWithAlt } from './imageWithAlt';

export default [
  ...Object.values(titleFields),
  ...Object.values(descriptionFields),
  ...Object.values(links),
  ...Object.values(richText),
  ...Object.values(seo),
  sectionConfig,
  imageWithAlt,
];
