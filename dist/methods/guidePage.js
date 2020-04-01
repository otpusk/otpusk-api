"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGuidePage = getGuidePage;

var _config = require("../config");

var _fn = require("../fn");

var _parsers = require("../parsers");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getGuidePage(_x) {
  return _getGuidePage.apply(this, arguments);
}

function _getGuidePage() {
  _getGuidePage = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(countryAlias) {
    var data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _fn.call)("".concat(_config.endpoints.guidePage, "/").concat(countryAlias));

          case 2:
            data = _context.sent;
            data.hot = (0, _parsers.parseTours)(data.hot);
            data.qualityPrice = (0, _parsers.parseTours)(data.qualityPrice);
            data.cheapest = (0, _parsers.parseTours)(data.cheapest);
            data.friends = (0, _parsers.parseTours)(data.friends);
            data.romantic = (0, _parsers.parseTours)(data.romantic);
            data.family = (0, _parsers.parseTours)(data.family);
            data.peaceful = (0, _parsers.parseTours)(data.peaceful);
            data.catalogue = (0, _parsers.parseCatalogueTours)(data);
            data.sport = (0, _parsers.parseSportTours)(data);
            data.bestHotels = (0, _parsers.parseBestHotels)(data);
            data.excursions = (0, _parsers.parseExcursions)(data);
            return _context.abrupt("return", data);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getGuidePage.apply(this, arguments);
}