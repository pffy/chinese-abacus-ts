/*
 * src      : obj.ts
 * job      : TypeScript implementation of the ChineseAbacus object
 * git      : https://github.com/pffy/chinese-abacus-ts
 * author   : The Pffy Authors https://pffy.dev
 * license  : https://opensource.org/licenses/MIT
 */
export class ChineseAbacus {

  // max number allowed
  static readonly maxValue: number = 999999999999;

  // holds the value of the object
  private value: number = 0;


  // place values for the object
  private hundredMillions: number = 0;
  private tenThousands: number = 0;
  private thousands: number = 0;
  private hundreds: number = 0;
  private tens: number = 0;
  private ones: number = 0;

  constructor(num: number = 0) {
    this.setValue(num);
  }

  // sets value of the object
  setValue(num: number): ChineseAbacus {

    // for now, only handles integers
    num = Math.floor(num);
    num = Math.abs(num);
    num = Math.min(num, ChineseAbacus.maxValue);

    this.value = num;
    this.count();
    return this;
  }

  // returns values of the object
  getValue(): number {
    return this.value;
  }

  private reset(): void {
    this.hundredMillions = 0;
    this.tenThousands = 0;
    this.thousands = 0;
    this.hundreds = 0;
    this.tens = 0;
    this.ones = 0;
  }

  private count(): void {
    // this is a waterfall for counting place values
    // addition and subtraction are used in control loops

    this.reset();
    let remaining: number = this.value;

    while (remaining >= 100000000) {
      remaining = remaining - 100000000;
      this.hundredMillions++;
    }

    while (remaining >= 10000) {
      remaining = remaining - 10000;
      this.tenThousands++;
    }

    while (remaining >= 1000) {
      remaining = remaining - 1000;
      this.thousands++;
    }

    while (remaining >= 100) {
      remaining = remaining - 100;
      this.hundreds++;
    }

    while (remaining >= 10) {
      remaining = remaining - 10;
      this.tens++;
    }

    this.ones = remaining;
  }

  // returns an array of place values as bits
  getBitArray(): Array<boolean> {
    return [
      !!this.hundredMillions,
      !!this.tenThousands,
      !!this.thousands,
      !!this.hundreds,
      !!this.tens,
      !!this.ones
    ]
  }

  // returns an string of place values as bits
  getBitString(): string {

    const arr: Array<boolean> = this.getBitArray();
    let str: string = '';

    for (let a of arr) {
      str += a ? '1' : '0';
    }

    return str;
  }

  // returns an array of place values
  getPlaceValues(): Array<number> {
    return [
      this.hundredMillions,
      this.tenThousands,
      this.thousands,
      this.hundreds,
      this.tens,
      this.ones
    ]
  }

  // returns an array of place values
  getJSON(): any {
    return {
      value: this.value,
      hundredMillions: this.hundredMillions,
      tenThousands: this.tenThousands,
      thousands: this.thousands,
      hundreds: this.hundreds,
      tens: this.tens,
      ones: this.ones
    }
  }

  toString(): string {
    return JSON.stringify(this.getJSON());
  }
}
