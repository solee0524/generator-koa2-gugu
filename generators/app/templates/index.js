'use strict';

const Koa = require('koa');
const app = new Koa();
const xResponseTime = require('./middlewares/x-response-time');
const log4jsMiddleware = require('./middlewares/koa-log4js');
const bodyParser = require('koa-bodyparser');
const requestId = require('./middlewares/request-id');
const convert = require('koa-convert');
const cors = convert(require('koa-cors'));
const serve = convert(require('koa-static-server'));

app.use(cors());
app.use(serve({rootDir: 'apidoc', rootPath: '/doc'}));

app.use(xResponseTime);
app.use(log4jsMiddleware);
app.use(bodyParser());
app.use(requestId);

require('./routes')(app);

app.listen(process.env.PORT || 2017);
