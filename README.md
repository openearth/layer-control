# layer-control

Vue element for a Mapbox GL layer control

<p align="center">
  <a href="https://circleci.com/gh/openearth/layer-control">
    <img src="https://circleci.com/gh/openearth/layer-control.svg?style=svg" alt="Build Status" />
  </a>
  <a href="https://coveralls.io/github/openearth/layer-control?branch=master">
    <img src="https://coveralls.io/repos/github/openearth/layer-control/badge.svg?branch=master&style=flat-square" alt="Coverage Status" />
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square" alt="Software License" />
  </a>
  <a href="https://npmjs.org/package/layer-control">
    <img src="https://img.shields.io/npm/v/layer-control.svg?style=flat-square" alt="Packagist" />
  </a>
  <a href="https://github.com/openearth/layer-control/releases">
    <img src="https://img.shields.io/github/release/openearth/layer-control.svg?style=flat-square" alt="Latest Version" />
  </a>

  <a href="https://github.com/openearth/layer-control/issues">
    <img src="https://img.shields.io/github/issues/openearth/layer-control.svg?style=flat-square" alt="Issues" />
  </a>
</p>

### Installation
```
npm install --save layer-control
```

### Usage

``` javascript
import LayerControl from 'layer-control'
Vue.use(LayerControl)
```
and then in your Vue file

``` html
<layer-control v-model="layers"></layer-control>
```

## Change log

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## Testing

``` bash
$ npm run test
```

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) and [CONDUCT](CONDUCT.md) for details.

## Security

If you discover any security related issues, please email fedor.baart@deltares.nl instead of using the issue tracker.

## Credits

- [Fedor Baart][link-author]
- [All Contributors][link-contributors]

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

[link-author]: https://github.com/openearth
[link-contributors]: ../../contributors
