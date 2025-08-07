const arr = [1, 2, 3, 4, 5];
function doubleNum(arr) {
  let doubleArr = [];
  for (let i = 0; i < arr.length; i++) {
    doubleArr[i] = arr[i] * 2;
  }
  return doubleArr;
}
console.log(doubleNum(arr));
