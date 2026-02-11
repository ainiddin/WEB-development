// The number type represents both integer and floating point numbers.
let n = 123;
n = 12.345;
// Besides regular numbers, there are so-called 
// “special numeric values” which also belong to
//  this data type: Infinity, -Infinity and NaN.
alert( 1 / 0 ); // Infinity
alert( "not a number" / 2 ); // NaN, such division is erroneous

// NaN is sticky. Any further mathematical operation on NaN returns NaN:
alert( NaN + 1 ); // NaN
alert( 3 * NaN ); // NaN
alert( "not a number" / 2 - 1 ); // NaN

// there’s only one exception to that: NaN ** 0 is 1


// the “number” type can store larger integers 
// (up to 1.7976931348623157 * 10308), but outside
//  of the safe integer range ±(253-1) there’ll be a 
// precision error, because not all digits fit into the
//  fixed 64-bit storage. So an “approximate” value may be stored.
console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992


// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;

// A string in JavaScript must be surrounded by quotes.
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

alert( "the result is ${1 + 2}" ); // the result is ${1 + 2} (double quotes do nothing)

let isGreater = 4 > 1;

alert( isGreater ); // true (the comparison result is "yes")

// The special null value does not belong to any of the types described above.
let age = null;

let age1;

alert(age1); // shows "undefined"



typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)