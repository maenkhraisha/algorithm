function miniMaxSum(arr) {
    // Write your code here
    // find min value then sum other
    // find max value then sum other
    
    let min = Infinity;
    let max = -Infinity;
    let sum = 0;
    arr.forEach(item => {
        sum += item;
        if(item  > max) max=item
        if(item < min ) min = item
    })
    
    console.log(sum-max, sum-min)

}

console.log(miniMaxSum([1,2,3,4,5]))