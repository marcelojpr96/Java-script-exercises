console.log("hi");
let something = "shtis";

/**
 * @description
 * @author Marcelo
 * @date 25/11/2025
 * @param {Number} nr
 * @return {*}  
 */
function add7(nr){
    return parseInt(nr)+7;
}
/**
 *
 *
 * @param {number} nr
 * @param {Number} nr2
 * @return {int} 
 */
function multiply(nr, nr2){
    
    return parseInt(nr * nr2);
}
/**
 * Capitalizes a word
 * @param {string} word - The input word to capitalize
 * @returns {string}
 */
function capitalize(word){
    return word.slice(0,1).toUpperCase()+word.slice(1).toLowerCase();
    
}

function lastletter(word){
    return word.slice(-1);
}
console.log(typeof(add7(8)), add7(8), multiply(2,2), capitalize("this is awesASDome"), lastletter("this is a string"));