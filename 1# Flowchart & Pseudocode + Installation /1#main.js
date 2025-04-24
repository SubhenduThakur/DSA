// function sum(num) {
//     let sum = 0;
//     let userNum = num;
//     for (let i = 1; i <= userNum; i++) {
//         sum += i    
//     }
//     console.log(sum);
// }
// sum(10);

// let sum = 0;
// let n = 5;

// for (let count = 1; count <= n; count++) {
//     sum += count;
// }

// console.log(sum);


// let n = 2;
// let isPrime = null;

// for (let i = 2; i <= (n - 1); i++) {
//     if (n % i !== 0) {
//         isPrime = false;
//         break;
//     }
// }

// if (n == 2) {
//     console.log(n, "is special even prime number.");
//     isPrime = null;
// } else if (isPrime) {
//     console.log(n, "is a prime number");
//     isPrime = null;
// } else {
//     console.log(n, "is not a prime number!");
//     isPrime = null;
// }


let n = 3;
let isPrime = true;

if (n < 2) {
    console.log(n, "is not a prime number");
} else if (n === 2) {
    console.log(n, "is a special even prime number.");
} else {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(n, "is a prime number");
    } else {
        console.log(n, "is not a prime number");
    }
}










