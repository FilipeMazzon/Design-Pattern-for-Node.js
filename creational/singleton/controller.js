const somethingDAO = require('./SomethingDAO');

const getSomething = async () => {
    try {
        let result = await somethingDAO.findAll();
        console.log(result);
        //res.status(200).send(result);
    } catch (e) {
        console.log(e);
        //res.status(400).send(e);
    }
};
getSomething();