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

/***/ "(app-pages-browser)/./context/UserContext.jsx":
/*!*********************************!*\
  !*** ./context/UserContext.jsx ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserProvider: () => (/* binding */ UserProvider),\n/* harmony export */   useUserContext: () => (/* binding */ useUserContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/@tanstack/react-query/build/modern/useQuery.js\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/@tanstack/react-query/build/modern/useMutation.js\");\n/* __next_internal_client_entry_do_not_use__ UserProvider,useUserContext auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction UserProvider(param) {\n    let { children } = param;\n    _s();\n    const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.useQueryClient)();\n    // ✅ Obtener usuario desde la API con cache\n    const { data: user, error } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)({\n        queryKey: [\n            \"user\"\n        ],\n        queryFn: {\n            \"UserProvider.useQuery\": async ()=>{\n                const response = await fetch(\"http://localhost:5000\", {\n                    credentials: \"include\"\n                });\n                if (!response.ok) throw new Error(\"Error al obtener el usuario\");\n                console.log('fetch cookies');\n                return response.json();\n            }\n        }[\"UserProvider.useQuery\"]\n    });\n    // ✅ Obtener perfil del usuario con cache\n    const { data: profile } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)({\n        queryKey: [\n            \"profile\",\n            user === null || user === void 0 ? void 0 : user.id\n        ],\n        queryFn: {\n            \"UserProvider.useQuery\": async ()=>{\n                if (!(user === null || user === void 0 ? void 0 : user.id)) return null;\n                const response = await fetch(\"http://localhost:5000/user/\".concat(user.id), {\n                    credentials: \"include\"\n                });\n                if (!response.ok) throw new Error(\"Error al obtener el perfil\");\n                console.log('fetch usuario');\n                const data = await response.json();\n                return data.user[0];\n            }\n        }[\"UserProvider.useQuery\"],\n        enabled: !!user\n    });\n    // ✅ Mutación para actualizar la dirección del usuario\n    const updateUserAddress = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.useMutation)({\n        mutationFn: {\n            \"UserProvider.useMutation[updateUserAddress]\": async (adress)=>{\n                const response = await fetch(\"http://localhost:5000/user/\".concat(user.id), {\n                    method: \"PUT\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify({\n                        adress\n                    })\n                });\n                if (!response.ok) {\n                    const data = await response.json();\n                    throw new Error(data.message || \"Error al actualizar el usuario\");\n                }\n                console.log('usuario actualizado');\n                return response.json();\n            }\n        }[\"UserProvider.useMutation[updateUserAddress]\"],\n        onSuccess: {\n            \"UserProvider.useMutation[updateUserAddress]\": ()=>{\n                queryClient.invalidateQueries([\n                    \"user\"\n                ]); // Recargar usuario\n                queryClient.invalidateQueries([\n                    \"profile\",\n                    user === null || user === void 0 ? void 0 : user.id\n                ]); // Recargar perfil\n            }\n        }[\"UserProvider.useMutation[updateUserAddress]\"]\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: {\n            profile,\n            updateUserAddress\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Instalacion\\\\PROYECTOS\\\\e-commerce-next\\\\my-app\\\\context\\\\UserContext.jsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, this);\n}\n_s(UserProvider, \"RHAWEyR5mzVa+md1a9QffvfDyow=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.useQueryClient,\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery,\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery,\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.useMutation\n    ];\n});\n_c = UserProvider;\nfunction useUserContext() {\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(UserContext);\n}\n_s1(useUserContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"UserProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbnRleHQvVXNlckNvbnRleHQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDa0Q7QUFDNEI7QUFFOUUsTUFBTUssNEJBQWNMLG9EQUFhQTtBQUUxQixTQUFTTSxhQUFhLEtBQVk7UUFBWixFQUFFQyxRQUFRLEVBQUUsR0FBWjs7SUFDM0IsTUFBTUMsY0FBY0wscUVBQWNBO0lBRWxDLDJDQUEyQztJQUMzQyxNQUFNLEVBQUVNLE1BQU1DLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQUdULCtEQUFRQSxDQUFDO1FBQ3JDVSxVQUFVO1lBQUM7U0FBTztRQUNsQkMsT0FBTztxQ0FBRTtnQkFDUCxNQUFNQyxXQUFXLE1BQU1DLE1BQU0seUJBQXlCO29CQUFFQyxhQUFhO2dCQUFVO2dCQUMvRSxJQUFJLENBQUNGLFNBQVNHLEVBQUUsRUFBRSxNQUFNLElBQUlDLE1BQU07Z0JBQ2xDQyxRQUFRQyxHQUFHLENBQUM7Z0JBQ1osT0FBT04sU0FBU08sSUFBSTtZQUN0Qjs7SUFDRjtJQUVBLHlDQUF5QztJQUN6QyxNQUFNLEVBQUVaLE1BQU1hLE9BQU8sRUFBRSxHQUFHcEIsK0RBQVFBLENBQUM7UUFDakNVLFVBQVU7WUFBQztZQUFXRixpQkFBQUEsMkJBQUFBLEtBQU1hLEVBQUU7U0FBQztRQUMvQlYsT0FBTztxQ0FBRTtnQkFDUCxJQUFJLEVBQUNILGlCQUFBQSwyQkFBQUEsS0FBTWEsRUFBRSxHQUFFLE9BQU87Z0JBQ3RCLE1BQU1ULFdBQVcsTUFBTUMsTUFBTSw4QkFBc0MsT0FBUkwsS0FBS2EsRUFBRSxHQUFJO29CQUFFUCxhQUFhO2dCQUFVO2dCQUMvRixJQUFJLENBQUNGLFNBQVNHLEVBQUUsRUFBRSxNQUFNLElBQUlDLE1BQU07Z0JBQ2xDQyxRQUFRQyxHQUFHLENBQUM7Z0JBQ1osTUFBTVgsT0FBTyxNQUFNSyxTQUFTTyxJQUFJO2dCQUNoQyxPQUFPWixLQUFLQyxJQUFJLENBQUMsRUFBRTtZQUNyQjs7UUFDQWMsU0FBUyxDQUFDLENBQUNkO0lBQ2I7SUFFQSxzREFBc0Q7SUFDdEQsTUFBTWUsb0JBQW9CckIsa0VBQVdBLENBQUM7UUFDcENzQixVQUFVOzJEQUFFLE9BQU9DO2dCQUNqQixNQUFNYixXQUFXLE1BQU1DLE1BQU0sOEJBQXNDLE9BQVJMLEtBQUthLEVBQUUsR0FBSTtvQkFDcEVLLFFBQVE7b0JBQ1JDLFNBQVM7d0JBQUUsZ0JBQWdCO29CQUFtQjtvQkFDOUNDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQzt3QkFBRUw7b0JBQU87Z0JBQ2hDO2dCQUVBLElBQUksQ0FBQ2IsU0FBU0csRUFBRSxFQUFFO29CQUNoQixNQUFNUixPQUFPLE1BQU1LLFNBQVNPLElBQUk7b0JBQ2hDLE1BQU0sSUFBSUgsTUFBTVQsS0FBS3dCLE9BQU8sSUFBSTtnQkFDbEM7Z0JBQ0FkLFFBQVFDLEdBQUcsQ0FBQztnQkFDWixPQUFPTixTQUFTTyxJQUFJO1lBQ3RCOztRQUNBYSxTQUFTOzJEQUFFO2dCQUNUMUIsWUFBWTJCLGlCQUFpQixDQUFDO29CQUFDO2lCQUFPLEdBQUcsbUJBQW1CO2dCQUM1RDNCLFlBQVkyQixpQkFBaUIsQ0FBQztvQkFBQztvQkFBV3pCLGlCQUFBQSwyQkFBQUEsS0FBTWEsRUFBRTtpQkFBQyxHQUFHLGtCQUFrQjtZQUMxRTs7SUFDRjtJQUVBLHFCQUNFLDhEQUFDbEIsWUFBWStCLFFBQVE7UUFBQ0MsT0FBTztZQUFFZjtZQUFTRztRQUFrQjtrQkFDdkRsQjs7Ozs7O0FBR1A7R0F2RGdCRDs7UUFDTUgsaUVBQWNBO1FBR0pELDJEQUFRQTtRQVdaQSwyREFBUUE7UUFjUkUsOERBQVdBOzs7S0E3QnZCRTtBQXlEVCxTQUFTZ0M7O0lBQ2QsT0FBT3JDLGlEQUFVQSxDQUFDSTtBQUNwQjtJQUZnQmlDIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXEluc3RhbGFjaW9uXFxQUk9ZRUNUT1NcXGUtY29tbWVyY2UtbmV4dFxcbXktYXBwXFxjb250ZXh0XFxVc2VyQ29udGV4dC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUXVlcnksIHVzZVF1ZXJ5Q2xpZW50LCB1c2VNdXRhdGlvbiB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIjtcclxuXHJcbmNvbnN0IFVzZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFVzZXJQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XHJcblxyXG4gIC8vIOKchSBPYnRlbmVyIHVzdWFyaW8gZGVzZGUgbGEgQVBJIGNvbiBjYWNoZVxyXG4gIGNvbnN0IHsgZGF0YTogdXNlciwgZXJyb3IgfSA9IHVzZVF1ZXJ5KHtcclxuICAgIHF1ZXJ5S2V5OiBbXCJ1c2VyXCJdLFxyXG4gICAgcXVlcnlGbjogYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwXCIsIHsgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiIH0pO1xyXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoXCJFcnJvciBhbCBvYnRlbmVyIGVsIHVzdWFyaW9cIik7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdmZXRjaCBjb29raWVzJylcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIC8vIOKchSBPYnRlbmVyIHBlcmZpbCBkZWwgdXN1YXJpbyBjb24gY2FjaGVcclxuICBjb25zdCB7IGRhdGE6IHByb2ZpbGUgfSA9IHVzZVF1ZXJ5KHtcclxuICAgIHF1ZXJ5S2V5OiBbXCJwcm9maWxlXCIsIHVzZXI/LmlkXSxcclxuICAgIHF1ZXJ5Rm46IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKCF1c2VyPy5pZCkgcmV0dXJuIG51bGw7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC91c2VyLyR7dXNlci5pZH1gLCB7IGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIiB9KTtcclxuICAgICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKFwiRXJyb3IgYWwgb2J0ZW5lciBlbCBwZXJmaWxcIik7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdmZXRjaCB1c3VhcmlvJylcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgcmV0dXJuIGRhdGEudXNlclswXTtcclxuICAgIH0sXHJcbiAgICBlbmFibGVkOiAhIXVzZXIsIC8vIFNvbG8gZWplY3V0YSBsYSBjb25zdWx0YSBzaSBoYXkgdW4gdXN1YXJpb1xyXG4gIH0pO1xyXG5cclxuICAvLyDinIUgTXV0YWNpw7NuIHBhcmEgYWN0dWFsaXphciBsYSBkaXJlY2Npw7NuIGRlbCB1c3VhcmlvXHJcbiAgY29uc3QgdXBkYXRlVXNlckFkZHJlc3MgPSB1c2VNdXRhdGlvbih7XHJcbiAgICBtdXRhdGlvbkZuOiBhc3luYyAoYWRyZXNzKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC91c2VyLyR7dXNlci5pZH1gLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGFkcmVzcyB9KSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZGF0YS5tZXNzYWdlIHx8IFwiRXJyb3IgYWwgYWN0dWFsaXphciBlbCB1c3VhcmlvXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKCd1c3VhcmlvIGFjdHVhbGl6YWRvJylcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0sXHJcbiAgICBvblN1Y2Nlc3M6ICgpID0+IHtcclxuICAgICAgcXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoW1widXNlclwiXSk7IC8vIFJlY2FyZ2FyIHVzdWFyaW9cclxuICAgICAgcXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoW1wicHJvZmlsZVwiLCB1c2VyPy5pZF0pOyAvLyBSZWNhcmdhciBwZXJmaWxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VXNlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgcHJvZmlsZSwgdXBkYXRlVXNlckFkZHJlc3MgfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvVXNlckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVVzZXJDb250ZXh0KCkge1xyXG4gIHJldHVybiB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcclxufVxyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VRdWVyeSIsInVzZVF1ZXJ5Q2xpZW50IiwidXNlTXV0YXRpb24iLCJVc2VyQ29udGV4dCIsIlVzZXJQcm92aWRlciIsImNoaWxkcmVuIiwicXVlcnlDbGllbnQiLCJkYXRhIiwidXNlciIsImVycm9yIiwicXVlcnlLZXkiLCJxdWVyeUZuIiwicmVzcG9uc2UiLCJmZXRjaCIsImNyZWRlbnRpYWxzIiwib2siLCJFcnJvciIsImNvbnNvbGUiLCJsb2ciLCJqc29uIiwicHJvZmlsZSIsImlkIiwiZW5hYmxlZCIsInVwZGF0ZVVzZXJBZGRyZXNzIiwibXV0YXRpb25GbiIsImFkcmVzcyIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm1lc3NhZ2UiLCJvblN1Y2Nlc3MiLCJpbnZhbGlkYXRlUXVlcmllcyIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VVc2VyQ29udGV4dCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./context/UserContext.jsx\n"));

/***/ })

});