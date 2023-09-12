import {ABOUT_CMS_BLOCK, CAPABILITIES_CMS_BLOCK, CUSTOMER_SPOTLIGHT_CMS_BLOCK, LOGOS_CMS_BLOCK} from '@/constants';
import {Advertise, Capabilities, Customers, Sponsors} from '@focusreactive/cms-kit';

export const config = {
  blocks: {
    [LOGOS_CMS_BLOCK]: Sponsors,
    [ABOUT_CMS_BLOCK]: Advertise,
    [CAPABILITIES_CMS_BLOCK]: Capabilities,
    [CUSTOMER_SPOTLIGHT_CMS_BLOCK]: Customers,
  },
};
