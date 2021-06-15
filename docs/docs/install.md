# Installation

## NPM

All released versions are available via [npm](https://npmjs.com/package/starcraft2-api).

``` bash
npm install starcraft2-api
```

## Access via CDN

StarCraft2-API is also available as UMD module and it can be accessed via CDN:

```javascript
// Using jsDelivr:
<script src="https://cdn.jsdelivr.net/npm/starcraft2-api/dist/index.umd.js"></script>

// Using unpkg:
<script src="https://unpkg.com/starcraft2-api/dist/index.umd.js"></script>
```

StarCraft2-API uses [BlizzAPI](https://github.com/blizzapi/blizzapi) and [axios](https://github.com/axios/axios) for HTTP requests. If you use UMD build without any module tooling you have to provide those dependencies manually.

## Manual build

[StarCraft2-API is available on GitHub](https://github.com/blizzapi/starcraft2-api) and it can be built from source code.

``` bash
git clone https://github.com/blizzapi/starcraft2-api.git
cd starcraft2-api
npm install
npm run build
```

All released packages are also available in [GitHub releases section](https://github.com/blizzapi/starcraft2-api/releases).