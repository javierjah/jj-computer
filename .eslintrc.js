module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier/standard',
    'prettier/@typescript-eslint',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    JSX: 'writable',
    __REBRAND__: 'writable',
  },
  plugins: ['import', 'react', 'react-hooks', 'prettier', 'test-selectors'],
  settings: {
    'import/resolver': {
      webpack: {},
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    indent: ['off'],
    'react/require-default-props': 'off',
    'no-use-before-define': 'off',
    'no-return-assign': 'off',
    'import/extensions': 'off',
    'import/no-duplicates': 'off',
    'import/no-extraneous-dependencies': ['warn'],
    'import/no-named-as-default': 'warn',
    'func-names': 0,
    'no-duplicate-imports': 'error',
    'no-param-reassign': 0,
    'max-len': [1, 200, 4],
    'react/prop-types': 'error',
    'react/forbid-prop-types': [
      1,
      {
        forbid: ['any'],
      },
    ],
    'react/no-did-mount-set-state': 'off',
    'react/no-did-update-set-state': 'off',
    'react/prefer-stateless-function': 'off',
    'prefer-default-export': 'off',
    'arrow-body-style': 'off',
    'class-methods-use-this': 'off',
    'spaced-comment': 'off',
    'no-prototype-builtins': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/no-array-index-key': 'off',
    'no-mixed-operators': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-key': 'error',
    'no-unexpected-multiline': 'off',
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'array-simple',
      },
    ],
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-unused-vars': ['warn', { args: 'none' }],
    'no-unused-vars': 'warn',
    '@typescript-eslint/camelcase': 'off',
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': ['error', { allow: ['arrowFunctions'] }],
    'arrow-parens': 'off',
    camelcase: 'off',
    'implicit-arrow-linebreak': 'off',
    'lines-between-class-members': 'off',
    'max-classes-per-file': 'off',
    'no-await-in-loop': 'off',
    'no-restricted-globals': 'off',
    'nonblock-statement-body-position': 'off',
    'object-curly-newline': 'off',
    'operator-linebreak': 'off',
    'prefer-destructuring': 'off',
    'prefer-object-spread': 'warn',
    'react/jsx-fragments': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
    'template-curly-spacing': 'off',
    'react/jsx-handler-names': 'off',
    quotes: ['error', 'single', { avoidEscape: true }],
    'jsx-quotes': ['error', 'prefer-double'],
    'test-selectors/onClick': ['warn', 'always', { testAttribute: 'data-qa' }],
  },
  overrides: [
    {
      files: ['*.tsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
    {
      files: ['*.spec.js', '*.spec.jsx', '*.spec.tsx', '*.spec.ts', 'setup.jest.js'],
      rules: {
        'no-unused-expressions': 'off',
        'jest/valid-expect': 'off',
        'jest/expect-expect': 'off',
        'jest/no-test-callback': 'off',
        'mocha/no-mocha-arrows': 'off',
      },
    },
    {
      files: ['*.test.js', '*.test.jsx', '*.test.tsx', '*.test.ts', 'setup.jest.js'],
      rules: {
        'mocha/no-mocha-arrows': 'off',
        'mocha/no-setup-in-describe': 'off',
        'mocha/no-skipped-tests': 'off',
        'mocha/no-hooks-for-single-case': 'off',
        'mocha/no-top-level-hooks': 'off',
        'jest/no-test-callback': 'off',
      },
    },
  ],
};
