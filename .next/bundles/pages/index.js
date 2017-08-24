
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 585:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'C:\\Users\\Amir\\Documents\\GitHub\\weddingsite.com\\pages\\index.js?entry';

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(633);

var _App2 = _interopRequireDefault(_App);

var _Header = __webpack_require__(635);

var _Header2 = _interopRequireDefault(_Header);

var _Submit = __webpack_require__(638);

var _Submit2 = _interopRequireDefault(_Submit);

var _PostList = __webpack_require__(636);

var _PostList2 = _interopRequireDefault(_PostList);

var _withData = __webpack_require__(642);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Amir\\Documents\\GitHub\\weddingsite.com\\pages\\index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Amir\\Documents\\GitHub\\weddingsite.com\\pages\\index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 633:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "C:\\Users\\Amir\\Documents\\GitHub\\weddingsite.com\\components\\App.js";

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function (_ref) {
  var children = _ref.children;
  return _react2.default.createElement("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    }
  }, children, _react2.default.createElement("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, "\n      * {\n        font-family: Menlo, Monaco, \"Lucida Console\", \"Liberation Mono\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", \"Courier New\", monospace, serif;\n      }\n      body {\n        margin: 0;\n        padding: 25px 50px;\n      }\n      a {\n        color: #22BAD9;\n      }\n      p {\n        font-size: 14px;\n        line-height: 24px;\n      }\n      article {\n        margin: 0 auto;\n        max-width: 650px;\n      }\n      button {\n        align-items: center;\n        background-color: #22BAD9;\n        border: 0;\n        color: white;\n        display: flex;\n        padding: 5px 7px;\n      }\n      button:active {\n        background-color: #1B9DB7;\n        transition: background-color .3s\n      }\n      button:focus {\n        outline: none;\n      }\n    "));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Amir\\Documents\\GitHub\\weddingsite.com\\components\\App.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Amir\\Documents\\GitHub\\weddingsite.com\\components\\App.js"); } } })();

/***/ }),

/***/ 634:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "C:\\Users\\Amir\\Documents\\GitHub\\weddingsite.com\\components\\ErrorMessage.js";

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function (_ref) {
  var message = _ref.message;
  return _react2.default.createElement("aside", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    }
  }, message, _react2.default.createElement("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, "\n      aside {\n        padding: 1.5em;\n        font-size: 14px;\n        color: white;\n        background-color: red;\n      }\n    "));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Amir\\Documents\\GitHub\\weddingsite.com\\components\\ErrorMessage.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Amir\\Documents\\GitHub\\weddingsite.com\\components\\ErrorMessage.js"); } } })();

/***/ }),

/***/ 635:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'C:\\Users\\Amir\\Documents\\GitHub\\weddingsite.com\\components\\Header.js';

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(632);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Amir\\Documents\\GitHub\\weddingsite.com\\components\\Header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Amir\\Documents\\GitHub\\weddingsite.com\\components\\Header.js"); } } })();

/***/ }),

/***/ 636:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(97);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(93);

var _assign2 = _interopRequireDefault(_assign);

var _taggedTemplateLiteral2 = __webpack_require__(559);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _jsxFileName = 'C:\\Users\\Amir\\Documents\\GitHub\\weddingsite.com\\components\\PostList.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  query allPosts($first: Int!, $skip: Int!) {\n    allPosts(orderBy: createdAt_DESC, first: $first, skip: $skip) {\n      id\n      title\n      votes\n      url\n      createdAt\n    },\n    _allPostsMeta {\n      count\n    }\n  }\n'], ['\n  query allPosts($first: Int!, $skip: Int!) {\n    allPosts(orderBy: createdAt_DESC, first: $first, skip: $skip) {\n      id\n      title\n      votes\n      url\n      createdAt\n    },\n    _allPostsMeta {\n      count\n    }\n  }\n']);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactApollo = __webpack_require__(548);

var _ErrorMessage = __webpack_require__(634);

var _ErrorMessage2 = _interopRequireDefault(_ErrorMessage);

var _PostUpvoter = __webpack_require__(637);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Amir\\Documents\\GitHub\\weddingsite.com\\components\\PostList.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Amir\\Documents\\GitHub\\weddingsite.com\\components\\PostList.js"); } } })();

/***/ }),

/***/ 637:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = __webpack_require__(559);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _jsxFileName = 'C:\\Users\\Amir\\Documents\\GitHub\\weddingsite.com\\components\\PostUpvoter.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  mutation updatePost($id: ID!, $votes: Int) {\n    updatePost(id: $id, votes: $votes) {\n      id\n      __typename\n      votes\n    }\n  }\n'], ['\n  mutation updatePost($id: ID!, $votes: Int) {\n    updatePost(id: $id, votes: $votes) {\n      id\n      __typename\n      votes\n    }\n  }\n']);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactApollo = __webpack_require__(548);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function PostUpvoter(_ref) {
  var upvote = _ref.upvote,
      votes = _ref.votes,
      id = _ref.id;

  return _react2.default.createElement('button', { onClick: function onClick() {
      return upvote(id, votes + 1);
    }, __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, votes, _react2.default.createElement('style', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, '\n        button {\n          background-color: transparent;\n          border: 1px solid #e4e4e4;\n          color: #000;\n        }\n        button:active {\n          background-color: transparent;\n        }\n        button:before {\n          align-self: center;\n          border-color: transparent transparent #000000 transparent;\n          border-style: solid;\n          border-width: 0 4px 6px 4px;\n          content: "";\n          height: 0;\n          margin-right: 5px;\n          width: 0;\n        }\n      '));
}

var upvotePost = (0, _reactApollo.gql)(_templateObject);

exports.default = (0, _reactApollo.graphql)(upvotePost, {
  props: function props(_ref2) {
    var ownProps = _ref2.ownProps,
        mutate = _ref2.mutate;
    return {
      upvote: function upvote(id, votes) {
        return mutate({
          variables: { id: id, votes: votes },
          optimisticResponse: {
            __typename: 'Mutation',
            updatePost: {
              __typename: 'Post',
              id: ownProps.id,
              votes: ownProps.votes + 1
            }
          }
        });
      }
    };
  }
})(PostUpvoter);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Amir\\Documents\\GitHub\\weddingsite.com\\components\\PostUpvoter.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Amir\\Documents\\GitHub\\weddingsite.com\\components\\PostUpvoter.js"); } } })();

/***/ }),

