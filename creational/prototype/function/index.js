function MyFunction(person) {
    this._person = person;
}

const sayHello = () => {
    console.log("hello world");
};
const sayHelloToPerson = function () {
    console.log(`hello ${this._person}`);
};

MyFunction.prototype = {
    sayHello,
    sayHelloToPerson
};

module.exports = MyFunction;