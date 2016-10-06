var assert = require('chai')
var assert = require('chai')
  .assert;
var fn = require('../function.js');
var key = getKey();

describe('Simple Functions', function () {
  // define a function named 'tenThousand' that returns an array containing the
  //   first ten thousand positive integers, starting with 1
  it("should contain the first ten thousand positive integers", function () {
    assert.deepEqual(key.tenThousand, fn.tenThousand());
  });

  // define a function named 'threeHundred' that returns an array containing the
  // first 100 integers divisible by 3
  it("should contain the first three hundred positive integers divisible by 3", function () {
    assert.deepEqual(key.threeHundred, fn.threeHundred());
  });

  // define a function named 'alphaObject' that returns an object with
  // the lowercase letters of the alphabet as keys, and their number values
  // as values (a=1, b=2, etc.)
  it("should return an object with letter keys and number values", function () {
    assert.deepEqual(key.alphaObject, fn.alphaObject());
  });
});

describe('Basic Functions', function () {
  // define a function named 'multiplyArr' that takes an array of numbers, and
  //   returns the product (multiplication) of all the numbers in the array
  it("should multiply all the numbers in an array", function () {
    assert.equal(0, fn.multiplyArr([]));
    assert.equal(1, fn.multiplyArr([1, 1, 1, 1, 1, 1, 1, 1]));
    assert.equal(-300, fn.multiplyArr([-1, 2, -3, 2, -5, 5]));
    assert.equal(120, fn.multiplyArr([1, 2, 3, 4, 5]))
  });

  // define a function named 'arrObj' that takes an array of integers, and
  //  returns an object whose keys are the integers, and each value is an
  //  array containing that number of empty strings
  it("should return an object with integer keys and array of empty strings", function () {
    assert.deepEqual(key.emptyObject, fn.arrObj([]));
    assert.deepEqual(key.ao1, fn.arrObj([2, 3, 4, 5]));
    assert.deepEqual(key.ao2, fn.arrObj([1, 1, 1, 6, 1, 6]));
  });

  // define a function named 'wordLengths' that takes a string and returns
  //   an array containing the lengths of each word in the string. (assume that
  //   the words in the string are letters only, separated by a single space)
  it('should return an array with word lengths', function () {
    assert.deepEqual(key.emptyArray, fn.wordLengths(''));
    assert.deepEqual(key.wl1, fn.wordLengths('The Empire never ended'));
    assert.deepEqual(key.wl2, fn.wordLengths('Crunchy peanut butter is the worst'));
    assert.deepEqual(key.wl3, fn.wordLengths('pneumonoultramicroscopicsilicovolcanoconiosis'));
  });
});

describe('Higher Functions', function () {
  // define a function named 'getTimesTen' that returns a function that,
  //  when called with a number, will return that number x 10
  it('should produce a times ten function', function () {
    assert.isFunction(fn.getTimesTen());
    assert.equal(500, (fn.getTimesTen())(50));
    assert.equal(-5, (fn.getTimesTen())(-0.5));
    assert.equal(0, (fn.getTimesTen())(0));
  });

  // define a function named 'getFooBar' that returns a function that,
  //  when called with a string, will return that string parameter
  //  sandwiched between 'Foo' and 'Bar'
  it('should produce a Foo Bar sandwich function', function () {
    assert.isFunction(fn.getFooBar());
    assert.equal("FooGalvanizeBar", (fn.getFooBar())("Galvanize"));
    assert.equal("FooPineappleBar", (fn.getFooBar())("Pineapple"));
    assert.equal("FooBar", (fn.getFooBar())(""));
  });
});









// helper functions
function getKey() {
  var i;
  var tenk = [];
  var azobj = {};
  var powk = [];
  for (i = 1; i <= 10000; i++) {
    tenk.push(i)
  }
  for (i = 1; i <= 1000; i++) {
    powk.push(Math.pow(2, i))
  }
  for (i = 0; i < 26; i++) {
    azobj[String.fromCharCode(i + 97)] = i + 1
  }
  return {
    emptyObject: {},
    emptyArray: [],
    emptyString: '',
    fiveArr: [{}, {}, {}, {}, {}],
    hello: 'Hello, javascript!',
    fnord: 23,
    skiddoo: "23 Skiddoo",
    oddArray: [1, 3, 5, 7, 9],
    fibArray: [1, 1, 2, 3, 5, 8, 13],
    threeHundred: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90, 93, 96, 99, 102, 105, 108, 111, 114, 117, 120, 123, 126, 129, 132, 135, 138, 141, 144, 147, 150, 153, 156, 159, 162, 165, 168, 171, 174, 177, 180, 183, 186, 189, 192, 195, 198, 201, 204, 207, 210, 213, 216, 219, 222, 225, 228, 231, 234, 237, 240, 243, 246, 249, 252, 255, 258, 261, 264, 267, 270, 273, 276, 279, 282, 285, 288, 291, 294, 297, 300],
    tenThousand: tenk,
    simpleObject: {
      foo: 'bar'
    },
    oddEvenObject: {
      1: 2,
      3: 4,
      5: 6,
      7: 8
    },
    alphaObject: azobj,
    threeObj: '[object Object][object Object][object Object]',
    threeArr: '1,2,31,2,31,2,3',
    xnum: 'xxxxxxxx',
    arr1: [
      []
    ],
    arr8: [
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      []
    ],
    foofoo1: 'foofoo',
    foofoo2: 'foomonkeyfoo',
    foofoo3: 'foo1234567890foo',
    x1: 'fxoxoxbxaxr',
    x2: 'Ix xhxaxvxex x3x xtxoxexsx.',
    darr1: [4, 8, 12, 16, 20],
    darr2: [-6, 1, 34, 0, -.25],
    tenksum: 50005000,
    ao1: {
      2: ['', ''],
      3: ['', '', ''],
      4: ['', '', '', ''],
      5: ['', '', '', '', '', ]
    },
    ao2: {
      1: [''],
      6: ['', '', '', '', '', '']
    },
    rev1: 'edcba',
    rev2: '?stunococ fo hcnub ylevol a evah I',
    pow1: [2],
    pow2: [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024],
    pow3: powk,
    wl1: [3, 6, 5, 5],
    wl2: [7, 6, 6, 2, 3, 5],
    wl3: [45],
    hi: 'hello'
  }
}
