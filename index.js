var PropertiesFile = require('java-properties').PropertiesFile;

module.exports = function (source) {
  if (this.cacheable) {
    this.cacheable();
  }

  var props = new PropertiesFile();

  var lines = source.split(/\r?\n/);
  lines.forEach(function (line) {
    props.makeKeys(line);
  });

  var result = {};
  props.getKeys().forEach(function (key) {
    result[key] = props.get(key);
  });

  return result;
};

