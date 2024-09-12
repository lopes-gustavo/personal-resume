// @ts-check

import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import eslint from '@eslint/js';
import eslintPluginNext from '@next/eslint-plugin-next';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
import eslintPluginUnusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: eslint.configs.recommended,
  allConfig: eslint.configs.all,
});

const pluginsToPatch = ['@next/next', 'react-hooks', 'import'];

const compatConfig = [...compat.extends('next/core-web-vitals')];

const patchedConfig = compatConfig.map(entry => {
  const plugins = entry.plugins;
  for (const key in plugins) {
    if (Object.prototype.hasOwnProperty.call(plugins, key) && pluginsToPatch.includes(key)) {
      plugins[key] = fixupPluginRules(plugins[key]);
    }
  }
  return entry;
});

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,

  ...[...patchedConfig],
  eslintConfigPrettier,

  {
    rules: {
      ...eslintPluginReact.configs.flat.recommended.rules,
      ...eslintPluginReact.configs.flat['jsx-runtime'].rules,
      'react/jsx-curly-brace-presence': [2, 'never'],
      'react/jsx-no-duplicate-props': 'error',
      'react/jsx-sort-props': 'error',
      'react/jsx-closing-bracket-location': ['error', { nonEmpty: 'line-aligned', selfClosing: 'line-aligned' }],

      ...eslintPluginReactHooks.configs.recommended.rules,
      ...eslintPluginReactHooks.configs.recommended.rules,
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',

      ...eslintPluginNext.configs.recommended.rules,
      ...eslintPluginNext.configs['core-web-vitals'].rules,
      '@next/next/no-img-element': 'error',
    },
  },

  {
    plugins: {
      'simple-import-sort': eslintPluginSimpleImportSort,
      'unused-imports': eslintPluginUnusedImports,
    },
    rules: {
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': 'error',

      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
      'import/order': 'off',

      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
      ],
    },
  },

  {
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/member-ordering': [
        'error',
        {
          interfaces: ['signature', 'method', 'constructor', 'field'],
          typeLiterals: ['signature', 'method', 'constructor', 'field'],
        },
      ],
      'jsx-quotes': ['error', 'prefer-double'],
      'no-irregular-whitespace': 'off',
      quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
      'object-curly-spacing': ['error', 'always'],
      'sort-imports': 'off',
      'jsx-a11y/no-onchange': 'off',
      'jsx-a11y/no-autofocus': 'off',
    },
  },

  {
    ignores: ['.next'],
  },

  {
    files: ['stylelint.config.js', 'tailwind.config.js', 'postcss.config.js', 'next.config.js', 'next-sitemap.js'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
);

// "parserOptions": {
//   "ecmaFeatures": { "jsx": true },
//   "ecmaVersion": 2020,
//   "sourceType": "module"
// },
// "extends": [
//   "plugin:@next/next/recommended",
//   "prettier"
// ],
// "ignorePatterns": ["*/public", "*/node_modules/*", "*/.next/*", "*/dist/*"],
// "rules": {
// },
// "settings": {
//   "react": {
//     "pragma": "React",
//     "version": "detect"
//   }
// }
