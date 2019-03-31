const DaoFactory = require('./DaoFactory');
const getAllOfAll = async () => {
    try {
        const something = DaoFactory("Something");
        let result;
        result = await something.findAll();
        console.log(`result of Something: ${result}`);
        console.log(result);
        const user = DaoFactory("User");
        result = await user.findAll();
        console.log(`result of User: ${result}`);
        console.log(result);
    } catch (e) {
        console.log(e);
    }
};
getAllOfAll();
