/*
 Q.
 ****
 ****
 ****
 **** 
*/

for (let i = 0; i < 5; i++) {
  let row = "";
  for (let j = 0; j < 5; j++) {
    row = row + " *";
  }
  console.log(row);
}

/*
 Q.
 *
 * *
 * * *
 * * * * 
*/

for (let i = 0; i < 4; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + " *";
  }
  console.log(row);
}

/*
  Q.
  1
  1 2
  1 2 3
  1 2 3 4
  1 2 3 4 5
*/
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row = row + j;
  }
  console.log(row);
}

/*
  Q.
  1
  2 2
  3 3 3
  4 4 4 4
  5 5 5 5 5
*/

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row = row + i;
  }
  console.log(row);
}

/*
  Q.
  1 2 3 4 5
  1 2 3 4
  1 2 3
  1 2
  1
*/

// for (let i = 5; i >= 0; i--) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row = row + j;
//   }
//   console.log(row);
// }

let n = 5;
for (let i = 0; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= n - i; j++) {
    row = row + j;
  }
  console.log(row);
}

/*
 Q.
         *
       * *
     * * *
   * * * *
 * * * * *
*/
let num = 5;
for (let i = 0; i < num; i++) {
  let row = "";
  for (let j = 1; j < num - i; j++) {
    row = row + " ";
  }
  for (let k = 0; k <= i; k++) {
    row = row + "*";
  }
  console.log(row);
}

/*
Q.
1
1 0
1 0 1
1 0 1 0
1 0 1 0 1
1 0 1 0 1 0
*/

let number = 5;
for (let i = 0; i < number; i++) {
  let row = "";
  let toggle = 1;
  for (let j = 0; j <= i; j++) {
    row = row + toggle;
    toggle = toggle === 1 ? 0 : 1;
  }
  console.log(row);
}

/*
Q.
1
0 1
0 1 0
1 0 1 0
1 0 1 0 1
*/

let x = 5;
let toggle = 0;
for (let i = 0; i < x; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row += toggle;
    toggle = toggle === 0 ? 1 : 0;
  }
  console.log(row);
}
