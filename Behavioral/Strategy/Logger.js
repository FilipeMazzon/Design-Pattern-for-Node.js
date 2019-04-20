const logStrategyInit =require('./config.json').logs.strategy;
const LogStrategy = require('./LogStrategy');
class Logger {
    constructor() {
        this.logs = [];
        this.strategy = LogStrategy[logStrategyInit];
    }

    get count() {
        return this.logs.length
    }
    changeStrategy(newStrategy){
        this.strategy = LogStrategy[newStrategy];
    }
    log(message) {
        const timestamp = new Date().toISOString();
        this.logs.push({ message, timestamp });
        if(typeof this.strategy !== "function"){
            this.strategy = LogStrategy["none"];
        }
        this.strategy(timestamp,message);
    }

}

module.exports = new Logger();
