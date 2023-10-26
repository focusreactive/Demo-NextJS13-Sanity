import { config } from '@/model/cmsConfig';
import { Section } from '@focusreactive/cms-kit';
import { sectionBgColors } from '@focusreactive/cms-kit/src/components/section/colors';
import { Editable } from '@/components/Editable';

type BlockType = { [k in string]: any };

export const ContentBlocks = ({ blocks }: { blocks: BlockType[] }) => {
  if (!blocks) return null;

  const { cmsId, blocks: blocksComponentsMap } = config;

  return blocks.map((block, index) => {
    const options = blocksComponentsMap[block._type as keyof typeof blocksComponentsMap];

    if (!options) {
      return null;
    }

    const { Component, cmsDataToProps } = options;

    const convertProps = cmsDataToProps[cmsId];
    const props = convertProps ? convertProps(block) : block;

    const sectionConfig = block.sectionConfig || {};
    const defaultColour = index === 0 ? sectionBgColors.blue : null;
    const siblingBg = {
      prev: blocks[index - 1]?.sectionConfig?.backgroundColor || defaultColour,
      next: blocks[index + 1]?.sectionConfig?.backgroundColor || null,
    };

    if (block._type === 'hero') {
      return (
        <Editable key={block._key} block={block}>
          <Component {...props} />
        </Editable>
      );
    }

    return (
      <Section
        key={block._key}
        bgColor={sectionConfig.backgroundColor}
        radius={sectionConfig.roundCorner}
        siblingBg={siblingBg}
      >
        <Editable block={block}>
          <Component {...props} />
        </Editable>
      </Section>
    );
  });
};
