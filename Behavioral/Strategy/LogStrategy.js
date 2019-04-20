const path = require('path');
const {appendFile} = require('fs');
class LogStrategy{
    static noDate(timestamp,message){
        console.log(message);
    }
    static toFile(timestamp,message){
        const filename = path.join(__dirname,'logs.txt');
        appendFile(filename,`${timestamp} - ${message}\n`,error=>{
            if(error){
                console.log(`error writing to file \n ${error}`);
            }
        })
    }
    static toConsole(timestamp,message){
        console.log(`${timestamp} - ${message}`)
    }
    static none(){

    }
}
module.exports = LogStrategy;