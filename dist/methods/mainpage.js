"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMainpage = getMainpage;

var _config = require("../config");

var _fn = require("../fn");

var _parsers = require("../parsers");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getMainpage(_x) {
  return _getMainpage.apply(this, arguments);
}

function _getMainpage() {
  _getMainpage = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(props) {
    var data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _fn.call)(_config.endpoints.guidePage, {
              query: props
            });

          case 2:
            data = _context.sent;
            data.catalogue = (0, _parsers.parseCatalogueTours)(data);
            data.sport = (0, _parsers.parseSportTours)(data);
            data.bestHotels = (0, _parsers.parseBestHotels)(data);
            data.excursions = (0, _parsers.parseExcursions)(data);
            return _context.abrupt("return", data);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getMainpage.apply(this, arguments);
}