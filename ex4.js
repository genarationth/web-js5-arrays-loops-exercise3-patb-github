// Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time,
// as long as xValue remains positive.
function decrWhilePositive(xValue) {
    while (xValue > 0) {
        console.log(xValue);
        xValue -= 0.5;
    }
}

// Print all the odd numbers between 1 - 100 using a while loop
function printOddNums(n) {
    let i = 1;
    while (i <= n) {
        console.log(i);
        i += 2;
    }
}

printOddNums(100);

// Write a method with a while loop to print 1 through n in square brackets.
function printInSqaures(n) {
    let i = 1;
    while (i <= n) console.log(`[${i++}]`);
}

// Write a method with a while loop that computes the sum of first n positive integers
function sumFirstN(n) {
    let sum = 0;
    while (n > 0) sum += n--;
    return sum;
}
