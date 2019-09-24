/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DOMNodeCollection; });\nclass DOMNodeCollection {\n  constructor(array) {\n    this.nodes = array;\n    this.firstElement = this.nodes[0];\n  }\n\n  html(string) {\n    if (string != undefined) {\n      this.each(string => {\n        node.innerHTML = string;\n      });\n      return this.nodes;\n    } else {\n      return this.firstElement.innerHTML;\n    }\n  }\n\n  empty() {\n    this.html(\"\");\n  }\n\n  append(content) {\n    this.each(node => {\n      if (content instanceof DOMNodeCollection) {\n        content.each(inputNode => node.appendChild(inputNode));\n      } else if (content instanceof Element) {\n\n      } else {\n        node.innerHTML += content;\n      }\n    });\n    return this.nodes;\n  }\n\n  each(callback) {\n    this.nodes.forEach(ele => callback(ele));\n  }\n\n  attr(attrName, value) {\n    if (value === undefined) {\n      return this.firstElement.getAttribute(attrName);\n    } else {\n      this.each(node => node.setAttribute(attrName, value));\n    }\n  }\n\n  addClass(className) {\n    this.each(node => node.classList.add(className));\n  }\n\n  removeClass(className) {\n    this.each(node => node.classList.remove(className));\n  }\n\n  children() {\n    let childArr = [];\n    this.each(node => childArr.push(node.children));\n    return new DOMNodeCollection(childArr);\n  }\n  \n  parent() {\n    let parentArr = [];\n    this.each(node => parentArr.push(node.parentElement));\n    return new DOMNodeCollection(parentArr);\n  }\n\n  find(selector) {\n    let foundArr = [];\n    this.each(node=> foundArr.push(node.querySelectorall(selector)));\n    return new DOMNodeCollection(foundArr);\n  }\n\n  remove() {\n    this.each( node => node.remove());\n  }\n\n  on(eventType, callback) {\n    this.each(node => {\n      node.callback = callback;\n      node.addEventListener(eventType, callback);\n    });\n  }\n\n  off(eventType) {\n    this.each(node => node.removeEventListener(eventType, node.callback))\n  }\n\n  extend(accum, ...args) {\n    args.forEach(hash => {\n      for (let [key, value] of Object.entries(hash)) {\n        accum[key] = value;\n      }\n    })\n    return accum;\n  }\n}\n\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_node_collection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom_node_collection.js */ \"./src/dom_node_collection.js\");\n\n\nlet funkArr = [];\nwindow.$l = function (oneArg, funk) {\n  if (funk !== undefined) {\n    funkArr.push(funk);\n    while (document.readyState !== 'loading' && funkArr.length > 0) {\n      let thisFunk = funkArr.pop();\n      thisFunk();\n    }\n  }\n  if (oneArg instanceof HTMLElement) {\n    return new _dom_node_collection_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](Array.from(oneArg));\n  } else {\n    return new _dom_node_collection_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](Array.from(document.querySelectorAll(oneArg)));\n  }\n\n}\n\nwindow.$l.extend = function(accum, ...args) {\n  args.forEach(hash => {\n    for (let [key, value] of Object.entries(hash)) {\n      accum[key] = value;\n    }\n  })\n  \n  return accum;\n}\n\nwindow.$l.ajax = function(optionsHash = {}) {\n  let optionsRequest = window.$l.extend(ajaxDefaults, optionsHash);\n\n  let xhr = new XMLHttpRequest();\n\n  xhr.open(optionsRequest[method], optionsRequest[url]);\n\n  xhr.onload = optionsRequest[success];\n\n  xhr.send(optionsRequest);\n}\n\nconst ajaxDefaults = {\n  success: function(){console.log(200)},\n  error: function() {console.log(404)},\n  url: window.location,\n  method:'GET',\n  data: 'PlainObject',\n  contentType: 'application/x-www-form-urlencoded; charset=UTF-8'\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });