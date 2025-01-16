module.exports = {
  extends: ['next/core-web-vitals', '../../.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  rules: {
    '@next/next/no-sync-scripts': 'off',
    'react/require-default-props': 'off',
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        some: ['nesting', 'id'],
      },
    ],
    '@typescript-eslint/naming-convention': 'off',
    '@@typescript-eslint/lines-between-class-members': 'off',
    '@typescript-eslint/no-throw-literal': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
}
