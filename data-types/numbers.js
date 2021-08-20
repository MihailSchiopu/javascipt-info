/*
    The built-in function Math.random() creates a random value from 0 to 1 (not including 1).
Write the function random(min, max) to generate a random floating-point number from min to max (not including max).
*/

const random = (min, max) => {
    return min + Math.random() * (max - min);
}

/*
Create a function randomInteger(min, max) that generates a random integer number from min to max including both min and max as possible values.

Any number from the interval min..max must appear with the same probability.
*/

const randomInteger = (min, max) => {
    let rand = min + Math.random() * max;
    return Math.floor(rand);
}