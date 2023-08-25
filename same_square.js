function sameSquare(arr, sqrArr) {
  // loop throught first arrary
  // for each item of first array check if the second array has a square
  // remove the element from first and second array
  // if both array lenghth is zero then return true
  // else return false

/*
// naive solution 
  if (arr.length != sqrArr.length) return false;

  for (let i = 0; i < arr.length; i++) {
    let indexofsqr = sqrArr.indexOf(arr[i] ** 2);
    if (indexofsqr == -1) {
      return false;
    }
    sqrArr.splice(indexofsqr, 1);
  }
  return true;
*/

// refactore solution
let freqarr = {}
let freqsqr = {}

arr.forEach(element => {
    freqarr[element] = (freqarr[element] || 0) + 1
});

sqrArr.forEach(element => {
    freqsqr[element] = (freqsqr[element] || 0) + 1
})

console.log(freqarr);
console.log(freqsqr);

for(const key in freqarr){
    if(!((key ** 2) in freqsqr)){
        return false
    }
    if(!(freqarr[key] == freqsqr[key**2])){
        return false
    }
}

return true

}



// test the function
console.log(sameSquare([1, 1, 2, 3, 1, 3], [1, 4, 9, 1, 1,9]));

