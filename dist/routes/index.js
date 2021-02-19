"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _building = _interopRequireDefault(require("./building.routes"));

var _users = _interopRequireDefault(require("./users.routes"));

var _session = _interopRequireDefault(require("./session.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = (0, _express.Router)();
routes.use('/buildings', _building.default);
routes.use('/users', _users.default);
routes.use('/sessions', _session.default);
var _default = routes;
exports.default = _default;