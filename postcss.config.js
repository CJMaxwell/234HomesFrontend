module.exports = {
  plugins: [
    'tailwindcss',
    'postcss-preset-env',
    [
      '@fullhuman/postcss-purgecss',
      process.env.NODE_ENV === 'production'
        ? {
            content: ['./pages/**/*.tsx', './components/**/*.tsx'],
            whitelist: ['html', 'body'],
            defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
            whitelistPatterns: [/slick-/, /nprogress?-/, /ril__/, /tippy/, /react-draft-wysiwyg/],
            whitelistPatternsChildren: [/slick/, /nprogress/],
          }
        : false,
    ],
  ],
};
