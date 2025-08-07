const arr = [1, 2, 3, 4, 4, 5, 5, 6, 6];

function findSecondLargest(arr) {
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;
  let thirdLargest = -Infinity;

  const logic = () => {
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== "number") {
        console.log(`"${arr[i]}" is not a number`);
        continue;
      } else {
        if (arr[i] > firstLargest) {
          thirdLargest = secondLargest;
          secondLargest = firstLargest;
          firstLargest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
          secondLargest = arr[i];
        } else if (
          arr[i] > thirdLargest &&
          arr[i] !== firstLargest &&
          arr[i] !== secondLargest
        ) {
          thirdLargest = arr[i];
        }
      }
    }

    if (secondLargest === -Infinity) {
      console.log(
        "No second largest number found (all elements might be equal or non-numeric).",
      );
    } else if (thirdLargest === -Infinity) {
      console.log(
        "No third largest number found (all elements might be equal or non-numeric).",
      );
    } else {
      console.log(
        `The second largest number in the array is : ${secondLargest}`,
      );
      console.log(`The third largest number in the array is : ${thirdLargest}`);
    }
  };

  if (!arr) {
    console.log("Array is null or undefined. Provide a valid array.");
  } else if (!Array.isArray(arr)) {
    console.log("Please provide a valid array.");
  } else if (arr.length === 0) {
    console.log("The array is empty. Please provide numbers.");
  } else if (arr.length < 2) {
    console.log(
      "The array has fewer than two elements. At least two numbers are needed.",
    );
  } else {
    logic();
  }
}

findSecondLargest(arr);
