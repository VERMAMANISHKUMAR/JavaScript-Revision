let num = 31; // You can change this number to test other cases
let isPrime = true;

// Check if the number is greater than 1 (prime numbers are greater than 1)
if (num > 1) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log("This is a Prime Number");
    } else {
        console.log("This is not a Prime Number");
    }
} 
