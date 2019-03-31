const {writeFile} = require('fs');
class LocalStorage {
    constructor(){
        this.items ={};
    }
    get length (){
        return Object.keys(this.items).length;
    }
    getItem(key){
        return this.items[key];
    }
    setItem(key){
        this.items[key]= value;
        writeFile
    }
}

module.exports = LocalStorage;