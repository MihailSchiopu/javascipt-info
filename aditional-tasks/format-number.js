/*
    Faceti o functie care primeste ca parametru un array cu lungime de 10 elemente, care sa fie numere.
    Functia trebuie sa returneze un string care sa respecte formatul urmator (555) 555-5555.
    Validati ca array-ul sa contina doar numere, si ca numere sa nu fie mai mari de 9.
*/


let num = [1, 2, 3, 4, 5, 8, 7, 8, 9, 7];
let numTooLong = [...num, 5];
let numWithNaN = [1, 2, 3, "b", 5, "8a", 7, 8, 9, 7];
let numGreater = [1, 2, 3, 4, 15, 8, 7, 8, 9, 7];

const formatNumber = (arr) => {
    let number = "";

    if (arr.length > 10) {
        return console.log("Array length should be not greater then 10");
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 9 || isNaN(arr[i])) {
            return console.log(
                ` (${arr[i]}) should be a number and not greater than 9`
            );
        }

        number += arr[i];
    }

    let formatedNumber = `(${number.slice(0, 3)}) ${number.slice(3, 6)} - ${number.slice(6)}`;

    return console.log(formatedNumber);
};

formatNumber(num);
formatNumber(numTooLong);
formatNumber(numWithNaN);
formatNumber(numGreater);