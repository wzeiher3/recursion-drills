'use strict';

//O(n)
function countSheep(num) {
    for (let i = num; i > 0; i -= 1) {
        console.log(`${i}: Another sheep jumps over the fence`)
    }
    console.log("All sheep jumped over the fence")

}

function powerCalculator(base, exp) {
    let total = base;
    for (let i = 0; i < exp - 1; i++) {
        total *= base
    }
        console.log(total);
}



//console.log(generateBinary(3))
// countSheep(3);
// console.log(powerCalculator(2, 4));
//console.log(reverseString('Josh'));
// console.log(triangle(6));
// console.log(split('02/20/2020', '/'))
// console.log("1",fibonacci(6))
// console.log("2",fibonacci2(6));
// console.log(factorial(5));
//myMaze(maze,0,0,'s',0,[])
// anagram(' ', 'thinkful');
//console.log(traverse(organization))
//generateBinary(5);