"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/protected/page",{

/***/ "(app-pages-browser)/./components/UserProfile.jsx":
/*!************************************!*\
  !*** ./components/UserProfile.jsx ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserProfile: () => (/* binding */ UserProfile)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.jsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./components/ui/input.jsx\");\n/* harmony import */ var _components_ui_label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/label */ \"(app-pages-browser)/./components/ui/label.jsx\");\n/* __next_internal_client_entry_do_not_use__ UserProfile auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction UserProfile(param) {\n    let { user } = param;\n    _s();\n    console.log(user);\n    const [user2, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: 'John Doe',\n        email: 'john@example.com',\n        address: '123 Main St, City, Country'\n    });\n    const [profile, setProfile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    async function FetchData() {\n        const response = await fetch(\"http://localhost:5000/user/\".concat(user.id), {\n            method: 'GET',\n            credentials: 'include'\n        });\n        const data = await response.json();\n        console.log(data.user);\n        setProfile(data.user);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"UserProfile.useEffect\": ()=>{\n            FetchData();\n        }\n    }[\"UserProfile.useEffect\"], []);\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setUser((prevUser)=>({\n                ...prevUser,\n                [name]: value\n            }));\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        // Here you would typically send the updated user data to your backend\n        console.log('Updated user:', user);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-2xl font-bold mb-4\",\n                children: \"User Profile\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Instalacion\\\\PROYECTOS\\\\e-commerce-next\\\\my-app\\\\components\\\\UserProfile.jsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            profile !== null && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: JSON.stringify(profile)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Instalacion\\\\PROYECTOS\\\\e-commerce-next\\\\my-app\\\\components\\\\UserProfile.jsx\",\n                lineNumber: 54,\n                columnNumber: 27\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                className: \"space-y-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_4__.Label, {\n                                htmlFor: \"name\",\n                                children: \"Name\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Instalacion\\\\PROYECTOS\\\\e-commerce-next\\\\my-app\\\\components\\\\UserProfile.jsx\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                                id: \"name\",\n                                name: \"name\",\n                                value: user2.name,\n                                onChange: handleChange,\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Instalacion\\\\PROYECTOS\\\\e-commerce-next\\\\my-app\\\\components\\\\UserProfile.jsx\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Instalacion\\\\PROYECTOS\\\\e-commerce-next\\\\my-app\\\\components\\\\UserProfile.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_4__.Label, {\n                                htmlFor: \"email\",\n                                children: \"Email\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Instalacion\\\\PROYECTOS\\\\e-commerce-next\\\\my-app\\\\components\\\\UserProfile.jsx\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                                id: \"email\",\n                                name: \"email\",\n                                type: \"email\",\n                                value: user2.email,\n                                onChange: handleChange,\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Instalacion\\\\PROYECTOS\\\\e-commerce-next\\\\my-app\\\\components\\\\UserProfile.jsx\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Instalacion\\\\PROYECTOS\\\\e-commerce-next\\\\my-app\\\\components\\\\UserProfile.jsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_4__.Label, {\n                                htmlFor: \"address\",\n                                children: \"Address\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Instalacion\\\\PROYECTOS\\\\e-commerce-next\\\\my-app\\\\components\\\\UserProfile.jsx\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                                id: \"address\",\n                                name: \"address\",\n                                value: user2.address,\n                                onChange: handleChange,\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Instalacion\\\\PROYECTOS\\\\e-commerce-next\\\\my-app\\\\components\\\\UserProfile.jsx\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Instalacion\\\\PROYECTOS\\\\e-commerce-next\\\\my-app\\\\components\\\\UserProfile.jsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        type: \"submit\",\n                        children: \"Update Profile\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Instalacion\\\\PROYECTOS\\\\e-commerce-next\\\\my-app\\\\components\\\\UserProfile.jsx\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Instalacion\\\\PROYECTOS\\\\e-commerce-next\\\\my-app\\\\components\\\\UserProfile.jsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Instalacion\\\\PROYECTOS\\\\e-commerce-next\\\\my-app\\\\components\\\\UserProfile.jsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_s(UserProfile, \"NE8d2APxFjCsg0CHMf4lvywiUTU=\");\n_c = UserProfile;\nvar _c;\n$RefreshReg$(_c, \"UserProfile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvVXNlclByb2ZpbGUuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUU0QztBQUNHO0FBQ0Y7QUFDQTtBQUV0QyxTQUFTSyxZQUFZLEtBQU07UUFBTixFQUFDQyxJQUFJLEVBQUMsR0FBTjs7SUFDMUJDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDWixNQUFNLENBQUNHLE9BQU9DLFFBQVEsR0FBR1YsK0NBQVFBLENBQUM7UUFDaENXLE1BQU07UUFDTkMsT0FBTztRQUNQQyxTQUFTO0lBQ1g7SUFHQSxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR2YsK0NBQVFBLENBQUM7SUFFdkMsZUFBZWdCO1FBQ2IsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLDhCQUFzQyxPQUFSWixLQUFLYSxFQUFFLEdBQUc7WUFDakVDLFFBQVM7WUFDVEMsYUFBYTtRQUNqQjtRQUVBLE1BQU1DLE9BQU8sTUFBTUwsU0FBU00sSUFBSTtRQUNoQ2hCLFFBQVFDLEdBQUcsQ0FBQ2MsS0FBS2hCLElBQUk7UUFDckJTLFdBQVdPLEtBQUtoQixJQUFJO0lBQ3hCO0lBRUFMLGdEQUFTQTtpQ0FBQztZQUVOZTtRQUVKO2dDQUFFLEVBQUU7SUFFRixNQUFNUSxlQUFlLENBQUNDO1FBQ3BCLE1BQU0sRUFBRWQsSUFBSSxFQUFFZSxLQUFLLEVBQUUsR0FBR0QsRUFBRUUsTUFBTTtRQUNoQ2pCLFFBQVFrQixDQUFBQSxXQUFhO2dCQUNuQixHQUFHQSxRQUFRO2dCQUNYLENBQUNqQixLQUFLLEVBQUVlO1lBQ1Y7SUFDRjtJQUVBLE1BQU1HLGVBQWUsQ0FBQ0o7UUFDcEJBLEVBQUVLLGNBQWM7UUFDaEIsc0VBQXNFO1FBQ3RFdkIsUUFBUUMsR0FBRyxDQUFDLGlCQUFpQkY7SUFDL0I7SUFFQSxxQkFDRSw4REFBQ3lCOzswQkFDQyw4REFBQ0M7Z0JBQUdDLFdBQVU7MEJBQTBCOzs7Ozs7WUFFdENuQixZQUFVLHNCQUFRLDhEQUFDb0I7MEJBQUlDLEtBQUtDLFNBQVMsQ0FBQ3RCOzs7Ozs7MEJBRXhDLDhEQUFDdUI7Z0JBQUtDLFVBQVVUO2dCQUFjSSxXQUFVOztrQ0FDdEMsOERBQUNGOzswQ0FDQyw4REFBQzNCLHVEQUFLQTtnQ0FBQ21DLFNBQVE7MENBQU87Ozs7OzswQ0FDdEIsOERBQUNwQyx1REFBS0E7Z0NBQ0pnQixJQUFHO2dDQUNIUixNQUFLO2dDQUNMZSxPQUFPakIsTUFBTUUsSUFBSTtnQ0FDakI2QixVQUFVaEI7Z0NBQ1ZpQixRQUFROzs7Ozs7Ozs7Ozs7a0NBR1osOERBQUNWOzswQ0FDQyw4REFBQzNCLHVEQUFLQTtnQ0FBQ21DLFNBQVE7MENBQVE7Ozs7OzswQ0FDdkIsOERBQUNwQyx1REFBS0E7Z0NBQ0pnQixJQUFHO2dDQUNIUixNQUFLO2dDQUNMK0IsTUFBSztnQ0FDTGhCLE9BQU9qQixNQUFNRyxLQUFLO2dDQUNsQjRCLFVBQVVoQjtnQ0FDVmlCLFFBQVE7Ozs7Ozs7Ozs7OztrQ0FHWiw4REFBQ1Y7OzBDQUNDLDhEQUFDM0IsdURBQUtBO2dDQUFDbUMsU0FBUTswQ0FBVTs7Ozs7OzBDQUN6Qiw4REFBQ3BDLHVEQUFLQTtnQ0FDSmdCLElBQUc7Z0NBQ0hSLE1BQUs7Z0NBQ0xlLE9BQU9qQixNQUFNSSxPQUFPO2dDQUNwQjJCLFVBQVVoQjtnQ0FDVmlCLFFBQVE7Ozs7Ozs7Ozs7OztrQ0FHWiw4REFBQ3ZDLHlEQUFNQTt3QkFBQ3dDLE1BQUs7a0NBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUk5QjtHQXBGZ0JyQztLQUFBQSIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxJbnN0YWxhY2lvblxcUFJPWUVDVE9TXFxlLWNvbW1lcmNlLW5leHRcXG15LWFwcFxcY29tcG9uZW50c1xcVXNlclByb2ZpbGUuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCJcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2lucHV0XCJcclxuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2xhYmVsXCJcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBVc2VyUHJvZmlsZSh7dXNlcn0pIHtcclxuICBjb25zb2xlLmxvZyh1c2VyKVxyXG4gIGNvbnN0IFt1c2VyMiwgc2V0VXNlcl0gPSB1c2VTdGF0ZSh7XHJcbiAgICBuYW1lOiAnSm9obiBEb2UnLFxyXG4gICAgZW1haWw6ICdqb2huQGV4YW1wbGUuY29tJyxcclxuICAgIGFkZHJlc3M6ICcxMjMgTWFpbiBTdCwgQ2l0eSwgQ291bnRyeScsXHJcbiAgfSk7XHJcblxyXG5cclxuICBjb25zdCBbcHJvZmlsZSwgc2V0UHJvZmlsZV0gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBGZXRjaERhdGEoKXtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC91c2VyLyR7dXNlci5pZH1gLHtcclxuICAgICAgICBtZXRob2QgOiAnR0VUJyxcclxuICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnXHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhLnVzZXIpXHJcbiAgICBzZXRQcm9maWxlKGRhdGEudXNlcilcclxufVxyXG5cclxudXNlRWZmZWN0KCgpPT57XHJcbiAgICBcclxuICAgIEZldGNoRGF0YSgpXHJcbiAgXHJcbn0sW10pXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcclxuICAgIHNldFVzZXIocHJldlVzZXIgPT4gKHtcclxuICAgICAgLi4ucHJldlVzZXIsXHJcbiAgICAgIFtuYW1lXTogdmFsdWVcclxuICAgIH0pKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gSGVyZSB5b3Ugd291bGQgdHlwaWNhbGx5IHNlbmQgdGhlIHVwZGF0ZWQgdXNlciBkYXRhIHRvIHlvdXIgYmFja2VuZFxyXG4gICAgY29uc29sZS5sb2coJ1VwZGF0ZWQgdXNlcjonLCB1c2VyKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBtYi00XCI+VXNlciBQcm9maWxlPC9oMj5cclxuICAgICAge1xyXG4gICAgICAgIHByb2ZpbGUhPT1udWxsICYmIDxoMT57SlNPTi5zdHJpbmdpZnkocHJvZmlsZSl9PC9oMT5cclxuICAgICAgfVxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJuYW1lXCI+TmFtZTwvTGFiZWw+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgaWQ9XCJuYW1lXCJcclxuICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17dXNlcjIubmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDwvTGFiZWw+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt1c2VyMi5lbWFpbH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwiYWRkcmVzc1wiPkFkZHJlc3M8L0xhYmVsPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIGlkPVwiYWRkcmVzc1wiXHJcbiAgICAgICAgICAgIG5hbWU9XCJhZGRyZXNzXCJcclxuICAgICAgICAgICAgdmFsdWU9e3VzZXIyLmFkZHJlc3N9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPlVwZGF0ZSBQcm9maWxlPC9CdXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJCdXR0b24iLCJJbnB1dCIsIkxhYmVsIiwiVXNlclByb2ZpbGUiLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsInVzZXIyIiwic2V0VXNlciIsIm5hbWUiLCJlbWFpbCIsImFkZHJlc3MiLCJwcm9maWxlIiwic2V0UHJvZmlsZSIsIkZldGNoRGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJpZCIsIm1ldGhvZCIsImNyZWRlbnRpYWxzIiwiZGF0YSIsImpzb24iLCJoYW5kbGVDaGFuZ2UiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJwcmV2VXNlciIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiZGl2IiwiaDIiLCJjbGFzc05hbWUiLCJoMSIsIkpTT04iLCJzdHJpbmdpZnkiLCJmb3JtIiwib25TdWJtaXQiLCJodG1sRm9yIiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsInR5cGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/UserProfile.jsx\n"));

/***/ })

});