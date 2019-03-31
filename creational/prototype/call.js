const SomeFunction = require('./function');

let someFunction = new SomeFunction("mazzon");

someFunction.sayHello();
someFunction.sayHelloToPerson();

const someClass = require('./class');
let alex = someClass.clone();
alex.name = 'Alex Banks';
alex.addItemToList('slingshot');

let eve = someClass.clone();
eve.name = 'Eve Porcello';
eve.addItemToList('reading light');

console.log( `${alex.name}: ${alex.shoppingList}` );
console.log( `${eve.name}: ${eve.shoppingList}` );