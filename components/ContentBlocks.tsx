import { config } from '@/cms-connector/cmsConfig';
import { Section } from '@focusreactive/cms-kit';
import { cmsDataToProps } from '@/cms-connector/cmsDataToProps';

type BlockType = { [k in string]: any };

export const ContentBlocks = ({ blocks }: { blocks: BlockType[] }) => {
  const { blocks: blocksComponentsMap } = config;

  return blocks.map((block, index) => {
    const options = blocksComponentsMap[block._type as keyof typeof blocksComponentsMap];

    if (!options) {
      return null;
    }

    const { Component, schema } = options;

    // const props = cmsDataToProps(block, schema);
    const neighborBg = block.backgroundColor ? blocks[index + 1]?.backgroundColor || '#fff' : null;

    return (
      <Section key={block._key} bgColor={block.backgroundColor} radius={block.roundCorner} neighborBg={neighborBg}>
        {/* @ts-ignore */}
        <Component {...block} />
      </Section>
    );
  });
};
