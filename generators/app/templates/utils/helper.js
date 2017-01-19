/**
 * utilities
 */
'use strict';
const crypto = require('crypto');
const moment = require('moment');
const CONSTANTS = require('../const');
const jwt = require('jsonwebtoken');
const models = require('../models');
const tv4 = require('tv4');
const fs = require('fs');

exports.throwError = function (json) {
  throw new Error(JSON.stringify(json));
};

exports.pagination = function (page, perPage) {
  var page = page || 1;
  var perPage = perPage || CONSTANTS.PAGINATION.DEFUALT_PER_PAGE;

  page = page - 1 > 0
    ? page - 1
    : 0;

  return {
    offset: page * perPage,
    limit: perPage
  };
};

exports.currentTimestamp = function () {
  return moment().format('X');
};

exports.currentTimestampWithMS = function () {
  return moment().format('x');
};

exports.md5 = function (str) {
  return crypto.createHash('md5')
    .update(str, 'utf8')
    .digest('hex');
};

var padLeft = exports.padLeft = function (str, len, ch) {
  str = String(str);
  ch = typeof ch !== 'undefined' ? (ch + '') : '0';

  var i = -1;
  len = len - str.length;
  while (++i < len) {
    str = ch + str;
  }

  return str;
};

exports.stringify = function (data) {
  if (typeof data === 'string') {
    return data;
  }

  if (typeof data === 'object') {
    return JSON.stringify(data);
  }

  return '';
};

exports.schemaValidateTv4 = function (json, schema) {
  return tv4.validateResult(json, schema);
};

exports.isFileExist = function (path) {
  return new Promise(function (resolve) {
    fs.access(path, function (err) {
      if (!err) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
};
