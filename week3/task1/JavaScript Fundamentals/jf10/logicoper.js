// || : if one of operands is true then answer will be true
alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder

//If all variables were falsy, "Anonymous" would show up.

//
alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false


