# profileUrlLocaleRegex

Returns regular expression matching locales used in StarCraft2.com profile URLs.

```js
const { StarCraft2API } = require('starcraft2-api');

const regex = StarCraft2API.profileUrlLocaleRegex();

console.log(regex.test('en-us'));
// true
```