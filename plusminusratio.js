'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    const n = arr.length;
    let countn = 0;
    let countp = 0;
    let zero =0 ;
    for(let i = 0 ; i<n ; i++){
        if(arr[i]<0){
            countn++;
        }
        else if(arr[i]>0){
            countp++;
        }
        else if(arr[i]===0){
            zero += 1;
        }
    }
    console.log((countp / n).toFixed(6));
    console.log((countn / n).toFixed(6));
    console.log((zero / n).toFixed(6));
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
