"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.escapeHtml = escapeHtml;

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