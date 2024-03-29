module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },
  plugins: ['babel', 'react', 'import', 'prettier', 'react-hooks'],
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier/prettier'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/prop-types': 0,
    'prettier/prettier': 0,
    semi: [2, 'always'],
    quotes: [2, 'single'],
    'jsx-quotes': [2, 'prefer-single'],
    'object-curly-spacing': [2, 'always'],
    'array-bracket-spacing': [2, 'never'],
    'import/no-duplicates': 2,
    'import/named': 2,
    'react/no-typos': 2,
    'react/no-unused-state': 2,
    'react/jsx-no-bind': [
      2,
      {
        ignoreDOMComponents: true,
      },
    ],
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
    'react/jsx-uses-react': 2,
    'react/react-in-jsx-scope': 0,
    'array-callback-return': 2,
    'consistent-return': 2,
    'babel/no-invalid-this': 2,
    'comma-spacing': [2, { before: false, after: true }],
    'comma-dangle': [
      2,
      {
        arrays: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
        imports: 'always-multiline',
        objects: 'always-multiline',
      },
    ],
    'no-unused-vars': [
      1,
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
  },
};
