function charCount(str){
    let count = {}
    str = str.toLowerCase();

    for (let char of str){        
        if(isAlphaNumber(char)){
            count[char] = ++count[char] || 1;
        }
    }
    return count;
}

function isAlphaNumber(char){
    if(char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57 ) return true;
    if(char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122 ) return true;
    if(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90 ) return true;
}

console.log(charCount("hello hhh ? "))