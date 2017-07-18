/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */

function log(x, y) {
    return Math.log(y) / Math.log(x);
}
var poorPigs = function(buckets, minutesToDie, minutesToTest) {
    return Math.ceil(log(1 + minutesToTest/minutesToDie, buckets));
};

var buckets = 1000;
var minutesToDie = 15;
var minutesToTest = 60;

console.log(poorPigs(buckets, minutesToDie, minutesToTest));
