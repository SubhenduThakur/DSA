// Q. Write a function that searches for an element in an array and returns the index, if the element is not present then just return -1

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return i;
    }
  }

  return -1;
}

const arr = [1, 2, 3, 4, 5, 6, 7];
const target = 2;
const result = linearSearch(arr, target);

console.log(`The index of the number is : ${result}`);

// Q2. Write a function that returns the number of negative numbers in an array.

/* 
1st Method (my method)

let q2Arr = [1, -2, 3, -4, -5, -6, 7, 8, 9];
let negativeNum = [];

function sortNegative(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      negativeNum.push(arr[i]);
    }
  }
}

sortNegative(q2Arr);
console.log(`Total negative numbers are : ${negativeNum.length}`); 


 Avoid Using Global Variables (negativeNum)

 Your function relies on negativeNum which is declared outside (globally). 
 This makes your function less reusable and can cause bugs if used multiple times.
  

function sortNegative(arr) {
  let negativeNum = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      negativeNum.push(arr[i]);
    }
  }
  return negativeNum;
}

let result = sortNegative(arr);
console.log(`Total negative numbers are: ${result}`);

*/

// 2nd Method
const q2Arr = [1, -2, 3, -4, -5, 6, 7, 8, 9];

function countNeg(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}
const totalNeg = countNeg(q2Arr);
console.log(`Total negative numbers are : ${totalNeg}`);

// Q3. Write a function that returns the largest in an array.
const q3Arr = [1, 23, 34, 30, 41, -1, -10, 9];

function largestArr(arr) {
  let largest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}
const res = largestArr(q3Arr);
console.log(`The largest number in the array is : ${res}`);

// Q4. Write a function that returns the smallest in an array.
const q4Arr = [1, 23, 34, 30, 41, -1, -10, 9];

function smallestNum(arr) {
  let smallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}
const q4res = smallestNum(q4Arr);
console.log(`The smallest number in the array is : ${q4res}`);
