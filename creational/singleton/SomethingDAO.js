const GenericDAO = require('./GenericDAO');


const SomethingDAO = function(){

};
SomethingDAO.prototype = new GenericDAO("something");

module.exports = new SomethingDAO;