var PropertiesFile = require('java-properties').PropertiesFile;

module.exports = function (source) {
  if (this.cacheable) {
    this.cacheable();
  }

  var props = new PropertiesFile(this.resourcePath);

  var result = {};
  props.getKeys().forEach(function (key) {
    var keys = key.split('.');
    keys.reduce(function (p, v, i) {
      p[v] = (i < keys.length - 1) ? p[v] || {} : props.get(key);
      return p[v];
    }, result);
  });

  return JSON.stringify(result);
};

