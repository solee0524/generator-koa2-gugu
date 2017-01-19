/**
 * koa log4js middlewares
 */
const moment = require('moment');
const logger = require('../logger');

module.exports = async(ctx, next) => {
  var nodeReq = ctx.req;
  var start = new Date();

  await next();

  var ms = new Date() - start;
  logger.info(
    '%s %s -- %s %s %s HTTP/%s, %s %s %sms',
    moment().format('YYYY-MM-DD HH:mm:ss.SSS'),
    ctx.get('X-Real-IP') || ctx.ip || '',
    ctx.method,
    ctx.url,
    ctx.status,
    nodeReq.httpVersion,
    ctx.length || null,
    ctx.header['user-agent'],
    ms
  );
};
