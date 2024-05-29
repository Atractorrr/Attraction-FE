module.exports = {
  extends: ['../../.eslintrc.cjs', 'next/core-web-vitals'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  rules: {
    'react/require-default-props': 'off',
    'import/no-unresolved': 'off',
  },
}
