const debug = require('debug');
const logger = debug('my-application');
const errorLogger = debug('my-application:error');
const function1Logger = debug('my-application:function1');
const function2Logger = debug('my-application:function2');

logger('Program started');

const throwError = () => {
  throw new Error('Example error');
};

try {
  throwError();
} catch (error) {
  errorLogger(error.message);
}

function function1() {
  function1Logger('function1() executing');
  setTimeout(function1, 500);
}

function1();

function function2() {
  function2Logger('function2() executing');
  setTimeout(function2, 500);
}

function2();
