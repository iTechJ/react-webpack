module.exports = {
  extends: [
    'airbnb',
  ],
  plugins: [
    'react',
    'jsx-a11y',
    'import',
  ],
  env: {
    browser: true,
    node: true,
  },
  parser: 'babel-eslint',
  rules: {
    'comma-dangle': 0,
    'no-unused-vars': [
      'error',
      {
        vars: 'local',
        args: 'none',
      },
    ],
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          consistent: true,
        },
        ObjectPattern: {
          consistent: true,
        },
        ImportDeclaration: {
          consistent: true,
        },
        ExportDeclaration: {
          consistent: true,
        },
      },
    ],
    'max-len': [
      'error',
      {
        code: 120,
      },
    ],
    'react/button-has-type': 0,
    'import/prefer-default-export': 0,
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true
      },
    ],
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/forbid-prop-types': 0,
    'react/destructuring-assignment': 0,
    'react/no-did-update-set-state': 0,
    'implicit-arrow-linebreak': 0,
    'jsx-a11y/anchor-is-valid': 0
  },
  settings: {
    'import/resolver': {
      node: {},
      webpack: {
        config: 'webpack.config.js',
      },
    },
  },
};
