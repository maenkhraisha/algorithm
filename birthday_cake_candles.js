function birthdayCakeCandles(candles) {
    // Write your code here
    
    // loop to find the max
    // while loop count the frequesncy object
    
    let frequency = {}
    let max = -Infinity;
    
    candles.forEach(item => {
        if (item >max) max = item;
        frequency[item] = (frequency[item]+1) || 1
    })

       
    return frequency[max]
}


console.log(birthdayCakeCandles([4,4,2,4,1]))