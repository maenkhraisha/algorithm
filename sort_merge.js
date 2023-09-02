function mergeSort(arr) {
  function merge(arr1, arr2) {
    let l = arr1.length + arr2.length;
    let arr = [];
    let n = 0;
    let m = 0;

    for (let i = 0; i < l; i++) {
      if (n < arr1.length && m < arr2.length) {
        if (arr1[n] <= arr2[m]) {
          arr.push(arr1[n]);
          n++;
        } else {
          arr.push(arr2[m]);
          m++;
        }
      }
    }

    if (n < arr1.length) {
      arr = [...arr, ...arr1.slice(n, arr1.length)];
    }
    if (m < arr2.length) {
      arr = [...arr, ...arr2.slice(m, arr2.length)];
    }

    return arr;
  }

  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  left = mergeSort(left);
  right = mergeSort(right);

 return merge(left,right)
}
console.log(mergeSort([1, 9,7, 5, 8, 20, 15, 3, 4, 2, 10, 6]));
