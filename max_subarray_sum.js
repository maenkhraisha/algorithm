function maxSubarraySum(arr,n){

    if(arr.length == 0 ) return null;

    let temp = 0;
    let head = 0;
    let tail = n-1;
    
    let max = 0;
    for(let i = 0 ; i < n ; i++ ) max+= arr[i];

    temp = max;

    for(let i =0; i < arr.length -n ; i++){
        
        tail++;
        temp -= arr[head];
        temp += arr[tail];
        head++;

        if(temp > max) {
            max = temp
        };
    }

    console.log(max);
    return max

}


maxSubarraySum([30,8,5,20,3,1],2)