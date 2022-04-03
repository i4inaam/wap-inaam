
function sum(numArr){
let res = numArr.filter(n => n > 20).reduce((a,b) => a + b);
document.getElementById("q1").innerHTML= "Input is: ["+ numArr + "] " + " <br> Output is: " + res;
}
let getNewArray = function (names){
    let res2 = names.filter(s => s.length > 4 && s.includes('a'));
    document.getElementById("q2").innerHTML="Input is: ["+ names + "] " + " <br> Output is: [" + res2 + "]";
}