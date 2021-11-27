module.exports = {
  env: {
    browser: true,
    jasmine: true,
    node: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:jest/recommended',
    'plugin:jest-formatting/strict',
  ],
  overrides: [
    {
      files: ['*.spec.js', '*.spec.jsx', '*.test.js', '*.test.jsx'],
      rules: {
        'react/jsx-props-no-spreading': 0,
      },
    },
  ],
  parser: 'babel-eslint',
  plugins: ['prettier', 'react', 'react-hooks', 'jest', 'jest-formatting', 'jsx-a11y', 'sort-keys-fix', 'import'],
  rules: {
    'arrow-body-style': [2, 'as-needed'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        mjs: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': [2, { devDependencies: true }],
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/order': [
      2,
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'index'],
        'newlines-between': 'always',
      },
    ],
    'import/prefer-default-export': 'off',
    'jest/expect-expect': [2, { assertFunctionNames: ['expect', 'executeTestCase'] }],
    'jest/no-duplicate-hooks': [2],
    'jest/no-standalone-expect': [2],
    'jest/no-truthy-falsy': [2],
    'jest/no-try-expect': [2],
    'jest/prefer-called-with': [2],
    'jest/prefer-strict-equal': [2],
    'jest/prefer-to-be-null': [2],
    'jest/prefer-to-be-undefined': [2],
    'jest/prefer-to-contain': [2],
    'jest/prefer-to-have-length': [2],
    'jsx-a11y/anchor-is-valid': [
      0,
      {
        components: ['a'],
        specialLink: ['href'],
      },
    ],
    'jsx-a11y/click-events-have-key-events': [0],
    'jsx-a11y/no-static-element-interactions': [0],
    'max-len': [
      2,
      {
        code: 120,
        comments: 120,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        tabWidth: 2,
      },
    ],
    'no-debugger': 0,
    'no-multiple-empty-lines': [2, { max: 1 }],
    'no-restricted-syntax': [0, 'ForInStatement'],
    'padding-line-between-statements': [
      2,
      { blankLine: 'always', next: ['if', 'return'], prev: '*' },
      { blankLine: 'always', next: '*', prev: 'block-like' },
      { blankLine: 'always', next: '*', prev: ['const', 'let'] },
      { blankLine: 'any', next: ['const', 'let'], prev: ['const', 'let'] },
    ],
    'prettier/prettier': [
      2,
      {
        printWidth: 120,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
    'react-hooks/exhaustive-deps': [1],
    'react-hooks/rules-of-hooks': [2],
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/jsx-no-bind': [
      2,
      {
        allowArrowFunctions: false,
        allowBind: false,
        allowFunctions: false,
        ignoreDOMComponents: false,
        ignoreRefs: false,
      },
    ],
    'react/jsx-props-no-spreading': [2],
    'react/prop-types': [0],
    'react/react-in-jsx-scope': [0],
    'react/state-in-constructor': [0],
    'sort-keys-fix/sort-keys-fix': 2,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },
};
