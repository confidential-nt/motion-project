/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/composition/image.ts":
/*!**********************************!*\
  !*** ./src/composition/image.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Image = /** @class */ (function () {\n    function Image() {\n        this.ItemList = document.querySelector(\".items\");\n        this.items = [];\n        Image.KEY = \"IMAGE\";\n    }\n    Image.prototype.run = function () {\n        this.inputs = document.querySelectorAll(\".modal-input input\");\n        this.submitBtn = document.querySelector(\".add-btn\");\n        this.turnOnInputEvent();\n    };\n    Image.prototype.turnOnInputEvent = function () {\n        var _a;\n        // this.inputs.forEach((input) =>\n        //   input.addEventListener(\"submit\", this.handleSubmit.bind(this))\n        // );\n        (_a = this.submitBtn) === null || _a === void 0 ? void 0 : _a.addEventListener(\"click\", this.handleSubmit.bind(this));\n    };\n    Image.prototype.handleSubmit = function (e) {\n        var _a;\n        var preItem = localStorage.getItem(Image.KEY);\n        if (preItem) {\n            (_a = this.items).push.apply(_a, JSON.parse(preItem));\n        }\n        var obj = {\n            title: this.inputs[0].value,\n            url: this.inputs[1].value,\n        };\n        if (!obj.title || !obj.url)\n            return;\n        this.items.push(obj);\n        localStorage.setItem(Image.KEY, JSON.stringify(this.items));\n        for (var _i = 0, _b = this.inputs; _i < _b.length; _i++) {\n            var input = _b[_i];\n            input.value = \"\";\n        }\n        this.draw(obj);\n    };\n    Image.prototype.draw = function (item) {\n        var _a;\n        (_a = this.ItemList) === null || _a === void 0 ? void 0 : _a.innerHTML = this.items\n            .map(function (item) { return \"  <div class=\\\"item item-media\\\">\\n    <div class=\\\"item-title\\\">\\n      <h1>\" + item.title + \"</h1>\\n    </div>\\n    <div class=\\\"image\\\">\\n      <img src=\" + item.url + \" alt=\" + item.title + \"/>\\n    </div>\\n    <button class=\\\"delete\\\">\\u274C</button>\\n  </div>\"; })\n            .join(\"\");\n    };\n    return Image;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Image);\n\n\n//# sourceURL=webpack://motion/./src/composition/image.ts?");

/***/ }),

/***/ "./src/composition/modal.ts":
/*!**********************************!*\
  !*** ./src/composition/modal.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Modal = /** @class */ (function () {\n    function Modal(Image) {\n        this.Image = Image;\n    }\n    Modal.prototype.hideModal = function () {\n        var _a, _b;\n        (_a = Modal.modalContainer) === null || _a === void 0 ? void 0 : _a.classList.remove(\"show\");\n        (_b = Modal.closeBtn) === null || _b === void 0 ? void 0 : _b.removeEventListener(\"click\", this.hideModal.bind(this));\n    };\n    Modal.prototype.displayModal = function (media) {\n        var _a, _b;\n        Modal.modalContainer = document.querySelector(\".modal-container\");\n        (_a = Modal.modalContainer) === null || _a === void 0 ? void 0 : _a.classList.add(\"show\");\n        Modal.closeBtn = document.querySelector(\".modal-close\");\n        (_b = Modal.closeBtn) === null || _b === void 0 ? void 0 : _b.addEventListener(\"click\", this.hideModal.bind(this));\n        var inputs = document.querySelectorAll(\".modal-input input\");\n        inputs.forEach(function (input) { return (input.value = \"\"); });\n        var textTop = document.querySelector(\".input-text-top\");\n        var textBtm = document.querySelector(\".input-text-btm\");\n        if (textTop === null || textBtm === null) {\n            return;\n        }\n        textTop.textContent = \"Title\";\n        inputs[0].setAttribute(\"name\", \"title\");\n        switch (media) {\n            case \"image\":\n                textBtm.textContent = \"URL\";\n                inputs[1].setAttribute(\"name\", \"url\");\n                this.Image.run();\n                break;\n            case \"video\":\n                textBtm.textContent = \"URL\";\n                inputs[1].setAttribute(\"name\", \"url\");\n                break;\n            case \"note\":\n                textBtm.textContent = \"Body\";\n                inputs[1].setAttribute(\"name\", \"body\");\n                break;\n            case \"task\":\n                textBtm.textContent = \"Body\";\n                inputs[1].setAttribute(\"name\", \"body\");\n                break;\n        }\n    };\n    return Modal;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);\n\n\n//# sourceURL=webpack://motion/./src/composition/modal.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _composition_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./composition/modal */ \"./src/composition/modal.ts\");\n/* harmony import */ var _composition_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./composition/image */ \"./src/composition/image.ts\");\n\n\nvar App = /** @class */ (function () {\n    function App(Modal) {\n        this.Modal = Modal;\n        App.buttons = document.querySelectorAll(\".nav-btn\");\n    }\n    App.prototype.run = function () {\n        this.handleBtnClickEvent();\n        this.drawItem();\n    };\n    App.prototype.handleBtnClickEvent = function () {\n        var _this = this;\n        var _a;\n        (_a = App.buttons) === null || _a === void 0 ? void 0 : _a.forEach(function (btn) {\n            return btn.addEventListener(\"click\", _this.handleModal.bind(_this));\n        });\n    };\n    App.prototype.handleModal = function (e) {\n        var func = e.target.dataset.func;\n        this.Modal.displayModal(func);\n    };\n    App.prototype.drawItem = function () {\n        var images = JSON.parse(localStorage.getItem(\"IMAGE\"));\n        var itemContainer = document.querySelector(\".items\");\n        itemContainer === null || itemContainer === void 0 ? void 0 : itemContainer.innerHTML = images\n            .map(function (item) { return \"  <div class=\\\"item item-media\\\">\\n    <div class=\\\"item-title\\\">\\n      <h1>\" + item.title + \"</h1>\\n    </div>\\n    <div class=\\\"image\\\">\\n      <img src=\" + item.url + \" alt=\" + item.title + \"/>\\n    </div>\\n    <button class=\\\"delete\\\">\\u274C</button>\\n  </div>\"; })\n            .join(\"\");\n    };\n    return App;\n}());\nvar image = new _composition_image__WEBPACK_IMPORTED_MODULE_1__.default();\nvar modal = new _composition_modal__WEBPACK_IMPORTED_MODULE_0__.default(image);\nvar app = new App(modal);\napp.run();\n\n\n//# sourceURL=webpack://motion/./src/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;