"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/verify/[email]/page",{

/***/ "(app-pages-browser)/./app/verify/[email]/page.jsx":
/*!*************************************!*\
  !*** ./app/verify/[email]/page.jsx ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Verify)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/client/app-dir/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.jsx\");\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./components/ui/card.jsx\");\n/* harmony import */ var _barrel_optimize_names_CheckCircle_CircleX_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=CheckCircle,CircleX!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/circle-check-big.js\");\n/* harmony import */ var _barrel_optimize_names_CheckCircle_CircleX_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=CheckCircle,CircleX!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/circle-x.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Verify(param) {\n    let { params } = param;\n    _s();\n    const resolvedParams = (0,react__WEBPACK_IMPORTED_MODULE_1__.use)(params); // Se usa `use()` para desempaquetar `params`\n    const { email } = resolvedParams; // Ahora `email` se puede acceder correctamente\n    const [mensaje, setMensaje] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Verificando...\");\n    const [verificado, setVerificado] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Verify.useEffect\": ()=>{\n            if (!email) return;\n            const verificarUsuario = {\n                \"Verify.useEffect.verificarUsuario\": async ()=>{\n                    try {\n                        const response = await fetch(\"http://localhost:5000/verify/\".concat(email));\n                        const data = await response.json();\n                        if (data.success) {\n                            setMensaje(\"¡Verified account!\");\n                        } else {\n                            setMensaje(\"Error to verified account.\");\n                        }\n                    } catch (error) {\n                        setMensaje(\"Error to server connection.\");\n                        console.error(error);\n                    }\n                }\n            }[\"Verify.useEffect.verificarUsuario\"];\n            verificarUsuario();\n        }\n    }[\"Verify.useEffect\"], [\n        email\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center min-h-screen bg-gray-100 p-4\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__.Card, {\n            className: \"max-w-md w-full text-center shadow-lg\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__.CardHeader, {\n                    children: [\n                        verificado ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CheckCircle_CircleX_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            className: \"text-green-500 w-16 h-16 mx-auto\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Instalacion\\\\PROYECTOS\\\\e-commerce-next\\\\my-app\\\\app\\\\verify\\\\[email]\\\\page.jsx\",\n                            lineNumber: 44,\n                            columnNumber: 16\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CheckCircle_CircleX_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            className: \"text-red-500 w-16 h-16 mx-auto\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Instalacion\\\\PROYECTOS\\\\e-commerce-next\\\\my-app\\\\app\\\\verify\\\\[email]\\\\page.jsx\",\n                            lineNumber: 45,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__.CardTitle, {\n                            className: \"text-2xl font-bold mt-4\",\n                            children: mensaje\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Instalacion\\\\PROYECTOS\\\\e-commerce-next\\\\my-app\\\\app\\\\verify\\\\[email]\\\\page.jsx\",\n                            lineNumber: 47,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Instalacion\\\\PROYECTOS\\\\e-commerce-next\\\\my-app\\\\app\\\\verify\\\\[email]\\\\page.jsx\",\n                    lineNumber: 41,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__.CardContent, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        className: \"mt-6 w-full bg-green-500 hover:bg-green-600\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/login\",\n                            children: \"Back to Login\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Instalacion\\\\PROYECTOS\\\\e-commerce-next\\\\my-app\\\\app\\\\verify\\\\[email]\\\\page.jsx\",\n                            lineNumber: 54,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Instalacion\\\\PROYECTOS\\\\e-commerce-next\\\\my-app\\\\app\\\\verify\\\\[email]\\\\page.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Instalacion\\\\PROYECTOS\\\\e-commerce-next\\\\my-app\\\\app\\\\verify\\\\[email]\\\\page.jsx\",\n                    lineNumber: 49,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Instalacion\\\\PROYECTOS\\\\e-commerce-next\\\\my-app\\\\app\\\\verify\\\\[email]\\\\page.jsx\",\n            lineNumber: 40,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Instalacion\\\\PROYECTOS\\\\e-commerce-next\\\\my-app\\\\app\\\\verify\\\\[email]\\\\page.jsx\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, this);\n}\n_s(Verify, \"SV4wFKOwlUDVOqLEQwEkfr9PZS0=\");\n_c = Verify;\nvar _c;\n$RefreshReg$(_c, \"Verify\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC92ZXJpZnkvW2VtYWlsXS9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFaUQ7QUFDcEI7QUFDbUI7QUFDZ0M7QUFDNUI7QUFFckMsU0FBU1csT0FBTyxLQUFVO1FBQVYsRUFBRUMsTUFBTSxFQUFFLEdBQVY7O0lBQzNCLE1BQU1DLGlCQUFpQmIsMENBQUdBLENBQUNZLFNBQVMsNkNBQTZDO0lBQ2pGLE1BQU0sRUFBRUUsS0FBSyxFQUFFLEdBQUdELGdCQUFnQiwrQ0FBK0M7SUFFakYsTUFBTSxDQUFDRSxTQUFTQyxXQUFXLEdBQUdkLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ2UsWUFBWUMsY0FBYyxHQUFHaEIsK0NBQVFBLENBQUM7SUFFN0NELGdEQUFTQTs0QkFBQztZQUNOLElBQUksQ0FBQ2EsT0FBTztZQUVaLE1BQU1LO3FEQUFtQjtvQkFDckIsSUFBSTt3QkFDQSxNQUFNQyxXQUFXLE1BQU1DLE1BQU0sZ0NBQXNDLE9BQU5QO3dCQUM3RCxNQUFNUSxPQUFPLE1BQU1GLFNBQVNHLElBQUk7d0JBRWhDLElBQUlELEtBQUtFLE9BQU8sRUFBRTs0QkFDZFIsV0FBVzt3QkFDZixPQUFPOzRCQUNIQSxXQUFXO3dCQUNmO29CQUNKLEVBQUUsT0FBT1MsT0FBTzt3QkFDWlQsV0FBVzt3QkFDWFUsUUFBUUQsS0FBSyxDQUFDQTtvQkFDbEI7Z0JBQ0o7O1lBRUFOO1FBQ0o7MkJBQUc7UUFBQ0w7S0FBTTtJQUVWLHFCQUNJLDhEQUFDYTtRQUFJQyxXQUFVO2tCQUNmLDRFQUFDdkIscURBQUlBO1lBQUN1QixXQUFVOzs4QkFDZCw4REFBQ3RCLDJEQUFVQTs7d0JBRVRXLDJCQUNHLDhEQUFDUiwrRkFBV0E7NEJBQUNtQixXQUFVOzs7OztpREFDeEIsOERBQUNsQiwrRkFBT0E7NEJBQUNrQixXQUFVOzs7Ozs7c0NBRXJCLDhEQUFDckIsMERBQVNBOzRCQUFDcUIsV0FBVTtzQ0FBMkJiOzs7Ozs7Ozs7Ozs7OEJBRWxELDhEQUFDUCw0REFBV0E7OEJBQ1YsNEVBQUNKLHlEQUFNQTt3QkFDTHdCLFdBQVU7a0NBR1YsNEVBQUN6QixrREFBSUE7NEJBQUMwQixNQUFLO3NDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbEM7R0FuRHdCbEI7S0FBQUEiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSW5zdGFsYWNpb25cXFBST1lFQ1RPU1xcZS1jb21tZXJjZS1uZXh0XFxteS1hcHBcXGFwcFxcdmVyaWZ5XFxbZW1haWxdXFxwYWdlLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IHVzZSwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XHJcbmltcG9ydCB7IENhcmQsIENhcmRIZWFkZXIsIENhcmRUaXRsZSwgQ2FyZENvbnRlbnQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NhcmRcIjtcclxuaW1wb3J0IHsgQ2hlY2tDaXJjbGUsIENpcmNsZVggfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWZXJpZnkoeyBwYXJhbXMgfSkge1xyXG4gICAgY29uc3QgcmVzb2x2ZWRQYXJhbXMgPSB1c2UocGFyYW1zKTsgLy8gU2UgdXNhIGB1c2UoKWAgcGFyYSBkZXNlbXBhcXVldGFyIGBwYXJhbXNgXHJcbiAgICBjb25zdCB7IGVtYWlsIH0gPSByZXNvbHZlZFBhcmFtczsgLy8gQWhvcmEgYGVtYWlsYCBzZSBwdWVkZSBhY2NlZGVyIGNvcnJlY3RhbWVudGVcclxuXHJcbiAgICBjb25zdCBbbWVuc2FqZSwgc2V0TWVuc2FqZV0gPSB1c2VTdGF0ZShcIlZlcmlmaWNhbmRvLi4uXCIpO1xyXG4gICAgY29uc3QgW3ZlcmlmaWNhZG8sIHNldFZlcmlmaWNhZG9dID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoIWVtYWlsKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHZlcmlmaWNhclVzdWFyaW8gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjUwMDAvdmVyaWZ5LyR7ZW1haWx9YCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRNZW5zYWplKFwiwqFWZXJpZmllZCBhY2NvdW50IVwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TWVuc2FqZShcIkVycm9yIHRvIHZlcmlmaWVkIGFjY291bnQuXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgc2V0TWVuc2FqZShcIkVycm9yIHRvIHNlcnZlciBjb25uZWN0aW9uLlwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmVyaWZpY2FyVXN1YXJpbygpO1xyXG4gICAgfSwgW2VtYWlsXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1pbi1oLXNjcmVlbiBiZy1ncmF5LTEwMCBwLTRcIj5cclxuICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJtYXgtdy1tZCB3LWZ1bGwgdGV4dC1jZW50ZXIgc2hhZG93LWxnXCI+XHJcbiAgICAgICAgICA8Q2FyZEhlYWRlcj5cclxuICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHZlcmlmaWNhZG9cclxuICAgICAgICAgICAgPyAgPENoZWNrQ2lyY2xlIGNsYXNzTmFtZT1cInRleHQtZ3JlZW4tNTAwIHctMTYgaC0xNiBteC1hdXRvXCIgLz5cclxuICAgICAgICAgICAgOiA8Q2lyY2xlWCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgdy0xNiBoLTE2IG14LWF1dG9cIi8+XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8Q2FyZFRpdGxlIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBtdC00XCI+e21lbnNhamV9PC9DYXJkVGl0bGU+XHJcbiAgICAgICAgICA8L0NhcmRIZWFkZXI+XHJcbiAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC02IHctZnVsbCBiZy1ncmVlbi01MDAgaG92ZXI6YmctZ3JlZW4tNjAwXCJcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIj5CYWNrIHRvIExvZ2luPC9MaW5rPlxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGluayIsIkJ1dHRvbiIsIkNhcmQiLCJDYXJkSGVhZGVyIiwiQ2FyZFRpdGxlIiwiQ2FyZENvbnRlbnQiLCJDaGVja0NpcmNsZSIsIkNpcmNsZVgiLCJWZXJpZnkiLCJwYXJhbXMiLCJyZXNvbHZlZFBhcmFtcyIsImVtYWlsIiwibWVuc2FqZSIsInNldE1lbnNhamUiLCJ2ZXJpZmljYWRvIiwic2V0VmVyaWZpY2FkbyIsInZlcmlmaWNhclVzdWFyaW8iLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJzdWNjZXNzIiwiZXJyb3IiLCJjb25zb2xlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaHJlZiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/verify/[email]/page.jsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/circle-x.js":
/*!**************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/circle-x.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __iconNode: () => (/* binding */ __iconNode),\n/* harmony export */   \"default\": () => (/* binding */ CircleX)\n/* harmony export */ });\n/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/createLucideIcon.js\");\n/**\n * @license lucide-react v0.475.0 - ISC\n *\n * This source code is licensed under the ISC license.\n * See the LICENSE file in the root directory of this source tree.\n */ \nconst __iconNode = [\n    [\n        \"circle\",\n        {\n            cx: \"12\",\n            cy: \"12\",\n            r: \"10\",\n            key: \"1mglay\"\n        }\n    ],\n    [\n        \"path\",\n        {\n            d: \"m15 9-6 6\",\n            key: \"1uzhvr\"\n        }\n    ],\n    [\n        \"path\",\n        {\n            d: \"m9 9 6 6\",\n            key: \"z0biqf\"\n        }\n    ]\n];\nconst CircleX = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"CircleX\", __iconNode);\n //# sourceMappingURL=circle-x.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9sdWNpZGUtcmVhY3QvZGlzdC9lc20vaWNvbnMvY2lyY2xlLXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBR08sTUFBTSxVQUF1QjtJQUNsQztRQUFDLFFBQVU7UUFBQTtZQUFFLEVBQUk7WUFBTSxDQUFJLFFBQU07WUFBQSxDQUFHO1lBQU0sR0FBSztRQUFBLENBQVU7S0FBQTtJQUN6RDtRQUFDLE1BQVE7UUFBQTtZQUFFLEdBQUcsQ0FBYTtZQUFBLEtBQUs7UUFBQSxDQUFVO0tBQUE7SUFDMUM7UUFBQyxNQUFRO1FBQUE7WUFBRSxHQUFHLENBQVk7WUFBQSxLQUFLO1FBQUEsQ0FBVTtLQUFBO0NBQzNDO0FBYU0sY0FBVSxrRUFBaUIsWUFBVyxDQUFVIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXEluc3RhbGFjaW9uXFxzcmNcXGljb25zXFxjaXJjbGUteC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlTHVjaWRlSWNvbiBmcm9tICcuLi9jcmVhdGVMdWNpZGVJY29uJztcbmltcG9ydCB7IEljb25Ob2RlIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgX19pY29uTm9kZTogSWNvbk5vZGUgPSBbXG4gIFsnY2lyY2xlJywgeyBjeDogJzEyJywgY3k6ICcxMicsIHI6ICcxMCcsIGtleTogJzFtZ2xheScgfV0sXG4gIFsncGF0aCcsIHsgZDogJ20xNSA5LTYgNicsIGtleTogJzF1emh2cicgfV0sXG4gIFsncGF0aCcsIHsgZDogJ205IDkgNiA2Jywga2V5OiAnejBiaXFmJyB9XSxcbl07XG5cbi8qKlxuICogQGNvbXBvbmVudCBAbmFtZSBDaXJjbGVYXG4gKiBAZGVzY3JpcHRpb24gTHVjaWRlIFNWRyBpY29uIGNvbXBvbmVudCwgcmVuZGVycyBTVkcgRWxlbWVudCB3aXRoIGNoaWxkcmVuLlxuICpcbiAqIEBwcmV2aWV3ICFbaW1nXShkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUFnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JZ29nSUhkcFpIUm9QU0l5TkNJS0lDQm9aV2xuYUhROUlqSTBJZ29nSUhacFpYZENiM2c5SWpBZ01DQXlOQ0F5TkNJS0lDQm1hV3hzUFNKdWIyNWxJZ29nSUhOMGNtOXJaVDBpSXpBd01DSWdjM1I1YkdVOUltSmhZMnRuY205MWJtUXRZMjlzYjNJNklDTm1abVk3SUdKdmNtUmxjaTF5WVdScGRYTTZJREp3ZUNJS0lDQnpkSEp2YTJVdGQybGtkR2c5SWpJaUNpQWdjM1J5YjJ0bExXeHBibVZqWVhBOUluSnZkVzVrSWdvZ0lITjBjbTlyWlMxc2FXNWxhbTlwYmowaWNtOTFibVFpQ2o0S0lDQThZMmx5WTJ4bElHTjRQU0l4TWlJZ1kzazlJakV5SWlCeVBTSXhNQ0lnTHo0S0lDQThjR0YwYUNCa1BTSnRNVFVnT1MwMklEWWlJQzgrQ2lBZ1BIQmhkR2dnWkQwaWJUa2dPU0EySURZaUlDOCtDand2YzNablBnbz0pIC0gaHR0cHM6Ly9sdWNpZGUuZGV2L2ljb25zL2NpcmNsZS14XG4gKiBAc2VlIGh0dHBzOi8vbHVjaWRlLmRldi9ndWlkZS9wYWNrYWdlcy9sdWNpZGUtcmVhY3QgLSBEb2N1bWVudGF0aW9uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzIC0gTHVjaWRlIGljb25zIHByb3BzIGFuZCBhbnkgdmFsaWQgU1ZHIGF0dHJpYnV0ZVxuICogQHJldHVybnMge0pTWC5FbGVtZW50fSBKU1ggRWxlbWVudFxuICpcbiAqL1xuY29uc3QgQ2lyY2xlWCA9IGNyZWF0ZUx1Y2lkZUljb24oJ0NpcmNsZVgnLCBfX2ljb25Ob2RlKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2lyY2xlWDtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/circle-x.js\n"));

/***/ })

});