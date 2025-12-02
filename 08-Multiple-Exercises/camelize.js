/**
 * @description
 * @author Marcelo
 * @date 30/11/2025
 * @param {string} wordToCamelize
 * @return {*}  
 */
function camelize(wordToCamelize){
    if(wordToCamelize.length>1){
        return wordToCamelize.split("-").map((word, i) => i ? word[0].toUpperCase()+word.slice(1) : word).join("");
    }else if(wordToCamelize.length == 1 && wordToCamelize.includes("-")){
       return wordToCamelize.split("-").map((word, i) => i ? word[0].toUpperCase()+word.slice(1) : word).join("");
    }
    else{
        return "not a worthy word"
    }
}
console.log("Test 1 : ",camelize("this-is-a-test"))
console.log("Test 1 : ",camelize(" "))
console.log("Test 1 : ",camelize("-webkit-something-else"))
