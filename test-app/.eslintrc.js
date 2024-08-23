const path = require('path')

module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  "overrides": [
    {
      extends: ['plugin:react/recommended', 'standard-with-typescript', 'plugin:prettier/recommended'],
      files: ["*.ts", "*.tsx"],
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: path.join(__dirname, 'tsconfig.json')
      }
    }
  ],
  plugins: [
    'react'
  ],
  rules: {
    '@typescript-eslint/triple-slash-reference': 'off',
    "prettier/prettier": ["warn"],
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
