import * as titleFields from './title';
import * as descriptionFields from './description';
import * as links from './links';
import * as richText from './richText';
import { video } from './video';
import { sectionConfigFields } from './section';
import { imageWithAlt } from './imageWithAlt';

export default [
  ...Object.values(titleFields),
  ...Object.values(descriptionFields),
  ...Object.values(links),
  ...Object.values(richText),
  video,
  ...sectionConfigFields,
  imageWithAlt,
];
