let array =[]
//puch the Enter valu in array
function addNew(){
    let name=prompt("Enter the name");
    array.push(name);
    // console.log(array)
}

// remove the user input value from the array
function remove(){
    let Name = prompt("what name would you like to remove ??");
    let index = array.indexOf(Name);
    array.splice(index,1)
    // console.log(array);

}
function display(){
    console.log(array);
}
// app
let start = prompt("would you like to start the app : ?");
let request = "";
if(start === 'y'){
    request = prompt("what would you like to do add, remove, display : ?");
    if(request==="add"){
        addNew();
    }
    else if(request === "remove"){
        remove();
    }
    else if(request === "display"){
        display()
    }
else{
    alert("thank you for the test")
}
}
