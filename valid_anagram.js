function validAnagram(str1, str2){

    let obj1 = {}
    let obj2 = {}
    // contruct first object    
    for(const index in str1 ) {
        obj1[str1[index]] = (obj1[str1[index]] || 0) + 1
    };

    // contruct second object
    for(const index in str2 ) {
        obj2[str2[index]] = (obj2[str2[index]] || 0) + 1
    };

    for(const key in obj1){
        // console.log(key, obj1[key]);
        if(!(key in obj2)) return false
        if(obj1[key] != obj2[key]) return false
    }


    return true;
}


console.log(validAnagram("sssaa","assas"));
