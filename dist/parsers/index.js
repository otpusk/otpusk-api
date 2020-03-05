"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseCatalogueTours = exports.parseSportTours = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var parseSportTours = function parseSportTours(data) {
  var _ref = (data === null || data === void 0 ? void 0 : data.sport) || [],
      _ref2 = _slicedToArray(_ref, 1),
      _ref2$ = _ref2[0],
      dataSport = _ref2$ === void 0 ? {} : _ref2$;

  var sport = [];

  if (dataSport) {
    Object.entries(dataSport).forEach(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
          category = _ref4[0],
          isExist = _ref4[1];

      sport.push({
        category: category,
        isExist: Boolean(Number(isExist))
      });
    });
  }

  return sport;
};

exports.parseSportTours = parseSportTours;

var parseCatalogueTours = function parseCatalogueTours(data) {
  var _data$catalogue = data.catalogue,
      dataCatalogue = _data$catalogue === void 0 ? {} : _data$catalogue;
  var catalogue = [];

  if (dataCatalogue) {
    Object.entries(dataCatalogue).forEach(function (_ref5) {
      var _ref6 = _slicedToArray(_ref5, 2),
          category = _ref6[0],
          isExist = _ref6[1];

      catalogue.push({
        category: category,
        isExist: Boolean(Number(isExist))
      });
    });
  }

  return catalogue;
};

exports.parseCatalogueTours = parseCatalogueTours;