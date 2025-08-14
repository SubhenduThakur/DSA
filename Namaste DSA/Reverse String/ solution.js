let arr = ["h", "e", "l", "l", "o"];

function removeString(s) {
  const fullLen = s.length;
  const halfLen = Math.floor(s.length / 2);

  for (let i = 0; i < halfLen; i++) {
    let temp = s[i];
    s[i] = s[fullLen - 1 - i];
    s[fullLen - 1 - i] = temp;
  }
  return s;
}

console.log(removeString(arr));
