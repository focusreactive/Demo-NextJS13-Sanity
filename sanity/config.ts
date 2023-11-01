const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  apiVersion: '2021-10-21',
  studioUrl: '/admin',
  encodeSourceMap: true,
  logger: console,
};

export default config;
