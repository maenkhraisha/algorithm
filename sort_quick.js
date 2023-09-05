function pivot(arr, start = 0, end = arr.length - 1) {

  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  let pivot = arr[start];
  let swapPoint = start;
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      swapPoint++;
      swap(arr,swapPoint, i);
    }
  }

  swap(arr,start,swapPoint);
  return swapPoint;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndx = pivot(arr, left, right);
    console.log(pivotIndx);
    quickSort(arr, left, pivotIndx-1);
    quickSort(arr, pivotIndx+1, right);
  }
  return arr;
}

console.log(quickSort([5, 4, 2, 7, 8, 1, 9, 6, 3]));

// [ 3, 4, 2, 1, 5, 7, 9, 6, 8 ]
