// ES6 approach to class and object creations
export class  Person {
    constructor(firstName, lastName, height, weight) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.height = height;
        this.weight = weight;
    }
    toUpperCase(str) {
        return str.toUpperCase();
    }
    getfirstName() {
        return this.toUpperCase(this.firstName);
    }
}
//export class CustomMath
export class MyMath {
    static sqrt(x) {
        return Math.sqrt(x);
    }
    static pow(a,b) {
        return Math.pow(a,b)
    }
}


const myLogger = (output) => console.log(output);

var log  = function(output) {
    console.log(output);
}
export const appName = 'ES6 Review';

export const dummyFunction = function() {
    return "I am simply a dummy function";
}
export const myDummyFunction = () => "I am simply a dummy function";

export const makeCoffee = (coffeeType, callBack) => {
    console.log(`Making ${coffeeType} coffee...`);
    setTimeout(() => {
        callBack(`${coffeeType} coffee is ready!`)
    }, 10000);
};

export const fetchApiData = async (url) => {
    return new Promise( async (resolve, reject) => {
        const response = await fetch(url)
        
        if (!response.ok) {
            reject(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        resolve(data)
    });   
}
 

export default log;