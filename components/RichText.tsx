import { PortableText } from '@portabletext/react';

export const RichText = ({ value, plain }: { value: any; plain?: boolean }) => {
  return (
    <PortableText
      value={value}
      components={
        plain
          ? {
              block: {
                normal: (children) => {
                  return children.children;
                },
              },
            }
          : undefined
      }
    />
  );
};
