import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  pluginJs.configs.recommended,
  {
    rules: {
      'no-use-before-define': [
        'error',
        {
          functions: false
        }
      ],
      curly: ['warn'],
      eqeqeq: [
        'error',
        'always',
        {
          null: 'ignore'
        }
      ]
    }
  },
  {
    ignores: ['dist']
  }
];