/***/ 638:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(97);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(93);

var _assign2 = _interopRequireDefault(_assign);

var _taggedTemplateLiteral2 = __webpack_require__(559);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _jsxFileName = 'C:\\Users\\Amir\\Documents\\GitHub\\weddingsite.com\\components\\Submit.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  mutation createPost($title: String!, $url: String!) {\n    createPost(title: $title, url: $url) {\n      id\n      title\n      votes\n      url\n      createdAt\n    }\n  }\n'], ['\n  mutation createPost($title: String!, $url: String!) {\n    createPost(title: $title, url: $url) {\n      id\n      title\n      votes\n      url\n      createdAt\n    }\n  }\n']);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactApollo = __webpack_require__(548);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function Submit(_ref) {
  var createPost = _ref.createPost;

  function handleSubmit(e) {
    e.preventDefault();

    var title = e.target.elements.title.value;
    var url = e.target.elements.url.value;

    if (title === '' || url === '') {
      window.alert('Both fields are required.');
      return false;
    }

    // prepend http if missing from url
    if (!url.match(/^[a-zA-Z]+:\/\//)) {
      url = 'http://' + url;
    }

    createPost(title, url);

    // reset form
    e.target.elements.title.value = '';
    e.target.elements.url.value = '';
  }

  return _react2.default.createElement('form', { onSubmit: handleSubmit, __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, 'Submit'), _react2.default.createElement('input', { placeholder: 'title', name: 'title', __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }), _react2.default.createElement('input', { placeholder: 'url', name: 'url', __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }), _react2.default.createElement('button', { type: 'submit', __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, 'Submit'), _react2.default.createElement('style', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, '\n        form {\n          border-bottom: 1px solid #ececec;\n          padding-bottom: 20px;\n          margin-bottom: 20px;\n        }\n        h1 {\n          font-size: 20px;\n        }\n        input {\n          display: block;\n          margin-bottom: 10px;\n        }\n      '));
}

var createPost = (0, _reactApollo.gql)(_templateObject);

exports.default = (0, _reactApollo.graphql)(createPost, {
  props: function props(_ref2) {
    var mutate = _ref2.mutate;
    return {
      createPost: function createPost(title, url) {
        return mutate({
          variables: { title: title, url: url },
          updateQueries: {
            allPosts: function allPosts(previousResult, _ref3) {
              var mutationResult = _ref3.mutationResult;

              var newPost = mutationResult.data.createPost;
              return (0, _assign2.default)({}, previousResult, {
                // Append the new post
                allPosts: [newPost].concat((0, _toConsumableArray3.default)(previousResult.allPosts))
              });
            }
          }
        });
      }
    };
  }
})(Submit);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Amir\\Documents\\GitHub\\weddingsite.com\\components\\Submit.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Amir\\Documents\\GitHub\\weddingsite.com\\components\\Submit.js"); } } })();

/***/ }),

/***/ 639:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = initApollo;

var _reactApollo = __webpack_require__(548);

var _isomorphicFetch = __webpack_require__(622);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var apolloClient = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = _isomorphicFetch2.default;
}

function create() {
  return new _reactApollo.ApolloClient({
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    networkInterface: (0, _reactApollo.createNetworkInterface)({
      // uri: 'https://api.graph.cool/simple/v1/cixmkt2ul01q00122mksg82pn', // Server URL (must be absolute)
      uri: 'http://localhost:3000/graphql',
      opts: { // Additional fetch() options like `credentials` or `headers`
        credentials: 'same-origin'
      }
    })
  });
}

function initApollo() {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create();
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create();
  }

  return apolloClient;
}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Amir\\Documents\\GitHub\\weddingsite.com\\lib\\initApollo.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Amir\\Documents\\GitHub\\weddingsite.com\\lib\\initApollo.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(56), __webpack_require__(61)))

/***/ }),

/***/ 640:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(95);

var _extends3 = _interopRequireDefault(_extends2);

exports.default = initRedux;

var _redux = __webpack_require__(561);

var _reducers = __webpack_require__(641);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var reduxStore = null;

// Get the Redux DevTools extension and fallback to a no-op function
var devtools = function devtools(f) {
  return f;
};
if (process.browser && window.__REDUX_DEVTOOLS_EXTENSION__) {
  devtools = window.__REDUX_DEVTOOLS_EXTENSION__();
}

function create(apollo) {
  var initialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return (0, _redux.createStore)((0, _redux.combineReducers)((0, _extends3.default)({}, _reducers2.default, {
    apollo: apollo.reducer()
  })), initialState, // Hydrate the store with server-side data
  (0, _redux.compose)((0, _redux.applyMiddleware)(apollo.middleware()), // Add additional middleware here
  devtools));
}

function initRedux(apollo, initialState) {
  // Make sure to create a new store for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(apollo, initialState);
  }

  // Reuse store on the client-side
  if (!reduxStore) {
    reduxStore = create(apollo, initialState);
  }

  return reduxStore;
}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Amir\\Documents\\GitHub\\weddingsite.com\\lib\\initRedux.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Amir\\Documents\\GitHub\\weddingsite.com\\lib\\initRedux.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(56)))

/***/ }),

/***/ 641:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(95);

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  example: function example() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _ref = arguments[1];
    var type = _ref.type,
        payload = _ref.payload;

    switch (type) {
      case 'EXAMPLE_ACTION':
        return (0, _extends3.default)({}, state);
      default:
        return state;
    }
  }
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Amir\\Documents\\GitHub\\weddingsite.com\\lib\\reducers.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Amir\\Documents\\GitHub\\weddingsite.com\\lib\\reducers.js"); } } })();

/***/ }),

/***/ 642:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(36);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _regenerator = __webpack_require__(64);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = __webpack_require__(95);

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = __webpack_require__(63);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(39);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(38);

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = 'C:\\Users\\Amir\\Documents\\GitHub\\weddingsite.com\\lib\\withData.js';

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(84);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactApollo = __webpack_require__(548);

