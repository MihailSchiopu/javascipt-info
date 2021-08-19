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
    for (let key in salaries) {
        acc += salaries[key];
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