"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getToursMainpage = getToursMainpage;
exports.getHotToursMainpage = getHotToursMainpage;
exports.getGuidePage = getGuidePage;
exports.getTourTypeMainpage = getTourTypeMainpage;

var _config = require("../config");

var _fn = require("../fn");

var _helpers = require("../helpers");

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getMainpage = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(endpoint) {
    var props,
        _props$country,
        country,
        _props$city,
        city,
        other,
        data,
        _args = arguments;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            props = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
            // props = { country, city, month, season, budget (required), currency (require) }
            _props$country = props.country, country = _props$country === void 0 ? '' : _props$country, _props$city = props.city, city = _props$city === void 0 ? '' : _props$city, other = _objectWithoutProperties(props, ["country", "city"]);
            _context.next = 4;
            return (0, _fn.call)((0, _helpers.concatEndpointParameters)(endpoint, country, city), {
              query: other
            });

          case 4:
            data = _context.sent;
            return _context.abrupt("return", (0, _helpers.formatLandingPage)(data));

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getMainpage(_x) {
    return _ref.apply(this, arguments);
  };
}();

function getToursMainpage(_x2) {
  return _getToursMainpage.apply(this, arguments);
}

function _getToursMainpage() {
  _getToursMainpage = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(props) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return getMainpage(_config.endpoints.toursMainPage, props);

          case 2:
            return _context2.abrupt("return", _context2.sent);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getToursMainpage.apply(this, arguments);
}

function getHotToursMainpage(_x3) {
  return _getHotToursMainpage.apply(this, arguments);
}

function _getHotToursMainpage() {
  _getHotToursMainpage = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(props) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return getMainpage(_config.endpoints.hotToursMainPage, props);

          case 2:
            return _context3.abrupt("return", _context3.sent);

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getHotToursMainpage.apply(this, arguments);
}

function getGuidePage(_x4, _x5) {
  return _getGuidePage.apply(this, arguments);
}

function _getGuidePage() {
  _getGuidePage = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(country, city) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return getMainpage(_config.endpoints.guidePage, {
              country: country,
              city: city
            });

          case 2:
            return _context4.abrupt("return", _context4.sent);

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _getGuidePage.apply(this, arguments);
}

function getTourTypeMainpage(_x6) {
  return _getTourTypeMainpage.apply(this, arguments);
}

function _getTourTypeMainpage() {
  _getTourTypeMainpage = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(props) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return getMainpage(_config.endpoints.tourTypesMainPage, props);

          case 2:
            return _context5.abrupt("return", _context5.sent);

          case 3:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _getTourTypeMainpage.apply(this, arguments);
}