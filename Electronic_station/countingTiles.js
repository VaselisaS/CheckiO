/* Stephan needs some help building a circular landing zone using the ice square tiles for their new
Ice Base. Before he converts the area to a construction place,
Stephan needs to figure out how many square tiles he will need.

Each square tile has size of 1x1 meters.
You need to calculate how many whole and partial
tiles are needed for a circle with a radius of N meters.
The center of the circle will be at the intersection of four tiles.
For example: a circle with a radius of 2 metres requires 4 whole tiles and 12 partial tiles.
Input: The radius of a circle as a float

Output: The quantities whole and partial tiles as a list with two integers -- [solid, partial]. */


const assert = require('assert');

const countingTiles = (radius) => {
  let solid = 0;
  let partial = 0;
  for (let i = 0; i < radius; i += 1) {
    for (let j = 0; j < radius; j += 1) {
      if (Math.sqrt(((i + 1) ** 2) + ((j + 1) ** 2)) < radius) {
        solid += 1;
      } else if (Math.sqrt((i ** 2) + (j ** 2)) < radius) {
        partial += 1;
      }
    }
  }
  return [solid * 4, partial * 4];
};

assert.deepEqual(countingTiles(2), [4, 12], 'N=2');
assert.deepEqual(countingTiles(3), [16, 20], 'N=3');
assert.deepEqual(countingTiles(2.1), [4, 20], 'N=2.1');
assert.deepEqual(countingTiles(2.5), [12, 20], 'N=2.5');
