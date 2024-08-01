module.exports = {
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  rules: {
    'import/no-unresolved': [2, { caseSensitive: false }],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
}
