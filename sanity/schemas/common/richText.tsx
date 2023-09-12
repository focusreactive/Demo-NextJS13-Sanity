import { AiFillCheckCircle } from 'react-icons/ai';

const highlightIcon = () => <span>H</span>;
const highlightRender = (props) => (
  <div
    style={{
      backgroundColor: '#F2EFED',
      color: '#4D62D6',
      padding: '15px 25px',
      borderBottomRightRadius: '20px',
    }}
  >
    {props.children}
  </div>
);
const CustomCheckListItem = () => (
  <span>
    <AiFillCheckCircle />
  </span>
);

const CustomCheckListItemRender = ({ children }) => (
  <span style={{ display: 'flex' }}>
    <AiFillCheckCircle color="#97A7FF" width="16px" />
    <span style={{ width: '95%', marginLeft: '8px' }}>{children}</span>
  </span>
);

export const customRichText = {
  name: 'customRichText',
  title: 'Custom Rich Text',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        { title: 'Heading 2', value: 'h2' },
        { title: 'Heading 3', value: 'h3' },
        { title: 'Heading 4', value: 'h4' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          {
            title: 'Highlight',
            value: 'highlight',
            blockEditor: {
              icon: highlightIcon,
              render: highlightRender,
            },
          },
          {
            title: 'Custom Check List Item',
            value: 'customCheckListItem',
            blockEditor: {
              icon: CustomCheckListItem,
              render: CustomCheckListItemRender,
            },
          },
        ],
      },
    },
  ],
};

export const customRichTextWithImage = {
  ...customRichText,
  name: 'customRichTextWithImage',
  of: [
    {
      type: 'image',
      fields: [
        {
          type: 'text',
          name: 'alt',
          title: 'Alternative text',
        },
      ],
    },
    ...customRichText.of,
  ],
};
