//Write a function ucFirst(str) that returns the string str with the uppercased first character, for instance:

const ucFirst = (str) => {
    let firstLetter = str[0].toUpperCase()
    return firstLetter + str.substr(1)
}

console.log(ucFirst("mihai"));

/*
Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.

The function must be case-insensitive:
 */

const checkSpam = (str) => {
    let strLowerCase = str.toLowerCase()


    if (strLowerCase.includes('viagra') || strLowerCase.includes('xxx')) {
        return true
    }

    return false
}



console.log(checkSpam("Buy some"));
console.log(checkSpam("Buy some XXX"));
console.log(checkSpam("Buy some Viagra"));

/*
Create a function truncate(str, maxlength) that checks the length of the str and,
if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.

The result of the function should be the truncated (if needed) string.
*/

const truncate = (str, maxLength) => {
    if (str.length > maxLength) {
        return str.substr(0, maxLength - 3) + "..."
    }
    return str
}

console.log(truncate("Mihail merge pe drum", 12));

/*
We have a cost in the form "$120". That is: the dollar sign goes first, and then the number.

Create a function extractCurrencyValue(str) that would extract the numeric value from such string and return it.
*/

const extractCurrencyValue = (str) => {
    return +str.substr(1)
}

console.log(extractCurrencyValue("$10") + extractCurrencyValue("$6"));