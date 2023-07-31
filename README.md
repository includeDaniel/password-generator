# password-generator
[![main](https://github.com/includeDaniel/password-generator/actions/workflows/main.yml/badge.svg)](https://github.com/includeDaniel/password-generator/actions/workflows/main.yml)
[![npm version](https://img.shields.io/npm/v/@includedaniel/password-generator.svg?style=flat)](https://www.npmjs.com/package/@includedaniel/password-generator)
[![codecov](https://codecov.io/gh/includeDaniel/pass-word-generator/branch/main/graph/badge.svg?token=JZWXY20HCS)](https://codecov.io/gh/includeDaniel/pass-word-generator)

```
npm i @includedaniel/password-generator
```

```
yarn add @includedaniel/password-generator
```

Usage:

```js
//module
import { passwordGenerator } from "generated-password";
console.log(passwordGenerator(2)) // a random number with two digits: 48
```

```js
//commomjs
const { passwordGenerator } = require("generated-password");
console.log(passwordGenerator(5)) // a random number with five digits: 45764
```

Running tests:

-   Run `yarn test` to execute the tests and export the reports to `/coverage` folder

Running lint:

-  Run `yarn lint` to execute the eslint to fix and find problems in your code
-  want to know more about eslint commands? [Follow the link](https://eslint.org/docs/latest/use/command-line-interface)

Running prettier:

-  Run `yarn format` to format the code according to established standards
-  Run `yarn type-check` to check the types in your code

Running rollup:

-  Run `yarn build` to execute the rollup
-  [Link for commands line flags of rollup](https://rollupjs.org/command-line-interface/#command-line-flags)
