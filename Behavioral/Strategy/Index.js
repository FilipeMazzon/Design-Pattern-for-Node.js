var logger = require('./Logger');

logger.log('Hello World');
logger.log('Hi World');
logger.log('Yo World');
logger.changeStrategy('toFile');
logger.log('helo in filee');
