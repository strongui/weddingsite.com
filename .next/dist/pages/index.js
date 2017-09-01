'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'C:\\Users\\Amir\\Documents\\GitHub\\weddingsite.com\\pages\\index.js?entry';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _App = require('../components/App');

var _App2 = _interopRequireDefault(_App);

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Submit = require('../components/Submit');

var _Submit2 = _interopRequireDefault(_Submit);

var _PostList = require('../components/PostList');

var _PostList2 = _interopRequireDefault(_PostList);

var _withData = require('../lib/withData');

var _withData2 = _interopRequireDefault(_withData);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = (0, _withData2.default)(function (props) {
  return _react2.default.createElement(_App2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement(_Header2.default, { pathname: props.url.pathname, __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), _react2.default.createElement(_Submit2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), _react2.default.createElement(_PostList2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }));
});