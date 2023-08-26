// Write a recursive function called reverse which accepts 
// a string and returns a new string in reverse


// ********* solution 1
// function reverse(str){
//     // add whatever parameters you deem necessary - good luck!

//     let firstChar = '';

//     function helper(helperstr){

//         if(helperstr.length == 0) return;
//         firstChar = helperstr.charAt(0) + firstChar;
//         return  helper(helperstr.slice(1))

//     }

//     helper(str);
//     return firstChar;

//   }

// ************ solution 2
function reverse(str){
    if(str.length == 0 ) return '';

    let reverseStr  = '';

    reverseStr =   reverse(str.slice(1)) + str[0];
    return reverseStr;
}
  
 console.log(reverse('awesome')) // 'emosewa'
//  console.log(reverse('rithmschool')) // 'loohcsmhtir'