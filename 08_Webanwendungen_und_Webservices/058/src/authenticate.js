const auth = require('basic-auth');

// Dummy Authentifizierung
const authenticate = (username, password) =>
  username === 'admin' && password === 'password';

const authenticationMiddleware = async (request, response, next) => {
  const credentials = auth(request);
  if (credentials === undefined) {
    response.statusCode = 401;
    response.setHeader('WWW-Authenticate', 'Basic');
    response.end('No credentials');
  } else {
    const authenticated = await authenticate(
      credentials.name,
      credentials.pass
    );
    if (!authenticated) {
      response.statusCode = 401;
      response.end('Wrong credentials');
    } else {
      next();
    }
  }
};

module.exports = authenticationMiddleware;
