let firstName=prompt("Enter the first name");
let lastName=prompt("Enter the last name");
let age = prompt("Enter your age");
let height = prompt("Enter the height");
let petName = prompt("Enter the pet name");

let lastChar = petName.charAt(petName.length-1)
if((firstName[0]==lastName[0]) && (age>=20 && age<=30) && height<=70 && lastChar == "y")
{
    console.log("Welcome Comrade! you've passed the spy Test");
}
else
{
    console.log("sorry you are not pass the spy test");
}