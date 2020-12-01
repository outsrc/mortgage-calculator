const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.@(jsx|mdx|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [require('postcss-import'), require('tailwindcss'), require('autoprefixer')]
            }
          }
        }
      ],
      include: path.resolve(__dirname, '../')
    })
    return config
  }
}
