# profileUrlRegex

Returns regular expression matching StarCraft2.com profile URLs.

```js
const { StarCraft2API } = require('starcraft2-api');

const regex = StarCraft2API.profileUrlRegex();

console.log(regex.test('https://starcraft2.com/en-us/profile/1/2/242838'));
// true
```