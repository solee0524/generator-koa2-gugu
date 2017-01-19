/**
 * Created by solee on 01/18/17.
 */
'use strict';

const helper = require('../utils/helper');
const logger = require('../logger');
const _ = require('lodash');

module.exports = async(ctx, next) => {
  var requestId = helper.md5(helper.stringify(this.request) + helper.currentTimestamp());
  logger.info('Request ID: ', requestId);

  await next();

  if (ctx.body && typeof ctx.body === 'object') {
    let tmpBody = _.clone(ctx.body);
    tmpBody.request_id = requestId;
    return ctx.body = tmpBody;
  }
};
