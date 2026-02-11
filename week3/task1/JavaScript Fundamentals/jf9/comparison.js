alert( 2 > 1 );  // true (correct)
alert( 2 == 1 ); // false (wrong)
alert( 2 != 1 ); // true (correct)

let result = 5 > 4; // assign the result of the comparison
alert( result ); // true

alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true
// string values compares according to ASCII


alert( 0 === false ); // false, because the types are different
// A strict equality operator === checks the equality without type conversion.

5 > 4 // true
"apple" > "pineapple" // false
"2" > "12" // true : it compares 2 with 1
undefined == null //true
undefined === null // false
null == "\n0\n" //false :null only equals to undefined
null === +"\n0\n" //false 
