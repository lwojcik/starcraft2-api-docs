# validateProfileUrl

Checks if string provided as an argument is a formally valid StarCraft II profile URL using [the profile URL regular expression](/docs/utils/profileUrlRegex.md).

Note that

```js
const { StarCraft2API } = require('starcraft2-api');

console.log(BlizzAPI.validateProfileUrl('https://starcraft2.com/en-us/profile/1/2/242838');
// true

console.log(BlizzAPI.validateProfileUrl('starcraft2.com/pl-pl/profile/2/1/5593296');
// true

console.log(BlizzAPI.validateProfileUrl('starcraft2.com/pl-pl/profile/2/1/5593296');
// true

```