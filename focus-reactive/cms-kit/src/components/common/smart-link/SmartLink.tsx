const SmartLink = ({ children, link, ...rest }: any) => {
  let correctUrl = '/[innerLink]';
  switch (link?._type) {
    case 'externalLink':
      correctUrl = link.link;
      break;
    case 'innerLink':
      // todo:
      // correctUrl = link.reference.slug.current;
      break;
    default:
  }

  return (
    <a href={correctUrl} {...rest}>
      {children}
    </a>
  );
};

export default SmartLink;
