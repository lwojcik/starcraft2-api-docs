# queryLegacyLadders

Retrieves data about an individual SC2 profile's ladders.

```js
const StarCraft2API = require('starcraft2-api');

const sc2api = new StarCraft2API({
  region: 'us',
  clientId: 'client id',
  clientSecret: 'client secret'
});

const data = await sc2api.queryLegacyLadders({
  regionId: 1,
  realmId: 1,
  profileId: 1084304,
});

console.log(data);

// Do something with data

```

## Parameter object properties

* **regionId** (string / number) - player region id
* **realmId** (string / number) - player realm id
* **profileId** (string / number) - player profile id
* **options** (object, optional) - [query options](https://blizzapi.lukem.net/docs/usage/query.html#query-options)