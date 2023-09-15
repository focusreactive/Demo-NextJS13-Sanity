// @ts-nocheck
import React from 'react';
import BlockContent from '@sanity/block-content-to-react';

const BlockRenderer = (props: any) => {
  const { style = 'normal' } = props.node;

  if (/^h\d/.test(style)) {
    const level = style.replace(/[^\d]/g, '');
    return React.createElement(style, { className: `heading-${level}` }, props.children);
  }

  // Fall back to default handling
  return BlockContent.defaultSerializers.types.block(props);
};

const Highlight = (props: any) => {
  return <mark>{props.children}</mark>;
};

const CustomCheckListItem = (props: any) => {
  return <div className="check-list-item">{props.children}</div>;
};

const serializers = {
  types: {
    code: (props: any) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
    block: BlockRenderer,
  },
  marks: {
    highlight: Highlight,
    customCheckListItem: CustomCheckListItem,
  },
};

const Article = ({ textRaw }: any) => {
  if (typeof textRaw === 'string') {
    return textRaw;
  }

  return (
    <BlockContent
      imageOptions={{ fit: 'max' }}
      blocks={textRaw}
      serializers={serializers}
      dataset="production"
      projectId="yaj9i7i6"
    />
  );
};

export default Article;
