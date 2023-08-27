function linearSearch(arr,num){
    // add whatever parameters you deem necessary - good luck!
    let result = -1 ; 

    arr.forEach((currentValue,index) => { 
        if(currentValue == num) {
            result = index;
        }
    })
    
    return result;
  }

console.log(linearSearch([10, 15, 20, 25, 30], 15));  // 1
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4));  // 5
console.log(linearSearch([100], 100));  // 0
console.log(linearSearch([1,2,3,4,5], 6) ); // -1
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10) ); // -1
console.log(linearSearch([100], 200) ); // -1

