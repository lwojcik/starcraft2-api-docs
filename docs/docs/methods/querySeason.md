# querySeason

Returns data about the current season.

```js
const StarCraft2API = require('starcraft2-api');

const sc2api = new StarCraft2API({
  region: 'us',
  clientId: 'client id',
  clientSecret: 'client secret'
});

const data = await sc2api.querySeason(1);

console.log(data);

// Do something with data

```

## Parameter object properties

* **regionId** (string / number) - region id