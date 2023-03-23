module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jest/recommended',
    'plugin:testing-library/react'
  ],
  settings: {
    'import/resolver': {
      'node': {
        'paths': ['src'],
        'moduleDirectory': ['node_modules', 'src']
      }
    }
  },
  ignorePatterns: ['serviceWorker.js', 'node_modules/', '*.spec.js'],
  rules: {
    'camelcase': 'off',
    'linebreak-style': 0,
    'no-console': 'warn',
    'global-require': 'off',
    'import/no-cycle': 'off',
    'arrow-body-style': 'off',
    'no-await-in-loop': 'off',
    'import/namespace': 'off',
    'no-param-reassign': 'off',
    'consistent-return': 'off',
    'semi': ['error', 'never'],
    'import/no-unresolved': [2, {commonjs: true, amd: true}],
    'no-underscore-dangle': 'off',
    'curly': ['error', 'multi-line'],
    'react/forbid-prop-types': 'off',
    'react/jsx-curly-newline': 'off',
    'comma-dangle': ['error', 'never'],
    'import/no-dynamic-require': 'warn',
    'react-hooks/rules-of-hooks': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-no-useless-fragment': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'jsx-quotes': ['error', 'prefer-single'],
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'no-return-assign': ['error', 'except-parens'],
    'no-tabs': ['error', { 'allowIndentationTabs': true }],
    'react/jsx-wrap-multilines': ['error', { 'prop': 'ignore' }],
    'max-len': ['error', 150, { 'ignoreTemplateLiterals': true }],
    'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
    'no-unused-expressions': ['error', { 'allowShortCircuit': true }],
    'react/jsx-filename-extension': ['warn', { 'extensions': ['.js', '.jsx'] }],
    'operator-linebreak': ['error', 'after', { 'overrides': { '?': 'ignore', ':': 'ignore' } }]
  }
}
