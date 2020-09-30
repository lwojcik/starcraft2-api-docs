# queryProfileMetadata

Returns metadata for an individual's profile.

Metadata is basic information about a StarCraft II player. It is not particularly informative by itself, but it is usually enough
to identify them in the game and retrieve more detailed information on their game performance.

```js
const StarCraft2API = require('starcraft2-api');

const sc2api = new StarCraft2API({
  region: 'us',
  clientId: 'client id',
  clientSecret: 'client secret'
});

const data = await sc2api.queryProfileMetadata({
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