let test = "testing css and javascript";
console.log(test);
const this_wont_change = test;
console.log(this_wont_change);
test = "oops it changed"
console.log(this_wont_change, test);