function countUniqueValue(arr){
    // let obj = {}

    // arr.forEach(element => {
    //     (obj[element]) ? obj[element]+=1 : obj[element]=1;
    // });

    // return Object.keys(obj).length

    let i=0,j=1;

    while(j < arr.length){
        if(arr[i] == arr[j]){
            ++j;          
        }else{
            ++i;
            arr[i]= arr[j];
            ++j;
        }
    }
    return ++i;
}

console.log(countUniqueValue([1,1,1,2,3,4,4,5,5,5,6,6,6,6,6,6,7]))