"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _environment = _interopRequireDefault(require("./config/environment"));

var _server = _interopRequireDefault(require("./shared/http/server"));

var _connection = _interopRequireDefault(require("./shared/connection"));

/**
    Copyright 2021, Zuri plugin reminder.
    All rights reserved.
    Written By: King Etiosasere, 30th August 2021
* */
const start = async () => {
  try {
    console.log('Test log');
    await _connection.default.start();

    _server.default.listen(_environment.default.PORT, () => console.log('Server is up and running'));
  } catch (error) {
    console.log('error', error);
    process.exit(0);
  }
};

start();
//# sourceMappingURL=index.js.map