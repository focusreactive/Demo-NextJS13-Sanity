const SmartLink = ({ children, link, ...rest }: any) => {
  let correctUrl = '/';
  switch (link?._type) {
    case 'externalLink':
      correctUrl = link.link;
      break;
    case 'innerLink':
      correctUrl = link.ref?.slug?.current;
      break;
  }

  return (
    <a href={correctUrl} {...rest}>
      {children}
    </a>
  );
};

export default SmartLink;
