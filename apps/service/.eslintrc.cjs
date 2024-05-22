module.exports = {
  extends: ['../../.eslintrc.cjs', 'next/core-web-vitals'],
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  rules: {
    'react/require-default-props': 'off',
  },
}
