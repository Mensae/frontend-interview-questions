const fs = require('fs');

const prettierOptions = JSON.parse(fs.readFileSync('./.prettierrc', 'utf8'));

module.exports = {
  extends: ['plugin:prettier/recommended'],
  plugins: ['prettier'],
  env: {
    browser: false,
    node: true,
    jest: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'script',
  },
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    'arrow-body-style': [2, 'as-needed'],
    'class-methods-use-this': 0,
    'comma-dangle': [2, 'always-multiline'],
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
      },
    ],
    'max-len': 0,
    'newline-per-chained-call': 0,
    'no-confusing-arrow': 0,
    'no-console': 0,
    'no-use-before-define': 0,
    'prefer-template': 2,
    'require-yield': 0,
  },
};
