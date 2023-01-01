---
home: true
heroImage: /logo.png
actionText: Get Started →
actionLink: /docs/
footer: MIT Licensed • Copyright © 2019-current Łukasz Wójcik & contributors • Not created, affiliated or endorsed in any way by Blizzard Entertainment
---

### Install

``` bash
npm install starcraft2-api
```

### Quick start

``` javascript
const { StarCraft2API } = require('starcraft2-api');

/**
 * Or using TypeScript / ES6 import:
 * import { StarCraft2API } from 'StarCraft2API';
 */

const sc2api = new StarCraft2API({
  region: 'us',
  clientId: 'client id',
  clientSecret: 'client secret'
});

const data = await sc2api.queryProfile({
  regionId: 1,
  realmId: 1,
  profileId: 1084304,
});

console.log(data);

// Do something with data

``` 
