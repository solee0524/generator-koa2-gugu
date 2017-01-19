'use strict';

/**
 * index controller
 */


var Controllers = {};

Controllers.version = async(ctx) => {
  ctx.body = process.env.VERSION;
};

module.exports = Controllers;
