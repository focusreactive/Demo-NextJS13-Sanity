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
    logos: {
      Component: Sponsors,
      cmsDataToProps: SponsorsPropsConverter,
    },
    about: {
      Component: Advertise,
      cmsDataToProps: AdvertisePropsConverter,
    },
    capabilities: {
      Component: Capabilities,
      cmsDataToProps: CapabilitiesPropsConverter,
    },
    customerSpotlight: {
      Component: Customers,
      cmsDataToProps: CustomersPropsConverter,
    },
  },
};
