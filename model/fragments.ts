export const getButtonsFragment = (fieldName = 'buttons') => {
  return `
      ${fieldName}[] {
        ...,
        "text": title,
        "link": select(
          uri[0].reference->._type == "glossaryArticle" => "glossary/" + uri[0].reference->.href.current,
          uri[0].reference->._type == "resourcePage" => "resources/" + uri[0].reference->.href.current,
          uri[0].reference->._type == "glossaryPage" => "glossary",
          uri[0].reference->._type == "resourcesPage" => "resources",
          defined(uri[0].reference->.path.current) == true => uri[0].reference->.path.current,
          uri[0].link
        )
      } {
        ...,
        "link": select(
          defined(anchorLink) == true => link + '#' + anchorLink,
          link
        )
      }
    `;
};

const headerLinkFragment = `
    "link": select(
      link[0].reference->._type == "glossaryArticle" => "glossary/" + link[0].reference->.href.current,
      link[0].reference->._type == "glossaryArticle" => "resources/" + link[0].reference->.href.current,
      link[0].reference->._type == "glossaryPage" => "glossary",
      link[0].reference->._type == "resourcesPage" => "resources",
      defined(link[0].reference->.path.current) == true => link[0].reference->.path.current,
      link[0].link
    )
  `;

export const contentBlocksFragment = `
  ...,
  list[] {
    ...,
    image {
      ...,
      "src": asset
    },
    reference->,
    ${getButtonsFragment()}
  },
  features[] {
    ...,
    image {
      ...,
      "src": asset
    },
    contents[] {
      ...,
      ${getButtonsFragment()},
    }
  },
  ${getButtonsFragment()},
  logos[] {
    ...,
    "src": image
  },
  spotlightThumbs[] {
    ...,
    "imgSrc": asset
  },
  spotlight[] {
    ...,
    photo {
      ...,
      "src": asset
    },
    logo {
      ...,
      "src": asset
    },
    logoInText {
      ...,
      "src": asset
    }
  },
  pricing {
    ...,
    mobilePricing {
      ...,
      pricingSwitch {
        ...,
        items[] {
          ...,
          cards[] {
          ...,
          ${getButtonsFragment()},
          }
        }
      }
    },
    desktopPricing {
      ...,
      pricingSwitch {
        ...,
        items[] {
          ...,
          tableHead[] {
          ...,
          ${getButtonsFragment()},
          }
        }
      }
    },
    tableHead[] {
      ...,
      ${getButtonsFragment()},
    },
  },
  ${getButtonsFragment('internalNav')},
  columns[] {
    ...,
  },
  vacancies[] {
    ...,
    ${getButtonsFragment()},
  },
  other[] {
    ...,
    ${getButtonsFragment()},
  },
  offices[] ->,
  `;

export const basePageFields = `
    ...,
    _id,
    title,
    seo,
    path,
    content,
    header-> {
      ...,
      ${getButtonsFragment()},
      menu[] {
        ...,
        links[] {
          ...,
          "iconSrc": image.asset,
          "iconAlt": image.alt,
          ${headerLinkFragment}
        } {
          ...,
          "link": select(
            defined(anchorLink) == true => link + '#' + anchorLink,
            link
          )
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
