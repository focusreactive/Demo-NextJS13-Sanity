import { config } from '@/cmsConfig';
import { Section } from '@focusreactive/cms-kit';

type BlockType = { [k in string]: any };

export const ContentBlocks = ({ blocks }: { blocks: BlockType[] }) => {
  const { blocks: blocksComponentsMap } = config;

  return blocks.map((block, index) => {
    const Component = blocksComponentsMap[block._type as keyof typeof blocksComponentsMap];

    if (!Component) {
      return null;
    }

    const neighborBg = block.backgroundColor ? blocks[index + 1]?.backgroundColor || '#fff' : null;

    return (
      <Section key={block._key} bgColor={block.backgroundColor} radius={block.roundCorner} neighborBg={neighborBg}>
        <Component {...block} />
      </Section>
    );
  });
};
