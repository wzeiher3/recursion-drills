'use strict';

function countSheep(num){
   if(num === 0)
        return console.log("All sheep jumped over the fence");

    console.log(`${num}: Another sheep jumps over the fence`)
    countSheep(num -= 1);
}

function powerCalculator(base, exp){
    if(exp === 1)
        return console.log(base);
    if(exp < 0)
        return console.log('Exponent must be greater than zero');

    powerCalculator(base*base, exp -= 1);
}

countSheep(3);
powerCalculator(10, 3);