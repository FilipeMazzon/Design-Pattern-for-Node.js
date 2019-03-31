const GenericDAO = require('./GenericDAO');
class SomethingDAO extends GenericDAO{
    constructor(){
        super("something")
    }
}
module.exports = SomethingDAO;