import { ABOUT_CMS_BLOCK, CAPABILITIES_CMS_BLOCK, CUSTOMER_SPOTLIGHT_CMS_BLOCK, LOGOS_CMS_BLOCK } from '@/constants';
import { ComponentA } from '@focusreactive/cms-kit';

export const config = {
  blocks: {
    [LOGOS_CMS_BLOCK]: ComponentA,
    [ABOUT_CMS_BLOCK]: ComponentA,
    [CAPABILITIES_CMS_BLOCK]: ComponentA,
    [CUSTOMER_SPOTLIGHT_CMS_BLOCK]: ComponentA,
  },
};
