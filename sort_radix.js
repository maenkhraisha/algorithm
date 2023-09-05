function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
  }
  
  function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  }

  function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
      maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
  }
  
function radixSort(arr){

   let largestdigit =  mostDigits(arr);

   for(let k =0 ; k < largestdigit ; k++){
        let digitBuckets = Array.from({length : 10 }, () => []);

        for(let i =0; i < arr.length ;i++){
            let digit = getDigit(arr[i],k);
            digitBuckets[digit].push(arr[i])
        }

        arr =  [].concat(...digitBuckets)
   }

   return arr;

}

console.log(radixSort([411,333,6000,733,500,13,12]));