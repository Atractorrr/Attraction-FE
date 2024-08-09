import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-themes',
    {
      name: 'storybook-addon-sass-postcss',
      options: {
        rules: [
          {
            test: /\.s[ac]ss$/,
            sideEffects: true,
            use: [
              require.resolve('style-loader'),
              {
                loader: require.resolve('css-loader'),
                options: {
                  importLoaders: 2,
                },
              },
              require.resolve('resolve-url-loader'),
              {
                loader: require.resolve('sass-loader'),
                options: {
                  // Want to add more Sass options? Read more here https://webpack.js.org/loaders/sass-loader/#options
                  implementation: require.resolve('sass'),
                  sourceMap: true,
                  sassOptions: {},
                },
              },
            ],
          },
        ],
      },
    },
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
}
export default config
