"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getToursMainpage = getToursMainpage;

var _config = require("../config");

var _fn = require("../fn");

var _parsers = require("../parsers");

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getToursMainpage(_x) {
  return _getToursMainpage.apply(this, arguments);
}

function _getToursMainpage() {
  _getToursMainpage = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(props) {
    var country, _props$city, city, other, data;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // props = { country, city, month, season, budget (required), currency (require) }
            country = props.country, _props$city = props.city, city = _props$city === void 0 ? '' : _props$city, other = _objectWithoutProperties(props, ["country", "city"]);
            data = null;

            if (!(country && city)) {
              _context.next = 8;
              break;
            }

            _context.next = 5;
            return (0, _fn.call)("".concat(_config.endpoints.toursMainPage, "/").concat(country, "/").concat(city), {
              query: other
            });

          case 5:
            data = _context.sent;
            _context.next = 11;
            break;

          case 8:
            _context.next = 10;
            return (0, _fn.call)("".concat(_config.endpoints.toursMainPage, "/").concat(country), {
              query: other
            });

          case 10:
            data = _context.sent;

          case 11:
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

          case 23:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getToursMainpage.apply(this, arguments);
}