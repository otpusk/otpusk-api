"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCities = getCities;

var _config = require("../config");

var _fn = require("../fn");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getCities(_x) {
  return _getCities.apply(this, arguments);
}

function _getCities() {
  _getCities = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var country, _ref$city, city, data;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            country = _ref.country, _ref$city = _ref.city, city = _ref$city === void 0 ? '' : _ref$city;
            _context.next = 3;
            return (0, _fn.call)(_config.endpoints.cities, {
              query: {
                country: country,
                city: city
              }
            });

          case 3:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getCities.apply(this, arguments);
}