function saelectionSort(arr){

    //loop over array from i =0 to array length;
    // second iteration start from i = 1;

    // internal loop start from i to the end to find min
    // swap min to the i position

    let min;
    for(let i = 0 ; i < arr.length - 1 ; i++){
        min = arr[i];
        for(let j = i + 1; j < arr.length ; j++){
            if(arr[j] < min){
                min = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    return arr;
}


console.log(saelectionSort([ 3 , 4 , 2 , 1 ]))
