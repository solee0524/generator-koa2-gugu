/**
 * index route
 */
'use strict';
const router = require('koa-router')();
const ctrls = require('../controllers');
const logger = require('../logger');
const redis = require('../db/redis').redis;
const _ = require('lodash');
const CONSTANTS = require('../const');
const filter = require('../middlewares/filter');

module.exports = function (app) {
  router.get('/', (ctx) => {
    ctx.body = 'Hello welcome to the <%- project_name %>';
  });
  router.get('/api/version', ctrls.version);

  app.use(router.middleware());
};
