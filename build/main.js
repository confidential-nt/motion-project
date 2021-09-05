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

/***/ "./src/composition/input.ts":
/*!**********************************!*\
  !*** ./src/composition/input.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Input = /** @class */ (function () {\n    function Input() {\n        this.ItemList = document.querySelector(\".items\");\n        this.items = [];\n    }\n    Input.prototype.run = function (type) {\n        this.inputs = document.querySelectorAll(\".modal-input input\");\n        this.submitBtn = document.querySelector(\".add-btn\");\n        this.type = type;\n        this.turnOnInputEvent();\n    };\n    Input.prototype.turnOnInputEvent = function () {\n        var _a;\n        (_a = this.submitBtn) === null || _a === void 0 ? void 0 : _a.addEventListener(\"click\", this.handleSubmit.bind(this));\n    };\n    Input.prototype.handleSubmit = function (e) {\n        var _a;\n        var _b, _c, _d, _e;\n        if (!this.items.length) {\n            var preItem = localStorage.getItem(Input.KEY);\n            if (preItem) {\n                (_a = this.items).push.apply(_a, JSON.parse(preItem));\n            }\n        }\n        var url = this.inputs[1].dataset.type === \"url\" ? this.inputs[1].value : undefined;\n        var body = this.inputs[1].dataset.type === \"body\" ? this.inputs[1].value : undefined;\n        var obj = {\n            title: this.inputs[0].value,\n            url: url,\n            body: body,\n            type: this.type,\n        };\n        if (!obj.title)\n            return;\n        if (obj.type === \"image\" && !((_b = obj.url) === null || _b === void 0 ? void 0 : _b.includes(\"data:image\")))\n            return;\n        if (obj.type === \"video\") {\n            if (((_c = obj.url) === null || _c === void 0 ? void 0 : _c.includes(\"youtube\")) || ((_d = obj.url) === null || _d === void 0 ? void 0 : _d.includes(\"youtu.be\"))) {\n            }\n            else\n                return;\n        }\n        if (obj.type === \"video\" && !((_e = obj.url) === null || _e === void 0 ? void 0 : _e.includes(\"embed\"))) {\n            obj.url = \"https://www.youtube.com/embed/\" + obj.url.slice(17);\n        }\n        this.items.push(obj);\n        localStorage.setItem(Input.KEY, JSON.stringify(this.items));\n        for (var _i = 0, _f = this.inputs; _i < _f.length; _i++) {\n            var input = _f[_i];\n            input.value = \"\";\n        }\n        this.draw();\n    };\n    Input.prototype.draw = function () {\n        var _a;\n        var mediaHtml;\n        (_a = this.ItemList) === null || _a === void 0 ? void 0 : _a.innerHTML = this.items\n            .map(function (item) {\n            var itemType = item.body ? \"item-text\" : \"item-media\";\n            if (item.type === \"image\") {\n                mediaHtml = \"<img src=\" + item.url + \" alt=\" + item.title + \"/>\";\n            }\n            else if (item.type === \"video\") {\n                mediaHtml = \"<iframe\\n          width=\\\"440\\\"\\n          height=\\\"200\\\"\\n          src=\" + item.url + \"\\n          title=\\\"YouTube video player\\\"\\n          frameborder=\\\"0\\\"\\n          allow=\\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\\\"\\n          allowfullscreen\\n        ></iframe>\";\n            }\n            else if (item.type === \"task\") {\n                mediaHtml = \"<input type=\\\"checkbox\\\" id=\" + item.type + \"/>\\n          <label for=\" + item.type + \">\" + item.body + \"</label>\\n          \";\n            }\n            else {\n                mediaHtml = \"<p>\" + item.body + \"</p>\";\n            }\n            return \"  <div class=\\\"item \" + itemType + \"\\\">\\n    <div class=\\\"item-title\\\">\\n      <h1>\" + item.title + \"</h1>\\n    </div>\\n    <div class=\" + (item.type === \"image\" ? \"image\" : item.type === \"video\" ? \"video\" : \"body\") + \">\\n      \" + mediaHtml + \"\\n    </div>\\n    <button class=\\\"delete\\\">\\u274C</button>\\n  </div>\";\n        })\n            .join(\"\");\n    };\n    Input.KEY = \"ITEMS\";\n    return Input;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);\n\n\n//# sourceURL=webpack://motion/./src/composition/input.ts?");

/***/ }),

/***/ "./src/composition/modal.ts":
/*!**********************************!*\
  !*** ./src/composition/modal.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Modal = /** @class */ (function () {\n    function Modal(Input) {\n        this.Input = Input;\n    }\n    Modal.prototype.hideModal = function () {\n        var _a, _b;\n        (_a = Modal.modalContainer) === null || _a === void 0 ? void 0 : _a.classList.remove(\"show\");\n        (_b = Modal.closeBtn) === null || _b === void 0 ? void 0 : _b.removeEventListener(\"click\", this.hideModal.bind(this));\n    };\n    Modal.prototype.displayModal = function (media) {\n        var _a, _b;\n        Modal.modalContainer = document.querySelector(\".modal-container\");\n        (_a = Modal.modalContainer) === null || _a === void 0 ? void 0 : _a.classList.add(\"show\");\n        Modal.closeBtn = document.querySelector(\".modal-close\");\n        (_b = Modal.closeBtn) === null || _b === void 0 ? void 0 : _b.addEventListener(\"click\", this.hideModal.bind(this));\n        var inputs = document.querySelectorAll(\".modal-input input\");\n        inputs.forEach(function (input) { return (input.value = \"\"); });\n        var textTop = document.querySelector(\".input-text-top\");\n        var textBtm = document.querySelector(\".input-text-btm\");\n        if (textTop === null || textBtm === null) {\n            return;\n        }\n        textTop.textContent = \"Title\";\n        inputs[0].setAttribute(\"name\", \"title\");\n        switch (media) {\n            case \"image\":\n                textBtm.textContent = \"URL\";\n                inputs[1].setAttribute(\"name\", \"url\");\n                inputs[1].dataset.type = \"url\";\n                this.Input.run(\"image\");\n                break;\n            case \"video\":\n                textBtm.textContent = \"URL\";\n                inputs[1].setAttribute(\"name\", \"url\");\n                inputs[1].dataset.type = \"url\";\n                this.Input.run(\"video\");\n                break;\n            case \"note\":\n                textBtm.textContent = \"Body\";\n                inputs[1].setAttribute(\"name\", \"body\");\n                inputs[1].dataset.type = \"body\";\n                this.Input.run(\"note\");\n                break;\n            case \"task\":\n                textBtm.textContent = \"Body\";\n                inputs[1].setAttribute(\"name\", \"body\");\n                inputs[1].dataset.type = \"body\";\n                this.Input.run(\"task\");\n                break;\n        }\n    };\n    return Modal;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);\n\n\n//# sourceURL=webpack://motion/./src/composition/modal.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _composition_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./composition/modal */ \"./src/composition/modal.ts\");\n/* harmony import */ var _composition_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./composition/input */ \"./src/composition/input.ts\");\n\n\nvar App = /** @class */ (function () {\n    function App(Modal) {\n        this.Modal = Modal;\n        App.buttons = document.querySelectorAll(\".nav-btn\");\n    }\n    App.prototype.run = function () {\n        this.handleBtnClickEvent();\n        this.drawItem();\n    };\n    App.prototype.handleBtnClickEvent = function () {\n        var _this = this;\n        var _a;\n        (_a = App.buttons) === null || _a === void 0 ? void 0 : _a.forEach(function (btn) {\n            return btn.addEventListener(\"click\", _this.handleModal.bind(_this));\n        });\n    };\n    App.prototype.handleModal = function (e) {\n        var func = e.target.dataset.func;\n        this.Modal.displayModal(func);\n    };\n    App.prototype.drawItem = function () {\n        var items = JSON.parse(localStorage.getItem(\"ITEMS\"));\n        var itemContainer = document.querySelector(\".items\");\n        var mediaHtml;\n        itemContainer === null || itemContainer === void 0 ? void 0 : itemContainer.innerHTML = items\n            .map(function (item) {\n            var itemType = item.body ? \"item-text\" : \"item-media\";\n            if (item.type === \"image\") {\n                mediaHtml = \"<img src=\" + item.url + \" alt=\" + item.title + \"/>\";\n            }\n            else if (item.type === \"video\") {\n                mediaHtml = \"<iframe\\n          width=\\\"440\\\"\\n          height=\\\"200\\\"\\n          src=\" + item.url + \"\\n          title=\\\"YouTube video player\\\"\\n          frameborder=\\\"0\\\"\\n          allow=\\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\\\"\\n          allowfullscreen\\n        ></iframe>\";\n            }\n            else if (item.type === \"task\") {\n                mediaHtml = \"<input type=\\\"checkbox\\\" id=\" + item.type + \"/>\\n          <label for=\" + item.type + \">\" + item.body + \"</label>\\n          \";\n            }\n            else {\n                mediaHtml = \"<p>\" + item.body + \"</p>\";\n            }\n            return \"  <div class=\\\"item \" + itemType + \"\\\">\\n      <div class=\\\"item-title\\\">\\n        <h1>\" + item.title + \"</h1>\\n      </div>\\n      <div class=\" + (item.type === \"image\"\n                ? \"image\"\n                : item.type === \"video\"\n                    ? \"video\"\n                    : \"body\") + \">\\n        \" + mediaHtml + \"\\n      </div>\\n      <button class=\\\"delete\\\">\\u274C</button>\\n    </div>\";\n        })\n            .join(\"\");\n    };\n    return App;\n}());\nvar input = new _composition_input__WEBPACK_IMPORTED_MODULE_1__.default();\nvar modal = new _composition_modal__WEBPACK_IMPORTED_MODULE_0__.default(input);\nvar app = new App(modal);\napp.run();\n\n\n//# sourceURL=webpack://motion/./src/main.ts?");

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