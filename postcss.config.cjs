module.exports = {
  plugins: {
    '@csstools/postcss-global-data': {
      files: ['src/styles/media-queries.module.css'],
    },
    'postcss-nested': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 2,
      features: {
        'nesting-rules': false,
        'custom-media-queries': true,
        'media-query-ranges': true,
      },
    },
  },
};
