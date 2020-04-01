"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseExcursions = exports.parseBestHotels = exports.parseCatalogueTours = exports.parseTours = exports.parseSportTours = void 0;

var _helpers = require("../helpers");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var parseTours = function parseTours(tours) {
  return tours.map(function (tour) {
    return _objectSpread({}, tour, {
      name: (0, _helpers.escapeHtml)(tour.name)
    });
  });
};

exports.parseTours = parseTours;

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

var parseBestHotels = function parseBestHotels(data) {
  var _data$bestHotels = data.bestHotels,
      dataBestHotels = _data$bestHotels === void 0 ? {} : _data$bestHotels;
  var bestHotels = [];

  if (dataBestHotels) {
    Object.values(dataBestHotels).forEach(function (row) {
      if (row.length) {
        bestHotels.push(parseTours(row));
      }
    });
  }

  return bestHotels;
};

exports.parseBestHotels = parseBestHotels;

var parseExcursions = function parseExcursions(data) {
  var _data$excursions = data.excursions,
      dataExcursions = _data$excursions === void 0 ? [] : _data$excursions;

  if (dataExcursions) {
    return dataExcursions.map(function (excursion) {
      var _excursion$id = excursion.id,
          excursionId = _excursion$id === void 0 ? null : _excursion$id,
          _excursion$name = excursion.name,
          title = _excursion$name === void 0 ? '' : _excursion$name,
          _excursion$length = excursion.length,
          length = _excursion$length === void 0 ? null : _excursion$length,
          _excursion$transport = excursion.transport,
          transport = _excursion$transport === void 0 ? null : _excursion$transport,
          _excursion$deptCity = excursion.deptCity,
          departureCity = _excursion$deptCity === void 0 ? '' : _excursion$deptCity,
          _excursion$deptCityRd = excursion.deptCityRd,
          departureCityRd = _excursion$deptCityRd === void 0 ? '' : _excursion$deptCityRd,
          _excursion$uah = excursion.uah,
          uah = _excursion$uah === void 0 ? null : _excursion$uah,
          _excursion$usd = excursion.usd,
          usd = _excursion$usd === void 0 ? null : _excursion$usd,
          _excursion$eur = excursion.eur,
          eur = _excursion$eur === void 0 ? null : _excursion$eur,
          cities = excursion.cities,
          coverPhoto = excursion.desktop_gallery,
          mainCategory = excursion.mainType,
          _excursion$translit = excursion.translit,
          titleTranslit = _excursion$translit === void 0 ? '' : _excursion$translit;
      var destinations = cities.split(' - ');
      return {
        excursionId: excursionId,
        title: title,
        titleTranslit: titleTranslit,
        length: length && Number(length),
        transport: transport,
        departureCity: departureCity,
        departureCityRd: departureCityRd,
        prices: {
          usd: usd,
          eur: eur,
          uah: uah
        },
        coverPhoto: coverPhoto,
        destinations: destinations,
        mainCategory: mainCategory
      };
    });
  }

  return [];
};

exports.parseExcursions = parseExcursions;