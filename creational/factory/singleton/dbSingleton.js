const MongoClient = require('mongodb').MongoClient;
const {user, password, dbName} = require('./config/info.json');
const uri = `mongodb+srv://${user}:${password}@cluster0-6zlfo.mongodb.net/${dbName}?retryWrites=true`;
class Database {
    constructor() {
        this.db = null
    }

    get() {
        return new Promise(async (resolve, reject) => {
            try {
                //check if already have the connection;
                if (this.db !== null) {
                    resolve(this.db);
                } else {
                    //if don't have try to connect.
                    this.db = await this.connect();
                    resolve(this.db);
                }
            } catch (e) {
                reject(e);
            }
        });
    }

    async connect() {
        return new Promise(async (resolve, reject) => {
            try {
                //generate the client
                let client = MongoClient(uri,{ "useNewUrlParser": true });
                //try to connect;
                let _db = await client.connect();
                //set dbName, if in you application change 2 dbs
                // please erase this line and do in your models (my GenericDAO will not work)
                _db = _db.db(dbName);
                console.log(`connected in dbname: ${dbName}`);
                resolve(_db);
            } catch (e) {
                reject(e);
            }
        });
    }

    disconnect() {
        if (this.db) {
            this.db.close();
        }
    }
}
//THIS IS WHY THIS CLASS IS A SINGLETON, they already import one object to be global.
module.exports = new Database;