alert("Hello"); //This one we’ve seen already. It shows a message and waits for the user to press “OK”.


// The call to prompt returns the text from the input field or null if the input was canceled.
let age = prompt('How old are you?', 100);

alert(`You are ${age} years old!`); // You are 100 years old!


// The result is true if OK is pressed and false otherwise.
let isBoss = confirm("Are you the boss?");

alert( isBoss ); // true if OK is pressed
