function staircase(n) {
    // Write your code here
    
    // loop from 1 to n for rows
    // first row has one # at the last spaces
    // second row has two ## at the n and n-1 place    
    let noOFHash = 1;
    let noOfSpace = n-1;    
    let str = "";
    for (let i = 0 ; i < n ; i++){ 
        str= "";  
             
        for(let s = 0; s < noOfSpace ; s++){
            str+=" ";
        }
        for(let j = 0; j < noOFHash; j++  ){
            str+="#";
        }
        console.log(str)
        noOFHash++;
        noOfSpace--;
    }

}

console.log(staircase(6))