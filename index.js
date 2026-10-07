let a = [1,2,3,4,5];
console.log(a);
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("1,2,3,4,5"));


let b = [1,2];
console.log(b);
function pallindrome(str) { 
    let reversed = str.split("").reverse().join("");
    return str === reversed;
}
console.log(pallindrome("1,2"));



let c = ["a", "b", "c", "d"];
console.log(c);
function capitalizeall(str) {
    return str.toUpperCase();
}
console.log(capitalizeall("a, b, c, d"));


let d = ["A", "B", "C", "D"];
console.log(d);
function lowercaseall(str) {
    return str.toLowerCase();
}   
console.log(lowercaseall("A, B, C, D"));


let e = [22]
let f = [33]
console.log(e);
console.log(f);
function sumArrays(arr1, arr2) {
    let sum = [];
    for (let i = 0; i < arr1.length; i++) {
        sum.push(arr1[i] + arr2[i]);
    }
    return sum;
}
console.log(sumArrays(e, f));