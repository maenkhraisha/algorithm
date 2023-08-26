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
  
//  console.log(reverse('awesome')) // 'emosewa'
//  console.log(reverse('rithmschool')) // 'loohcsmhtir'


function isPalindrome(str){
    // add whatever parameters you deem necessary - good luck!

    let revStr = '';
    function reverse(helperStr){
        if(helperStr.length == 0) return ;

        revStr =  helperStr[0] + revStr;

        return reverse(helperStr.slice(1));
    }

    reverse(str);
    return  (str === revStr)

  }

// console.log(isPalindrome('awesome')) // false
// console.log(isPalindrome('foobar')) // false
// console.log(isPalindrome('tacocat')) // true
// console.log(isPalindrome('amanaplanacanalpanama')) // true
// console.log(isPalindrome('amanaplanacanalpandemonium')) // false

function someRecursive(arr,callback){
    // add whatever parameters you deem necessary - good luck!
    
    
    
  }
console.log(someRecursive([1,2,3,4], isOdd)); // true
console.log(someRecursive([4,6,8,9], isOdd)); // true
console.log(someRecursive([4,6,8], isOdd));// false
console.log(someRecursive([4,6,8], val => val > 10));// false