require('./style.css');
const common = require('./test01');
const utils = require('./test02');

common.info('Hello world!' + utils.add(100, 200));
