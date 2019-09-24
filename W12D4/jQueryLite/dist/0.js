(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! exports provided: DOMNodeCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DOMNodeCollection\", function() { return DOMNodeCollection; });\nclass DOMNodeCollection {\n  constructor(array) {\n    this.nodes = array;\n  }\n\n  html(string) {\n    if (string) {\n      this.nodes.forEach(node => {\n        node.innerHTML = string;\n      })\n      return this.nodes;\n    } else {\n      return this.nodes[0].innerHTML;\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ })

}]);