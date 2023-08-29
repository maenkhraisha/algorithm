function insertion(arr) {
  // loop from the second element and
  // find where is this element fit in the previouse portion

  for (let i = 1; i < arr.length; i++) {
    for(let j = i-1; j >= 0; j--){
        console.log(arr[i],arr[j]);
        let temp = arr[j];
        if(arr[i] > arr[j]){
            arr[i+1]= temp;
        }else if(arr[i] < arr[j]){
            arr[i] = arr[i+1]
        }
    }
  }

  return arr;
}

console.log(insertion([7, 3, 2, 5, 4, 6, 1]));
