"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((str) => str.trim());

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  // arrayOfCarBrands
  let arrayOfCarBrands = JSON.parse(readLine().replace(/'/g, '"'));

  /*
   *Write your code here and log the output.
   */
   let indianBrands=[];
   for(let i=0;i<arrayOfCarBrands.length;i++){
       if(arrayOfCarBrands[i].country==="India"){
           indianBrands.push(arrayOfCarBrands[i].name);
       }
   }
   console.log(indianBrands);
}
