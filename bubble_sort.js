function bubbleSort(arr) {
  const swap = (arr, j) => {
    let temp = arr[j];
    arr[j] = arr[j + 1];
    arr[j + 1] = temp;
  };
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j);
      }
    }
  }

  return arr;
}

console.log(bubbleSort([40, 7, 6, 3, 1, 2, 5, 4]));
