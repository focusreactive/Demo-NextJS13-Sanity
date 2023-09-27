import { ABOUT_CMS_BLOCK, CAPABILITIES_CMS_BLOCK, CUSTOMER_SPOTLIGHT_CMS_BLOCK, LOGOS_CMS_BLOCK } from '@/constants';
import {
  Advertise,
  AdvertisePropsConverter,
  Capabilities,
  CapabilitiesPropsConverter,
  Customers,
  CustomersPropsConverter,
  Sponsors,
  SponsorsPropsConverter,
  SupportedCms,
} from '@focusreactive/cms-kit';
import { ReactNode } from 'react';

interface CmsConfig {
  cmsId: SupportedCms.sanity;
  blocks: {
    [key: string]: {
      Component: (props: any) => ReactNode;
      cmsDataToProps: Record<SupportedCms, (block: any) => Record<string, any>>;
    };
  };
}

export const config: CmsConfig = {
  cmsId: SupportedCms.sanity,
  blocks: {
    [LOGOS_CMS_BLOCK]: {
      Component: Sponsors,
      cmsDataToProps: SponsorsPropsConverter,
    },
    [ABOUT_CMS_BLOCK]: {
      Component: Advertise,
      cmsDataToProps: AdvertisePropsConverter,
    },
    [CAPABILITIES_CMS_BLOCK]: {
      Component: Capabilities,
      cmsDataToProps: CapabilitiesPropsConverter,
    },
    [CUSTOMER_SPOTLIGHT_CMS_BLOCK]: {
      Component: Customers,
      cmsDataToProps: CustomersPropsConverter,
    },
  },
};
