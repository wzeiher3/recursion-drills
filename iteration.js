'use strict';

//O(n)
function countSheep(num) {
    for (let i = num; i > 0; i -= 1) {
        console.log(`${i}: Another sheep jumps over the fence`)
    }
    console.log("All sheep jumped over the fence")

}

//O(n)
function powerCalculator(base, exp) {
    let total = base;
    for (let i = 0; i < exp - 1; i++) {
        total *= base
    }
    console.log(total);
}

//O(n)
function reverseString(str) {
    let newStr = ''
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }

    console.log(newStr);
}

//O(n)
function triangle(num) {
    let total = 0;
    for (let i = num; i >= 0; i--) {
        total += i;
    }
    console.log(total)
}

//O(n)
function split(string, char) {
    let res = [];
    let temp = '';
    for(let i = 0; i < string.length; i++) {
        if(string[i] === char) {
            res.push(temp)
            temp = '';
        } else {
            temp += string[i];
        }
    }
    res.push(temp)
    return res
}

//O(n)
function fibonacci(num) {
    let total = 1;
    let previous = 1;
    for(let i = 2; i < num; i++) {
        let temp = total + previous
        previous = total
        total = temp
    }
    return total;
}

//O(n)
function factorial(num) {
    let total = 1;
    for (let i = num; i > 0; i--) {
        total *= i;

    }
    console.log(total)
}






//console.log(generateBinary(3))
// countSheep(3);
// console.log(powerCalculator(2, 4));
//console.log(reverseString('Josh'));
// console.log(triangle(6));
// console.log(split('02/20/2020', '/'))
// console.log(fibonacci(7))
// console.log("2",fibonacci2(6));
console.log(factorial(10));
//myMaze(maze,0,0,'s',0,[])
// anagram(' ', 'thinkful');
//console.log(traverse(organization))
//generateBinary(5);