const firstName = "Afam";
const lastName = "Okonkwo";
let age = 42;
let isMarried = false;
const fullName = firstName + " "+lastName;
console.log("My full name is "+fullName);

//
const arr = [
    'AfamO',
    32,
    function () {console.log("Hello World, welcome to my JS Review for ReactNative Mobile App")},
    true
]
arr[2]();
console.log(arr[0]);
const x = 42;
const explicit = String(x);
const implicit = x + "";
console.log("Explicit Type for x ="+typeof(explicit) +" Type of x ="+typeof(x));
console.log("Implicit Type for x ="+typeof(implicit));

const a = 42;
const b = 22;
console.log(a==b);
console.log(a<=b);
const test = (a ==='42');
console.log(test);

let testA = (a <= 42)
let testB = (a ==='42')
console.log(testA && testB);
console.log(testA || testB);
console.log(!testA);

let userAge = 12;
let canDrive = userAge > 16 ? 'Yes' : 'No';
console.log(canDrive);
let minimumAge = 18;
if (userAge >= minimumAge) {
    console.log("You are eligible to vote");
} else {
    console.log("You are not eligible to vote");
}
let quartile = 25;
switch (quartile) {
    case 25:
        console.log("You are in the first quartile");
        break;
    case 50:
        console.log("You are in the second quartile");
        break;
    case 75:
        console.log("You are in the third quartile");
        break;
    case 100:
        console.log("You are in the fourth quartile");
        break;
    default:
        console.log("You are not in any quartile");
        break;
}

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
for ( val in arr){
    console.log(arr[val]);  
}
 function addTwoNumbers(a,b){
     return a+b;
 }
 const  myAddTwoNumbers = function(a,b){
     return a+b;
 }
 console.log(addTwoNumbers(6,3));

 function linearSearch(arr, item){
    for (val in arr) {
        if (val == item) {
            return val;
        }
    }
    return "The item "+item+" is not in the array";
 }
 console.log(linearSearch([1,2,3,4,5,6,7,8,9,10], 11));

 const courseTopic = "ES 6 Review"
 const courseCode = "PAU-ISM 210"

 console.log(`Hi, welcome to ${courseTopic}, you enrolled for ${courseCode}`)

 const sum = (a, b) => a + b;
 const log = (output) => console.log(output);
 let result = sum(2,5) // gives 7
 log("My sum function result is::"+result); //My sum function result is::7

 
 function Person(firstName, lastName, age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;

    this.getFullName = function() {return (this.firstName +" "+ this.lastName)}
 }
 let person1 = new Person("Caleb","Ita", 16, "male");
 let person2 = new Person("Dara","Unknown", 17, "female");
 console.log(person1.age);
 console.log(person2.gender)
 console.log(person1.getFullName())
 
 /**
  * This code demonstrates how callsatck, web APIs, and event loop work in JavaScript.
  * The console will print 'A', then 'C', and finally 'B' after 1 second.
  * This is because the setTimeout function which is asynchronous will go to Web API, 
  * finally the accomapnying 'callback' function will go to Callback Queue. When even loop checks the call stack and finds it empty,
  * It will then push the callback from Callback Queue to Call Stack for execution.
  * The event loop will handle the callback after the call stack is empty.
  */

 console.log('A'); 
 setTimeout(()=>{
        console.log('B');
 },1000)
 console.log('C');