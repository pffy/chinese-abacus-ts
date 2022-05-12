# chinese-abacus-ts
Chinese Abacus object implemented in TypeScript

# INSTALL

Add to your development project using:

```bash
$ npm i -D github:pffy/chinese-abacus-ts
```

# SYNPOSIS
```
ChineseAbacus(number): ChineseAbacus

  + static readonly maxValue: number

  + toString(): string

  + getValue(): number
  + setValue(number): ChineseAbacus

  + getJSON(): object
  + getPlaceValues(): Array
  + getBitArray(): Array
  + getBitString(): string
```


# USAGE

Use this object to build Mandarin Chinese numbers, Cantonese numbers, Thai numbers, and much, much more.

In TypeScript:
```typescript
import { ChineseAbacus } from 'chinese-abacus-ts'
```

In JavaScript:
```javascript
const { ChineseAbacus } = require('chinese-abacus-ts');
```


Create a new instance:
```javascript
const abba = new ChineseAbacus(1234567890);

// the object
console.log(abba);
/*
ChineseAbacus {
  value: 1234567890,
  hundredMillions: 12,
  tenThousands: 3456,
  thousands: 7,
  hundreds: 8,
  tens: 9,
  ones: 0
}
*/
```

Convenient JSON string representation:
```javascript
console.log('' + abba);
/*
{"value":1234567890,"hundredMillions":12,"tenThousands":3456,"thousands":7,"hundreds":8,"tens":9,"ones":0}
*/
```



Here is the actual JSON data:
```javascript
// the JSON representation of the object
console.log(abba.getJSON());
/*
{
  value: 1234567890,
  hundredMillions: 12,
  tenThousands: 3456,
  thousands: 7,
  hundreds: 8,
  tens: 9,
  ones: 0
}
*/
```

From the JSON data, you can get individual place values, if needed:
```javascript
// 3456
console.log(abba.getJSON().tenThousands);
// 12
console.log(abba.getJSON().hundredMillions);
// 7
console.log(abba.getJSON().thousands);
```

Here are more useful functions.

An array of place values:
```javascript
// [ 12, 3456, 7, 8, 9, 0 ]
console.log('' + abba.getPlaceValues());
```

An array of place value bits:
```javascript
// [ true, true, true, true, true, false ]
console.log('' + abba.getBitArray());
```

A string of place value bits:
```javascript
// 111110
console.log('' + abba.getBitString());
```

# LICENSES
  + MIT License: https://opensource.org/licenses/MIT
