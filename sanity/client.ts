import { createClient } from 'next-sanity';

import config from './config';
import { sanityApiToken } from '@/environment';

export const client = createClient({
  ...config,
  token: sanityApiToken,
});
