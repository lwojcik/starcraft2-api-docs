# queryPlayerLadder

Retrieves data about an individual SC2 profile.

```js
const StarCraft2API = require('starcraft2-api');

const sc2api = new StarCraft2API({
  region: 'us',
  clientId: 'client id',
  clientSecret: 'client secret'
});

const data = await sc2api.queryPlayerLadder(
  {
    regionId: 1,
    realmId: 1,
    profileId: 1084304,
  },
  '123456'
);

console.log(data);

// Do something with data

```

## Parameters

* **playerObject** (object) - player object consisting of the following properties:
  * **regionId** (string / number) - player region id
  * **realmId** (string / number) - player realm id
  * **profileId** (string / number) - player profile id
* **ladderId** (string / number) - ladder id to retrieve