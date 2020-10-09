# constructProfileUrl

Returns a valid StarCraft II profile URL containing player data passed as an argument. Accepts player data object with an optional locale.

```js
const StarCraft2API = require('starcraft2-api');

console.log(StarCraft2API.constructProfileUrl({
  regionId: 1,
  realmId: 2,
  profileId: 242838,
}));
// https://starcraft2.com/en-us/profile/1/2/242838

console.log(StarCraft2API.constructProfileUrl({
  regionId: 2,
  realmId: 1,
  profileId: 5593296,
}, 'pl-pl'));
// https://starcraft2.com/pl-pl/profile/2/1/5593296

```