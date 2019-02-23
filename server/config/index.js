// Container for all the environments
let config = {};

// Staging (default) environment
config.development = {
  PORT: process.env.PORT || 3000,
  details: 'localhost:3014',
  sidebar: 'localhost:3015',
  categories: 'localhost:3016',
  env: 'development'
};

// Production environment
config.production = {
  PORT: process.env.PORT || 3000,
  details: '34.205.143.254',
  sidebar: '54.146.177.133',
  categories: '18.218.78.109',
  env: 'production'
};

// Determine which env should be passed
let environment =
  typeof process.env.NODE_ENV === 'string'
    ? process.env.NODE_ENV.toLowerCase()
    : '';

module.exports =
  typeof config[environment] === 'object'
    ? config[environment]
    : config.DEVELOPMENT;
