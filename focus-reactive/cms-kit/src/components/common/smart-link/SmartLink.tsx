import React from 'react';

const SmartLink = ({
  children,
  url,

  // TODO: select props instead of exclusion
  link,
  externalLink,
  hash,
  textColor,
  bgColor,
  borderColor,
  noWaves,
  ...rest
}: any) => {
  return (
    <a href={url || link} {...rest}>
      {children}
    </a>
  );
};

export default SmartLink;
