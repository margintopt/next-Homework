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

/***/ "(app-pages-browser)/./src/app/utils.ts":
/*!**************************!*\
  !*** ./src/app/utils.ts ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearEventBubble: function() { return /* binding */ clearEventBubble; },\n/* harmony export */   getContinuousNumber: function() { return /* binding */ getContinuousNumber; },\n/* harmony export */   getLeft: function() { return /* binding */ getLeft; },\n/* harmony export */   getTop: function() { return /* binding */ getTop; },\n/* harmony export */   isInPath: function() { return /* binding */ isInPath; },\n/* harmony export */   scroll: function() { return /* binding */ scroll; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction getTop(e) {\n    var offset = e.offsetTop;\n    if (e.offsetParent != null) offset += getTop(e.offsetParent);\n    return offset;\n}\nfunction getLeft(e) {\n    var offset = e.offsetLeft;\n    if (e.offsetParent != null) offset += getLeft(e.offsetParent);\n    return offset;\n}\nfunction clearEventBubble(e) {\n    e.stopPropagation();\n    e.preventDefault();\n}\nfunction scroll() {\n    if (window.pageYOffset) {\n        return {\n            scrollLeft: window.pageXOffset,\n            scrollTop: window.pageYOffset\n        };\n    } else if (document.compatMode === \"CSS1Compat\") {\n        return {\n            scrollLeft: document.documentElement.scrollLeft,\n            scrollTop: document.documentElement.scrollTop\n        };\n    }\n    return {\n        scrollLeft: document.body.scrollLeft,\n        scrollTop: document.body.scrollTop\n    };\n}\nfunction isInPath(target, wrapper) {\n    const iOffLeft = target.offsetLeft;\n    const iOffTop = target.offsetTop;\n    const iLeft = target.offsetWidth + iOffLeft;\n    const iTop = target.offsetHeight + iOffTop;\n    return iLeft > wrapper.left && iTop > wrapper.top && iOffLeft < wrapper.left + wrapper.width && iOffTop < wrapper.top + wrapper.height;\n}\nfunction getContinuousNumber(arr) {\n    let result = [];\n    let i = 0;\n    result[i] = [\n        arr[0]\n    ];\n    arr.reduce((pre, cur)=>{\n        cur - pre === 1 ? result[i].push(cur) : result[++i] = [\n            cur\n        ];\n        return cur;\n    }, 0);\n    return result;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdXRpbHMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBMEI7QUFFbkIsU0FBU0MsT0FBT0MsQ0FBTTtJQUMzQixJQUFJQyxTQUFTRCxFQUFFRSxTQUFTO0lBQ3hCLElBQUlGLEVBQUVHLFlBQVksSUFBSSxNQUFNRixVQUFVRixPQUFPQyxFQUFFRyxZQUFZO0lBQzNELE9BQU9GO0FBQ1Q7QUFFTyxTQUFTRyxRQUFRSixDQUFNO0lBQzVCLElBQUlDLFNBQVNELEVBQUVLLFVBQVU7SUFDekIsSUFBSUwsRUFBRUcsWUFBWSxJQUFJLE1BQU1GLFVBQVVHLFFBQVFKLEVBQUVHLFlBQVk7SUFDNUQsT0FBT0Y7QUFDVDtBQUVPLFNBQVNLLGlCQUFpQk4sQ0FBbUI7SUFDbERBLEVBQUVPLGVBQWU7SUFDakJQLEVBQUVRLGNBQWM7QUFDbEI7QUFFTyxTQUFTQztJQUNkLElBQUlDLE9BQU9DLFdBQVcsRUFBRTtRQUN0QixPQUFPO1lBQ0xDLFlBQVlGLE9BQU9HLFdBQVc7WUFDOUJDLFdBQVdKLE9BQU9DLFdBQVc7UUFDL0I7SUFDRixPQUFPLElBQUlJLFNBQVNDLFVBQVUsS0FBSyxjQUFjO1FBQy9DLE9BQU87WUFDTEosWUFBWUcsU0FBU0UsZUFBZSxDQUFDTCxVQUFVO1lBQy9DRSxXQUFXQyxTQUFTRSxlQUFlLENBQUNILFNBQVM7UUFDL0M7SUFDRjtJQUVBLE9BQU87UUFDTEYsWUFBWUcsU0FBU0csSUFBSSxDQUFDTixVQUFVO1FBQ3BDRSxXQUFXQyxTQUFTRyxJQUFJLENBQUNKLFNBQVM7SUFDcEM7QUFDRjtBQUVPLFNBQVNLLFNBQVNDLE1BQW1CLEVBQUVDLE9BQTRCO0lBQ3hFLE1BQU1DLFdBQVdGLE9BQU9mLFVBQVU7SUFDbEMsTUFBTWtCLFVBQVVILE9BQU9sQixTQUFTO0lBQ2hDLE1BQU1zQixRQUFRSixPQUFPSyxXQUFXLEdBQUdIO0lBQ25DLE1BQU1JLE9BQU9OLE9BQU9PLFlBQVksR0FBR0o7SUFFbkMsT0FDRUMsUUFBUUgsUUFBUU8sSUFBSSxJQUNwQkYsT0FBT0wsUUFBUVEsR0FBRyxJQUNsQlAsV0FBV0QsUUFBUU8sSUFBSSxHQUFHUCxRQUFRUyxLQUFLLElBQ3ZDUCxVQUFVRixRQUFRUSxHQUFHLEdBQUdSLFFBQVFVLE1BQU07QUFFMUM7QUFFTyxTQUFTQyxvQkFBb0JDLEdBQWE7SUFDL0MsSUFBSUMsU0FBcUIsRUFBRTtJQUMzQixJQUFJQyxJQUFJO0lBQ1JELE1BQU0sQ0FBQ0MsRUFBRSxHQUFHO1FBQUNGLEdBQUcsQ0FBQyxFQUFFO0tBQUM7SUFDcEJBLElBQUlHLE1BQU0sQ0FBQyxDQUFDQyxLQUFLQztRQUNmQSxNQUFNRCxRQUFRLElBQUlILE1BQU0sQ0FBQ0MsRUFBRSxDQUFDSSxJQUFJLENBQUNELE9BQU9KLE1BQU0sQ0FBQyxFQUFFQyxFQUFFLEdBQUc7WUFBQ0c7U0FBSTtRQUMzRCxPQUFPQTtJQUNULEdBQUc7SUFFSCxPQUFPSjtBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvdXRpbHMudHM/NmZlMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG9wKGU6IGFueSkge1xuICB2YXIgb2Zmc2V0ID0gZS5vZmZzZXRUb3A7XG4gIGlmIChlLm9mZnNldFBhcmVudCAhPSBudWxsKSBvZmZzZXQgKz0gZ2V0VG9wKGUub2Zmc2V0UGFyZW50KTtcbiAgcmV0dXJuIG9mZnNldDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExlZnQoZTogYW55KSB7XG4gIHZhciBvZmZzZXQgPSBlLm9mZnNldExlZnQ7XG4gIGlmIChlLm9mZnNldFBhcmVudCAhPSBudWxsKSBvZmZzZXQgKz0gZ2V0TGVmdChlLm9mZnNldFBhcmVudCk7XG4gIHJldHVybiBvZmZzZXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckV2ZW50QnViYmxlKGU6IFJlYWN0Lk1vdXNlRXZlbnQpIHtcbiAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2Nyb2xsKCkge1xuICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNjcm9sbExlZnQ6IHdpbmRvdy5wYWdlWE9mZnNldCxcbiAgICAgIHNjcm9sbFRvcDogd2luZG93LnBhZ2VZT2Zmc2V0LFxuICAgIH07XG4gIH0gZWxzZSBpZiAoZG9jdW1lbnQuY29tcGF0TW9kZSA9PT0gJ0NTUzFDb21wYXQnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNjcm9sbExlZnQ6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0LFxuICAgICAgc2Nyb2xsVG9wOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wLFxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHNjcm9sbExlZnQ6IGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdCxcbiAgICBzY3JvbGxUb3A6IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNJblBhdGgodGFyZ2V0OiBIVE1MRWxlbWVudCwgd3JhcHBlcjogUmVjb3JkPHN0cmluZywgYW55Pikge1xuICBjb25zdCBpT2ZmTGVmdCA9IHRhcmdldC5vZmZzZXRMZWZ0O1xuICBjb25zdCBpT2ZmVG9wID0gdGFyZ2V0Lm9mZnNldFRvcDtcbiAgY29uc3QgaUxlZnQgPSB0YXJnZXQub2Zmc2V0V2lkdGggKyBpT2ZmTGVmdDtcbiAgY29uc3QgaVRvcCA9IHRhcmdldC5vZmZzZXRIZWlnaHQgKyBpT2ZmVG9wO1xuXG4gIHJldHVybiAoXG4gICAgaUxlZnQgPiB3cmFwcGVyLmxlZnQgJiZcbiAgICBpVG9wID4gd3JhcHBlci50b3AgJiZcbiAgICBpT2ZmTGVmdCA8IHdyYXBwZXIubGVmdCArIHdyYXBwZXIud2lkdGggJiZcbiAgICBpT2ZmVG9wIDwgd3JhcHBlci50b3AgKyB3cmFwcGVyLmhlaWdodFxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29udGludW91c051bWJlcihhcnI6IG51bWJlcltdKSB7XG4gIGxldCByZXN1bHQ6IG51bWJlcltdW10gPSBbXTtcbiAgbGV0IGkgPSAwO1xuICByZXN1bHRbaV0gPSBbYXJyWzBdXVxuICBhcnIucmVkdWNlKChwcmUsIGN1cikgPT4ge1xuICAgIGN1ciAtIHByZSA9PT0gMSA/IHJlc3VsdFtpXS5wdXNoKGN1cikgOiByZXN1bHRbKytpXSA9IFtjdXJdXG4gICAgcmV0dXJuIGN1clxuICB9LCAwKVxuXG4gIHJldHVybiByZXN1bHRcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsImdldFRvcCIsImUiLCJvZmZzZXQiLCJvZmZzZXRUb3AiLCJvZmZzZXRQYXJlbnQiLCJnZXRMZWZ0Iiwib2Zmc2V0TGVmdCIsImNsZWFyRXZlbnRCdWJibGUiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsInNjcm9sbCIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0Iiwic2Nyb2xsTGVmdCIsInBhZ2VYT2Zmc2V0Iiwic2Nyb2xsVG9wIiwiZG9jdW1lbnQiLCJjb21wYXRNb2RlIiwiZG9jdW1lbnRFbGVtZW50IiwiYm9keSIsImlzSW5QYXRoIiwidGFyZ2V0Iiwid3JhcHBlciIsImlPZmZMZWZ0IiwiaU9mZlRvcCIsImlMZWZ0Iiwib2Zmc2V0V2lkdGgiLCJpVG9wIiwib2Zmc2V0SGVpZ2h0IiwibGVmdCIsInRvcCIsIndpZHRoIiwiaGVpZ2h0IiwiZ2V0Q29udGludW91c051bWJlciIsImFyciIsInJlc3VsdCIsImkiLCJyZWR1Y2UiLCJwcmUiLCJjdXIiLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/utils.ts\n"));

/***/ })

});