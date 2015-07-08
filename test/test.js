describe('java-properties-loader', function () {

  it('should handle basic string values', function () {
    var properties = require('!json!../!./fixtures/basic.properties');
    var expected = require('!json!./fixtures/basic.json');

    (typeof properties).should.be.equal('object');
    properties.should.eql(expected);
  });

  it('should handle array values', function () {
    var properties = require('!json!../!./fixtures/array.properties');
    var expected = require('!json!./fixtures/array.json');

    (Array.isArray(properties.key)).should.be.eql(true);
    properties.should.eql(expected);
  });

  it('should create a nested object when splitKeys is set', function () {
    var properties = require('!json!../?splitKeys!./fixtures/split.properties');
    var expected = require('!json!./fixtures/split.json');

    properties.should.eql(expected);
  });
});

