
// switchch (new Date().getDay())
// {
//     case 0:
//         day="Sunday";
//         break;
  
//         case 1:
//         day="Monday";
//         break;
        
//         case 2:
//         day="Tuesday";
//         break;
        
//         case 3:
//         day="Wednesday";
//         break;
        
//         case 4:
//         day="Thusday";
//         break;
        
//         case 5:
//         day="Friday";
//         break;
        
//         case 6:
//         day="Saturday";
//   }   

// var union = function(arr1, arr2) {
//     var result = [];
//     console.log(result);
//     for (var i = 0; i < arr1.length; i++) {
//       result.push(arr1[i]);
//     }
//     for (var j = 0; j < arr2.length; j++) {
//         result.push(arr2[j])
//     }
//     return result;
//   };

//   union([1,2,3,4,5], [5,5,46,7,8])

//   var intersection = function(arr1, arr2) {
//     var result = [];
//     for (var i = 0; i < arr1.length; i++) {
//       if (arr2.indexOf(arr1[i]) !== -1) {
//         result.push(arr1[i]);
//       }
//     }
//     return result;
//   };

//   console.log(intersection);



// var arr1 = [1,2,3,4,5,6]
// var arr2 = [5,6,7,8,9,10]
// function union(array1, array2){

//     var arr =array1.concat(array2)
//     var result = Array.from(new Set(arr)); 
//     console.log(result);            

// }

// var arr1 =   parseInt(window.prompt("enter array1"))
// var arr2 =   parseInt(window.prompt("enter array2"))

// union(arr1,arr2)

// Sum
// Simple 2 numbers
// function sum(n1, n2){

//     var sum = n1 + n2;
//     return sum;
// }
// console.log(sum(2,3));

//Sum using array
// function arrsum(arr){
//     var sum=0;
//     for(var i=0;i<arr.length;i++){
//         sum = sum + arr[i];
//     }
//     return sum;
// }
// var jahangir = [1,2,3,4,5];
// console.log(arrsum(jahangir));

// Even number
// function even(num){
//     var num;
//     if(num % 2== 0){
//         return ("Number is even");
        
//     }
// } 
// console.log(even(2));

// Odd number
// function odd(num){
//     var num;
//     if(num % 2 !== 0){
//         return ("Number is odd");
//         }else{
//         return ("Numer is not odd");    
//         }
// } 
// console.log(odd(2));


// fibonacci series
// function fib_series(n1,n2,nextterm,num){
// var n1,n2,nextterm,num;
// console.log(n1,n2);
// nextterm=n1 +n2;
// while(nextterm<num){
// console.log(nextterm);
// n1=n2;
// n2=nextterm;
// nextterm=n1+n2;
// }

// }
// console.log(fib_series(0,1,0,10));

// Prime numbers
// function prime_num(num){
//     var num;
//     var count=0;
//     for(var i=2;i<=num;i++){
//        if(num % i == 0){
//         count = count + 1;
//        }
//     }
//     if(count == 1){
//        return ("Prime Number");
//     }else{
//         return ("Not prime number");
//     }

// }
// console.log(prime_num(3));

// Sum
// Simple 2 numbers
// function sum(n1, n2){

//     var sum = n1 + n2;
//     return sum;
// }
// console.log(sum(2,3));

//Sum using array
// function arrsum(arr){
//     var sum=0;
//     for(var i=0;i<arr.length;i++){
//         sum = sum + arr[i];
//     }
//     return sum;
// }
// var a = [1,2,3,4,5];
// console.log(arrsum(a));

// Even number
// function even(num){
//     var num;
//     if(num % 2== 0){
//         return ("Number is even");
        
//     }
// } 
// console.log(even(2));

// Odd number
// function odd(num){
//     var num;
//     if(num % 2 !== 0){
//         return ("Number is odd");
//         }else{
//         return ("Numer is not odd");    
//         }
// } 
// console.log(odd(2));


// fibonacci series
// function fib_series(n1,n2,nextterm,num){
// var n1,n2,nextterm,num;
// console.log(n1,n2);
// nextterm=n1 +n2;
// while(nextterm<num){
// console.log(nextterm);
// n1=n2;
// n2=nextterm;
// nextterm=n1+n2;
// }

// }
// console.log(fib_series(0,1,0,10));

// Prime numbers
// function prime_num(num){
//     var num;
//     var count=0;
//     for(var i=2;i<=num;i++){
//        if(num % i == 0){
//         count = count + 1;
//        }
//     }
//     if(count == 1){
//        return ("Prime Number");
//     }else{
//         return ("Not prime number");
//     }

// }
// console.log(prime_num(3));

var arr1 = [4,3,6];
var arr2 = [1,2,3]; 

var arr3 = [...arr1,...arr2];
console.log(arr3.sort());

