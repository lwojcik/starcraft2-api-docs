# Custom access token

StarCraft2-API can use custom OAuth access token to be used for data retrieval. If custom access token is provided, StarCraft2-API will not request for a new one on every single query. That results in shorter response time and allows for making OAuth authorization flow and data processing logic independent of each other.

As stated in [Blizzard Battle.net API docs](https://develop.battle.net/documentation/guides/using-oauth), access tokens last for 24 hours. They can be revoked by a number of different events (password change, account lockdown etc.). StarCraft2-API can detect expired access token and obtain a new one, but ultimately **it is user's responsibility to keep custom access tokens valid and up to date**.

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

## Parameters

### validateAccessTokenOnEachQuery
Default: ``false``

If set to ``true``, StarCraft2-API will perform additional access token validation request on each call of ``query`` method. If access token turns out to be expired or invalid and ``refreshExpiredAccessToken`` is false, StarCraft2-API will respond as follows:

```json
{
  error: 'access_token_invalid',
}
```

### refreshExpiredAccessToken
Default: ``false``

If set to ``true``, StarCraft2-API will attempt to obtain a new access token if authorization error is encountered (e.g. invalid or expired access token is provided).

### onAccessTokenExpired
Default: ``undefined``

Callback function to run when StarCraft2-API performs a query with invalid or expired access token. This can be used for different purposes like logging or triggering alerts.

### onAccessTokenRefresh
Default ``undefined``

Callback function to run when StarCraft2-API obtains a new access token. It passes string representing new access token as a callback parameter. This can be used for different purposes like caching or logging.