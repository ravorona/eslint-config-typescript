/*
 * Copyright (c) 2024 яαvoroηα
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import ravorona from '@ravorona/eslint-config'
import tseslint from 'typescript-eslint'

const tsRules = {
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/consistent-type-definitions': 'error',
    '@typescript-eslint/member-delimiter-style': [
        'error',
        {
            multiline: {
                delimiter: 'none',
                requireLast: false
            },
            singleline: {
                delimiter: 'comma',
                requireLast: false
            }
        }
    ],
    '@typescript-eslint/no-inferrable-types': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-unused-vars': [
        'error',
        {
            vars: 'all',
            args: 'after-used',
            ignoreRestSiblings: false
        }
    ],
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/type-annotation-spacing': [
        'error',
        {
            after: true,
            before: false
        }
    ]
}

const tsConfig = [
    ...ravorona.configs.all,
    ...tseslint.configs.recommended,
    {
        languageOptions: {
            parserOptions: {
                project: true
            }
        },
        rules: tsRules
    }
]

export { tsRules }
export default {
    configs: {
        all: tsConfig
    }
}
