# validateProfileUrlLocale

Checks if string provided as an argument is a valid locale used in StarCraft II profile URLs.

It throws `RangeError` when provided locale does not pass regex validation with [checkIfProfileUrlLocaleLooksValid](/docs/utils/checkIfProfileUrlLocaleLooksValid).

```js
const { StarCraft2API } = require('starcraft2-api');

console.log(StarCraft2API.validateProfileUrlLocale('en-us'));
// true

console.log(StarCraft2API.validateProfileUrlLocale('cn-cn'));
// false

console.log(StarCraft2API.validateProfileUrlLocale('invalid-locale'));
// RangeError: 'invalid-locale' is not a valid parameter for validateProfileUrlLocale
```