function power(base,exponential){

    if(exponential == 0 ) return 1; 
    if(exponential == 1)  return 2;

    return base * power(base,exponential-1)
}


function factorial(num){
   if(num == 1 || num == 0) return 1;
   return num * factorial(num-1)
}

function productOfArray(arr){

    if(arr.length == 0 )   return 1

    return arr[0] * productOfArray(arr.slice(1))
}




   