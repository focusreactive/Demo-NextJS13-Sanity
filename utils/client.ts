import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: 'q7v95rg2',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2021-10-21',
});
