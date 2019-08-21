'use strict';

const express = require('express');
const proxy = require('express-http-proxy');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

app.use('/api/v1.0/users', proxy(process.env.URL_USERS_SERVICE));
app.use('/api/v1.0/blogs', proxy(process.env.URL_BLOGS_SERVICE));

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
