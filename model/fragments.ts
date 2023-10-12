export const getButtonsFragment = (fieldName = 'buttons') => {
  return `
      ${fieldName}[] {
        ...,
        "text": title,
        "link": uri[0]
      }
    `;
};

export const headerAndFooter = `
    ...,
    header-> {
      ...,
      ${getButtonsFragment()},
      menu[] {
        ...,
        links[] {
          ...,
          "iconSrc": image.asset,
          "iconAlt": image.alt,
          "link": link[0]
        }
      },
      ctaCard {
        ...,
        ${getButtonsFragment()},
        image {
          ...,
          "src": asset
        },
      }
    },
    footer-> {
      ...,
      ${getButtonsFragment()},
      menus[] {
        title,
        ${getButtonsFragment('list')},
      },
      ${getButtonsFragment('nav')}
    },
  `;
