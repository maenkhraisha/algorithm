function sameSquare(arr, sqrArr) {
  // loop throught first arrary
  // for each item of first array check if the second array has a square
  // remove the element from first and second array
  // if both array lenghth is zero then return true
  // else return false

  if (arr.length != sqrArr.length) return false;

  for (let i = 0; i < arr.length; i++) {
    let indexofsqr = sqrArr.indexOf(arr[i] ** 2);
    if (indexofsqr == -1) {
      return false;
    }
    sqrArr.splice(indexofsqr, 1);
  }
  return true;
}

// test the function
let t1 = performance.now();
console.log(sameSquare([1, 1, 2, 3, 1], [1, 4, 9, 1, 1]));
let t2 = performance.now();
console.log(t2 - t1);
