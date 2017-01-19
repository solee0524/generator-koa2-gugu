/**
 * Created by solee on 1/12/16.
 */
'use strict';

const Promise = require('bluebird');
const redis = require('promise-redis')(function (resolver) {
  return new Promise(resolver);
});

var client = redis.createClient(process.env.REDIS_PORT, process.env.REDIS_HOST, {no_ready_check: true});
client.auth(process.env.REDIS_PASS);

exports.module = client;
