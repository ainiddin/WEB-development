let message;
message = 'Hello!';

alert(message); // shows the variable content

let message1 = 'Hello!'; // define the variable and assign the value in one row

alert(message1); // Hello!

let user = 'John', age = 25, message2 = 'Hello';

let message3 = "This";

// repeated 'let' leads to an error
let messag/*e3*/ = "That"; // SyntaxError: 'message3' has already been declared

// The name must contain only letters, digits, or the symbols $ and _.
// The first character must not be a digit.
let userName;
let test123;

let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"

alert($ + _); // 3
// the dollar sign '$' and the underscore '_' can also be used in names. They are regular symbols, just like letters, without any special meaning.

/*
There is a list of reserved words, which cannot be used as variable names because they are used by the language itself.
For example: let, class, return, and function are reserved.
*/

// To declare a constant (unchanging) variable, use const instead of let:
const myBirthday = '18.04.1982';

myBirthday = '01.01.2001'; // error, can't reassign the constant!