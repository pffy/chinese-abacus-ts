#!/usr/bin/env node
/*
 * src      : test1.js
 * job      : tests for the ChineseAbacus object
 * git      : https://github.com/pffy/chinese-abacus-ts
 * author   : The Pffy Authors https://pffy.dev
 * license  : https://opensource.org/licenses/MIT
 */
const { ChineseAbacus } = require('../.');
var abba = new ChineseAbacus(12934560807);

// {"value":12934560807,"hundredMillions":129,"tenThousands":3456,"thousands":0,"hundreds":8,"tens":0,"ones":7}
console.log('' + abba);

console.log(abba.getJSON());
/*
{
  value: 12934560807,
  hundredMillions: 129,
  tenThousands: 3456,
  thousands: 0,
  hundreds: 8,
  tens: 0,
  ones: 7
}
*/

// 3456
console.log(abba.getJSON().tenThousands);
// 129
console.log(abba.getJSON().hundredMillions);
// 0
console.log(abba.getJSON().thousands);


// [ 129, 3456, 0, 8, 0, 7 ]
console.log(abba.getPlaceValues());

// [ true, true, false, true, false, true ]
console.log(abba.getBitArray());

// 110101
console.log(abba.getBitString());

// reset the number to 2
console.log(abba.setValue(2).getJSON());

// reset the number to -120
console.log(abba.setValue(-120).getJSON());