var _head = __webpack_require__(194);

var _head2 = _interopRequireDefault(_head);

var _initApollo = __webpack_require__(639);

var _initApollo2 = _interopRequireDefault(_initApollo);

var _initRedux = __webpack_require__(640);

var _initRedux2 = _interopRequireDefault(_initRedux);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// Gets the display name of a JSX component for dev tools
function getComponentDisplayName(Component) {
  return Component.displayName || Component.name || 'Unknown';
}

exports.default = function (ComposedComponent) {
  var _class, _temp;

  return _temp = _class = function (_React$Component) {
    (0, _inherits3.default)(WithData, _React$Component);
    (0, _createClass3.default)(WithData, null, [{
      key: 'getInitialProps',
      value: function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx) {
          var serverState, composedInitialProps, apollo, redux, url, state;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  serverState = {};

                  // Evaluate the composed component's getInitialProps()

                  composedInitialProps = {};

                  if (!ComposedComponent.getInitialProps) {
                    _context.next = 6;
                    break;
                  }

                  _context.next = 5;
                  return ComposedComponent.getInitialProps(ctx);

                case 5:
                  composedInitialProps = _context.sent;

                case 6:
                  if (process.browser) {
                    _context.next = 20;
                    break;
                  }

                  apollo = (0, _initApollo2.default)();
                  redux = (0, _initRedux2.default)(apollo);
                  // Provide the `url` prop data in case a GraphQL query uses it

                  url = { query: ctx.query, pathname: ctx.pathname };
                  _context.prev = 10;
                  _context.next = 13;
                  return (0, _reactApollo.getDataFromTree)(
                  // No need to use the Redux Provider
                  // because Apollo sets up the store for us
                  _react2.default.createElement(_reactApollo.ApolloProvider, { client: apollo, store: redux, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 42
                    }
                  }, _react2.default.createElement(ComposedComponent, (0, _extends3.default)({ url: url }, composedInitialProps, {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 43
                    }
                  }))));

                case 13:
                  _context.next = 17;
                  break;

                case 15:
                  _context.prev = 15;
                  _context.t0 = _context['catch'](10);

                case 17:
                  // getDataFromTree does not call componentWillUnmount
                  // head side effect therefore need to be cleared manually
                  _head2.default.rewind();

                  // Extract query data from the store
                  state = redux.getState();

                  // No need to include other initial Redux state because when it
                  // initialises on the client-side it'll create it again anyway

                  serverState = {
                    apollo: { // Only include the Apollo data state
                      data: state.apollo.data
                    }
                  };

                case 20:
                  return _context.abrupt('return', (0, _extends3.default)({
                    serverState: serverState
                  }, composedInitialProps));

                case 21:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[10, 15]]);
        }));

        function getInitialProps(_x) {
          return _ref.apply(this, arguments);
        }

        return getInitialProps;
      }()
    }]);

    function WithData(props) {
      (0, _classCallCheck3.default)(this, WithData);

      var _this = (0, _possibleConstructorReturn3.default)(this, (WithData.__proto__ || (0, _getPrototypeOf2.default)(WithData)).call(this, props));

      _this.apollo = (0, _initApollo2.default)();
      _this.redux = (0, _initRedux2.default)(_this.apollo, _this.props.serverState);
      return _this;
    }

    (0, _createClass3.default)(WithData, [{
      key: 'render',
      value: function render() {
        return (
          // No need to use the Redux Provider
          // because Apollo sets up the store for us
          _react2.default.createElement(_reactApollo.ApolloProvider, { client: this.apollo, store: this.redux, __source: {
              fileName: _jsxFileName,
              lineNumber: 83
            }
          }, _react2.default.createElement(ComposedComponent, (0, _extends3.default)({}, this.props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 84
            }
          })))
        );
      }
    }]);
    return WithData;
  }(_react2.default.Component), _class.displayName = 'WithData(' + getComponentDisplayName(ComposedComponent) + ')', _class.propTypes = {
    serverState: _propTypes2.default.object.isRequired
  }, _temp;
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Amir\\Documents\\GitHub\\weddingsite.com\\lib\\withData.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Amir\\Documents\\GitHub\\weddingsite.com\\lib\\withData.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(56)))

/***/ }),

/***/ 648:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(585);


