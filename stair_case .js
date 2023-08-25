function staircase(n) {
    // Write your code here
    
    // loop from 1 to n for rows
    // first row has one # at the last spaces
    // second row has two ## at the n and n-1 place    
    let loop = n-1;
    let spaceCounter = n-1;
    let str = "";
    for (let i = 0 ; i < n ; i++){ 
        str= "";       
        for(let s = 0; s < spaceCounter ; s++){
            str+=" ";
        }
        for(let j =n; loop < j; j--  ){
            str+="#";
        }
        console.log(str)
        loop--;
        spaceCounter--;
    }

}

console.log(staircase(6))