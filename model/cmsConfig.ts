import {
  Advertise,
  AdvertisePropsConverter,
  Capabilities,
  CapabilitiesPropsConverter,
  CustomersWrapper,
  CustomersPropsConverter,
  Sponsors,
  SponsorsPropsConverter,
  SupportedCms,
  Hero,
  HeroPropsConverter,
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
      Component: CustomersWrapper,
      cmsDataToProps: CustomersPropsConverter,
    },
    hero: {
      Component: Hero,
      cmsDataToProps: HeroPropsConverter,
    },
  },
};
