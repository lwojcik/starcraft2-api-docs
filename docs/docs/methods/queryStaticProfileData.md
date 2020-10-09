# queryStaticProfileData

Returns all static SC2 profile data (achievements, categories, criteria, and rewards).


```js
const StarCraft2API = require('starcraft2-api');

const sc2api = new StarCraft2API({
  region: 'us',
  clientId: 'client id',
  clientSecret: 'client secret'
});

const data = await sc2api.queryStaticProfileData(1);

console.log(data);

// Do something with data

```

## Parameter object properties

* **regionId** (string / number) - region id
* **options** (object, optional) - [query options](https://blizzapi.lukem.net/docs/usage/query.html#query-options)