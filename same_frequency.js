function sameFrequency(str1,str2){

    // loop over the first str and construct freq obj
    // loop over the second str and construct freq obj
    // check if both objects have the same values
    let obj1 = {}
    let obj2 = {}

    for(const char of str1){
        obj1[char] =  obj1[char]+1 || 1
    }
    for(const char of str2){
        obj2[char] =  obj2[char]+1 || 1
    }


    for(const key in obj1){
        
        if(!(obj2[key])) return false
        if(!(obj2[key] == obj1[key])) return false
        
        delete obj1[key]
        delete obj2[key]
    }

    if(Object.keys(obj2).length == 0 && Object.keys(obj1)
    .length == 0) {
        return true
    }else {
        return false
    }
}



console.log(sameFrequency('1118282222111','2812222181111'))