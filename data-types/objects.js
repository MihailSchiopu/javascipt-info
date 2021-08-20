/*

    Write the code, one line for each action:

    Create an empty object user.
    Add the property name with the value John.
    Add the property surname with the value Smith.
    Change the value of the name to Pete.
    Remove the property name from the object.

*/

const user = {
    name: 'John',
    surname: 'Smith',
}

user.name = "Peter"
delete user.name


// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

const isEmpty = (obj) => {

    for (const key in obj) {
        return false
    }

    return true;
}

isEmpty({ nam: 2 })



let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

const sum = (obj) => {
    let acc = 0;
    for (let key in obj) {
        acc += obj[key];
    }

    return acc
}

console.log(sum(salaries));



let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

const multiplyNumeric = (obj) => {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}

multiplyNumeric(menu)

console.log(menu);


let calculator = {
    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    },

    read() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    }
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

function Acumulator(startingValue) {
    this.value = startingValue
    this.read = function () {
        this.value += +prompt("Input value", 0)

    }
}

let acumulator = new Acumulator(5)

// There is a salaries object with arbitrary number of salaries.
// Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values and the for..of loop.
// If salaries is empty, then the result must be 0.


let salaries12 = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

const sumSalaries = (salaries12) => {

    let sum = 0;
    for (let salary of Object.values(salaries12)) {
        sum += salary;
    }

    return sum;
}

console.log(sumSalaries(salaries12));

//Count of propriets

let user1 = {
    name: 'John',
    age: 30
};

const count = (obj) => {
    return Object.keys(obj).length;
}

console.log(count(user1));

//destruct

let user4 = {
    name: "John",
    years: 30
};

let { name, years: age, isAdmin = false } = user;
