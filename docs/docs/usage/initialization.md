# Initialization

Each StarCraft2-API instance is tied to a specific Battle.net region and requires OAuth credentials for retrieving data. See [Blizzard Battle.net docs](https://develop.battle.net/documentation/guides/using-oauth) for information on how to obtain these.

Initialization with OAuth app credentials:

```js
const { StarCraft2API } = require('starcraft2-api');

const Sc2Api = new StarCraft2API({
  region: 'us', // or 1
  clientId: 'client ID',
  clientSecret: 'client secret',
});
```

Initalization with OAuth access token:

```js
const { StarCraft2API } = require('starcraft2-api');

const Sc2Api = new StarCraft2API({
  region: 'us', // or 1
  accessToken: 'access token',
});

```

## Parameters

* **region** - one of API regions as specified in [Battle.net API docs](https://develop.battle.net/documentation/guides/regionality-partitions-and-localization). BlizzAPI accepts region ID as number or string (e.g. ``1``, ``'2'``) as well as region name as a two-letter country code (e.g. ``us``, ``kr``)
* **clientId** - client ID of application registered with Battle.net API
* **clientSecret** - client secret of application registered with Battle.net API
* **accessToken** (optional) - valid access token issued by Battle.net API endpoint
* **timeoutMs** (optional) - response timeout in miliseconds (default: 10000ms)

## OAuth authorization

See [BlizzAPI docs on OAuth authorization](https://blizzapi.lukem.net/docs/usage/initialization.html#oauth-authorization).
