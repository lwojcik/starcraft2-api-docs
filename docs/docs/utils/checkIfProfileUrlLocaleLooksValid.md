# checkIfProfileUrlLocaleLooksValid

Tests if an argument matches the regex pattern typical for locales used in StarCraft II profile URLs.

This function does not determine whether the locale is supported by Battle.net API. For locale validation see [validateProfileUrlLocale](/docs/utils/validateProfileUrlLocale.md).

```js
const { StarCraft2API } = require('starcraft2-api');

console.log(StarCraft2API.checkIfProfileUrlLocaleLooksValid('en-us'));
// true

console.log(StarCraft2API.checkIfProfileUrlLocaleLooksValid('cn-cn'));
// true even though cn-cn is not a valid locale with Battle.net API

console.log(StarCraft2API.checkIfLocaleLooksValid('invalid-locale'));
// false


```