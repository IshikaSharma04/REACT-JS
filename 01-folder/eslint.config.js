import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },
])

//y is this file here -> github helps in collaborating coding 
//when ppl work together they have diff way of writying someone uses semi colons someone doenst 
// someone uses backtick , someone uses single quote and someone uses doublequote 
//so we get merge conflicts 
//es lint is a set of rules , i can also make my custom rules 