/***/ })

},[648]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlc1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/ZGMwMDIyZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC5qcz9kYzAwMjJlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRXJyb3JNZXNzYWdlLmpzP2RjMDAyMmUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanM/ZGMwMDIyZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3RMaXN0LmpzP2RjMDAyMmUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qb3N0VXB2b3Rlci5qcz9kYzAwMjJlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU3VibWl0LmpzP2RjMDAyMmUiLCJ3ZWJwYWNrOi8vLy4vbGliL2luaXRBcG9sbG8uanM/ZGMwMDIyZSIsIndlYnBhY2s6Ly8vLi9saWIvaW5pdFJlZHV4LmpzP2RjMDAyMmUiLCJ3ZWJwYWNrOi8vLy4vbGliL3JlZHVjZXJzLmpzP2RjMDAyMmUiLCJ3ZWJwYWNrOi8vLy4vbGliL3dpdGhEYXRhLmpzP2RjMDAyMmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCBmcm9tICcuLi9jb21wb25lbnRzL0FwcCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCBTdWJtaXQgZnJvbSAnLi4vY29tcG9uZW50cy9TdWJtaXQnO1xuaW1wb3J0IFBvc3RMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvUG9zdExpc3QnO1xuaW1wb3J0IHdpdGhEYXRhIGZyb20gJy4uL2xpYi93aXRoRGF0YSc7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhEYXRhKChwcm9wcykgPT4gKFxuICA8QXBwPlxuICAgIDxIZWFkZXIgcGF0aG5hbWU9e3Byb3BzLnVybC5wYXRobmFtZX0gLz5cbiAgICA8U3VibWl0IC8+XG4gICAgPFBvc3RMaXN0IC8+XG4gIDwvQXBwPlxuKSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwiZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8bWFpbj5cbiAgICB7Y2hpbGRyZW59XG4gICAgPHN0eWxlPntgXG4gICAgICAqIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IE1lbmxvLCBNb25hY28sIFwiTHVjaWRhIENvbnNvbGVcIiwgXCJMaWJlcmF0aW9uIE1vbm9cIiwgXCJEZWphVnUgU2FucyBNb25vXCIsIFwiQml0c3RyZWFtIFZlcmEgU2FucyBNb25vXCIsIFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlLCBzZXJpZjtcbiAgICAgIH1cbiAgICAgIGJvZHkge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDI1cHggNTBweDtcbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogIzIyQkFEOTtcbiAgICAgIH1cbiAgICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgfVxuICAgICAgYXJ0aWNsZSB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBtYXgtd2lkdGg6IDY1MHB4O1xuICAgICAgfVxuICAgICAgYnV0dG9uIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyQkFEOTtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHBhZGRpbmc6IDVweCA3cHg7XG4gICAgICB9XG4gICAgICBidXR0b246YWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFCOURCNztcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuM3NcbiAgICAgIH1cbiAgICAgIGJ1dHRvbjpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L21haW4+XG4pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0FwcC5qcyIsImV4cG9ydCBkZWZhdWx0ICh7bWVzc2FnZX0pID0+IChcbiAgPGFzaWRlPlxuICAgIHttZXNzYWdlfVxuICAgIDxzdHlsZT57YFxuICAgICAgYXNpZGUge1xuICAgICAgICBwYWRkaW5nOiAxLjVlbTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvYXNpZGU+XG4pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0Vycm9yTWVzc2FnZS5qcyIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IHBhdGhuYW1lIH0pID0+IChcbiAgPGhlYWRlcj5cbiAgICA8TGluayBwcmVmZXRjaCBocmVmPScvJz5cbiAgICAgIDxhIGNsYXNzTmFtZT17cGF0aG5hbWUgPT09ICcvJyAmJiAnaXMtYWN0aXZlJ30+SG9tZTwvYT5cbiAgICA8L0xpbms+XG5cbiAgICA8TGluayBwcmVmZXRjaCBocmVmPScvYWJvdXQnPlxuICAgICAgPGEgY2xhc3NOYW1lPXtwYXRobmFtZSA9PT0gJy9hYm91dCcgJiYgJ2lzLWFjdGl2ZSd9PkFib3V0PC9hPlxuICAgIDwvTGluaz5cblxuICAgIDxMaW5rIHByZWZldGNoIGhyZWY9Jy9wb3N0Jz5cbiAgICAgIDxhIGNsYXNzTmFtZT17cGF0aG5hbWUgPT09ICcvcG9zdCcgJiYgJ2lzLWFjdGl2ZSd9PlBvc3Q8L2E+XG4gICAgPC9MaW5rPlxuXG4gICAgPExpbmsgcHJlZmV0Y2ggaHJlZj0nL3VzZXInPlxuICAgICAgPGEgY2xhc3NOYW1lPXtwYXRobmFtZSA9PT0gJy91c2VyJyAmJiAnaXMtYWN0aXZlJ30+VXNlcjwvYT5cbiAgICA8L0xpbms+XG5cbiAgICA8c3R5bGU+e2BcbiAgICAgIGhlYWRlciB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgICB9XG4gICAgICBhIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICAgIC5pcy1hY3RpdmUge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvaGVhZGVyPlxuKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJpbXBvcnQgeyBncWwsIGdyYXBocWwgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5pbXBvcnQgRXJyb3JNZXNzYWdlIGZyb20gJy4vRXJyb3JNZXNzYWdlJ1xuaW1wb3J0IFBvc3RVcHZvdGVyIGZyb20gJy4vUG9zdFVwdm90ZXInXG5cbmNvbnN0IFBPU1RTX1BFUl9QQUdFID0gMTBcblxuZnVuY3Rpb24gUG9zdExpc3QgKHsgZGF0YTogeyBsb2FkaW5nLCBlcnJvciwgYWxsUG9zdHMsIF9hbGxQb3N0c01ldGEgfSwgbG9hZE1vcmVQb3N0cyB9KSB7XG4gIGlmIChlcnJvcikgcmV0dXJuIDxFcnJvck1lc3NhZ2UgbWVzc2FnZT0nRXJyb3IgbG9hZGluZyBwb3N0cy4nIC8+XG4gIGlmIChhbGxQb3N0cyAmJiBhbGxQb3N0cy5sZW5ndGgpIHtcbiAgICBjb25zdCBhcmVNb3JlUG9zdHMgPSBhbGxQb3N0cy5sZW5ndGggPCBfYWxsUG9zdHNNZXRhLmNvdW50O1xuICAgIHJldHVybiAoXG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHthbGxQb3N0cy5tYXAoKHBvc3QsIGluZGV4KSA9PlxuICAgICAgICAgICAgPGxpIGtleT17cG9zdC5pZH0+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4+e2luZGV4ICsgMX0uIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXtwb3N0LnVybH0+e3Bvc3QudGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgIDxQb3N0VXB2b3RlciBpZD17cG9zdC5pZH0gdm90ZXM9e3Bvc3Qudm90ZXN9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApfVxuICAgICAgICA8L3VsPlxuICAgICAgICB7YXJlTW9yZVBvc3RzID8gPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBsb2FkTW9yZVBvc3RzKCl9PiB7bG9hZGluZyA/ICdMb2FkaW5nLi4uJyA6ICdTaG93IE1vcmUnfSA8L2J1dHRvbj4gOiAnJ31cbiAgICAgICAgPHN0eWxlPntgXG4gICAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGkge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJ1dHRvbjpiZWZvcmUge1xuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogNnB4IDRweCAwIDRweDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2ZmZmZmZiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIClcbiAgfVxuICByZXR1cm4gPGRpdj5Mb2FkaW5nPC9kaXY+XG59XG5cbmNvbnN0IGFsbFBvc3RzID0gZ3FsYFxuICBxdWVyeSBhbGxQb3N0cygkZmlyc3Q6IEludCEsICRza2lwOiBJbnQhKSB7XG4gICAgYWxsUG9zdHMob3JkZXJCeTogY3JlYXRlZEF0X0RFU0MsIGZpcnN0OiAkZmlyc3QsIHNraXA6ICRza2lwKSB7XG4gICAgICBpZFxuICAgICAgdGl0bGVcbiAgICAgIHZvdGVzXG4gICAgICB1cmxcbiAgICAgIGNyZWF0ZWRBdFxuICAgIH0sXG4gICAgX2FsbFBvc3RzTWV0YSB7XG4gICAgICBjb3VudFxuICAgIH1cbiAgfVxuYDtcblxuLy8gVGhlIGBncmFwaHFsYCB3cmFwcGVyIGV4ZWN1dGVzIGEgR3JhcGhRTCBxdWVyeSBhbmQgbWFrZXMgdGhlIHJlc3VsdHNcbi8vIGF2YWlsYWJsZSBvbiB0aGUgYGRhdGFgIHByb3Agb2YgdGhlIHdyYXBwZWQgY29tcG9uZW50IChQb3N0TGlzdClcbmV4cG9ydCBkZWZhdWx0IGdyYXBocWwoYWxsUG9zdHMsIHtcbiAgb3B0aW9uczoge1xuICAgIHZhcmlhYmxlczoge1xuICAgICAgc2tpcDogMCxcbiAgICAgIGZpcnN0OiBQT1NUU19QRVJfUEFHRVxuICAgIH1cbiAgfSxcbiAgcHJvcHM6ICh7IGRhdGEgfSkgPT4gKHtcbiAgICBkYXRhLFxuICAgIGxvYWRNb3JlUG9zdHM6ICgpID0+IHtcbiAgICAgIHJldHVybiBkYXRhLmZldGNoTW9yZSh7XG4gICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgIHNraXA6IGRhdGEuYWxsUG9zdHMubGVuZ3RoXG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZVF1ZXJ5OiAocHJldmlvdXNSZXN1bHQsIHsgZmV0Y2hNb3JlUmVzdWx0IH0pID0+IHtcbiAgICAgICAgICBpZiAoIWZldGNoTW9yZVJlc3VsdCkge1xuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcHJldmlvdXNSZXN1bHQsIHtcbiAgICAgICAgICAgIC8vIEFwcGVuZCB0aGUgbmV3IHBvc3RzIHJlc3VsdHMgdG8gdGhlIG9sZCBvbmVcbiAgICAgICAgICAgIGFsbFBvc3RzOiBbLi4ucHJldmlvdXNSZXN1bHQuYWxsUG9zdHMsIC4uLmZldGNoTW9yZVJlc3VsdC5hbGxQb3N0c11cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfSlcbn0pKFBvc3RMaXN0KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Qb3N0TGlzdC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGdxbCwgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbydcblxuZnVuY3Rpb24gUG9zdFVwdm90ZXIgKHsgdXB2b3RlLCB2b3RlcywgaWQgfSkge1xuICByZXR1cm4gKFxuICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdXB2b3RlKGlkLCB2b3RlcyArIDEpfT5cbiAgICAgIHt2b3Rlc31cbiAgICAgIDxzdHlsZT57YFxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNGU0ZTQ7XG4gICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmFjdGl2ZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmJlZm9yZSB7XG4gICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIzAwMDAwMCB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgIGJvcmRlci13aWR0aDogMCA0cHggNnB4IDRweDtcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvYnV0dG9uPlxuICApXG59XG5cbmNvbnN0IHVwdm90ZVBvc3QgPSBncWxgXG4gIG11dGF0aW9uIHVwZGF0ZVBvc3QoJGlkOiBJRCEsICR2b3RlczogSW50KSB7XG4gICAgdXBkYXRlUG9zdChpZDogJGlkLCB2b3RlczogJHZvdGVzKSB7XG4gICAgICBpZFxuICAgICAgX190eXBlbmFtZVxuICAgICAgdm90ZXNcbiAgICB9XG4gIH1cbmBcblxuZXhwb3J0IGRlZmF1bHQgZ3JhcGhxbCh1cHZvdGVQb3N0LCB7XG4gIHByb3BzOiAoeyBvd25Qcm9wcywgbXV0YXRlIH0pID0+ICh7XG4gICAgdXB2b3RlOiAoaWQsIHZvdGVzKSA9PiBtdXRhdGUoe1xuICAgICAgdmFyaWFibGVzOiB7IGlkLCB2b3RlcyB9LFxuICAgICAgb3B0aW1pc3RpY1Jlc3BvbnNlOiB7XG4gICAgICAgIF9fdHlwZW5hbWU6ICdNdXRhdGlvbicsXG4gICAgICAgIHVwZGF0ZVBvc3Q6IHtcbiAgICAgICAgICBfX3R5cGVuYW1lOiAnUG9zdCcsXG4gICAgICAgICAgaWQ6IG93blByb3BzLmlkLFxuICAgICAgICAgIHZvdGVzOiBvd25Qcm9wcy52b3RlcyArIDFcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KShQb3N0VXB2b3RlcilcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvUG9zdFVwdm90ZXIuanMiLCJpbXBvcnQgeyBncWwsIGdyYXBocWwgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5cbmZ1bmN0aW9uIFN1Ym1pdCAoeyBjcmVhdGVQb3N0IH0pIHtcbiAgZnVuY3Rpb24gaGFuZGxlU3VibWl0IChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBsZXQgdGl0bGUgPSBlLnRhcmdldC5lbGVtZW50cy50aXRsZS52YWx1ZVxuICAgIGxldCB1cmwgPSBlLnRhcmdldC5lbGVtZW50cy51cmwudmFsdWVcblxuICAgIGlmICh0aXRsZSA9PT0gJycgfHwgdXJsID09PSAnJykge1xuICAgICAgd2luZG93LmFsZXJ0KCdCb3RoIGZpZWxkcyBhcmUgcmVxdWlyZWQuJylcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIHByZXBlbmQgaHR0cCBpZiBtaXNzaW5nIGZyb20gdXJsXG4gICAgaWYgKCF1cmwubWF0Y2goL15bYS16QS1aXSs6XFwvXFwvLykpIHtcbiAgICAgIHVybCA9IGBodHRwOi8vJHt1cmx9YFxuICAgIH1cblxuICAgIGNyZWF0ZVBvc3QodGl0bGUsIHVybClcblxuICAgIC8vIHJlc2V0IGZvcm1cbiAgICBlLnRhcmdldC5lbGVtZW50cy50aXRsZS52YWx1ZSA9ICcnXG4gICAgZS50YXJnZXQuZWxlbWVudHMudXJsLnZhbHVlID0gJydcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICA8aDE+U3VibWl0PC9oMT5cbiAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj0ndGl0bGUnIG5hbWU9J3RpdGxlJyAvPlxuICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPSd1cmwnIG5hbWU9J3VybCcgLz5cbiAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0Jz5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgIDxzdHlsZT57YFxuICAgICAgICBmb3JtIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VjZWNlYztcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIGgxIHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Zvcm0+XG4gIClcbn1cblxuY29uc3QgY3JlYXRlUG9zdCA9IGdxbGBcbiAgbXV0YXRpb24gY3JlYXRlUG9zdCgkdGl0bGU6IFN0cmluZyEsICR1cmw6IFN0cmluZyEpIHtcbiAgICBjcmVhdGVQb3N0KHRpdGxlOiAkdGl0bGUsIHVybDogJHVybCkge1xuICAgICAgaWRcbiAgICAgIHRpdGxlXG4gICAgICB2b3Rlc1xuICAgICAgdXJsXG4gICAgICBjcmVhdGVkQXRcbiAgICB9XG4gIH1cbmBcblxuZXhwb3J0IGRlZmF1bHQgZ3JhcGhxbChjcmVhdGVQb3N0LCB7XG4gIHByb3BzOiAoeyBtdXRhdGUgfSkgPT4gKHtcbiAgICBjcmVhdGVQb3N0OiAodGl0bGUsIHVybCkgPT4gbXV0YXRlKHtcbiAgICAgIHZhcmlhYmxlczogeyB0aXRsZSwgdXJsIH0sXG4gICAgICB1cGRhdGVRdWVyaWVzOiB7XG4gICAgICAgIGFsbFBvc3RzOiAocHJldmlvdXNSZXN1bHQsIHsgbXV0YXRpb25SZXN1bHQgfSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld1Bvc3QgPSBtdXRhdGlvblJlc3VsdC5kYXRhLmNyZWF0ZVBvc3RcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcHJldmlvdXNSZXN1bHQsIHtcbiAgICAgICAgICAgIC8vIEFwcGVuZCB0aGUgbmV3IHBvc3RcbiAgICAgICAgICAgIGFsbFBvc3RzOiBbbmV3UG9zdCwgLi4ucHJldmlvdXNSZXN1bHQuYWxsUG9zdHNdXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KShTdWJtaXQpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1N1Ym1pdC5qcyIsImltcG9ydCB7IEFwb2xsb0NsaWVudCwgY3JlYXRlTmV0d29ya0ludGVyZmFjZSB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCc7XG5cbmxldCBhcG9sbG9DbGllbnQgPSBudWxsO1xuXG4vLyBQb2x5ZmlsbCBmZXRjaCgpIG9uIHRoZSBzZXJ2ZXIgKHVzZWQgYnkgYXBvbGxvLWNsaWVudClcbmlmICghcHJvY2Vzcy5icm93c2VyKSB7XG4gIGdsb2JhbC5mZXRjaCA9IGZldGNoO1xufVxuXG5mdW5jdGlvbiBjcmVhdGUgKCkge1xuICByZXR1cm4gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgc3NyTW9kZTogIXByb2Nlc3MuYnJvd3NlciwgLy8gRGlzYWJsZXMgZm9yY2VGZXRjaCBvbiB0aGUgc2VydmVyIChzbyBxdWVyaWVzIGFyZSBvbmx5IHJ1biBvbmNlKVxuICAgIG5ldHdvcmtJbnRlcmZhY2U6IGNyZWF0ZU5ldHdvcmtJbnRlcmZhY2Uoe1xuICAgICAgLy8gdXJpOiAnaHR0cHM6Ly9hcGkuZ3JhcGguY29vbC9zaW1wbGUvdjEvY2l4bWt0MnVsMDFxMDAxMjJta3NnODJwbicsIC8vIFNlcnZlciBVUkwgKG11c3QgYmUgYWJzb2x1dGUpXG4gICAgICB1cmk6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvZ3JhcGhxbCcsXG4gICAgICBvcHRzOiB7IC8vIEFkZGl0aW9uYWwgZmV0Y2goKSBvcHRpb25zIGxpa2UgYGNyZWRlbnRpYWxzYCBvciBgaGVhZGVyc2BcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcbiAgICAgIH1cbiAgICB9KVxuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdEFwb2xsbyAoKSB7XG4gIC8vIE1ha2Ugc3VyZSB0byBjcmVhdGUgYSBuZXcgY2xpZW50IGZvciBldmVyeSBzZXJ2ZXItc2lkZSByZXF1ZXN0IHNvIHRoYXQgZGF0YVxuICAvLyBpc24ndCBzaGFyZWQgYmV0d2VlbiBjb25uZWN0aW9ucyAod2hpY2ggd291bGQgYmUgYmFkKVxuICBpZiAoIXByb2Nlc3MuYnJvd3Nlcikge1xuICAgIHJldHVybiBjcmVhdGUoKTtcbiAgfVxuXG4gIC8vIFJldXNlIGNsaWVudCBvbiB0aGUgY2xpZW50LXNpZGVcbiAgaWYgKCFhcG9sbG9DbGllbnQpIHtcbiAgICBhcG9sbG9DbGllbnQgPSBjcmVhdGUoKTtcbiAgfVxuXG4gIHJldHVybiBhcG9sbG9DbGllbnQ7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvaW5pdEFwb2xsby5qcyIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBjb21iaW5lUmVkdWNlcnMsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHJlZHVjZXJzIGZyb20gJy4vcmVkdWNlcnMnXG5cbmxldCByZWR1eFN0b3JlID0gbnVsbFxuXG4vLyBHZXQgdGhlIFJlZHV4IERldlRvb2xzIGV4dGVuc2lvbiBhbmQgZmFsbGJhY2sgdG8gYSBuby1vcCBmdW5jdGlvblxubGV0IGRldnRvb2xzID0gZiA9PiBmXG5pZiAocHJvY2Vzcy5icm93c2VyICYmIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fKSB7XG4gIGRldnRvb2xzID0gd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18oKVxufVxuXG5mdW5jdGlvbiBjcmVhdGUgKGFwb2xsbywgaW5pdGlhbFN0YXRlID0ge30pIHtcbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKFxuICAgIGNvbWJpbmVSZWR1Y2Vycyh7IC8vIFNldHVwIHJlZHVjZXJzXG4gICAgICAuLi5yZWR1Y2VycyxcbiAgICAgIGFwb2xsbzogYXBvbGxvLnJlZHVjZXIoKVxuICAgIH0pLFxuICAgIGluaXRpYWxTdGF0ZSwgLy8gSHlkcmF0ZSB0aGUgc3RvcmUgd2l0aCBzZXJ2ZXItc2lkZSBkYXRhXG4gICAgY29tcG9zZShcbiAgICAgIGFwcGx5TWlkZGxld2FyZShhcG9sbG8ubWlkZGxld2FyZSgpKSwgLy8gQWRkIGFkZGl0aW9uYWwgbWlkZGxld2FyZSBoZXJlXG4gICAgICBkZXZ0b29sc1xuICAgIClcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0UmVkdXggKGFwb2xsbywgaW5pdGlhbFN0YXRlKSB7XG4gIC8vIE1ha2Ugc3VyZSB0byBjcmVhdGUgYSBuZXcgc3RvcmUgZm9yIGV2ZXJ5IHNlcnZlci1zaWRlIHJlcXVlc3Qgc28gdGhhdCBkYXRhXG4gIC8vIGlzbid0IHNoYXJlZCBiZXR3ZWVuIGNvbm5lY3Rpb25zICh3aGljaCB3b3VsZCBiZSBiYWQpXG4gIGlmICghcHJvY2Vzcy5icm93c2VyKSB7XG4gICAgcmV0dXJuIGNyZWF0ZShhcG9sbG8sIGluaXRpYWxTdGF0ZSlcbiAgfVxuXG4gIC8vIFJldXNlIHN0b3JlIG9uIHRoZSBjbGllbnQtc2lkZVxuICBpZiAoIXJlZHV4U3RvcmUpIHtcbiAgICByZWR1eFN0b3JlID0gY3JlYXRlKGFwb2xsbywgaW5pdGlhbFN0YXRlKVxuICB9XG5cbiAgcmV0dXJuIHJlZHV4U3RvcmVcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9pbml0UmVkdXguanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGV4YW1wbGU6IChzdGF0ZSA9IHt9LCB7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnRVhBTVBMRV9BQ1RJT04nOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0YXRlXG4gICAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL3JlZHVjZXJzLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBBcG9sbG9Qcm92aWRlciwgZ2V0RGF0YUZyb21UcmVlIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IGluaXRBcG9sbG8gZnJvbSAnLi9pbml0QXBvbGxvJ1xuaW1wb3J0IGluaXRSZWR1eCBmcm9tICcuL2luaXRSZWR1eCdcblxuLy8gR2V0cyB0aGUgZGlzcGxheSBuYW1lIG9mIGEgSlNYIGNvbXBvbmVudCBmb3IgZGV2IHRvb2xzXG5mdW5jdGlvbiBnZXRDb21wb25lbnREaXNwbGF5TmFtZSAoQ29tcG9uZW50KSB7XG4gIHJldHVybiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb3NlZENvbXBvbmVudCA9PiB7XG4gIHJldHVybiBjbGFzcyBXaXRoRGF0YSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIGRpc3BsYXlOYW1lID0gYFdpdGhEYXRhKCR7Z2V0Q29tcG9uZW50RGlzcGxheU5hbWUoQ29tcG9zZWRDb21wb25lbnQpfSlgXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgIHNlcnZlclN0YXRlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgICB9XG5cbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzIChjdHgpIHtcbiAgICAgIGxldCBzZXJ2ZXJTdGF0ZSA9IHt9XG5cbiAgICAgIC8vIEV2YWx1YXRlIHRoZSBjb21wb3NlZCBjb21wb25lbnQncyBnZXRJbml0aWFsUHJvcHMoKVxuICAgICAgbGV0IGNvbXBvc2VkSW5pdGlhbFByb3BzID0ge31cbiAgICAgIGlmIChDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgICAgY29tcG9zZWRJbml0aWFsUHJvcHMgPSBhd2FpdCBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcbiAgICAgIH1cblxuICAgICAgLy8gUnVuIGFsbCBHcmFwaFFMIHF1ZXJpZXMgaW4gdGhlIGNvbXBvbmVudCB0cmVlXG4gICAgICAvLyBhbmQgZXh0cmFjdCB0aGUgcmVzdWx0aW5nIGRhdGFcbiAgICAgIGlmICghcHJvY2Vzcy5icm93c2VyKSB7XG4gICAgICAgIGNvbnN0IGFwb2xsbyA9IGluaXRBcG9sbG8oKVxuICAgICAgICBjb25zdCByZWR1eCA9IGluaXRSZWR1eChhcG9sbG8pXG4gICAgICAgIC8vIFByb3ZpZGUgdGhlIGB1cmxgIHByb3AgZGF0YSBpbiBjYXNlIGEgR3JhcGhRTCBxdWVyeSB1c2VzIGl0XG4gICAgICAgIGNvbnN0IHVybCA9IHtxdWVyeTogY3R4LnF1ZXJ5LCBwYXRobmFtZTogY3R4LnBhdGhuYW1lfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gUnVuIGFsbCBHcmFwaFFMIHF1ZXJpZXNcbiAgICAgICAgICBhd2FpdCBnZXREYXRhRnJvbVRyZWUoXG4gICAgICAgICAgICAvLyBObyBuZWVkIHRvIHVzZSB0aGUgUmVkdXggUHJvdmlkZXJcbiAgICAgICAgICAgIC8vIGJlY2F1c2UgQXBvbGxvIHNldHMgdXAgdGhlIHN0b3JlIGZvciB1c1xuICAgICAgICAgICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17YXBvbGxvfSBzdG9yZT17cmVkdXh9PlxuICAgICAgICAgICAgICA8Q29tcG9zZWRDb21wb25lbnQgdXJsPXt1cmx9IHsuLi5jb21wb3NlZEluaXRpYWxQcm9wc30gLz5cbiAgICAgICAgICAgIDwvQXBvbGxvUHJvdmlkZXI+XG4gICAgICAgICAgKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIC8vIFByZXZlbnQgQXBvbGxvIENsaWVudCBHcmFwaFFMIGVycm9ycyBmcm9tIGNyYXNoaW5nIFNTUi5cbiAgICAgICAgICAvLyBIYW5kbGUgdGhlbSBpbiBjb21wb25lbnRzIHZpYSB0aGUgZGF0YS5lcnJvciBwcm9wOlxuICAgICAgICAgIC8vIGh0dHA6Ly9kZXYuYXBvbGxvZGF0YS5jb20vcmVhY3QvYXBpLXF1ZXJpZXMuaHRtbCNncmFwaHFsLXF1ZXJ5LWRhdGEtZXJyb3JcbiAgICAgICAgfVxuICAgICAgICAvLyBnZXREYXRhRnJvbVRyZWUgZG9lcyBub3QgY2FsbCBjb21wb25lbnRXaWxsVW5tb3VudFxuICAgICAgICAvLyBoZWFkIHNpZGUgZWZmZWN0IHRoZXJlZm9yZSBuZWVkIHRvIGJlIGNsZWFyZWQgbWFudWFsbHlcbiAgICAgICAgSGVhZC5yZXdpbmQoKTtcblxuICAgICAgICAvLyBFeHRyYWN0IHF1ZXJ5IGRhdGEgZnJvbSB0aGUgc3RvcmVcbiAgICAgICAgY29uc3Qgc3RhdGUgPSByZWR1eC5nZXRTdGF0ZSgpO1xuXG4gICAgICAgIC8vIE5vIG5lZWQgdG8gaW5jbHVkZSBvdGhlciBpbml0aWFsIFJlZHV4IHN0YXRlIGJlY2F1c2Ugd2hlbiBpdFxuICAgICAgICAvLyBpbml0aWFsaXNlcyBvbiB0aGUgY2xpZW50LXNpZGUgaXQnbGwgY3JlYXRlIGl0IGFnYWluIGFueXdheVxuICAgICAgICBzZXJ2ZXJTdGF0ZSA9IHtcbiAgICAgICAgICBhcG9sbG86IHsgLy8gT25seSBpbmNsdWRlIHRoZSBBcG9sbG8gZGF0YSBzdGF0ZVxuICAgICAgICAgICAgZGF0YTogc3RhdGUuYXBvbGxvLmRhdGFcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNlcnZlclN0YXRlLFxuICAgICAgICAuLi5jb21wb3NlZEluaXRpYWxQcm9wc1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpXG4gICAgICB0aGlzLmFwb2xsbyA9IGluaXRBcG9sbG8oKTtcbiAgICAgIHRoaXMucmVkdXggPSBpbml0UmVkdXgodGhpcy5hcG9sbG8sIHRoaXMucHJvcHMuc2VydmVyU3RhdGUpO1xuICAgIH1cblxuICAgIHJlbmRlciAoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAvLyBObyBuZWVkIHRvIHVzZSB0aGUgUmVkdXggUHJvdmlkZXJcbiAgICAgICAgLy8gYmVjYXVzZSBBcG9sbG8gc2V0cyB1cCB0aGUgc3RvcmUgZm9yIHVzXG4gICAgICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e3RoaXMuYXBvbGxvfSBzdG9yZT17dGhpcy5yZWR1eH0+XG4gICAgICAgICAgPENvbXBvc2VkQ29tcG9uZW50IHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxuICAgICAgKVxuICAgIH1cbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi93aXRoRGF0YS5qcyJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBRUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUNBOzs7Ozs7O0FBQ0E7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQXlDQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFHQTtBQUNBO0FBY0E7QUFDQTtBQUNBOzs7QUFJQTtBQUdBO0FBSkE7QUFEQTtBQUtBO0FBQUE7O0FBRUE7QUFBQTtBQUNBOztBQUVBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFEQTtBQUtBO0FBYkE7QUFKQTtBQUNBO0FBUkE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZGQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTs7O0FBd0JBO0FBQ0E7QUFTQTtBQUNBO0FBQUE7QUFBQTs7QUFDQTs7QUFDQTs7QUFHQTs7QUFFQTtBQUFBO0FBQ0E7QUFGQTtBQUZBO0FBRkE7QUFGQTtBQUNBO0FBRkE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFrQkE7QUFDQTtBQVdBO0FBQ0E7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQURBO0FBSkE7QUFDQTtBQUZBO0FBRkE7QUFDQTtBQUZBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN6Q0E7QUFDQTtBQXhCQTtBQUNBO0FBQUE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBOztBQUdBO0FBQ0E7QUFDQTtBQUlBO0FBTEE7QUFGQTtBQUZBOzs7QUFXQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUExQkE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQ0E7O0FBR0E7QUFBQTtBQUlBO0FBSUE7OztBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTs7QUFWQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFBQTtBQUFBO0FBTUE7QUFOQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBUEE7QUFDQTtBQVNBO0FBQ0E7QUFYQTtBQUNBO0FBVUE7QUFYQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBWUE7QUFDQTtBQURBO0FBWkE7QUFDQTtBQURBO0FBaUJBO0FBakJBO0FBQUE7QUFrQkE7QUFDQTtBQW5CQTtBQUFBO0FBcUJBO0FBQ0E7QUF0QkE7QUFBQTtBQUFBO0FBMEJBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQTlCQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBb0NBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQTFDQTtBQUNBO0FBNENBO0FBQ0E7QUFDQTs7QUFDQTtBQUFBO0FBREE7QUFBQTtBQUNBO0FBaERBOztBQUFBO0FBc0RBO0FBQ0E7QUF2REE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQTJEQTtBQTNEQTtBQUNBO0FBMERBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUEvREE7QUFDQTs7QUFEQTtBQWtFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFHQTtBQUhBO0FBQUE7O0FBdEVBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        