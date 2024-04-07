# ESLint configuration

[Typescript](https://www.typescriptlang.org) code quality guide using [ESLint](https://eslint.org)

## Install

Yarn:

```bash
yarn add -D \
    @ravorona/eslint-config-typescript \
    eslint \
    typescript-eslint \
    typescript
```

NPM:

```bash
npm i --save-dev \
    @ravorona/eslint-config-typescript \
    eslint \
    typescript-eslint \
    typescript
```

## Usage

Set the shared configurations inside your [ESLint configuration](https://eslint.org/docs/user-guide/configuring)

```js
import ravorona from '@ravorona/eslint-config-typescript'

export default [
    ...ravorona.configs.all,
    {
        rules: {
            '@typescript-eslint/no-inferrable-types': 'error'
        }
    }
]
```

Typescript supported rules: [Here](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules)

## Formatting rules

Prefer [Prettier](https://prettier.io) for formatting rules.
