'use strict';

function countSheep(num) {
    if (num === 0)
        return console.log("All sheep jumped over the fence");

    console.log(`${num}: Another sheep jumps over the fence`)
    countSheep(num -= 1);
}

function powerCalculator(base, exp) {

    if (exp === 1)
        return base;
    if (exp < 0)
        return console.log('Exponent must be greater than zero');

    return base * powerCalculator(base, exp - 1);
}

function reverseString(thisString) {
    if (thisString.length === 1) {
        return thisString[thisString.length - 1]
    } else {
        return thisString[thisString.length - 1] + reverseString(thisString.slice(0, -1))
    }

    // thisString.slice(thisString[thisString.length -1])
}

function triangle(num) {

    if (num === 0)
        return num;

    return num + triangle(num - 1);
}

function split(string, char, result = [""]) {
    if (string.length === 0) {
        return result
    }
    if (string[0] === char) {
        result.push("")
    } else {
        result[result.length - 1] += string[0]
    }
    return split(string.slice(1), char, result);
}

// Write a recursive function that prints the 
// Fibonacci sequence of a given number
//1. find what two numbers add together to get to the next number
//2. Start with 0 and 1
//3. Add first number with second number, then slice first number, sum becomes second number [0, 1] becomes [1, 1], then [1, 2], then [2, 3], [3, 5]...
//4. repeat this sequence n amount of times and return the last number
function fibonacci2(num) {
    if (num === 0)
        return "num can't be zero"
    if (num === 1)
        return [0, 1]

    let arr = fibonacci2(num - 1)
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return arr;

    // fib = str[n-1] + str[n-2]
}

function fibonacci(n) {
    if (n < 1) {
        return 0
    } else if (n <= 2) {
        return 1
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2)
    }
}

// function fibonacci(n) {
//     return n < 1 ? 0
//         : n <= 2 ? 1
//         : fibonacci(n - 1) + fibonacci(n - 2);
// }

function factorial(num) {
    if (num === 1)
        return num;

    return num * factorial(num - 1);
}

// maze[row][column]

let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];


function myMaze(maze, col, row, direction = 's', position = 0, path) {

    if (col < 0 || row < 0) {
        return
    }
    if (col >= maze[0].length || row >= maze.length) {
        return
    }
    path[position] = direction
    position++
    if (maze[row][col] === 'e') {
        console.log(path)
        return
    }
    if (maze[row][col] === ' ') {
        maze[row][col] = 's'
        myMaze(maze, col - 1, row, 'l', position, path)
        myMaze(maze, col, row - 1, 'u', position, path)
        myMaze(maze, col + 1, row, 'r', position, path)
        myMaze(maze, col, row + 1, 'd', position, path)
        maze[row][col]= ' '
    }
    position--
}


function anagram(prefix, str){
    if(str.length <= 1)
        console.log(`The anagram is ${prefix}${str}`)
    else {
        for(let i =0; i < str.length; i++){
            let currentLetter = str.substring(i, i+1);
            let previousLetters = str.substring(0, i);
            let afterLetters = str.substring(i+1)
            anagram(prefix+currentLetter, previousLetters+afterLetters);
        }
    }
}

var organization = {
	"Zuckerberg": {		
		"Schroepfer": {
			"Bosworth": {
				"Steve":{},
				"Kyle":{},
				"Andra":{}
			},
			"Zhao": {
				"Richie":{},
				"Sofia":{},
				"Jen":{}
			},
			"Badros": {
				"John":{},
				"Mike":{},
				"Pat":{}
			},
			"Parikh": {
				"Zach":{},
				"Ryan":{},
				"Tes":{}
			}
		},
		"Schrage": {
			"VanDyck": {
				"Sabrina":{},
				"Michelle":{},
				"Josh":{}
			},
			"Swain": {
				"Blanch":{},
				"Tom":{},
				"Joe":{}
			},
			"Frankovsky": {
				"Jasee":{},
				"Brian":{},
				"Margaret":{}
			}
		},
		"Sandberg": {
			"Goler": {
				"Eddie":{},
				"Julie":{},
				"Annie":{}
			},
			"Hernandez": {
				"Rowi":{},
				"Inga":{},
				"Morgan":{}
			},
			"Moissinac": {
				"Amy":{},
				"Chuck":{},
				"Vinni":{}
			},
			"Kelley": {
				"Eric":{},
				"Ana":{},
				"Wes":{}
			}
}}};

function traverse(node, indent=0){
    for(var key in node){
        console.log(" ".repeat(indent), key);
        traverse(node[key], indent + 4)
    }
}

function generateBinary(n, i=0, toAdd='', s='') {
    s += toAdd;
    if (i === n) {
        console.log(s);
        return;
    }

    generateBinary(n, i+1, 0, s);
    generateBinary(n, i+1, 1, s);
}

console.log(generateBinary(3))
//countSheep(3);
//console.log(powerCalculator(2, 4));
//console.log(reverseString('Josh'));
// console.log(triangle(6));
// console.log(split('02/20/2020', '/'))
// console.log("1",fibonacci(6))
// console.log("2",fibonacci2(6));
// console.log(factorial(5));
// myMaze(maze,0,0,'s',0,[])
// anagram(' ', 'thinkful');
//console.log(traverse(organization))
