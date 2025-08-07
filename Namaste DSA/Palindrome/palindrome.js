function palindrome(n) {
  if (typeof n !== "number" || isNaN(n)) {
    return "Please provide a valid number";
  } else if (n < 0) {
    // If number is negative
    return false;
  } else if (n < 10) {
    // if number is less-than 10
    return true;
  }

  const originalNum = n;
  let duplicateNum = originalNum;
  let reverseNum = 0;

  while (duplicateNum > 0) {
    let lastDigit = duplicateNum % 10; // return last digit
    reverseNum = 10 * reverseNum + lastDigit;
    duplicateNum = Math.floor(duplicateNum / 10); // remove last digit
  }

  return originalNum === reverseNum; // return true if condition matches otherwise false
}

const result = palindrome(121);
console.log(result);
