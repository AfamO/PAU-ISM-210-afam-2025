const genericFunction = () => {
    let languages = ['Python','JavaScript', 'Java', 'C#', 'C++'] //declare an array of elements 
    let [firstLang, secondLang, ...otherLangs] = languages // assign first element to firstLang, second element to secondLang
    return `First Language is ${firstLang} and Second Language is ${secondLang}, other Languages are: ${otherLangs}`
};

class CreditCard {
    constructor(cardNumber, cardHolderName, expiryDate) {
        this.cardNumber = cardNumber;
    }
    processPayment(amount) {
        console.log(`Processing payment of ${amount} using Credit Card, CardNumber:${this.cardNumber}`);
    }
}
class PayPal {
    constructor(email) {
        this.email = email;
    }
    processPayment(amount) {
        console.log(`Processed payment of ${amount} using PayPal.`);
    }
}
class BitCoin {
    constructor(id) {
        this.id = id;
    }
    processPayment(amount) {
        console.log(`Processed payment of ${amount} using Bitcoin`)
    }
}

class PaymentProcessor {
    constructor(strategy){
        this.strategy = strategy
    }
    setStrategy(strategy){
        this.strategy = strategy;
    }
    processPayment(amount) {
        this.strategy.processPayment(amount)
    }
}
const creditCard = new CreditCard("12345678","Ciga Gufu");

const paymentProcessor = new PaymentProcessor();
paymentProcessor.setStrategy(creditCard);
paymentProcessor.processPayment(200);
const payPal = new PayPal("cigagugu@gmail.com");
paymentProcessor.setStrategy(payPal);
paymentProcessor.processPayment(300);

console.log(true+true)
