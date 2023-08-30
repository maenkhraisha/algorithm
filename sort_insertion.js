function insertion(arr) {
  // loop from the second element and
  // find where is this element fit in the previouse portion


  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j;
    for( j = i - 1; j >= 0 && arr[j] > temp ; j--){    
            arr[j+1]= arr[j]    
    }
    arr[j+1] = temp;
    console.log("---------------");
  }

  return arr;
}

console.log(insertion([7, 3, 2, 5, 4, 6, 1,1]));

// [ 2 , 2 , 3  , 5 , 4 , 6 , 7 ]
//                i
//   j
//temp = 1