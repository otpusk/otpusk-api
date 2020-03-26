"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "getGuidePage", {
  enumerable: true,
  get: function get() {
    return _guidePage.getGuidePage;
  }
});
Object.defineProperty(exports, "getCountries", {
  enumerable: true,
  get: function get() {
    return _countries.getCountries;
  }
});
Object.defineProperty(exports, "getToursMainpage", {
  enumerable: true,
  get: function get() {
    return _mainpage.getToursMainpage;
  }
});
Object.defineProperty(exports, "getCities", {
  enumerable: true,
  get: function get() {
    return _cities.getCities;
  }
});
Object.defineProperty(exports, "getToursMainpageMeta", {
  enumerable: true,
  get: function get() {
    return _meta.getToursMainpageMeta;
  }
});
Object.defineProperty(exports, "getGuidePageMeta", {
  enumerable: true,
  get: function get() {
    return _meta.getGuidePageMeta;
  }
});

var _guidePage = require("./methods/guidePage");

var _countries = require("./methods/countries");

var _mainpage = require("./methods/mainpage");

var _cities = require("./methods/cities");

var _meta = require("./methods/meta");