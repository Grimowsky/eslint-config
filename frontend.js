module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
  },
  extends: ['./base.js'],
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  rules: {
    'react-hooks/exhaustive-deps': [
      'warn',
      {
        additionalHooks: '(useMyCustomHook|useMyOtherCustomHook)',
      },
    ],
    '@typescript-eslint/no-use-before-define': 'warn',
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
      },
    ],
  },
};
