describe('java-properties-loader', function () {

  it('should return a JSON object', function () {
    var properties = require('!json!../!./fixtures/basic.resources');
    var expected = require('!json!./fixtures/basic.json');

    (typeof properties).should.be.equal('object');
    properties.should.eql(expected);
  });

});

