
// let employee = {
//     name: "papunjay kumar",
//     job:"developer",
//     age:25,
//     nameLength:function(){
//         console.log(this.name.length);
//     }
// }



// let employee = {
//     name: "papunjay kumar",
//     job:"developer",
//     age:25,
//     fun1:function(){
//         alert("employee name is  "+this.name+",job of employee"+this.job+",age is "+this.age);
//     }
// }

let employee = {
    name : "papunjay kumar",
    job : "programmer",
    age: 25,
    lastName:function(){
        console.log(this.name.split(" ")[1]);
    }
}

