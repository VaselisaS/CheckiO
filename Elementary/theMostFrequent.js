// @flow
/*  You have a sequence of strings, and you’d like to determine
the most frequently occurring string in the sequence.  */

const assert = require('assert');

function mostFrequent(data) {
  const obj = data.reduce((acc, el) => ({ ...acc, [el]: acc[el] ? acc[el] + 1 : 1 }), {});
  return data.sort((a, b) => (obj[a] < obj[b] ? 1 : -1))[0];
}

/* const mostFrequent = (data, obj = {}) => data
  .reduce((acc, el) => ((obj[el] = (obj[el] || 0) + 1) > obj[acc] ? el : acc), data[0]); */


console.log(mostFrequent(['a', 'a', 'bi', 'bi', 'bi']));
console.log(mostFrequent([
  'a', 'bi', 'bi', 'bi', 'b', 'c',
  'a', 'b',
  'a']));

assert.equal(mostFrequent([
  'a', 'b', 'c',
  'a', 'b',
  'a']), 'a');
assert.equal(mostFrequent(['a', 'a', 'bi', 'bi', 'bi']), 'bi');