module.exports = {
  root: true,
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:tailwindcss/recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    'import/extensions': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-console': 'error',
    'import/prefer-default-export': [
      'off',
      { target: 'any' }, // default is "single"
    ],
    'import/no-unresolved': 'off',
  },
  ignorePatterns: [
    '**/node_modules/*',
    '**/dist/*',
    '**/build/*',
    '**/*.cjs',
    '**/*.mjs',
    '**/*.js',
  ],
}
