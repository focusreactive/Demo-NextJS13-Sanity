const onlyUnique = <T>(value: T, index: number, self: T[]) => {
  return self.indexOf(value) === index;
};

export const getUniqElements = (array: any[]) => array.filter(onlyUnique);
