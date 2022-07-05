# Custom access token

StarCraft2-API can use custom OAuth access token for data retrieval. If custom access token is provided, StarCraft2-API will not request for a new one on every single query. That results in shorter response times and allows for maintaining OAuth authorization flow and data processing logic separately from each other.

For full information on this feature and understand its implications, check out [BlizzAPI docs on custom access token](https://blizzapi.lukem.net/docs/usage/custom-access-token.html).

Initialization with custom access token and additional options:

```js
const { StarCraft2API } = require('starcraft2-api');

const Sc2Api = new StarCraft2API({
  region: 'us', // or 1
  accessToken: 'access token',
  validateAccessTokenOnEachQuery: false,
  refreshExpiredAccessToken: false,
  onAccessTokenExpired: () => { /* do something */ },
  onAccessTokenRefresh: (newAccessToken) => { /* do something */ },
});

```
