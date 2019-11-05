'use strict';

// //Q1: counting sheep 
// const countSheep = function(number){
//     //base case
//     if(number  === 0){
//         return console.log(`All sheep jumped over the fence`)
//     }
//     console.log(`Another sheep jumps over the fence`)
//     return countSheep(number - 1);
// }
// countSheep(3);

// //Q2: Power calculator
// //input = two nums and output some power num, ex: inpput (2, 3), output 8
// const powerCalculator = function(base, exponent){
//     //2 base cases
//     if(exponent < 0){
//         return console.log(`exponent should be greater than zero`)
//     }
//     if(exponent === 0){
//         return 1
//     }
//     return base * powerCalculator(base, exponent-1);
// } 
// console.log(powerCalculator(10,2));
// console.log(powerCalculator(10,-2));


// //Q3: Reverse string

// const reverseString = function(str){
//     if (!str.length){
//         return "";
//     }
//     return reverseString(str.substr(1))+str.charAt(0);
// }
// console.log(reverseString("Jimmy boy"));
// console.log(reverseString("noshgniS"));


// //Q4 nth Triangular number
// const triangleNumber = function(number){
//    //base case
//    if(!number){
//        return 0;
//    } 
//    if(number === 1){
//        return 1
//    }
//    //recursive function
//    return number + triangleNumber(number - 1);
// }
// console.log(triangleNumber(3));//expect output to be 5
// console.log(triangleNumber(10));//expect output to be 55
// console.log(triangleNumber(34));//expect output to be ?

// //Q5 String spiltter
// //input (some string) = "string" and output (a split string) = ["s", "t", "r", "i", "n", "g"]
// const strSplit = function (str, separator){
//     //base case
//     if(str.length === 0){
//         return [];    
//     }
//     //recursion
//     if(str.charAt(0) === separator){
//         return [str.charAt(1) + strSplit(str.slice(1), separator)];
//     }
//     else{
//         return [str.charAt(0) + strSplit(str.slice(1), separator)];
//     }
// }
// console.log(strSplit('02/20/2020', '/')); //expect ["02", "20", "2020"]
// console.log(strSplit('string', " ")); //expect ["s", "t", "r", "i", "n", "g"]


// //Q6 Fibonacci
// const fibSeq = function(number){
//     if(number === 0){
//         return 0;
//     }
//     if(number === 1){
//         return 1;
//     }
//     return fibSeq(number - 1) + fibSeq(number - 2);
// }
// console.log(fibSeq(7));


// //Q7 Factorial
// const factorial = function(number){
//     if(number === 0){
//         return 1;
//     }
//     return number * factorial(number - 1);
// };
// console.log(factorial(5));


// //Q8,9 Maze

let maze = [
  [" ", " ", " ", "*", " ", " ", " "],
  ["*", "*", " ", "*", " ", "*", " "],
  [" ", " ", " ", " ", " ", " ", " "],
  [" ", "*", "*", "*", "*", "*", " "],
  [" ", " ", " ", " ", " ", " ", "e"]
];
const findWayOut = function(maze, position=0, column=0, row=0, path=[], direction='Start'){
    //base case - should equal to position in the nested array that returns 'e'
    if(row >= maze.length || column >= maze[0].length){
        return; 
    }   
    if(row < 0 || column < 0){
        return; 
    }
    path[position] = direction;
    position++;
    if(maze[row][column] === 'e'){
        console.log('Found path = ', path.join(''))
        return;
    }
    //recursion
    if(maze[row][column] === ' '){
        maze[row][column] = 'Start';
        findWayOut(maze, position, column-1, row, path, 'L');
        findWayOut(maze, position, column+1, row, path, 'R');
        findWayOut(maze, position, column, row-1, path, 'U');
        findWayOut(maze, position, column, row+1, path, 'D');
        maze[row][column] = ' ';
    }
    position--;
}
console.log(findWayOut(maze)); 

//Q10 Anagrams
const anagramList = function(wordList, pref, str){
    // let wordList = [];
    //basecase
    if(str.length === 1){
        wordList.push(pref + str);
        return wordList;
    }
    //recursive
    for(let i=0; i<str.length; i++){
        const prefix = str[i];
        const restOfWord = str.substring(0, i) + str.substring(i + 1);
        let anagrams = anagramList(wordList, pref+prefix, restOfWord);
        // for(let j=0; j<anagrams.length; j++){
        //     wordList.push(prefix + anagrams[j]);
        // }
    }
    return wordList;
};
console.log(anagramList([], '','east').join('\n'));
