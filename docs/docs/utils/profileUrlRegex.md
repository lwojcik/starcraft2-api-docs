# profileUrlRegex

Returns ladder data for the current season's grandmaster leaderboard.

```js
const StarCraft2API = require('starcraft2-api');

const sc2api = new StarCraft2API({
  region: 'us',
  clientId: 'client id',
  clientSecret: 'client secret'
});

const data = await sc2api.queryGrandmasterLeaderboard(1);

console.log(data);

// Do something with data

```

## Parameters

* **regionId** (string / number) - Battle.net region id to retrieve data from
* **options** (object, optional) - [query options](https://blizzapi.lukem.net/docs/usage/query.html#query-options)