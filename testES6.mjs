//import logger from "./tools.mjs";
import myLogger from "./tools.mjs";
import { MyMath } from "./tools.mjs";

import logger, {appName,dummyFunction} from "./tools.mjs";
import { myDummyFunction } from "./tools.mjs";
import { Person, makeCoffee, fetchApiData } from "./tools.mjs";

const addresses =["Caleb","Victor", "Chima", "Chidiogo", "Paula", "Deborah","Alheri"];
addresses.map((addressee)=> {
    let message = `Dear ${addressee},
    It is my pleasure to inform you that your CA1 result is out.`;
    logger(message);
    logger("=========================================");
});


let person1 = new Person("Afam","Okonkwo",1.7,23);
let person2 = new Person("Victor","Ikpati",1.2,13);
//Now let's update the name and use our new getter

person1.firstName = "paula";
person2.firstName = "chima";
logger(`Person1 is ${person1.getfirstName()} 
whose height is ${person1.height}. 
Person2 is ${person2.getfirstName()} 
whose height is ${person2.height}`);

// Adding new property to the instantiated object 
// ONLY(you can't add to the class blue print)
person1.middleName = "chidiogo";
logger(`Person1 middle name is ${person1.middleName}`);



logger(`Person1 is ${person1.firstName} 
whose height is ${person1.height}. 
Person2 is ${person2.firstName} 
whose height is ${person2.height}`);


logger("Welcome to ES 6 Modularity Feature");
logger('Welcome! We are now having fun with modularity');
logger(`Welcome! The application name is ${appName}  and their is a dummy function that returns ${dummyFunction()} `);


myLogger("Welcome to my new logger ES 6 Modularity Feature with a new dummy function "+myDummyFunction());



logger(MyMath.sqrt(100))
logger(MyMath.pow(3,3))

makeCoffee("Cappuccino", (message) => {
    console.log(message); // called when coffee is ready
});
console.log("I can do other things while waiting for the coffee to be ready");

//Call the Fetch API
const callFetchAPI = async (url) => {
    try {
        const data = fetchApiData(url);
        logger(data)
    } catch(error)
    {
        logger(error)
    }
}
callFetchAPI("https://jsonplaceholder.typicode.com/posts/1");