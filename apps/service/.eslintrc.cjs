module.exports = {
  extends: ['../../.eslintrc.cjs', 'next/core-web-vitals'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  rules: {
    'react/require-default-props': 'off',
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
