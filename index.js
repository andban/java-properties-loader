var PropertiesFile = require('java-properties').PropertiesFile;

module.exports = function (source) {
  if (this.cacheable) {
    this.cacheable();
  }

  var props = new PropertiesFile(this.resourcePath);

  var result = {};
  props.getKeys().forEach(function (key) {
    result[key] = props.get(key);
  });

  return JSON.stringify(result);
};

