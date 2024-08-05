module.exports = {
  extends: ['../../../../.eslintrc.cjs'],
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  rules: {
    'import/no-unresolved': [2, { caseSensitive: false }],
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
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
}
