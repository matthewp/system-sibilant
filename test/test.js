var assert = require('chai').assert;

describe('Sibilant', function() {

  it('Works with the basics', function(done) {
    System.import('test/basics/main.sibilant!sibilantc').then(function(out) {
      var msg = out.msg();
      assert.equal(msg, 'Hello', 'It worked!');
    })
    .then(done);
  });

});
