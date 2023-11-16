const withLinaria = require('next-with-linaria');

/** @type {import('next-with-linaria').LinariaConfig} */
const config = {
  images: {
    domains: ['i.ibb.co', 'cdn.sanity.io'],
  },
};

module.exports = withLinaria(config);
