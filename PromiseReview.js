
const makeCoffee = (coffeeType, callBack) => {
    console.log(`Making ${coffeeType} coffee...`);
    setTimeout(() => {
        callBack(`${coffeeType} coffee is ready!`)
    }, 1000); 
};
function makeCoffe(coffeeType) {
    const myPromise = new Promise((resolve, reject)=>{
        console.log(`Making ${coffeeType} coffee...`);
        setTimeout(()=>{
            reject(`${coffeeType} coffee is ready,But I am no longer interested in it!`)
        },1000)
        console.log("I can do other things while waiting..");
    });
    myPromise.then((result)=>console.log(result))
    .catch((errorMsg)=>console.error(errorMsg)); // executes if 'reject' is called
}
function prepareCoffe(coffeeType,isSuccess) {
    return new Promise((resolve, reject)=>{
        console.log(`Making ${coffeeType} coffee...`);
        setTimeout(()=>{
            if (isSuccess) {
                resolve(`${coffeeType} coffee is ready!`)
            } else {
                reject(`${coffeeType} coffee is ready,But I am no longer interested in it!`)
            }
        },1000)
        console.log("I can do other things while waiting..");
    });
    
}
const orderCoffee = async (coffeeType) => {
   const myCoffe =  await prepareCoffe(coffeeType, true);
   console.log(myCoffe.toUpperCase());
   await prepareCoffe(coffeeType, false)
   .catch((errorMsg)=>console.error(errorMsg)); // executes if 'reject' is called
}
//makeCoffe("Espresso1");
orderCoffee("Espresso"); 


/**


const myPromise1 = new Promise((resolve, reject) => {
    // Do some asynchronous coding
    setTimeout(()=>{
        const success = false;
        if (success) {
            let operationResult = 'Ciga Gufu';
            resolve(
                `The result is success and the operation result is successfull '${operationResult}'`
            );
        }
        else {
            const rejectCode = 404;
            const rejectMessage = `The result is failed and your operation result is ${rejectCode}`;
            reject(new Error(rejectMessage))

        }
        
    },2000)
    //if operation is successfull, call resolve with the result
    // if operation fails, calls reject with an error object.
});


myPromise1
.then((result)=>console.log(result))
.catch((error)=>console.error(error));

 
const myPromise = new Promise((resolve, reject) => {
    setTimeout(()=>{ 
    resolve("Timeout is over");//send out a success feedback with data using resolve 
    }, 1000) //set timeout for 1000ms i.e. 1second.
});
myPromise.then((result)=>console.log(result)) // prints 'Timeout is over' after 1 second
.catch((error)=>console.error(error)); // executes if 'reject' is called
*/

const promiseWithAnotherThenCall = () => {
    new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject("Timeout is over but I am upset...")
        },1000)
    })
    .then((data)=>console.log(data))
    .catch((error)=>console.error(error))
    .then(()=>console.log("This is always executed whether success or failure occured"))
}

const fetchApiData_Channing_Appraoch = (url) => {
    fetch(url)
    .then((response)=>response.json()) //convert returned data to json
    .then((data)=>console.log(`Data:name is ${data.name}, Email:${data.email} `))
    .catch((errorMsg)=> console.error(`Error fetching API. Error Msg:${errorMsg}`))
}  
fetchApiData_Channing_Appraoch
("https://jsonplaceholder.typicode.com/posts/1");//Get data for a user with id 1
promiseWithAnotherThenCall();
