"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

/**
    Copyright 2021, Zuri plugin reminder.
    All rights reserved.
    Written By: King Etiosasere, 30th August 2021
* */
_dotenv.default.config();

const env = {
  PORT: process.env.PORT,
  ENVIRONMENT: {
    development: process.env.NODE_ENV === 'development',
    test: process.env.NODE_ENV === 'test',
    staging: process.env.NODE_ENV === 'staging',
    production: process.env.NODE_ENV === 'production'
  },
  AUTH: {
    JWT_SECRET: process.env.JWT_SECRET
  },
  MONGODB: {
    url: process.env.MONGO_DB_URL
  },
  MAIL: {
    email: process.env.SSN_FOR_ORGS_MAIL
  }
};
var _default = env;
exports.default = _default;
//# sourceMappingURL=index.js.map