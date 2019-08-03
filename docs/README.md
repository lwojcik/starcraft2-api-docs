---
home: true
actionText: Get Started →
actionLink: /docs/
footer: MIT Licensed • Copyright © 2019 Łukasz Wójcik • Not created, affiliated or endorsed in any way by Blizzard Entertainment
---

### Install

``` bash
npm install starcraft2-api
```

### Quick start

``` javascript
const StarCraft2API = require('starcraft2-api');

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