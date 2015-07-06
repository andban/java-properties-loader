# java-properties-loader

A Java .resources loader for [webpack](https://github.com/webpack/webpack).

## Usage

```js
var messages = require('!json!java-properties!./text_en.properties');
```

or:

```js
module: {
  loaders: [{
    test: /\.properties$/,
    loader: 'json!java-properties'
  }]
}
```

## License

[ISC](./LICENSE)
