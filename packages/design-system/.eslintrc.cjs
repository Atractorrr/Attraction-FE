module.exports = {
  extends: ['../../.eslintrc.cjs', 'plugin:storybook/recommended'],
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  rules: {
    'react/require-default-props': 'off',
    'react/prop-types': 'off',
    'react/jsx-no-constructed-context-values': 'off',
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        some: ['nesting', 'id'],
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
}
