function power(base,exponential){

    if(exponential == 0 ) return 1; 

    return base * power(base,exponential-1)
}


function factorial(num){
   if(num == 1 || num == 0) return 1;
   return num * factorial(num-1)
}

function productOfArray(arr){

    if(num == 0 )   return 1

    return arr[0] * productOfArray(arr.slice(1))
}

function recursiveRange(num){
    if(num == 0 ) return 0

    return num + recursiveRange(num-1)
}

function fib(num){
    if(num == 1 || num == 2) return 1

    return fib(num-2) + fib(num-1)
}




   