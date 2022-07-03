# queryPlayerAccount

Returns metadata for an individual's account.

```js
const { StarCraft2API } = require('starcraft2-api');

const sc2api = new StarCraft2API({
  region: 'us',
  clientId: 'client id',
  clientSecret: 'client secret'
});

const data = await sc2api.queryPlayerAccount('123456');

console.log(data);

// Do something with data

```

## Parameters

* **accountId** (string / number) - the ID of the account for which to retrieve data. As stated in [Blizzard Battle.net docs](https://develop.battle.net/documentation/api-reference/starcraft-2-community-api), account Id is a player's profile id which is retrieved via GET ``/oauth/userinfo``. This is not the same as ``profileId`` used across different API endpoints for SC2.
* **options** (object, optional) - [query options](https://blizzapi.lukem.net/docs/usage/query.html#query-options)
