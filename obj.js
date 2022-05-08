"use strict";
exports.__esModule = true;
exports.ChineseAbacus = void 0;
/*
 * src      : obj.ts
 * job      : TypeScript implementation of the ChineseAbacus object
 * git      : https://github.com/pffy/chinese-abacus-ts
 * author   : The Pffy Authors https://pffy.dev
 * license  : https://opensource.org/licenses/MIT
 */
var ChineseAbacus = /** @class */ (function () {
    function ChineseAbacus(num) {
        if (num === void 0) { num = 0; }
        // holds the value of the object
        this.value = 0;
        // place values for the object
        this.hundredMillions = 0;
        this.tenThousands = 0;
        this.thousands = 0;
        this.hundreds = 0;
        this.tens = 0;
        this.ones = 0;
        this.setValue(num);
    }
    // sets value of the object
    ChineseAbacus.prototype.setValue = function (num) {
        // for now, only handles integers
        num = Math.floor(num);
        num = Math.abs(num);
        num = Math.min(num, ChineseAbacus.maxValue);
        this.value = num;
        this.count();
        return this;
    };
    // returns values of the object
    ChineseAbacus.prototype.getValue = function () {
        return this.value;
    };
    ChineseAbacus.prototype.reset = function () {
        this.hundredMillions = 0;
        this.tenThousands = 0;
        this.thousands = 0;
        this.hundreds = 0;
        this.tens = 0;
        this.ones = 0;
    };
    ChineseAbacus.prototype.count = function () {
        // this is a waterfall for counting place values
        // addition and subtraction are used in control loops
        this.reset();
        var remaining = this.value;
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
    };
    // returns an array of place values as bits
    ChineseAbacus.prototype.getBitArray = function () {
        return [
            !!this.hundredMillions,
            !!this.tenThousands,
            !!this.thousands,
            !!this.hundreds,
            !!this.tens,
            !!this.ones
        ];
    };
    // returns an string of place values as bits
    ChineseAbacus.prototype.getBitString = function () {
        var arr = this.getBitArray();
        var str = '';
        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
            var a = arr_1[_i];
            str += a ? '1' : '0';
        }
        return str;
    };
    // returns an array of place values
    ChineseAbacus.prototype.getPlaceValues = function () {
        return [
            this.hundredMillions,
            this.tenThousands,
            this.thousands,
            this.hundreds,
            this.tens,
            this.ones
        ];
    };
    // returns an array of place values
    ChineseAbacus.prototype.getJSON = function () {
        return {
            value: this.value,
            hundredMillions: this.hundredMillions,
            tenThousands: this.tenThousands,
            thousands: this.thousands,
            hundreds: this.hundreds,
            tens: this.tens,
            ones: this.ones
        };
    };
    ChineseAbacus.prototype.toString = function () {
        return JSON.stringify(this.getJSON());
    };
    // max number allowed
    ChineseAbacus.maxValue = 999999999999;
    return ChineseAbacus;
}());
exports.ChineseAbacus = ChineseAbacus;
