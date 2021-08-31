"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _setTimeout2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js/set-timeout"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _environment = _interopRequireDefault(require("../../config/environment"));

/**
    Copyright 2021, Zuri plugin reminder.
    All rights reserved.
    Written By: King Etiosasere, 30th August 2021
* */
let isConnected;
let db;
var _default = {
  async start() {
    if (isConnected) return db;

    try {
      db = await _mongoose.default.connect(_environment.default.MONGODB.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      isConnected = db.connections[0].readyState;
      return db;
    } catch (err) {
      console.log('MongoDB connection failed, retrying in 5 secs', err);
      (0, _setTimeout2.default)(this.start, 5000);
      return err;
    }
  }

};
exports.default = _default;
//# sourceMappingURL=index.js.map