# java-properties-loader [![Build Status](https://travis-ci.org/andban/java-properties-loader.svg)](https://travis-ci.org/andban/java-properties-loader) [![Code Climate](https://codeclimate.com/github/andban/java-properties-loader/badges/gpa.svg)](https://codeclimate.com/github/andban/java-properties-loader)

A Java .properties file loader for [webpack](https://github.com/webpack/webpack).

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
