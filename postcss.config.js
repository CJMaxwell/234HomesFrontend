module.exports = {
  plugins: [
    'tailwindcss',
    'postcss-preset-env',
    // [
    //   '@fullhuman/postcss-purgecss',
    //   process.env.NODE_ENV === 'production'
    //     ? {
    //         content: ['./pages/**/*.tsx', './components/**/*.tsx'],
    //         whitelist: ['html', 'body', 'react-draft-wysiwyg'],
    //         defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    //         whitelistPatterns: [/slick-/, /nprogress?-/, /ril__/, /tippy/],
    //         whitelistPatternsChildren: [/slick/, /nprogress/],
    //       }
    //     : false,
    // ],
  ],
};
