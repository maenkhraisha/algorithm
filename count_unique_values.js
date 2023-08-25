function countUniqueValue(arr){
    let obj = {}

    arr.forEach(element => {
        (obj[element]) ? obj[element]+=1 : obj[element]=1;
    });

    return Object.keys(obj).length
}

console.log(countUniqueValue([1,1,1,2,3,4,2,2,2,5,4]))