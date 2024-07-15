
// // first question

// function one(){
//     for(let i=1;i<=100;i++){
//         if(i%3==0 && i%5==0){
//             console.log("FizzBuzz");
//         }

//         else if (i%5==0) {
//             console.log("Buzz");
            
//         }
//         else if(i%3==0){
//             console.log("Fizz");
//         }
        
//         else {
//             console.log(i);
//         }
//     }
// }

// one()



// // second question


// function palindrome(str){


// let i=0;
// let j=str.length-1;
// let flag=0;

// while(i<j){
//     if(str.charAt(i)!=str.charAt(j)){
//         console.log("not a palindrome");
//         flag=1;
//     }
//     i=i+1;
//     j=j-1;
// }


// if(flag==0){
//     console.log("Palindrome");
// }  

// }


// palindrome("amma");



// //third question



// function biggest(arr){
//     let max=arr[0];
//     for(let i=1;i<arr.length;i++){
//  if (arr[i] > max) {
//    max = arr[i];
//  }
//     }
       
//     console.log(max);


// }


// biggest([1,2,3,6,5]);






// fourth question


// function counter(str){
//     let obj={};
    



// }



// fifth question



// function longest(str){
//     let arr=str.trim().split(" ");

//     let count=arr[0].length;

//     let max=arr[0];

//     for(let i=0;i<arr.length;i++){
//         if(arr[i].length>count){
//             max=arr[i];
//         }
//     }

//     return max;




// }


// console.log(longest("the world is a dark sldfasdf"));



// sixth question

function factorial(num){
    let fac=1;
    for(let i=1;i<=num;i++){
        fac=fac*i;
    }

    return fac;
}


console.log(factorial(5));


// // seventh question



// function ctof(cel){

//     let far=(cel*(9/5))+32;

//     return far;

// }

// console.log(ctof(1));



// // 8th question

// function missing(arr){
// let count=0;
// let j=0;

// for(let i=0;i<arr.length;i++){
//     j=i-count;
//     if(arr[j]!=i){
//         console.log(i);
//         count++;
//     }
// }


// }


// missing([0,1,2,3,5])