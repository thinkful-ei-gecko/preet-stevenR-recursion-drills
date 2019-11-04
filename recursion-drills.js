'use strict';

//Q1: counting sheep 
const countSheep = function(number){
    //base case
    if(number  === 0){
        return console.log(`All sheep jumped over the fence`)
    }
    console.log(`Another sheep jumps over the fence`)
    return countSheep(number - 1);
}
countSheep(3);
countSheep(55);

//Q2: Power calculator
//input = two nums and output some power num, ex: inpput (2, 3), output 8
const powerCalculator = function(base, exponent){
    //2 base cases
    if(exponent < 0){
        return console.log(`exponent should be greater than zero`)
    }
    if(exponent === 0){
        return 1
    }
    return base * powerCalculator(base, exponent-1);
} 
console.log(powerCalculator(10,2));
console.log(powerCalculator(10,-2));


//Q3: Reverse string

const reverseString = function(str){
    if (!str.length){
        return "";
    }
    return reverseString(str.substr(1))+str.charAt(0);
}
console.log(reverseString("Jimmy boy"));
console.log(reverseString("noshgniS"));


//Q4 nth Triangular number
const triangleNumber = function(number){
   //base case
   if(!number){
       return 0;
   } 
   if(number === 1){
       return 1
   }
   //recursive function
   return number + triangleNumber(number - 1);
}
console.log(triangleNumber(3));//expect output to be 5
console.log(triangleNumber(10));//expect output to be 55
console.log(triangleNumber(34));//expect output to be ?

//Q5 String spiltter

