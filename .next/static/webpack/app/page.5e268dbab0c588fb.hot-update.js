"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/Cells.tsx":
/*!**************************************!*\
  !*** ./src/app/components/Cells.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/isEqual */ \"(app-pages-browser)/./node_modules/lodash/isEqual.js\");\n/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst Cells = (param)=>{\n    let { cells, hoverCells, selectedCells, click, over, leave } = param;\n    console.log(\"qwe\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: cells.map((rows, row)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                children: rows.map((col)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        onClick: ()=>{\n                            console.log(444);\n                            click(\"\".concat(row, \"-\").concat(col));\n                        },\n                        onMouseOver: (e)=>{\n                            over(e, \"\".concat(row, \"-\").concat(col));\n                        },\n                        onMouseLeave: (e)=>{\n                            leave(e, \"\".concat(row, \"-\").concat(col));\n                        },\n                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({\n                            selection_item: true,\n                            selection_item_hover: hoverCells.includes(\"\".concat(row, \"-\").concat(col)),\n                            selection_item_active: selectedCells.includes(\"\".concat(row, \"-\").concat(col))\n                        }),\n                        style: {\n                            width: 15,\n                            height: 50,\n                            margin: \"\".concat(0, \"px \", 0, \"px 0 \", 0, \"px\")\n                        },\n                        \"data-position\": \"\".concat(row, \"-\").concat(col)\n                    }, \"col-\".concat(col), false, {\n                        fileName: \"D:\\\\web\\\\next\\\\src\\\\app\\\\components\\\\Cells.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    }, undefined);\n                })\n            }, \"row-\".concat(row), false, {\n                fileName: \"D:\\\\web\\\\next\\\\src\\\\app\\\\components\\\\Cells.tsx\",\n                lineNumber: 28,\n                columnNumber: 11\n            }, undefined);\n        })\n    }, void 0, false);\n};\n_c = Cells;\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/_c1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(Cells, (p, c)=>{\n    console.log(\"ppp\", lodash_isEqual__WEBPACK_IMPORTED_MODULE_3___default()(p.hoverCells, c.hoverCells));\n    console.log(\"ccc\", lodash_isEqual__WEBPACK_IMPORTED_MODULE_3___default()(p.selectedCells, c.selectedCells));\n    return lodash_isEqual__WEBPACK_IMPORTED_MODULE_3___default()(p.hoverCells, c.hoverCells) && lodash_isEqual__WEBPACK_IMPORTED_MODULE_3___default()(p.selectedCells, c.selectedCells);\n}));\nvar _c, _c1;\n$RefreshReg$(_c, \"Cells\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9DZWxscy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQW9DO0FBQ0Y7QUFDSDtBQVcvQixNQUFNSSxRQUErQjtRQUFDLEVBQ3BDQyxLQUFLLEVBQ0xDLFVBQVUsRUFDVkMsYUFBYSxFQUNiQyxLQUFLLEVBQ0xDLElBQUksRUFDSkMsS0FBSyxFQUNOO0lBQ0NDLFFBQVFDLEdBQUcsQ0FBQztJQUVaLHFCQUNFO2tCQUNHUCxNQUFNUSxHQUFHLENBQUMsQ0FBQ0MsTUFBTUM7WUFDaEIscUJBQ0UsOERBQUNDOzBCQUNFRixLQUFLRCxHQUFHLENBQUMsQ0FBQ0k7b0JBQ1QscUJBQ0UsOERBQUNDO3dCQUNDQyxTQUFTOzRCQUNQUixRQUFRQyxHQUFHLENBQUM7NEJBQ1pKLE1BQU0sR0FBVVMsT0FBUEYsS0FBSSxLQUFPLE9BQUpFO3dCQUNsQjt3QkFDQUcsYUFBYSxDQUFDQzs0QkFDWlosS0FBS1ksR0FBRyxHQUFVSixPQUFQRixLQUFJLEtBQU8sT0FBSkU7d0JBQ3BCO3dCQUNBSyxjQUFjLENBQUNEOzRCQUNiWCxNQUFNVyxHQUFHLEdBQVVKLE9BQVBGLEtBQUksS0FBTyxPQUFKRTt3QkFDckI7d0JBQ0FNLFdBQVd2QixpREFBVUEsQ0FBQzs0QkFDcEJ3QixnQkFBZ0I7NEJBQ2hCQyxzQkFBc0JuQixXQUFXb0IsUUFBUSxDQUFDLEdBQVVULE9BQVBGLEtBQUksS0FBTyxPQUFKRTs0QkFDcERVLHVCQUF1QnBCLGNBQWNtQixRQUFRLENBQzNDLEdBQVVULE9BQVBGLEtBQUksS0FBTyxPQUFKRTt3QkFFZDt3QkFDQVcsT0FBTzs0QkFDTEMsT0FBTzs0QkFDUEMsUUFBUTs0QkFDUkMsUUFBUSxHQUFxQixPQUFsQixHQUFFLE9BQUssR0FBRSxTQUFPLEdBQUU7d0JBQy9CO3dCQUVBQyxpQkFBZSxHQUFVZixPQUFQRixLQUFJLEtBQU8sT0FBSkU7dUJBRHBCLE9BQVcsT0FBSkE7Ozs7O2dCQUlsQjtlQTlCTyxPQUFXLE9BQUpGOzs7OztRQWlDcEI7O0FBR047S0FsRE1YO0FBb0ROLGtGQUFlRiwyQ0FBSUEsQ0FBQ0UsT0FBTyxDQUFDNkIsR0FBR0M7SUFDN0J2QixRQUFRQyxHQUFHLENBQUMsT0FBTVQscURBQU9BLENBQUM4QixFQUFFM0IsVUFBVSxFQUFFNEIsRUFBRTVCLFVBQVU7SUFDcERLLFFBQVFDLEdBQUcsQ0FBQyxPQUFPVCxxREFBT0EsQ0FBQzhCLEVBQUUxQixhQUFhLEVBQUUyQixFQUFFM0IsYUFBYTtJQUMzRCxPQUFPSixxREFBT0EsQ0FBQzhCLEVBQUUzQixVQUFVLEVBQUU0QixFQUFFNUIsVUFBVSxLQUFLSCxxREFBT0EsQ0FBQzhCLEVBQUUxQixhQUFhLEVBQUUyQixFQUFFM0IsYUFBYTtBQUN4RixFQUFFLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL0NlbGxzLnRzeD84ZTE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFJlYWN0LCB7bWVtb30gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtpc0VxdWFsfSBmcm9tICdsb2Rhc2gnO1xuXG5pbnRlcmZhY2UgQ2VsbHNQYXJhbXMge1xuICBjZWxsczogbnVtYmVyW11bXTtcbiAgaG92ZXJDZWxsczogc3RyaW5nW107XG4gIHNlbGVjdGVkQ2VsbHM6IHN0cmluZ1tdO1xuICBjbGljazogKHBvc2l0aW9uOiBzdHJpbmcpID0+IHZvaWQ7XG4gIG92ZXI6IChlOiBSZWFjdC5Nb3VzZUV2ZW50LCBwb3NpdGlvbjogc3RyaW5nKSA9PiB2b2lkO1xuICBsZWF2ZTogKGU6IFJlYWN0Lk1vdXNlRXZlbnQsIHBvc2l0aW9uOiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cbmNvbnN0IENlbGxzOiBSZWFjdC5GQzxDZWxsc1BhcmFtcz4gPSAoe1xuICBjZWxscyxcbiAgaG92ZXJDZWxscyxcbiAgc2VsZWN0ZWRDZWxscyxcbiAgY2xpY2ssXG4gIG92ZXIsXG4gIGxlYXZlLFxufSkgPT4ge1xuICBjb25zb2xlLmxvZygncXdlJyk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2NlbGxzLm1hcCgocm93cywgcm93KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPHRyIGtleT17YHJvdy0ke3Jvd31gfT5cbiAgICAgICAgICAgIHtyb3dzLm1hcCgoY29sKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKDQ0NCk7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrKGAke3Jvd30tJHtjb2x9YCk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgb25Nb3VzZU92ZXI9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG92ZXIoZSwgYCR7cm93fS0ke2NvbH1gKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxlYXZlKGUsIGAke3Jvd30tJHtjb2x9YCk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uX2l0ZW06IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbl9pdGVtX2hvdmVyOiBob3ZlckNlbGxzLmluY2x1ZGVzKGAke3Jvd30tJHtjb2x9YCksXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbl9pdGVtX2FjdGl2ZTogc2VsZWN0ZWRDZWxscy5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgICAgICAgICBgJHtyb3d9LSR7Y29sfWBcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1LFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGAkezB9cHggJHswfXB4IDAgJHswfXB4YCxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBrZXk9e2Bjb2wtJHtjb2x9YH1cbiAgICAgICAgICAgICAgICAgIGRhdGEtcG9zaXRpb249e2Ake3Jvd30tJHtjb2x9YH1cbiAgICAgICAgICAgICAgICA+PC90ZD5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW8oQ2VsbHMsIChwLCBjKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdwcHAnLGlzRXF1YWwocC5ob3ZlckNlbGxzLCBjLmhvdmVyQ2VsbHMpKVxuICBjb25zb2xlLmxvZygnY2NjJywgaXNFcXVhbChwLnNlbGVjdGVkQ2VsbHMsIGMuc2VsZWN0ZWRDZWxscykpXG4gIHJldHVybiBpc0VxdWFsKHAuaG92ZXJDZWxscywgYy5ob3ZlckNlbGxzKSAmJiBpc0VxdWFsKHAuc2VsZWN0ZWRDZWxscywgYy5zZWxlY3RlZENlbGxzKVxufSk7XG4iXSwibmFtZXMiOlsiY2xhc3NOYW1lcyIsIlJlYWN0IiwibWVtbyIsImlzRXF1YWwiLCJDZWxscyIsImNlbGxzIiwiaG92ZXJDZWxscyIsInNlbGVjdGVkQ2VsbHMiLCJjbGljayIsIm92ZXIiLCJsZWF2ZSIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJyb3dzIiwicm93IiwidHIiLCJjb2wiLCJ0ZCIsIm9uQ2xpY2siLCJvbk1vdXNlT3ZlciIsImUiLCJvbk1vdXNlTGVhdmUiLCJjbGFzc05hbWUiLCJzZWxlY3Rpb25faXRlbSIsInNlbGVjdGlvbl9pdGVtX2hvdmVyIiwiaW5jbHVkZXMiLCJzZWxlY3Rpb25faXRlbV9hY3RpdmUiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwibWFyZ2luIiwiZGF0YS1wb3NpdGlvbiIsInAiLCJjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Cells.tsx\n"));

/***/ })

});