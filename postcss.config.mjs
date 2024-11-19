const postcssConfig = {
  plugins: {
    autoprefixer: { flexbox: 'no-2009' },
    '@csstools/postcss-global-data': {
      files: ['src/styles/media-queries.module.css'],
    },
    cssnano: {},
    'postcss-nesting': {},
    'postcss-media-minmax': {},
    'postcss-custom-media': {},
  },
};

export default postcssConfig;
