# ESLint configuration
[Typescript](https://www.typescriptlang.org) style guide using [ESLint](https://eslint.org)

## Install
Yarn:
```bash
yarn add -D \
    @ravorona/eslint-config \
    @ravorona/eslint-config-typescript \
    eslint \
    typescript \
    @typescript-eslint/parser \
    @typescript-eslint/eslint-plugin
```
NPM:
```bash
npm i --save-dev \
    @ravorona/eslint-config \
    @ravorona/eslint-config-typescript \
    eslint \
    typescript \
    @typescript-eslint/parser \
    @typescript-eslint/eslint-plugin
```

## Usage
Set extends property inside your [ESLint configuration](https://eslint.org/docs/user-guide/configuring)
```json
{
    "extends": "@ravorona/typescript",
    "rules": {
        "@typescript-eslint/ban-ts-ignore": "on"
    }
}
```
Typescript supported rules: [Here](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules)
