const postcssConfig = {
  plugins: {
    autoprefixer: { flexbox: 'no-2009' },
    '@csstools/postcss-global-data': {
      files: ['src/styles/media-queries.module.css'],
    },
    cssnano: {},
    'postcss-custom-media': {},
    'postcss-media-minmax': {},
    'postcss-nesting': {},
  },
};

export default postcssConfig;
