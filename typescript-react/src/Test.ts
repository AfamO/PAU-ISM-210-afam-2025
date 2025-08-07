console.log("Welcome to my Typescript development")
let name: string = "Stephen"
name = "agnes";
console.log(`Hello ${name}`)
console.log(name.toUpperCase());

let myNumbers:number[] = [1,2,3,4]
myNumbers.push(5);
console.log(myNumbers.length)

let booleanArray: Array<boolean> = [true,false,true]
console.log(booleanArray.length)

let myNums: Array<number> = [1, 3, 5];
console.log("Every values=="+myNums.every((val)=>val % 2==1))

let message = "I am a Typescript Developer";
//message = 12;
console.log(message)
let count = 10.2
//count = "2"
console.log(count + 3);


 interface PaymentType {
    processPayment(amount:number):void
 }

class CreditCard implements PaymentType {
    private cardNumber: string;
    private cardHolderName: string;

    constructor(cardNumber:string, cardHolderName:string, expiryDate:string = "12/25") {
        this.cardNumber = cardNumber;
        this.cardHolderName = cardHolderName;
    }
    processPayment(amount:number) {
        console.log(`Processing payment of ${amount} using Credit Card, CardNumber:${this.cardNumber}`);
    }
}
class PayPal implements PaymentType {
    private email: string;
    constructor(email:string) {
        this.email = email;
    }
    processPayment(amount:number) {
        console.log(`The processed payment of ${amount} using PayPal.`);
    }
}
class BitCoin implements PaymentType {
    private id: string;
    constructor(id:string) {
        this.id = id;
    }
    processPayment(amount:number) {
        console.log(`Processed payment of ${amount} using Bitcoin`)
    }
}

class PaymentProcessor {

    private strategy:PaymentType
    constructor(strategy:PaymentType = new CreditCard("00000000", "Default User")) {
        this.strategy = strategy
    }
    setStrategy(strategy:PaymentType) :void {
        this.strategy = strategy;
    }
    processPayment(amount:number) :Promise<string> {
        // this promise-base function mimcks the time it takes to process payment
        return new Promise<string>((resolve, reject)=>{
            if (amount <=0){
                reject("OOps!, you can't process zero or negative values");
            }
            setTimeout(()=>{
                this.strategy.processPayment(amount);
                resolve(`Processed payment of ${amount} using ${JSON.stringify(this.strategy)}`)
            },1000)
        });
    }
}
const creditCard = new CreditCard("12345678","Ciga Gufu");
const paymentProcessor = new PaymentProcessor();
paymentProcessor.setStrategy(creditCard);
paymentProcessor.processPayment(200);
const payPal = new PayPal("cigagugu@gmail.com");
paymentProcessor.setStrategy(payPal);
paymentProcessor.processPayment(-300)
    .then((result:any)=>console.log("Promise Resolved:\n"+result))
    .catch((errorMsg:any)=>console.log("Promise Rejected:\n"+errorMsg))
