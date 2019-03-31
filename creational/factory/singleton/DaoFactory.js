const somethingDAO = require('./SomethingDAO');
const userDAO = require('./UserDAO');

const DaoFactory = (type) => {
    if (type === "Something") {
        return somethingDAO;
    } else if (type === "User") {
        return userDAO;
    } else {
        return null;
    }
};

module.exports = DaoFactory;