# unpackProfileUrl

Extracts player data (region ID, realm ID, profile ID and locale) from a valid StarCraft2.com profile URL.

Returns `{}` (empty object) if a profile URL doesn't pass validation with [`checkIfProfileUrlLooksValid`](/docs/utils/checkIfProfileUrlLooksValid.html).

To extract player object together with URL locale, pass `true` as the second argument.

```js
const { StarCraft2API } = require('starcraft2-api');

const url = "https://starcraft2.com/en-us/profile/1/1/6615271";

const playerObject = StarCraft2API.unpackProfileUrl(url);

console.log(playerObject);
// {
//    regionId: "1",
//    realmId: "1",
//    profileId: "6615271"
// }

// extracting player object with locale
const playerObject = StarCraft2API.unpackProfileUrl(url, true);

console.log(playerObject);
// {
//    regionId: "1",
//    realmId: "1",
//    profileId: "6615271",
//    locale: "en-us"
// }
```