"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.endpoints = void 0;

var _jsCookie = _interopRequireDefault(require("js-cookie"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var host = _jsCookie["default"].get('excursion-api-host') || 'https://new.otpusk.com/api';
var endpoints = Object.freeze({
  mainpage: "".concat(host, "/tours/mainpage"),
  countries: "".concat(host, "/tours/countries"),
  cities: "".concat(host, "/tours/cities"),
  tourType: "".concat(host, "/tours/tour_type"),
  guidePage: "".concat(host, "/tours/guide_page")
});
exports.endpoints = endpoints;