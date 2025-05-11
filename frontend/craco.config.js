module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      const cssRule = webpackConfig.module.rules
        .find((rule) => rule.oneOf)
        .oneOf.find(
          (rule) => rule.test && rule.test.toString().includes('.css')
        )

      if (cssRule) {
        cssRule.use = cssRule.use.map((loader) => {
          if (loader.loader && loader.loader.includes('css-loader')) {
            return {
              ...loader,
              options: {
                ...loader.options,
                importLoaders: 1,
              },
            }
          }
          if (loader.loader && loader.loader.includes('postcss-loader')) {
            return {
              ...loader,
              options: {
                ...loader.options,
                postcssOptions: {
                  plugins: [require('tailwindcss'), require('autoprefixer')],
                },
              },
            }
          }
          return loader
        })
      }

      return webpackConfig
    },
  },
}
