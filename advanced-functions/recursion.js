//Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.

const sumTo = (n) => {
    if (n == 1) return 1;
    return n + sumTo(n - 1);
}

console.log(sumTo(100));

//The factorial of a natural number is a number multiplied by "number minus one", then by "number minus two",
// and so on till 1. The factorial of n is denoted as n!

const factorial = (n) => n ? n * factorial(n - 1) : 1;

console.log(factorial(5));

//Let’s say we have a single-linked list (as described in the chapter Recursion and stack):

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

const printList = (list) => {
    console.log(list.value);

    if (list.next) {
        printList(list.next)
    }


}

printList(list)

//Output a single-linked list from the previous task Output a single-linked list in the reverse order.

const printReverseList = (list) => {

    if (list.next) {
        printReverseList(list.next);
    }

    console.log(list.value);
}

printReverseList(list);