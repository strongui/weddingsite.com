'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _jsxFileName = 'C:\\Users\\Amir\\Documents\\GitHub\\weddingsite.com\\components\\PostList.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  query allPosts($first: Int!, $skip: Int!) {\n    allPosts(orderBy: createdAt_DESC, first: $first, skip: $skip) {\n      id\n      title\n      votes\n      url\n      createdAt\n    },\n    _allPostsMeta {\n      count\n    }\n  }\n'], ['\n  query allPosts($first: Int!, $skip: Int!) {\n    allPosts(orderBy: createdAt_DESC, first: $first, skip: $skip) {\n      id\n      title\n      votes\n      url\n      createdAt\n    },\n    _allPostsMeta {\n      count\n    }\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactApollo = require('react-apollo');

var _ErrorMessage = require('./ErrorMessage');

var _ErrorMessage2 = _interopRequireDefault(_ErrorMessage);

var _PostUpvoter = require('./PostUpvoter');

var _PostUpvoter2 = _interopRequireDefault(_PostUpvoter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var POSTS_PER_PAGE = 10;

function PostList(_ref) {
  var _ref$data = _ref.data,
      loading = _ref$data.loading,
      error = _ref$data.error,
      allPosts = _ref$data.allPosts,
      _allPostsMeta = _ref$data._allPostsMeta,
      loadMorePosts = _ref.loadMorePosts;

  if (error) return _react2.default.createElement(_ErrorMessage2.default, { message: 'Error loading posts.', __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  });
  if (allPosts && allPosts.length) {
    var areMorePosts = allPosts.length < _allPostsMeta.count;
    return _react2.default.createElement('section', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    }, _react2.default.createElement('ul', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    }, allPosts.map(function (post, index) {
      return _react2.default.createElement('li', { key: post.id, __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement('span', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, index + 1, '. '), _react2.default.createElement('a', { href: post.url, __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, post.title), _react2.default.createElement(_PostUpvoter2.default, { id: post.id, votes: post.votes, __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      })));
    })), areMorePosts ? _react2.default.createElement('button', { onClick: function onClick() {
        return loadMorePosts();
      }, __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      }
    }, ' ', loading ? 'Loading...' : 'Show More', ' ') : '', _react2.default.createElement('style', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      }
    }, '\n          section {\n            padding-bottom: 20px;\n          }\n          li {\n            display: block;\n            margin-bottom: 10px;\n          }\n          div {\n            align-items: center;\n            display: flex;\n          }\n          a {\n            font-size: 14px;\n            margin-right: 10px;\n            text-decoration: none;\n            padding-bottom: 0;\n            border: 0;\n          }\n          span {\n            font-size: 14px;\n            margin-right: 5px;\n          }\n          ul {\n            margin: 0;\n            padding: 0;\n          }\n          button:before {\n            align-self: center;\n            border-style: solid;\n            border-width: 6px 4px 0 4px;\n            border-color: #ffffff transparent transparent transparent;\n            content: "";\n            height: 0;\n            margin-right: 5px;\n            width: 0;\n          }\n        '));
  }
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }, 'Loading');
}

var allPosts = (0, _reactApollo.gql)(_templateObject);

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostList)
exports.default = (0, _reactApollo.graphql)(allPosts, {
  options: {
    variables: {
      skip: 0,
      first: POSTS_PER_PAGE
    }
  },
  props: function props(_ref2) {
    var data = _ref2.data;
    return {
      data: data,
      loadMorePosts: function loadMorePosts() {
        return data.fetchMore({
          variables: {
            skip: data.allPosts.length
          },
          updateQuery: function updateQuery(previousResult, _ref3) {
            var fetchMoreResult = _ref3.fetchMoreResult;

            if (!fetchMoreResult) {
              return previousResult;
            }
            return (0, _assign2.default)({}, previousResult, {
              // Append the new posts results to the old one
              allPosts: [].concat((0, _toConsumableArray3.default)(previousResult.allPosts), (0, _toConsumableArray3.default)(fetchMoreResult.allPosts))
            });
          }
        });
      }
    };
  }
})(PostList);