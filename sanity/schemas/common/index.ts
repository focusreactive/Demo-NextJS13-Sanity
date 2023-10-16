import { titleWithOptions } from './title';
import * as descriptionFields from './description';
import * as links from './links';
import * as richText from './richText';
import * as seo from './seo';
import { sectionConfig } from './section';
import { imageWithAlt } from './imageWithAlt';
import * as header from './header';
import * as footer from './footer';

export default [
  titleWithOptions,
  ...Object.values(descriptionFields),
  ...Object.values(links),
  ...Object.values(richText),
  ...Object.values(seo),
  sectionConfig,
  imageWithAlt,
  ...Object.values(header),
  ...Object.values(footer),
];
