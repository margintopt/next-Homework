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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/isEqual */ \"(app-pages-browser)/./node_modules/lodash/isEqual.js\");\n/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _cells_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cells.module.css */ \"(app-pages-browser)/./src/app/components/cells.module.css\");\n/* harmony import */ var _cells_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_cells_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst Cells = (param)=>{\n    let { cells, hoverCells, selectedCells, over, leave } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: cells.map((rows, row)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                className: (_cells_module_css__WEBPACK_IMPORTED_MODULE_4___default().content),\n                children: rows.map((col)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({\n                            [(_cells_module_css__WEBPACK_IMPORTED_MODULE_4___default().cell)]: true,\n                            [(_cells_module_css__WEBPACK_IMPORTED_MODULE_4___default().hover)]: hoverCells.includes(\"\".concat(row, \"-\").concat(col)),\n                            [(_cells_module_css__WEBPACK_IMPORTED_MODULE_4___default().active)]: selectedCells.includes(\"\".concat(row, \"-\").concat(col))\n                        }),\n                        onMouseOver: (e)=>{\n                            over(e, \"\".concat(row, \"-\").concat(col));\n                        },\n                        onMouseLeave: (e)=>{\n                            leave(e, \"\".concat(row, \"-\").concat(col));\n                        },\n                        \"data-position\": \"\".concat(row, \"-\").concat(col)\n                    }, \"col-\".concat(col), false, {\n                        fileName: \"D:\\\\web\\\\next\\\\src\\\\app\\\\components\\\\Cells.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, undefined);\n                })\n            }, \"row-\".concat(row), false, {\n                fileName: \"D:\\\\web\\\\next\\\\src\\\\app\\\\components\\\\Cells.tsx\",\n                lineNumber: 25,\n                columnNumber: 11\n            }, undefined);\n        })\n    }, void 0, false);\n};\n_c = Cells;\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/_c1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(Cells, (p, c)=>{\n    return lodash_isEqual__WEBPACK_IMPORTED_MODULE_3___default()(p.hoverCells, c.hoverCells) && lodash_isEqual__WEBPACK_IMPORTED_MODULE_3___default()(p.selectedCells, c.selectedCells);\n}));\nvar _c, _c1;\n$RefreshReg$(_c, \"Cells\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9DZWxscy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBb0M7QUFDQTtBQUNIO0FBQ087QUFVeEMsTUFBTUssUUFBK0I7UUFBQyxFQUNwQ0MsS0FBSyxFQUNMQyxVQUFVLEVBQ1ZDLGFBQWEsRUFDYkMsSUFBSSxFQUNKQyxLQUFLLEVBQ047SUFDQyxxQkFDRTtrQkFDR0osTUFBTUssR0FBRyxDQUFDLENBQUNDLE1BQU1DO1lBQ2hCLHFCQUNFLDhEQUFDQztnQkFBc0JDLFdBQVdYLGtFQUFjOzBCQUM3Q1EsS0FBS0QsR0FBRyxDQUFDLENBQUNNO29CQUNULHFCQUNFLDhEQUFDQzt3QkFFQ0gsV0FBV2YsaURBQVVBLENBQUM7NEJBQ3BCLENBQUNJLCtEQUFXLENBQUMsRUFBRTs0QkFDZixDQUFDQSxnRUFBWSxDQUFDLEVBQUVHLFdBQVdjLFFBQVEsQ0FBQyxHQUFVSixPQUFQSixLQUFJLEtBQU8sT0FBSkk7NEJBQzlDLENBQUNiLGlFQUFhLENBQUMsRUFBRUksY0FBY2EsUUFBUSxDQUFDLEdBQVVKLE9BQVBKLEtBQUksS0FBTyxPQUFKSTt3QkFDcEQ7d0JBQ0FNLGFBQWEsQ0FBQ0M7NEJBQ1pmLEtBQUtlLEdBQUcsR0FBVVAsT0FBUEosS0FBSSxLQUFPLE9BQUpJO3dCQUNwQjt3QkFDQVEsY0FBYyxDQUFDRDs0QkFDYmQsTUFBTWMsR0FBRyxHQUFVUCxPQUFQSixLQUFJLEtBQU8sT0FBSkk7d0JBQ3JCO3dCQUNBUyxpQkFBZSxHQUFVVCxPQUFQSixLQUFJLEtBQU8sT0FBSkk7dUJBWnBCLE9BQVcsT0FBSkE7Ozs7O2dCQWVsQjtlQW5CTyxPQUFXLE9BQUpKOzs7OztRQXNCcEI7O0FBR047S0FwQ01SO0FBc0NOLGtGQUFlSCwyQ0FBSUEsQ0FBQ0csT0FBTyxDQUFDc0IsR0FBR0M7SUFDN0IsT0FDRXpCLHFEQUFPQSxDQUFDd0IsRUFBRXBCLFVBQVUsRUFBRXFCLEVBQUVyQixVQUFVLEtBQ2xDSixxREFBT0EsQ0FBQ3dCLEVBQUVuQixhQUFhLEVBQUVvQixFQUFFcEIsYUFBYTtBQUU1QyxFQUFFLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL0NlbGxzLnRzeD84ZTE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFJlYWN0LCB7IG1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBpc0VxdWFsIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9jZWxscy5tb2R1bGUuY3NzJztcblxuaW50ZXJmYWNlIENlbGxzUGFyYW1zIHtcbiAgY2VsbHM6IG51bWJlcltdW107XG4gIGhvdmVyQ2VsbHM6IHN0cmluZ1tdO1xuICBzZWxlY3RlZENlbGxzOiBzdHJpbmdbXTtcbiAgb3ZlcjogKGU6IFJlYWN0Lk1vdXNlRXZlbnQsIHBvc2l0aW9uOiBzdHJpbmcpID0+IHZvaWQ7XG4gIGxlYXZlOiAoZTogUmVhY3QuTW91c2VFdmVudCwgcG9zaXRpb246IHN0cmluZykgPT4gdm9pZDtcbn1cblxuY29uc3QgQ2VsbHM6IFJlYWN0LkZDPENlbGxzUGFyYW1zPiA9ICh7XG4gIGNlbGxzLFxuICBob3ZlckNlbGxzLFxuICBzZWxlY3RlZENlbGxzLFxuICBvdmVyLFxuICBsZWF2ZSxcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2NlbGxzLm1hcCgocm93cywgcm93KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPHRyIGtleT17YHJvdy0ke3Jvd31gfSBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cbiAgICAgICAgICAgIHtyb3dzLm1hcCgoY29sKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICBrZXk9e2Bjb2wtJHtjb2x9YH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7XG4gICAgICAgICAgICAgICAgICAgIFtzdHlsZXMuY2VsbF06IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIFtzdHlsZXMuaG92ZXJdOiBob3ZlckNlbGxzLmluY2x1ZGVzKGAke3Jvd30tJHtjb2x9YCksXG4gICAgICAgICAgICAgICAgICAgIFtzdHlsZXMuYWN0aXZlXTogc2VsZWN0ZWRDZWxscy5pbmNsdWRlcyhgJHtyb3d9LSR7Y29sfWApLFxuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcihlLCBgJHtyb3d9LSR7Y29sfWApO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGVhdmUoZSwgYCR7cm93fS0ke2NvbH1gKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBkYXRhLXBvc2l0aW9uPXtgJHtyb3d9LSR7Y29sfWB9XG4gICAgICAgICAgICAgICAgPjwvdGQ+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3RyPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtZW1vKENlbGxzLCAocCwgYykgPT4ge1xuICByZXR1cm4gKFxuICAgIGlzRXF1YWwocC5ob3ZlckNlbGxzLCBjLmhvdmVyQ2VsbHMpICYmXG4gICAgaXNFcXVhbChwLnNlbGVjdGVkQ2VsbHMsIGMuc2VsZWN0ZWRDZWxscylcbiAgKTtcbn0pO1xuIl0sIm5hbWVzIjpbImNsYXNzTmFtZXMiLCJSZWFjdCIsIm1lbW8iLCJpc0VxdWFsIiwic3R5bGVzIiwiQ2VsbHMiLCJjZWxscyIsImhvdmVyQ2VsbHMiLCJzZWxlY3RlZENlbGxzIiwib3ZlciIsImxlYXZlIiwibWFwIiwicm93cyIsInJvdyIsInRyIiwiY2xhc3NOYW1lIiwiY29udGVudCIsImNvbCIsInRkIiwiY2VsbCIsImhvdmVyIiwiaW5jbHVkZXMiLCJhY3RpdmUiLCJvbk1vdXNlT3ZlciIsImUiLCJvbk1vdXNlTGVhdmUiLCJkYXRhLXBvc2l0aW9uIiwicCIsImMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Cells.tsx\n"));

/***/ })

});