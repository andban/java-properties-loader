describe('java-properties-loader', function () {

  it('should return a JSON object', function () {
    var properties = require('!raw-loader!../!./fixtures/basic.resources');
    var expected = JSON.parse(require('!raw-loader!./fixtures/basic.json'));

    (typeof properties).should.be.equal('object');
    properties.should.eql(expected);
  });

});

