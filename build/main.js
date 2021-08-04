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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (() => {

eval("\nvar App = /** @class */ (function () {\n    function App() {\n        this.buttons = document.querySelectorAll(\".nav-btn\");\n    }\n    App.prototype.run = function () {\n        this.handleBtnClickEvent();\n    };\n    App.prototype.handleBtnClickEvent = function () {\n        var _this = this;\n        var _a;\n        (_a = this.buttons) === null || _a === void 0 ? void 0 : _a.forEach(function (btn) {\n            return btn.addEventListener(\"click\", _this.displayModal.bind(_this));\n        });\n    };\n    App.prototype.displayModal = function (e) {\n        var func = e.target.dataset.func;\n        console.log(func);\n    };\n    return App;\n}());\nvar app = new App();\napp.run();\n\n\n//# sourceURL=webpack://motion/./src/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/main.ts"]();
/******/ 	
/******/ })()
;