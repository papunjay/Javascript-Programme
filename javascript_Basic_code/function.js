function hello(name){
    console.log("hello world: "+name);
}

function addNum(num1,num2){
    console.log(num1+num2); 

}   

function helloSomeOne(name="shreya"){
    console.log("hello "+name);
}

function formal(name="papunjay",title="vspr"){
    return name+ " "+title
}
local vaeriable 
 function returnData(intNum){
    let result= intNum*10;
    return result;
 }

global scope
let v = "Globel v"
let stuff ="golbel stuff"
function fun(stuff){
    console.log(v);
    stuff= "print new stuff";
    console.log(stuff);
}
fun();
console.log(stuff);