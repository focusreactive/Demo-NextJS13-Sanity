import { ABOUT_CMS_BLOCK, CAPABILITIES_CMS_BLOCK, CUSTOMER_SPOTLIGHT_CMS_BLOCK, LOGOS_CMS_BLOCK } from '@/constants';
import { Advertise, Capabilities, Customers, Sponsors } from '@focusreactive/cms-kit';
import { converters } from '@/cms-connector/converters';
import { about, capabilities, logos, spotlight } from '@/cms-connector/cmsDataToProps';

export const config = {
  blocks: {
    [LOGOS_CMS_BLOCK]: {
      Component: (block: any) => <Sponsors {...logos(block)} />,
      schema: {},
    },
    [ABOUT_CMS_BLOCK]: {
      Component: (block: any) => <Advertise {...about(block)} />,
      schema: {
        title: converters.title,
        description: converters.richText,
        imageWithAlt: {
          image: converters.image,
          alt: converters.plainText,
        },
      },
    },
    [CAPABILITIES_CMS_BLOCK]: {
      Component: (block: any) => <Capabilities {...capabilities(block)} />,
      schema: {},
    },
    [CUSTOMER_SPOTLIGHT_CMS_BLOCK]: {
      Component: (block: any) => <Customers {...spotlight(block)} />,
      schema: {},
    },
  },
};
