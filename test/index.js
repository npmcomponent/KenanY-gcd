var gcd = require('..');

describe('gcd(a, b)', function() {
  it('should return the greatest common divisor of two integers', function() {
    gcd(1254, 5298).should.equal(6);
    gcd(78699786, 78978965).should.equal(1);
  });
});