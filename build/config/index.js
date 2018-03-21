'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let config = {
  "env": process.env.NODE_ENV
};

/* 开发环境 */
if (process.env.NODE_ENV == 'development') {
  const localConfig = {
    port: 3000
  };
  config = _lodash2.default.extend(config, localConfig);
}
/* 生产环境 */
if (process.env.NODE_ENV == 'production') {
  const proConfig = {
    port: 80
  };
  config = _lodash2.default.extend(config, proConfig);
}
exports.default = config;