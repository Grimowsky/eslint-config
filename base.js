module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['prettier'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: '.',
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    'padding-line-between-statements': [
      2,
      // Always require blank lines before and after class declaration, if, do/while, switch, try
      {
        blankLine: 'always',
        prev: '*',
        next: ['if', 'class', 'for', 'do', 'while', 'switch', 'try'],
      },
      {
        blankLine: 'always',
        prev: ['if', 'class', 'for', 'do', 'while', 'switch', 'try'],
        next: '*',
      },
      // Always require blank lines before return statements
      { blankLine: 'always', prev: '*', next: 'return' },
    ],
    '@typescript-eslint/no-explicit-any': ['error'],
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',
    'no-script-url': 'off',
    'no-template-curly-in-string': 'off',
    'linebreak-style': 0,
    'prefer-template': 'error',
    'no-console': 'warn',
    'import/prefer-default-export': 'off',
    'object-curly-spacing': ['error', 'always'],
    'no-underscore-dangle': 0,
    'class-methods-use-this': 0,
    'max-classes-per-file': 'warn',
    '@typescript-eslint/no-misused-promises': 'warn',
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      { allowExpressions: true },
    ],
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_', ignoreRestSiblings: true },
    ],
    'prettier/prettier': [
      'warn',
      {
        printWidth: 120,
        trailingComma: 'all',
        singleQuote: true,
        tabWidth: 2,
        bracketSpacing: true,
        semi: true,
        useTabs: false,
        endOfLine: 'auto',
      },
    ],
  },
  plugins: ['prettier'],
  env: {
    node: true,
    es6: true,
  },
  settings: {
    node: {
      tryExtensions: ['.ts', '.d.ts', '.json'],
    },
  },
};
