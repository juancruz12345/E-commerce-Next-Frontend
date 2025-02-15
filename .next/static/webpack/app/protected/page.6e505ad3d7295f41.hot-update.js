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

/***/ "(app-pages-browser)/./app/protected/page.jsx":
/*!********************************!*\
  !*** ./app/protected/page.jsx ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ POSPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_sidebar_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/sidebar-nav */ \"(app-pages-browser)/./components/sidebar-nav.jsx\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/header */ \"(app-pages-browser)/./components/header.jsx\");\n/* harmony import */ var _components_ProductCatalog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ProductCatalog */ \"(app-pages-browser)/./components/ProductCatalog.jsx\");\n/* harmony import */ var _components_ShoppingCart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ShoppingCart */ \"(app-pages-browser)/./components/ShoppingCart.jsx\");\n/* harmony import */ var _components_OrderHistory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/OrderHistory */ \"(app-pages-browser)/./components/OrderHistory.jsx\");\n/* harmony import */ var _components_UserProfile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/UserProfile */ \"(app-pages-browser)/./components/UserProfile.jsx\");\n/* harmony import */ var _components_Checkout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Checkout */ \"(app-pages-browser)/./components/Checkout.jsx\");\n/* harmony import */ var _components_SettingsSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/SettingsSection */ \"(app-pages-browser)/./components/SettingsSection.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction POSPage() {\n    _s();\n    const [cartItems, setCartItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [activeSection, setActiveSection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"ProductCatalog\");\n    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    async function FetchData() {\n        const response = await fetch('http://localhost:5000', {\n            method: 'GET',\n            credentials: 'include'\n        });\n        const data = await response.json();\n        setUser(data);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"POSPage.useEffect\": ()=>{\n            FetchData();\n        }\n    }[\"POSPage.useEffect\"], []);\n    const handleAddToCart = (product)=>{\n        setCartItems((prevItems)=>{\n            const existingItem = prevItems.find((item)=>item.id === product.id);\n            if (existingItem) {\n                return prevItems.map((item)=>item.id === product.id ? {\n                        ...item,\n                        quantity: item.quantity + 1\n                    } : item);\n            } else {\n                return [\n                    ...prevItems,\n                    {\n                        ...product,\n                        quantity: 1\n                    }\n                ];\n            }\n        });\n    };\n    const handleUpdateCart = (updatedCart)=>{\n        setCartItems(updatedCart);\n    };\n    const handleSearch = (term)=>{\n        setSearchTerm(term);\n    };\n    const renderActiveSection = ()=>{\n        switch(activeSection){\n            case \"ProductCatalog\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductCatalog__WEBPACK_IMPORTED_MODULE_4__.ProductCatalog, {\n                    onAddToCart: handleAddToCart,\n                    searchTerm: searchTerm\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Instalacion\\\\PROYECTOS\\\\e-commerce-next\\\\my-app\\\\app\\\\protected\\\\page.jsx\",\n                    lineNumber: 61,\n                    columnNumber: 16\n                }, this);\n            case \"ShoppingCart\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ShoppingCart__WEBPACK_IMPORTED_MODULE_5__.ShoppingCart, {\n                    cartItems: cartItems,\n                    onUpdateCart: handleUpdateCart,\n                    setActiveSection: setActiveSection\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Instalacion\\\\PROYECTOS\\\\e-commerce-next\\\\my-app\\\\app\\\\protected\\\\page.jsx\",\n                    lineNumber: 63,\n                    columnNumber: 16\n                }, this);\n            case \"OrderHistory\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_OrderHistory__WEBPACK_IMPORTED_MODULE_6__.OrderHistory, {\n                    user: user\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Instalacion\\\\PROYECTOS\\\\e-commerce-next\\\\my-app\\\\app\\\\protected\\\\page.jsx\",\n                    lineNumber: 65,\n                    columnNumber: 16\n                }, this);\n            case \"UserProfile\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UserProfile__WEBPACK_IMPORTED_MODULE_7__.UserProfile, {\n                    user: user\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Instalacion\\\\PROYECTOS\\\\e-commerce-next\\\\my-app\\\\app\\\\protected\\\\page.jsx\",\n                    lineNumber: 67,\n                    columnNumber: 16\n                }, this);\n            case \"Checkout\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Checkout__WEBPACK_IMPORTED_MODULE_8__.Checkout, {\n                    user: user,\n                    cartItems: cartItems,\n                    total: cartItems.reduce((sum, item)=>sum + item.price * item.quantity, 0)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Instalacion\\\\PROYECTOS\\\\e-commerce-next\\\\my-app\\\\app\\\\protected\\\\page.jsx\",\n                    lineNumber: 69,\n                    columnNumber: 16\n                }, this);\n            case \"SettingsSection\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SettingsSection__WEBPACK_IMPORTED_MODULE_9__.SettingsSection, {\n                    user: user\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Instalacion\\\\PROYECTOS\\\\e-commerce-next\\\\my-app\\\\app\\\\protected\\\\page.jsx\",\n                    lineNumber: 71,\n                    columnNumber: 16\n                }, this);\n            default:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductCatalog__WEBPACK_IMPORTED_MODULE_4__.ProductCatalog, {\n                    onAddToCart: handleAddToCart,\n                    searchTerm: searchTerm\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Instalacion\\\\PROYECTOS\\\\e-commerce-next\\\\my-app\\\\app\\\\protected\\\\page.jsx\",\n                    lineNumber: 74,\n                    columnNumber: 16\n                }, this);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: user !== null ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex h-screen bg-gray-100\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sidebar_nav__WEBPACK_IMPORTED_MODULE_2__.SidebarNav, {\n                    onSectionChange: setActiveSection,\n                    activeSection: activeSection\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Instalacion\\\\PROYECTOS\\\\e-commerce-next\\\\my-app\\\\app\\\\protected\\\\page.jsx\",\n                    lineNumber: 83,\n                    columnNumber: 6\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex-1 flex flex-col overflow-hidden\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_3__.Header, {\n                            onSearch: handleSearch\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Instalacion\\\\PROYECTOS\\\\e-commerce-next\\\\my-app\\\\app\\\\protected\\\\page.jsx\",\n                            lineNumber: 85,\n                            columnNumber: 8\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                            className: \"flex-1 overflow-auto p-4\",\n                            children: renderActiveSection()\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Instalacion\\\\PROYECTOS\\\\e-commerce-next\\\\my-app\\\\app\\\\protected\\\\page.jsx\",\n                            lineNumber: 86,\n                            columnNumber: 8\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Instalacion\\\\PROYECTOS\\\\e-commerce-next\\\\my-app\\\\app\\\\protected\\\\page.jsx\",\n                    lineNumber: 84,\n                    columnNumber: 6\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Instalacion\\\\PROYECTOS\\\\e-commerce-next\\\\my-app\\\\app\\\\protected\\\\page.jsx\",\n            lineNumber: 82,\n            columnNumber: 7\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n            className: \"align text-center\",\n            children: \"Cargando usuario\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Instalacion\\\\PROYECTOS\\\\e-commerce-next\\\\my-app\\\\app\\\\protected\\\\page.jsx\",\n            lineNumber: 93,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Instalacion\\\\PROYECTOS\\\\e-commerce-next\\\\my-app\\\\app\\\\protected\\\\page.jsx\",\n        lineNumber: 79,\n        columnNumber: 4\n    }, this);\n}\n_s(POSPage, \"ZEL9Aro9LVP35jzjqbMcpGKOjmg=\");\n_c = POSPage;\nvar _c;\n$RefreshReg$(_c, \"POSPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wcm90ZWN0ZWQvcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMkM7QUFDVTtBQUNUO0FBQ2dCO0FBQ0o7QUFDQTtBQUNGO0FBQ047QUFDYztBQUcvQyxTQUFTVTs7SUFDdEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdaLCtDQUFRQSxDQUFDLEVBQUU7SUFDN0MsTUFBTSxDQUFDYSxlQUFlQyxpQkFBaUIsR0FBR2QsK0NBQVFBLENBQUM7SUFDbkQsTUFBTSxDQUFDZSxZQUFZQyxjQUFjLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUU3QyxNQUFNLENBQUNpQixNQUFNQyxRQUFRLEdBQUdsQiwrQ0FBUUEsQ0FBQztJQUVqQyxlQUFlbUI7UUFDYixNQUFNQyxXQUFXLE1BQU1DLE1BQU0seUJBQXdCO1lBQ2pEQyxRQUFTO1lBQ1RDLGFBQWE7UUFDakI7UUFFQSxNQUFNQyxPQUFPLE1BQU1KLFNBQVNLLElBQUk7UUFDaENQLFFBQVFNO0lBQ1o7SUFFQXZCLGdEQUFTQTs2QkFBQztZQUVOa0I7UUFFSjs0QkFBRSxFQUFFO0lBRUosTUFBTU8sa0JBQWtCLENBQUNDO1FBQ3ZCZixhQUFhZ0IsQ0FBQUE7WUFDWCxNQUFNQyxlQUFlRCxVQUFVRSxJQUFJLENBQUNDLENBQUFBLE9BQVFBLEtBQUtDLEVBQUUsS0FBS0wsUUFBUUssRUFBRTtZQUNsRSxJQUFJSCxjQUFjO2dCQUNoQixPQUFPRCxVQUFVSyxHQUFHLENBQUNGLENBQUFBLE9BQ25CQSxLQUFLQyxFQUFFLEtBQUtMLFFBQVFLLEVBQUUsR0FBRzt3QkFBRSxHQUFHRCxJQUFJO3dCQUFFRyxVQUFVSCxLQUFLRyxRQUFRLEdBQUc7b0JBQUUsSUFBSUg7WUFFeEUsT0FBTztnQkFDTCxPQUFPO3VCQUFJSDtvQkFBVzt3QkFBRSxHQUFHRCxPQUFPO3dCQUFFTyxVQUFVO29CQUFFO2lCQUFFO1lBQ3BEO1FBQ0Y7SUFDRjtJQUVBLE1BQU1DLG1CQUFtQixDQUFDQztRQUN4QnhCLGFBQWF3QjtJQUNmO0lBRUEsTUFBTUMsZUFBZSxDQUFDQztRQUNwQnRCLGNBQWNzQjtJQUNoQjtJQUVFLE1BQU1DLHNCQUFzQjtRQUMxQixPQUFRMUI7WUFDTixLQUFLO2dCQUNILHFCQUFPLDhEQUFDVCxzRUFBY0E7b0JBQUNvQyxhQUFhZDtvQkFBaUJYLFlBQVlBOzs7Ozs7WUFDbkUsS0FBSztnQkFDSCxxQkFBTyw4REFBQ1Ysa0VBQVlBO29CQUFDTSxXQUFXQTtvQkFBVzhCLGNBQWNOO29CQUFrQnJCLGtCQUFrQkE7Ozs7OztZQUMvRixLQUFLO2dCQUNILHFCQUFPLDhEQUFDUixrRUFBWUE7b0JBQUNXLE1BQU1BOzs7Ozs7WUFDN0IsS0FBSztnQkFDSCxxQkFBTyw4REFBQ1YsZ0VBQVdBO29CQUFDVSxNQUFNQTs7Ozs7O1lBQzVCLEtBQUs7Z0JBQ0gscUJBQU8sOERBQUNULDBEQUFRQTtvQkFBQ1MsTUFBTUE7b0JBQU1OLFdBQVdBO29CQUFXK0IsT0FBTy9CLFVBQVVnQyxNQUFNLENBQUMsQ0FBQ0MsS0FBS2IsT0FBU2EsTUFBTWIsS0FBS2MsS0FBSyxHQUFHZCxLQUFLRyxRQUFRLEVBQUU7Ozs7OztZQUM5SCxLQUFLO2dCQUNILHFCQUFPLDhEQUFDekIsd0VBQWVBO29CQUFDUSxNQUFNQTs7Ozs7O1lBRWhDO2dCQUNFLHFCQUFPLDhEQUFDYixzRUFBY0E7b0JBQUNvQyxhQUFhZDtvQkFBaUJYLFlBQVlBOzs7Ozs7UUFDckU7SUFDRjtJQUVBLHFCQUNDLDhEQUFDK0I7a0JBQ0U3QixTQUFPLHFCQUVQLDhEQUFDNkI7WUFBSUMsV0FBVTs7OEJBQ2hCLDhEQUFDN0MsK0RBQVVBO29CQUFDOEMsaUJBQWlCbEM7b0JBQWtCRCxlQUFlQTs7Ozs7OzhCQUM5RCw4REFBQ2lDO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQzVDLHNEQUFNQTs0QkFBQzhDLFVBQVVaOzs7Ozs7c0NBQ2xCLDhEQUFDYTs0QkFBS0gsV0FBVTtzQ0FDYlI7Ozs7Ozs7Ozs7Ozs7Ozs7O2lDQU1QLDhEQUFDWTtZQUFHSixXQUFVO3NCQUFvQjs7Ozs7Ozs7Ozs7QUFRckM7R0F2RndCckM7S0FBQUEiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSW5zdGFsYWNpb25cXFBST1lFQ1RPU1xcZS1jb21tZXJjZS1uZXh0XFxteS1hcHBcXGFwcFxccHJvdGVjdGVkXFxwYWdlLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgU2lkZWJhck5hdiB9IGZyb20gXCJAL2NvbXBvbmVudHMvc2lkZWJhci1uYXZcIlxyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL2hlYWRlclwiXHJcbmltcG9ydCB7IFByb2R1Y3RDYXRhbG9nIH0gZnJvbSBcIkAvY29tcG9uZW50cy9Qcm9kdWN0Q2F0YWxvZ1wiXHJcbmltcG9ydCB7IFNob3BwaW5nQ2FydCB9IGZyb20gXCJAL2NvbXBvbmVudHMvU2hvcHBpbmdDYXJ0XCJcclxuaW1wb3J0IHsgT3JkZXJIaXN0b3J5IH0gZnJvbSBcIkAvY29tcG9uZW50cy9PcmRlckhpc3RvcnlcIlxyXG5pbXBvcnQgeyBVc2VyUHJvZmlsZSB9IGZyb20gXCJAL2NvbXBvbmVudHMvVXNlclByb2ZpbGVcIlxyXG5pbXBvcnQgeyBDaGVja291dCB9IGZyb20gXCJAL2NvbXBvbmVudHMvQ2hlY2tvdXRcIlxyXG5pbXBvcnQgeyBTZXR0aW5nc1NlY3Rpb24gfSBmcm9tICdAL2NvbXBvbmVudHMvU2V0dGluZ3NTZWN0aW9uJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBPU1BhZ2UoKSB7XHJcbiAgY29uc3QgW2NhcnRJdGVtcywgc2V0Q2FydEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbYWN0aXZlU2VjdGlvbiwgc2V0QWN0aXZlU2VjdGlvbl0gPSB1c2VTdGF0ZShcIlByb2R1Y3RDYXRhbG9nXCIpO1xyXG4gIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gRmV0Y2hEYXRhKCl7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjUwMDAnLHtcclxuICAgICAgICBtZXRob2QgOiAnR0VUJyxcclxuICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnXHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICBzZXRVc2VyKGRhdGEpXHJcbn1cclxuXHJcbnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgXHJcbiAgICBGZXRjaERhdGEoKVxyXG4gIFxyXG59LFtdKVxyXG5cclxuY29uc3QgaGFuZGxlQWRkVG9DYXJ0ID0gKHByb2R1Y3QpID0+IHtcclxuICBzZXRDYXJ0SXRlbXMocHJldkl0ZW1zID0+IHtcclxuICAgIGNvbnN0IGV4aXN0aW5nSXRlbSA9IHByZXZJdGVtcy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gcHJvZHVjdC5pZCk7XHJcbiAgICBpZiAoZXhpc3RpbmdJdGVtKSB7XHJcbiAgICAgIHJldHVybiBwcmV2SXRlbXMubWFwKGl0ZW0gPT4gXHJcbiAgICAgICAgaXRlbS5pZCA9PT0gcHJvZHVjdC5pZCA/IHsgLi4uaXRlbSwgcXVhbnRpdHk6IGl0ZW0ucXVhbnRpdHkgKyAxIH0gOiBpdGVtXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gWy4uLnByZXZJdGVtcywgeyAuLi5wcm9kdWN0LCBxdWFudGl0eTogMSB9XTtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGhhbmRsZVVwZGF0ZUNhcnQgPSAodXBkYXRlZENhcnQpID0+IHtcclxuICBzZXRDYXJ0SXRlbXModXBkYXRlZENhcnQpO1xyXG59O1xyXG5cclxuY29uc3QgaGFuZGxlU2VhcmNoID0gKHRlcm0pID0+IHtcclxuICBzZXRTZWFyY2hUZXJtKHRlcm0pO1xyXG59O1xyXG5cclxuICBjb25zdCByZW5kZXJBY3RpdmVTZWN0aW9uID0gKCkgPT4ge1xyXG4gICAgc3dpdGNoIChhY3RpdmVTZWN0aW9uKSB7XHJcbiAgICAgIGNhc2UgXCJQcm9kdWN0Q2F0YWxvZ1wiOlxyXG4gICAgICAgIHJldHVybiA8UHJvZHVjdENhdGFsb2cgb25BZGRUb0NhcnQ9e2hhbmRsZUFkZFRvQ2FydH0gc2VhcmNoVGVybT17c2VhcmNoVGVybX0vPjtcclxuICAgICAgY2FzZSBcIlNob3BwaW5nQ2FydFwiOlxyXG4gICAgICAgIHJldHVybiA8U2hvcHBpbmdDYXJ0IGNhcnRJdGVtcz17Y2FydEl0ZW1zfSBvblVwZGF0ZUNhcnQ9e2hhbmRsZVVwZGF0ZUNhcnR9IHNldEFjdGl2ZVNlY3Rpb249e3NldEFjdGl2ZVNlY3Rpb259IC8+O1xyXG4gICAgICBjYXNlIFwiT3JkZXJIaXN0b3J5XCI6XHJcbiAgICAgICAgcmV0dXJuIDxPcmRlckhpc3RvcnkgdXNlcj17dXNlcn0vPjtcclxuICAgICAgY2FzZSBcIlVzZXJQcm9maWxlXCI6XHJcbiAgICAgICAgcmV0dXJuIDxVc2VyUHJvZmlsZSB1c2VyPXt1c2VyfS8+O1xyXG4gICAgICBjYXNlIFwiQ2hlY2tvdXRcIjpcclxuICAgICAgICByZXR1cm4gPENoZWNrb3V0IHVzZXI9e3VzZXJ9IGNhcnRJdGVtcz17Y2FydEl0ZW1zfSB0b3RhbD17Y2FydEl0ZW1zLnJlZHVjZSgoc3VtLCBpdGVtKSA9PiBzdW0gKyBpdGVtLnByaWNlICogaXRlbS5xdWFudGl0eSwgMCl9IC8+O1xyXG4gICAgICBjYXNlIFwiU2V0dGluZ3NTZWN0aW9uXCI6XHJcbiAgICAgICAgcmV0dXJuIDxTZXR0aW5nc1NlY3Rpb24gdXNlcj17dXNlcn0vPlxyXG5cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gPFByb2R1Y3RDYXRhbG9nIG9uQWRkVG9DYXJ0PXtoYW5kbGVBZGRUb0NhcnR9IHNlYXJjaFRlcm09e3NlYXJjaFRlcm19Lz47XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgPGRpdj5cclxuICAgICB7dXNlciE9PW51bGxcclxuICAgICBcclxuICAgICA/PGRpdiBjbGFzc05hbWU9XCJmbGV4IGgtc2NyZWVuIGJnLWdyYXktMTAwXCI+XHJcbiAgICAgPFNpZGViYXJOYXYgb25TZWN0aW9uQ2hhbmdlPXtzZXRBY3RpdmVTZWN0aW9ufSBhY3RpdmVTZWN0aW9uPXthY3RpdmVTZWN0aW9ufSAvPlxyXG4gICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXggZmxleC1jb2wgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICA8SGVhZGVyIG9uU2VhcmNoPXtoYW5kbGVTZWFyY2h9Lz5cclxuICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXgtMSBvdmVyZmxvdy1hdXRvIHAtNFwiPlxyXG4gICAgICAgICB7cmVuZGVyQWN0aXZlU2VjdGlvbigpfVxyXG4gICAgICAgPC9tYWluPlxyXG4gICAgIDwvZGl2PlxyXG4gICA8L2Rpdj5cclxuXHJcbiAgIDpcclxuICAgPGgzIGNsYXNzTmFtZT0nYWxpZ24gdGV4dC1jZW50ZXInPkNhcmdhbmRvIHVzdWFyaW88L2gzPlxyXG4gICAgIFxyXG4gICAgIFxyXG4gICAgIH1cclxuXHJcblxyXG4gICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG4gXHJcbiAiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJTaWRlYmFyTmF2IiwiSGVhZGVyIiwiUHJvZHVjdENhdGFsb2ciLCJTaG9wcGluZ0NhcnQiLCJPcmRlckhpc3RvcnkiLCJVc2VyUHJvZmlsZSIsIkNoZWNrb3V0IiwiU2V0dGluZ3NTZWN0aW9uIiwiUE9TUGFnZSIsImNhcnRJdGVtcyIsInNldENhcnRJdGVtcyIsImFjdGl2ZVNlY3Rpb24iLCJzZXRBY3RpdmVTZWN0aW9uIiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJ1c2VyIiwic2V0VXNlciIsIkZldGNoRGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJjcmVkZW50aWFscyIsImRhdGEiLCJqc29uIiwiaGFuZGxlQWRkVG9DYXJ0IiwicHJvZHVjdCIsInByZXZJdGVtcyIsImV4aXN0aW5nSXRlbSIsImZpbmQiLCJpdGVtIiwiaWQiLCJtYXAiLCJxdWFudGl0eSIsImhhbmRsZVVwZGF0ZUNhcnQiLCJ1cGRhdGVkQ2FydCIsImhhbmRsZVNlYXJjaCIsInRlcm0iLCJyZW5kZXJBY3RpdmVTZWN0aW9uIiwib25BZGRUb0NhcnQiLCJvblVwZGF0ZUNhcnQiLCJ0b3RhbCIsInJlZHVjZSIsInN1bSIsInByaWNlIiwiZGl2IiwiY2xhc3NOYW1lIiwib25TZWN0aW9uQ2hhbmdlIiwib25TZWFyY2giLCJtYWluIiwiaDMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/protected/page.jsx\n"));

/***/ })

});