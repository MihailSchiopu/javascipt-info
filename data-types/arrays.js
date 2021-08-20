/*
Create an array styles with items “Jazz” and “Blues”.
Append “Rock-n-Roll” to the end.
Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
Strip off the first value of the array and show it.
Prepend Rap and Reggae to the array.
*/

let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles.splice(1, 1, "Classic")
styles.shift()
styles.unshift("Rap", "Reggae");

console.log(styles);


/*
Calculates and returns the sum of array items.
*/

const inputSum = (array) => {

    let sum = 0;
    for (let number of array) {
        sum += number;
    }
    return sum;
}


console.log(inputSum([2, 3, 5]));

// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
// That is: removes all dashes, each word after dash becomes uppercased.

const camelize = (str) => {
    return str
        .split('-')
        .map(

            (word, index) => index == 0 ? word : word[0].toUpperCase() + word.substr(1)
        )
        .join('');
}

console.log(camelize("my-life-story"));

// Write a function filterRange(arr, a, b) that gets an array arr,
// looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
// The function should not modify the array. It should return the new array.

const filterRange = (arr, a, b) => {
    return arr.filter(item => (a <= item && item <= b));
}

console.log(filterRange([0, 1, 2, 3, 4, 5, 6, 7], 1, 5));

//Sort in decreasing order


let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

console.log(arr);


//Copy and sort array

const copySorted = (arr) => {
    let newArr = [...arr]
    return newArr.sort((a, b) => a - b);
}

console.log(copySorted(arr));

//You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names = users.map(item => item.name)

console.log(names);

// You have an array of user objects, each one has name, surname and id.
// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

{
    let john = { name: "John", surname: "Smith", id: 1 };
    let pete = { name: "Pete", surname: "Hunt", id: 2 };
    let mary = { name: "Mary", surname: "Key", id: 3 };

    let users = [john, pete, mary];

    let usersMapped = users.map(item => ({ fullName: item.name + ' ' + item.surname, id: item.id }))
    console.log(usersMapped);
}

// Sort by age

{


    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 28 };

    let arr = [pete, john, mary];

    const sortByAge = (arr) => {
        return arr.sort((a, b) => a.age - b.age);
    }

    console.log(sortByAge(arr));;
}

// Unique

let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

const unique = (arr) => {
    let result = [];

    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }

    return result;
}

console.log(unique(strings));