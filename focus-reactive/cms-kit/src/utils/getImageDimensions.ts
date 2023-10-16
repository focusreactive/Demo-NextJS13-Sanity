export const getImageDimensions = (filepath: string) => {
  const dimensions = filepath?.match(/(?<width>\d+)x(?<height>\d+)/);

  if (dimensions && dimensions?.groups) {
    const { width, height } = dimensions.groups;

    return {
      width: +width,
      height: +height,
    };
  }

  return {
    width: 0,
    height: 0,
  };
};
