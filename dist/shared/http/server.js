"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _routes = _interopRequireDefault(require("../../routes"));

/**
    Copyright 2021, Zuri plugin reminder.
    All rights reserved.
    Written By: King Etiosasere, 30th August 2021
* */
_dotenv.default.config();

const app = (0, _express.default)();
app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: true
}));
app.use('/v1', _routes.default);
var _default = app;
exports.default = _default;
//# sourceMappingURL=server.js.map