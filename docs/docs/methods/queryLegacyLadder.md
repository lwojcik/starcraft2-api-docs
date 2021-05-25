# queryLegacyLadder

Returns data about an individual SC2 ladder.

```js
const { StarCraft2API } = require('starcraft2-api');

const sc2api = new StarCraft2API({
  region: 'us',
  clientId: 'client id',
  clientSecret: 'client secret'
});

const data = await sc2api.queryLegacyLadder(1, 123456);

console.log(data);

// Do something with data

```

## Parameters

* **regionId** (string / number) - region id
* **ladderId** (string / number) - ladder id
* **options** (object, optional) - [query options](https://blizzapi.lukem.net/docs/usage/query.html#query-options)