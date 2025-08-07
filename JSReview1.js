

// Variable Declaration
const firstName = "Afam";
const lastName = "Okonkwo";
const val = 34;
let isMale = true;
const fullName = firstName + " " + lastName;
console.log("My full name is "+fullName);

// Array Declaration
const arr = [
    'AfamO',
    42,
   function () { console.log("Hello World, welcome to my "+
    "JS Review for ReactNative Mobile App") },
    true,
    null,
    undefined,
    { name: "Afam Okonkwo", age: 42, isMale: true },
    [1, 2, 3, 4, 5]
];


// Control Statement:Loop Operation
for(let i = 0; i < 5;i++) {
    console.log("My index is "+i);
}

for ( const val in arr) console.log("My val is "+val);

arr.forEach((val) => console.log("My val is "+val))

arr[2]()
console.log(arr[3])


//Type Casting/Coercion
const x = 42;
//x= 32
const explicit = String(x);
const implicit = x + "" ;
console.log(" x type == "+typeof(x)+", explicit type =="+typeof(explicit)+
", implicit type== "+typeof(implicit));

// We can also compare two values using the  comparison operator
/**
console.log(a == b);
console.log(a <= b);
let test = (a === '42');
console.log(test);
test = (a == '42');
console.log("My final test::"+test);
 */
const a = 42;
const b = 22;

let testA= (a <=42)
let testB = (a ==='42')
console.log(testA && testB);
console.log(testA || testB);
console.log(!testA);

let age = 42;
let canDrive = age > 16 ? 'yes' : 'no';
console.log("Can I drive? "+canDrive);


let minimumAge = 18;

let myAge = 42;
if(myAge < minimumAge) {
    console.log("You are not eligible to vote");
}
else{
    console.log("You are eligible to vote");
}

//Switch Statement
let quartile = 25
 switch(quartile){
    case 25:
        console.log("You are in the first quartile");
        break;
    case 50:
        console.log("You are in the second quartile");
        break;
    case 75:
        console.log( "You are in the third quartile");
        break;
    default:
        console.log("You are in the fourth quartile");
        break;
 }

 
switch (quartile) {
    case quartile= 25:
        console.log("First Quartile");
        break;
    case quartile = 50:
        console.log("Second Quartile");
        break;
    case quartile = 75:
        console.log("Third Quartile");
        break;
    case 100:
        console.log("Fourth Quartile");
        break;
    default:
        console.log("Invalid Quartile");
}

// functions - by declaration
 function addTwoNumbers(a, b) {
    return a + b;
 }
 // function by expression
const addMytwoNumbers = function(a, b) {
    return a + b;
}
// call the function
console.log(addTwoNumbers(2, 3));

// Object literals
const myBiodata = {
    name: {
        firstName: "Afam",
        lastName: "Okonkwo"
    },
    languages: ["English", "Spanish", "Igbo"],
    address: {
        street: "123 Main Street",
        city: "Ikeja",
        state: "Lagos"
    },
    expertise: "Software Design and  Development",
    isMale: true,
    getFullName: function() {
        return this.name.firstName + " " + this.name.lastName;
    }
}
console.log(myBiodata['isMale']);
myBiodata.address.country = "Nigeria";
console.log(myBiodata.address.country);
console.log(myBiodata.name.firstName);
console.log(myBiodata['languages'][0]);
console.log(myBiodata.getFullName());

const multiplier = function() {
    if(arguments.length === 0) {
        throw new Error("No arguments passed");

    } else if(arguments.length === 1) {
        console.log("Only one argument passed, pass more than one argument");
        return arguments[0];
    } else {
    let result = 1;
    for(let i = 0; i < arguments.length; i++) {
        result *= arguments[i];
    }
    return result;
    }
    // return args.reduce((acc, val) => acc * val, 1);
}
const multiplierResult = multiplier(1); 
console.log(multiplierResult);

// Defining Object blueprint in JS
function Person(firstName, lastName, height, weight) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.height = height;
    this.weight = weight;
    this.getFullName = function() {return this.firstName+" "+this.lastName}
}
const afam = new Person("Afam", "Okonkwo", 3.5, 45);
const victor = new Person("Victor","Ikpati",1.6, 24);
console.log(afam.firstName)
console.log(`Afam's fullName is '${afam.getFullName()}' instance object is`)
console.log(victor.weight)
console.log(`Victor's's fullName is '${victor.getFullName()}' instance object is`)

for(let j = 0; j < 11; j++) {
    if (j === 7) continue;
    console.log("The current counter is "+j);
}

let n = 0;

while(n!=5) {
    
 let randomNumber = Math.random();
 console.log("RandomNum before multiplication with 10=="+randomNumber);

 randomNumber =  randomNumber * 10  // randomNumber*=10

 console.log("RandomNum before Floor =="+randomNumber);
 n = Math.floor(randomNumber);
 console.log("Generated Random Number=="+n);
}
/**
vehicles = ["Lorry","Bus","Volkswagen"]
console.log(vehicles)
vehicles.push("Trailer")
console.log(vehicles)
console.log("Popped Item=="+vehicles.pop())
console.log(vehicles)
console.log(vehicles.length) // prints 3
 */