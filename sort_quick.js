function pivot(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[0];
  let swapPoint = 0;
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      [arr[i], arr[swapPoint + 1]] = [arr[swapPoint + 1], arr[i]];
      swapPoint++;
    }
  }
  [arr[0], arr[swapPoint]] = [arr[swapPoint], arr[0]];

  return swapPoint;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndx = pivot(arr, left, right);
    quickSort(arr, left, pivotIndx - 1);
    quickSort(arr, pivotIndx + 1, right);
  }
  return arr;
}

console.log(quickSort([5, 4, 2, 7, 8, 1, 9, 6, 3]));

// [ 3, 4, 2, 1, 5, 7, 9, 6, 8 ]
