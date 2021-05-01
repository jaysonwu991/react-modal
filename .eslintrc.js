module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parser: '@babel/eslint-parser',
  plugins: ['babel', 'import', 'react', 'prettier'],
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier/prettier'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'no-unused-vars': 1,
    semi: [2, 'never'],
    'react/prop-types': 0,
    quotes: [2, 'single'],
    'jsx-quotes': [2, 'prefer-single'],
    'object-curly-spacing': [2, 'always'],
    'array-bracket-spacing': [2, 'never'],
    'comma-spacing': [2, { before: false, after: true }]
  }
}
