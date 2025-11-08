// union 
// literalls
//type alias // custom type
function combine(num1, num2) {
    var result;
    if (typeof num1 === "number" && typeof num2 === "number") {
        result = num1 + num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
var sum = combine(10, 20);
var combined = combine("lucky", " bihar");
console.log("sum is", sum, "and name is", combined);
