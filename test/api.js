var assert = require('assert');
var Questrade = require('../');

describe('API', function () {

  it('throws error if there is no key', function () {
    assert.throws(function () {
      var qt = new Questrade();
    });
  })

  it('sets the key as an option or as a string', function () {
    var qt1 = new Questrade('abc');
    qt1.on('error', () => {});
    assert.equal(qt1.seedToken, 'abc');
    var qt2 = new Questrade({ seedToken: 'abc' });
    qt2.on('error', () => {});
    assert.equal(qt2.seedToken, 'abc');
  })
  
})
