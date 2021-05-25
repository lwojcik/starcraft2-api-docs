# checkIfProfileIdLooksValid

Checks whether supplied argument (number or string) matches requirements for a valid profile ID.

Note that this function only checks formal validity of the supplied argument and it doesn't verify whether it belongs to an actual player.

```js
const { StarCraft2API } = require('starcraft2-api');

console.log(StarCraft2API.checkIfProfileIdLooksValid('6615271'));
// true

console.log(StarCraft2API.checkIfProfileIdLooksValid('not_a_valid_id'));
// false
```