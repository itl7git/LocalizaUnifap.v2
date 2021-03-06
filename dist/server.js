"use strict";

require("dotenv/config");

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_app.default.listen(process.env.PORT || 3333, () => {
  console.log('🚀 Server started on port 3333!');
});