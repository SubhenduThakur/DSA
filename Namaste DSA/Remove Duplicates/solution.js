const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
function removeDuplicates(nums) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[x] < nums[i]) {
      x++;
      nums[x] = nums[i];
    }
  }
  return x + 1;
}

console.log(removeDuplicates(nums));
