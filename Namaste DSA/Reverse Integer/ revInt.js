function revInt(n) {
  let original = n;
  let duplicate = Math.abs(original);
  let reverse = 0;

  while (duplicate > 0) {
    let lastDigit = duplicate % 10;
    reverse = 10 * reverse + lastDigit;
    duplicate = Math.floor(duplicate / 10);
  }

  const limit = Math.pow(2, 31); // 2 ** 31 = 2147483648

  if (reverse < -limit || reverse > limit - 1) return 0;

  return original < 0 ? -reverse : reverse;
}

let result = revInt(-2147483640);
console.log(result);
