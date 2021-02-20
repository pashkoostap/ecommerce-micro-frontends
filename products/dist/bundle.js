/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/faker/lib/commerce.js":
/*!********************************************!*\
  !*** ./node_modules/faker/lib/commerce.js ***!
  \********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 128:0-17 */
/***/ ((module) => {

eval("/**\n *\n * @namespace faker.commerce\n */\nvar Commerce = function (faker) {\n  var self = this;\n\n  /**\n   * color\n   *\n   * @method faker.commerce.color\n   */\n  self.color = function() {\n      return faker.random.arrayElement(faker.definitions.commerce.color);\n  };\n\n  /**\n   * department\n   *\n   * @method faker.commerce.department\n   */\n  self.department = function() {\n      return faker.random.arrayElement(faker.definitions.commerce.department);\n  };\n\n  /**\n   * productName\n   *\n   * @method faker.commerce.productName\n   */\n  self.productName = function() {\n      return faker.commerce.productAdjective() + \" \" +\n              faker.commerce.productMaterial() + \" \" +\n              faker.commerce.product();\n  };\n\n  /**\n   * price\n   *\n   * @method faker.commerce.price\n   * @param {number} min\n   * @param {number} max\n   * @param {number} dec\n   * @param {string} symbol\n   *\n   * @return {string}\n   */\n  self.price = function(min, max, dec, symbol) {\n      min = min || 1;\n      max = max || 1000;\n      dec = dec === undefined ? 2 : dec;\n      symbol = symbol || '';\n\n      if (min < 0 || max < 0) {\n          return symbol + 0.00;\n      }\n\n      var randValue = faker.random.number({ max: max, min: min });\n\n      return symbol + (Math.round(randValue * Math.pow(10, dec)) / Math.pow(10, dec)).toFixed(dec);\n  };\n\n  /*\n  self.categories = function(num) {\n      var categories = [];\n\n      do {\n          var category = faker.random.arrayElement(faker.definitions.commerce.department);\n          if(categories.indexOf(category) === -1) {\n              categories.push(category);\n          }\n      } while(categories.length < num);\n\n      return categories;\n  };\n\n  */\n  /*\n  self.mergeCategories = function(categories) {\n      var separator = faker.definitions.separator || \" &\";\n      // TODO: find undefined here\n      categories = categories || faker.definitions.commerce.categories;\n      var commaSeparated = categories.slice(0, -1).join(', ');\n\n      return [commaSeparated, categories[categories.length - 1]].join(separator + \" \");\n  };\n  */\n\n  /**\n   * productAdjective\n   *\n   * @method faker.commerce.productAdjective\n   */\n  self.productAdjective = function() {\n      return faker.random.arrayElement(faker.definitions.commerce.product_name.adjective);\n  };\n\n  /**\n   * productMaterial\n   *\n   * @method faker.commerce.productMaterial\n   */\n  self.productMaterial = function() {\n      return faker.random.arrayElement(faker.definitions.commerce.product_name.material);\n  };\n\n  /**\n   * product\n   *\n   * @method faker.commerce.product\n   */\n  self.product = function() {\n      return faker.random.arrayElement(faker.definitions.commerce.product_name.product);\n  };\n\n  /**\n   * productDescription\n   *\n   * @method faker.commerce.productDescription\n   */\n  self.productDescription = function() {\n      return faker.random.arrayElement(faker.definitions.commerce.product_description);\n  };\n\n  return self;\n};\n\nmodule['exports'] = Commerce;\n\n\n//# sourceURL=webpack://products/./node_modules/faker/lib/commerce.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var faker_lib_commerce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faker/lib/commerce */ \"./node_modules/faker/lib/commerce.js\");\n/* harmony import */ var faker_lib_commerce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faker_lib_commerce__WEBPACK_IMPORTED_MODULE_0__);\n;\n\nconst ul = document.createElement('ul');\n\nfor (let i = 0; i < 3; i++) {\n  const productName = faker_lib_commerce__WEBPACK_IMPORTED_MODULE_0__.productName();\n  const element = document.createElement('li');\n  element.innerText = productName;\n\n  ul.appendChild(element);\n}\n\ndocument.body = null;\ndocument.body.appendChild(ul);\n\n\n//# sourceURL=webpack://products/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;