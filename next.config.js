const path = require('path')
const withSass = require('@zeit/next-sass')

module.exports = withSass({
  webpack(config) {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        {
          loader: 'sass-resources-loader',
          options: {
            resources: [
              path.resolve('./src/styles/settings/index.scss'),
              path.resolve('./src/styles/tools/index.scss'),
            ],
          },
        },
      ],
    })
    return config
  },
})
