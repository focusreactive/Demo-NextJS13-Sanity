import { config } from '@/cmsConfig';

type BlockType = { [k in string]: any };

export const ContentBlocks = ({ blocks }: { blocks: BlockType[] }) => {
  const { blocks: blocksComponentsMap } = config;

  return blocks.map((block) => {
    const Component = blocksComponentsMap[block._type as keyof typeof blocksComponentsMap];

    if (!Component) {
      return null;
    }

    return <Component {...block} key={block._key} />;
  });
};
