module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': 'off',
    'space-before-function-paren': 'off',
    'react/prop-types': 'off',
    "import/prefer-default-export": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "no-console": "off",
    "react/require-default-props": "off",
    "react/self-closing-comp": "off",
    "object-shorthand": "off",
    "react/jsx-no-bind": "off",
    "react/jsx-curly-brace-presence": "off",
    "no-nested-ternary": "off",
    "react/jsx-no-comment-textnodes": "off",
    "react/no-unescaped-entities": "off",
    "prefer-destructuring": "off",
    "react/no-array-index-key": "off",
    "prefer-template": "off",
  }
};
