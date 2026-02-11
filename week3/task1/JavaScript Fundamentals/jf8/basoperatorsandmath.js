// 5 * 2 --> 2 is right 'operand', 5 is left 'operand'. Sometimes, people call these "arguments"
let x = 1;

x = -x;//it calls unary negative
alert( x ); // -1, unary negation was applied

let x1 = 1, y1 = 3;
alert( y1 - x1 ); // 2, binary minus subtracts values


alert( 5 % 2 ); // 1, the remainder of 5 divided by 2
alert( 8 % 3 ); // 2, the remainder of 8 divided by 3
alert( 8 % 4 ); // 0, the remainder of 8 divided by 4

alert( 2 ** 2 ); // 2² = 4
alert( 2 ** 3 ); // 2³ = 8
alert( 2 ** 4 ); // 2⁴ = 16

alert( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)
alert( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)

let s = "my" + "string";
alert(s); // mystring

// if one of the operands is string ,then the other converts too

alert(2 + 2 + '1' ); // "41" and not "221"
// 4 + '1' = '41'.

alert('1' + 2 + 2); // "122" and not "14"
// 1' + 2 = "12" and "12" + 2 = "122".

// Binary + is only operator that converts numbers to string,on the other 
// hand other binary operations converts other values to numbers

alert( 6 - '2' ); // 4, converts '2' to a number
alert( '6' / '2' ); // 3, converts both operands to numbers

// we can declare and assign variables by chain
let a, b, c;

a = b = c = 2 + 2;

alert( a ); // 4
alert( b ); // 4
alert( c ); // 4'


let n = 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)

alert( n ); // 14

let counter = 2;
counter++;        // works the same as counter = counter + 1, but is shorter
alert( counter ); // 3

let counter1 = 2;
counter1--;        // works the same as counter = counter - 1, but is shorter
alert( counter1 ); // 1

