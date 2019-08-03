# queryLeagueData

Returns data for the specified season, queue, team, and league.

```js
const StarCraft2API = require('starcraft2-api');

const sc2api = new StarCraft2API({
  region: 'us',
  clientId: 'client id',
  clientSecret: 'client secret'
});

const data = await sc2api.queryLeagueData({
  seasonId: 37,
  queueId: 201,
  teamType: 0,
  leagueId: 6,
});

console.log(data);

// Do something with data

```

## Parameter object properties

* **seasonId** (string / number) - the season ID of the data to retrieve,
* **queueId** (string / number) - the queue ID of the data to retrieve. The following queue IDs are mentioned in [Blizzard Battle.net docs](https://develop.battle.net/documentation/api-reference/starcraft-2-game-data-api):
    * ``1`` - Wings of Liberty 1v1
    * ``2`` - Wings of Liberty 2v2
    * ``3`` - Wings of Liberty 3v3
    * ``4`` - Wings of Liberty 4v4
    * ``101`` - Heart of the Swarm 1v1
    * ``102`` - Heart of the Swarm 2v2
    * ``103`` - Heart of the Swarm 3v3
    * ``104`` - Heart of the Swarm 4v4
    * ``201`` - Legacy of the Void 1v1
    * ``202`` - Legacy of the Void 2v2
    * ``203`` - Legacy of the Void 3v3
    * ``204`` - Legacy of the Void 4v4
    * ``206`` - Legacy of the Void Archon
* **teamType** (string / number) - The team type of the data to retrieve. The following teamtypes are mentioned in [Blizzard Battle.net docs](https://develop.battle.net/documentation/api-reference/starcraft-2-game-data-api):
    * ``0`` - arranged
    * ``1`` - random
* **leagueId** - The league ID (rank name) of the data to retrieve. The following league IDs are mentioned in [Blizzard Battle.net docs](https://develop.battle.net/documentation/api-reference/starcraft-2-game-data-api):
    * ``0`` - Bronze
    * ``1`` - Silver
    * ``2`` - Gold
    * ``3`` - Platinum
    * ``4`` - Diamond
    * ``5`` - Master
    * ``6`` - Grandmaster