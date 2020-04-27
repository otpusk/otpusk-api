"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
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
    return _landing.getToursMainpage;
  }
});
Object.defineProperty(exports, "getHotToursMainpage", {
  enumerable: true,
  get: function get() {
    return _landing.getHotToursMainpage;
  }
});
Object.defineProperty(exports, "getGuidePage", {
  enumerable: true,
  get: function get() {
    return _landing.getGuidePage;
  }
});
Object.defineProperty(exports, "getTourTypeMainpage", {
  enumerable: true,
  get: function get() {
    return _landing.getTourTypeMainpage;
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

var _countries = require("./methods/countries");

var _landing = require("./methods/landing");

var _cities = require("./methods/cities");

var _meta = require("./methods/meta");