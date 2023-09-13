import * as titleFields from './title';
import * as descriptionFields from './description';
import * as links from './links';
import * as richText from './richText';
import { sectionConfig } from './section';
import { imageWithAlt } from './imageWithAlt';

export default [
  ...Object.values(titleFields),
  ...Object.values(descriptionFields),
  ...Object.values(links),
  ...Object.values(richText),
  sectionConfig,
  imageWithAlt,
];
