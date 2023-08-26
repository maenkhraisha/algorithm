function power(base,exponential){

    if(exponential == 0 ) return 1; 
    if(exponential == 1)  return 2;

    return base * power(base,exponential-1)
}


console.log(power(2,0))

// 2 * 2 * 2 * 2
   