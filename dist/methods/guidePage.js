"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGuidePage = getGuidePage;

var _config = require("../config");

var _fn = require("../fn");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getGuidePage(_x) {
  return _getGuidePage.apply(this, arguments);
}

function _getGuidePage() {
  _getGuidePage = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(countryId) {
    var data, _data$catalogue, dataCatalogue, _ref, _ref2, _ref2$, dataSport, catalogue, sport;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _fn.call)(_config.endpoints.guidePage, {
              query: {
                country: countryId
              }
            });

          case 2:
            data = _context.sent;
            _data$catalogue = data.catalogue, dataCatalogue = _data$catalogue === void 0 ? {} : _data$catalogue;
            _ref = (data === null || data === void 0 ? void 0 : data.sport) || [], _ref2 = _slicedToArray(_ref, 1), _ref2$ = _ref2[0], dataSport = _ref2$ === void 0 ? {} : _ref2$;
            catalogue = [];
            sport = [];
            dataCatalogue && Object.entries(dataCatalogue).forEach(function (_ref3) {
              var _ref4 = _slicedToArray(_ref3, 2),
                  category = _ref4[0],
                  isExist = _ref4[1];

              catalogue.push({
                category: category,
                isExist: Boolean(Number(isExist))
              });
            });
            dataSport && Object.entries(dataSport).forEach(function (_ref5) {
              var _ref6 = _slicedToArray(_ref5, 2),
                  category = _ref6[0],
                  isExist = _ref6[1];

              sport.push({
                category: category,
                isExist: Boolean(Number(isExist))
              });
            });
            data.catalogue = catalogue;
            data.sport = sport;
            return _context.abrupt("return", data);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getGuidePage.apply(this, arguments);
}