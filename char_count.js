function charCount(str){
    let count = {}
    str = str.toLowerCase();

    // count.first = "1";

    // console.log(count.hasOwnProperty("first"))

    for (let i in str){
        
        if(count.hasOwnProperty(str[i])){
            count[str[i]] = Number.parseInt(count[str[i]]) + 1;
        }else{
            count[str[i]] = "1";
        }
    };


    return count;
}



console.log(charCount("hi ,my Name is Maen mohammad ? "))