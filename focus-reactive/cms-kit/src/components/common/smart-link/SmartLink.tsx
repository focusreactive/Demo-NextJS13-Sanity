import React from 'react';

const SmartLink = ({ children, url, link, externalLink, hash, ...rest }: any) => {
  return (
    <a href={url} {...rest}>
      {children}
    </a>
  );
};

export default SmartLink;
