'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'C:\\Users\\Amir\\Documents\\GitHub\\weddingsite.com\\components\\Header.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function (_ref) {
  var pathname = _ref.pathname;
  return _react2.default.createElement('header', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement('a', { className: pathname === '/' && 'is-active', __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, 'Home')), _react2.default.createElement(_link2.default, { prefetch: true, href: '/about', __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement('a', { className: pathname === '/about' && 'is-active', __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, 'About')), _react2.default.createElement(_link2.default, { prefetch: true, href: '/post', __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement('a', { className: pathname === '/post' && 'is-active', __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, 'Post')), _react2.default.createElement(_link2.default, { prefetch: true, href: '/user', __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, _react2.default.createElement('a', { className: pathname === '/user' && 'is-active', __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, 'User')), _react2.default.createElement('style', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, '\n      header {\n        margin-bottom: 25px;\n      }\n      a {\n        font-size: 14px;\n        margin-right: 15px;\n        text-decoration: none;\n      }\n      .is-active {\n        text-decoration: underline;\n      }\n    '));
};