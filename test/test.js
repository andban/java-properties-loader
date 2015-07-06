describe('java-properties-loader', function () {

  it('should handle basic string values', function () {
    var properties = require('!json!../!./fixtures/basic.resources');
    var expected = require('!json!./fixtures/basic.json');

    (typeof properties).should.be.equal('object');
    properties.should.eql(expected);
  });

  it('should handle array values', function () {
    var properties = require('!json!../!./fixtures/array.resources');
    var expected = require('!json!./fixtures/array.json');

    (Array.isArray(properties['a.key'])).should.be.eql(true);
    properties.should.eql(expected);
  });

});

