"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.escapeHtml = escapeHtml;
exports.concatEndpointParameters = exports.formatLandingPage = void 0;

var _parsers = require("./parsers");

function escapeHtml(unsafe) {
  var unsafeCharacters = [{
    "char": "\r\n",
    unicode: "<br />"
  }, {
    "char": "\n",
    unicode: "<br />"
  }, {
    "char": "\\\\",
    unicode: ''
  }, {
    "char": "&",
    unicode: "&amp;"
  }, {
    "char": '"',
    unicode: "&quot;"
  }, {
    "char": '“',
    unicode: "&quot;"
  }, {
    "char": '”',
    unicode: "&quot;"
  }, {
    "char": "'",
    unicode: "&#039;"
  }, {
    "char": "«",
    unicode: "&#171;"
  }, {
    "char": "»",
    unicode: "&#187;"
  }, {
    "char": '„',
    unicode: "&quot;"
  }, {
    "char": '	',
    unicode: ' '
  }];
  return unsafeCharacters.reduce(function (acc, _ref) {
    var _char = _ref["char"],
        unicode = _ref.unicode;
    return acc.replace(new RegExp(_char, "g"), unicode);
  }, unsafe);
}

var formatLandingPage = function formatLandingPage(data) {
  data.hot = (0, _parsers.parseTours)(data.hot);
  data.qualityPrice = (0, _parsers.parseTours)(data.qualityPrice);
  data.cheapest = (0, _parsers.parseTours)(data.cheapest);
  data.friends = (0, _parsers.parseTours)(data.friends);
  data.romantic = (0, _parsers.parseTours)(data.romantic);
  data.family = (0, _parsers.parseTours)(data.family);
  data.peaceful = (0, _parsers.parseTours)(data.peaceful);
  data.catalogue = (0, _parsers.parseCatalogueTours)(data.catalogue);
  data.sport = (0, _parsers.parseSportTours)(data.sport);
  data.bestHotels = (0, _parsers.parseBestHotels)(data.bestHotels);
  data.excursions = (0, _parsers.parseExcursions)(data.excursions);
  data.months_tours = (0, _parsers.parseSeasonsTours)(data.months_tours);
  data.seasons_tours = (0, _parsers.parseSeasonsTours)(data.seasons_tours);
  return data;
};

exports.formatLandingPage = formatLandingPage;

var concatEndpointParameters = function concatEndpointParameters(endpoint) {
  for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    params[_key - 1] = arguments[_key];
  }

  return "".concat(endpoint, "/").concat(params.filter(function (param) {
    return Boolean(param);
  }).join('/'));
};

exports.concatEndpointParameters = concatEndpointParameters;