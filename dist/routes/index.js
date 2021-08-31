"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _express = require("express");

var _user = _interopRequireDefault(require("../controllers/user.controller"));

/**
    Copyright 2021, Zuri plugin reminder.
    All rights reserved.
    Written By: King Etiosasere, 30th August 2021
* */
const router = (0, _express.Router)();
router.get('/user', _user.default.create);
var _default = router;
exports.default = _default;
//# sourceMappingURL=index.js.map