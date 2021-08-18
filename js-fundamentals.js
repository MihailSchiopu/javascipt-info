// --------------------------------- Hello World -----------------------------

alert("Hello World!");

// --------------------------------- Variables -----------------------------

/*
 Declare two variables: admin and name.
Assign the value "John" to name.
Copy the value from name to admin.
Show the value of admin using alert (must output “John”)
*/

let admin;
let name;

name = "John";
admin = name;

alert(admin);

/* 
Create a variable with the name of our planet. How would you name such a variable?
Create a variable to store the name of a current visitor to a website. How would you name that variable?
*/

let ourPlanetName = "Terra";
let currentUserName = "John";

// ---------------- Interaction: alert, prompt, confirm ------------------

/*
    Create a web-page that asks for a name and outputs it.

*/

let userName = prompt("Input your name");

alert(userName);

// ---------------- Basic operators, maths ------------------
/*
    What are the final values of all variables a, b, c and d after the code below?

*/
let a = 1,
  b = 1;

let c = ++a; // 2
let d = b++; // 1

/*
    What are results of these expressions?
*/

/*

Answer

"" + 1 + 0 = "10"  
"" - 1 + 0 = -1 
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
"  -9  " + 5 = "  -9  5" 
"  -9  " - 5 = -14 
null + 1 = 1 
undefined + 1 = NaN 
" \t \n" - 2 = -2 
*/

//Fix the addition
{
  let a = prompt("First number?", 1);
  let b = prompt("Second number?", 2);

  alert(+a + +b);
}

// ---------------- Comparasions ------------------

//What will be the result for these expressions?

5 > 4; // true
"ананас" > "яблоко"; // false
"2" > "12"; //true
undefined == null; // true
undefined === null; // false
null == "\n0\n"; // false
null === +"\n0\n"; // false

// ---------------- The "if" statement ------------------
//Will alert be shown?

if ("0") {
  alert("Hello");
} // yes

/*
    Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’
    if the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”
*/

let languageName = prompt(`What is the “official” name of JavaScript?`);

if (languageName === "ECMAScript") {
  alert("Right!");
} else {
  alert("You don’t know? ECMAScript!");
}

/*
    Using if..else, write the code which gets a number via prompt and then shows in alert:

        1, if the value is greater than zero,
        -1, if less than zero,
        0, if equals zero.
*/

{
  let number = prompt("Type a number", 0);

  if (number > 0) {
    alert(1);
  } else if (number < 0) {
    alert(-1);
  } else {
    alert(0);
  }
}

/*
    Rewrite this if using the conditional operator '?':

let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}
*/

{
  let a = prompt("Type a number for 'a'");
  let b = prompt("Type a number for 'b'");
  let result = a + b < 4 ? "Below" : "Over";
  alert(result);
}

// ---------------- Logical operators ------------------

/*
    
    Write an if condition to check that age is between 14 and 90 inclusively.

    “Inclusively” means that age can reach the edges 14 or 90.
*/

{
  let age = 10;

  if (age >= 14 && age <= 90) {
    console.log("right");
  }
}

/*

    Write an if condition to check that age is NOT between 14 and 90 inclusively.

    Create two variants: the first one using NOT !, the second one – without it.

*/

{
  let age = 10;

  if (!(age >= 14 && age <= 90)) {
    console.log("right");
  }
}

{
  let age = 91;

  if (age < 14 || age > 90) {
    console.log("right");
  }
}

/*
        Write the code which asks for a login with prompt.

    If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

    The password is checked as follows:

    If it equals “TheMaster”, then show “Welcome!”,
    Another string – show “Wrong password”,
    For an empty string or cancelled input, show “Canceled”
    The schema:
*/

{
  let userName = prompt("Login", "");

  if (userName === "Admin") {
    let pass = prompt("Password", "");

    if (pass === "TheMaster") {
      alert("Welcome!");
    } else if (pass === "" || pass === null) {
      alert("Canceled");
    } else {
      alert("Wrong password");
    }
  } else if (userName === "" || userName === null) {
    alert("Canceled");
  } else {
    alert("I don't know you");
  }
}

// ---------------- Loops: while and for ------------------

//Use the for loop to output even numbers from 2 to 10.

for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert(i);
  }
}

/*
        Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).

    for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
    }
*/

{
  let i = 0;

  while (i < 3) {
    i++;
    alert(`number ${i}!`);
  }
}

// ---------------- functions ------------------

//Write a function min(a,b) which returns the least of two numbers a and b.

let min = (a, b) => {
  if (a < b) {
    return a;
  }
  return b;
};

min(2, 3);

//Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

let pow = (x, n) => {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
};

// ---------------- Arrow functions ------------------

//Replace Function Expressions with arrow functions in the code below:

let ask = (question, yes, no) => {
  if (confirm(question)) yes();
  else no();
};

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);
