import { config } from '@/model/cmsConfig';
import { Section } from '@focusreactive/cms-kit';

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

    const sectionConfig = block.sectionConfig || {};

    const convertProps = cmsDataToProps[cmsId];
    const props = convertProps ? convertProps(block) : block;
    const neighborBg = block.backgroundColor ? blocks[index + 1]?.backgroundColor || '#fff' : null;

    return (
      <Section
        key={block._key}
        bgColor={sectionConfig.backgroundColor}
        radius={sectionConfig.roundCorner}
        neighborBg={neighborBg}
      >
        <Component {...props} />
      </Section>
    );
  });
};
