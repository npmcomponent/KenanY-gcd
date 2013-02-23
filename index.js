/**
 * Calculate the greastest common divisor amongst two integers.
 *
 * @param {Number} number a
 * @param {Number} number b
 * @return {Number} greatest common divisor for integers a, b.
 * @api public
 */
module.exports = function(a, b) {
  var c;
  b = (+b && +a) ? +b : 0;
  a = b ? a : 1;

  while (b) {
    c = a % b;
    a = b;
    b = c;
  }

  return Math.abs(a);
};