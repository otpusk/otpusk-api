"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.call = call;

var _isomorphicFetch = _interopRequireDefault(require("isomorphic-fetch"));

var _fetchJsonp = _interopRequireDefault(require("fetch-jsonp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Convert object to ulr query string
 *
 * @param {Object} params query object
 *
 * @returns {string} query stirng
 */
function createQueryStringFromObject(params) {
  var convertScalar = function convertScalar(query, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        k = _ref2[0],
        v = _ref2[1];

    return [].concat(_toConsumableArray(query), ["".concat(k, "=").concat(encodeURIComponent(v))]);
  };

  var convertArray = function convertArray(query, _ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        k = _ref4[0],
        v = _ref4[1];

    return [].concat(_toConsumableArray(query), _toConsumableArray(v.map(function (entry) {
      return "".concat(k, "[]=").concat(encodeURIComponent(entry));
    })));
  };

  var convertObject = function convertObject(query, _ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
        key = _ref6[0],
        value = _ref6[1];

    var nextQuery = query;

    for (var _i2 = 0, _Object$entries = Object.entries(value); _i2 < _Object$entries.length; _i2++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
          sk = _Object$entries$_i[0],
          sv = _Object$entries$_i[1];

      nextQuery = getConverter(sv)(nextQuery, ["".concat(key, "[").concat(sk, "]"), sv]);
    }

    return nextQuery;
  };

  var getConverter = function getConverter(v) {
    return _typeof(v) !== 'object' ? convertScalar : Array.isArray(v) ? convertArray : convertObject;
  };

  var convertParam = function convertParam(query, _ref7) {
    var _ref8 = _slicedToArray(_ref7, 2),
        key = _ref8[0],
        value = _ref8[1];

    return getConverter(value)(query, [key, value]);
  };

  return Object.entries(params).reduce(convertParam, []).join('&');
}

function call(_x) {
  return _call.apply(this, arguments);
}

function _call() {
  _call = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(endpoint) {
    var _ref9,
        _ref9$query,
        query,
        _ref9$body,
        body,
        _ref9$jsonp,
        jsonp,
        request,
        fetchfn,
        response,
        data,
        _args = arguments;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref9 = _args.length > 1 && _args[1] !== undefined ? _args[1] : {}, _ref9$query = _ref9.query, query = _ref9$query === void 0 ? {} : _ref9$query, _ref9$body = _ref9.body, body = _ref9$body === void 0 ? null : _ref9$body, _ref9$jsonp = _ref9.jsonp, jsonp = _ref9$jsonp === void 0 ? false : _ref9$jsonp;
            request = "".concat(endpoint, "?").concat(createQueryStringFromObject(query));
            fetchfn = jsonp ? _fetchJsonp["default"] : _isomorphicFetch["default"];
            _context.next = 5;
            return fetchfn(request, {
              method: body ? 'POST' : 'GET',
              body: body
            });

          case 5:
            response = _context.sent;

            if (!(response.status >= 300)) {
              _context.next = 8;
              break;
            }

            throw new Error("Error while performing request ".concat(endpoint));

          case 8:
            _context.next = 10;
            return response.json();

          case 10:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _call.apply(this, arguments);
}