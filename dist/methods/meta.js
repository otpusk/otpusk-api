"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getToursMainpageMeta = getToursMainpageMeta;
exports.getGuidePageMeta = getGuidePageMeta;

var _config = require("../config");

var _fn = require("../fn");

var _helpers = require("../helpers");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getToursMainpageMeta(_x) {
  return _getToursMainpageMeta.apply(this, arguments);
}

function _getToursMainpageMeta() {
  _getToursMainpageMeta = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var country, city, season, _data, data;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            country = _ref.country, city = _ref.city, season = _ref.season;

            if (!season) {
              _context.next = 6;
              break;
            }

            _context.next = 4;
            return (0, _fn.call)((0, _helpers.concatEndpointParameters)(_config.endpoints.toursMainPageMetaBySeason, country, city, season));

          case 4:
            _data = _context.sent;
            return _context.abrupt("return", _data);

          case 6:
            _context.next = 8;
            return (0, _fn.call)((0, _helpers.concatEndpointParameters)(_config.endpoints.toursMainPageMeta, country, city));

          case 8:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getToursMainpageMeta.apply(this, arguments);
}

function getGuidePageMeta(_x2, _x3) {
  return _getGuidePageMeta.apply(this, arguments);
}

function _getGuidePageMeta() {
  _getGuidePageMeta = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(country, city) {
    var data;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _fn.call)((0, _helpers.concatEndpointParameters)(_config.endpoints.guidePageMeta, country, city));

          case 2:
            data = _context2.sent;
            return _context2.abrupt("return", data);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getGuidePageMeta.apply(this, arguments);
}