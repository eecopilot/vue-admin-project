import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'

const isProd = process.env.NODE_ENV === 'production'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        process: 'readonly',
      },
    },
  },
  { files: ['**/*.{js,mjs,cjs,ts,vue}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    ignores: ['node_modules', 'dist'],
    files: ['**/*.vue'],
    languageOptions: { parserOptions: { parser: tseslint.parser } },
  },
  {
    rules: {
      // eslint
      'no-var': 'error', // use let or const
      'no-multiple-empty-lines': ['warn', { max: 1 }], // only one empty line
      'no-console': isProd ? 'error' : 'off',
      'no-debugger': isProd ? 'error' : 'off',
      'no-unexpected-multiline': 'error', // no implicit semicolon
      'no-useless-escape': 'off', // allow escape characters

      // typescript
      '@typescript-eslint/no-explicit-any': 'off', // not allow any type
      '@typescript-eslint/no-unused-vars': 'error', // unused variables
      '@typescript-eslint/prefer-ts-expect-error': 'error', // expect error
      '@typescript-eslint/no-non-null-assertion': 'off', // not allow non-null assertion
      '@typescript-eslint/no-namespace': 'off', // not allow namespace
      '@typescript-eslint/semi': 'off', // not allow semicolon

      'vue/multi-word-component-names': 'off', // not allow multi-word component names
      'vue/script-setup-uses-vars': 'error', // not allow unused variables
      'vue/no-mutation-props': 'off', // not allow mutation props
      'vue/attributes-hyphenation': 'off', // not allow hyphenation attributes
    },
  },
]
