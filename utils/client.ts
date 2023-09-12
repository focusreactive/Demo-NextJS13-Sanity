import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: 'q7v95rg2',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2021-10-21',
});
