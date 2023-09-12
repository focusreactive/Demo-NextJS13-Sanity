import { documentTitleField } from './title';

export const getCommonPreview = (data) => {
  const select = data?.select || {};
  const prepareFieldsKeys = Object.keys(select);
  return {
    select: {
      title: documentTitleField.name,
      ...select,
    },
    prepare: (props) => {
      const { title } = props;

      const result = {
        title,
      };

      prepareFieldsKeys.forEach((key) => {
        result[key] = props[key];
      });

      return result;
    },
  };
};
