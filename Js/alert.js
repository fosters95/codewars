"use strict";
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function even_or_odd(number) {
    let rem = number % 2;
    if (rem == 0) return 'even';
    else return 'odd';
}