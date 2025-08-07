// → Linear Search
// const arr = [1, 3, 5, 6, 9];
// const target = 7;

// function linerSearch(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === target) {
//             return i;
//         }
//     }
//     return -1;
// }

// const result = linerSearch(arr, target);
// console.log(result);

// → Binary Search

const arr = [10, 22, 35, 40, 50];
const target = 50;

function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) {
            return mid; // Found the target, return the index
        } else if (arr[mid] < target) {
            low = mid + 1; // Target is in the right half
        } else {
            high = mid - 1; // Target is in the left half
        }
    }
    return -1; // Target not found
}

console.log(binarySearch(arr, target));


