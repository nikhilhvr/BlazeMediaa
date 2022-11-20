webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/header/header.js":
/*!*****************************************!*\
  !*** ./src/components/header/header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/logo */ "./src/components/logo.js");
/* harmony import */ var next_dist_client_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dist/client/link */ "./node_modules/next/dist/client/link.js");
/* harmony import */ var next_dist_client_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_logo_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/logo.png */ "./src/assets/logo.png");
/* harmony import */ var assets_logo_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_logo_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _contexts_drawer_drawer_provider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../contexts/drawer/drawer.provider */ "./src/contexts/drawer/drawer.provider.js");
/* harmony import */ var _mobile_drawer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mobile-drawer */ "./src/components/header/mobile-drawer.js");
/* harmony import */ var _header_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header.data */ "./src/components/header/header.data.js");
/* harmony import */ var pages_blog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! pages/blog */ "./src/pages/blog.js");


var _jsxFileName = "D:\\Games\\New folder (5)\\BlazeMediaa\\src\\components\\header\\header.js",
    _templateObject;


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/** @jsx jsx */










function Header(_ref) {
  var _this = this;

  var className = _ref.className;
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_contexts_drawer_drawer_provider__WEBPACK_IMPORTED_MODULE_8__["DrawerProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("header", {
    sx: styles.header,
    className: className,
    id: "header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    sx: styles.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(components_logo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    src: assets_logo_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    as: "nav",
    sx: styles.nav,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, _header_data__WEBPACK_IMPORTED_MODULE_10__["default"].map(function (_ref2, i) {
    var path = _ref2.path,
        label = _ref2.label;
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_scroll__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      activeClass: "active",
      to: path,
      spy: true,
      smooth: true,
      offset: -70,
      duration: 500,
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 15
      }
    }, label);
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "donate__btn",
    variant: "secondary",
    "aria-label": "Get Started",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(next_dist_client_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    sx: styles.linkscolor,
    href: "https://calendly.com/abhishblaze/25min?month=2022-11",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 10
    }
  }, "  Speak To Our Team Today ")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_mobile_drawer__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }))));
}
_c = Header;
var positionAnim = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["keyframes"])(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  from {\n    position: fixed;\n    opacity: 1;\n  }\n\n  to {\n    position: absolute;\n    opacity: 1;\n    transition: all 0.4s ease;\n  }\n"])));
var styles = {
  header: {
    color: 'text',
    fontWeight: 'body',
    py: 4,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    transition: 'all 0.4s ease',
    animation: "".concat(positionAnim, " 0.4s ease"),
    '.donate__btn': {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ['auto', null, null, null, 0]
    },
    '&.sticky': {
      position: 'fixed',
      backgroundColor: 'background',
      color: '#000000',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
      py: 3,
      'nev > a': {
        color: 'text'
      }
    }
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  nav: {
    mx: 'auto',
    display: 'none',
    '@media screen and (min-width: 1024px)': {
      display: 'block'
    },
    a: {
      fontSize: 2,
      fontWeight: 'body',
      px: 5,
      cursor: 'pointer',
      lineHeight: '1.2',
      transition: 'all 0.15s',
      '&:hover': {
        color: 'primary'
      },
      '&.active': {
        color: 'primary'
      }
    }
  },
  blog: {
    // mx: '0',
    // display: 'none',
    // '@media screen and (min-width: 1024px)': {
    // display: 'block',
    // },
    link: {
      fontSize: 2,
      fontWeight: 'body',
      px: 0,
      cursor: 'pointer',
      lineHeight: '1.2',
      transition: 'all 0.15s',
      '&:hover': {
        color: 'primary'
      },
      '&.active': {
        color: 'primary'
      }
    }
  },
  linkscolor: {
    textDecorationColor: 'none'
  }
};

var _c;

$RefreshReg$(_c, "Header");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJjbGFzc05hbWUiLCJzdHlsZXMiLCJoZWFkZXIiLCJjb250YWluZXIiLCJMb2dvRGFyayIsIm5hdiIsIm1lbnVJdGVtcyIsIm1hcCIsImkiLCJwYXRoIiwibGFiZWwiLCJsaW5rc2NvbG9yIiwicG9zaXRpb25BbmltIiwia2V5ZnJhbWVzIiwiY29sb3IiLCJmb250V2VpZ2h0IiwicHkiLCJ3aWR0aCIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImJhY2tncm91bmRDb2xvciIsInRyYW5zaXRpb24iLCJhbmltYXRpb24iLCJmbGV4U2hyaW5rIiwibXIiLCJtbCIsImJveFNoYWRvdyIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJteCIsImEiLCJmb250U2l6ZSIsInB4IiwiY3Vyc29yIiwibGluZUhlaWdodCIsImJsb2ciLCJsaW5rIiwidGV4dERlY29yYXRpb25Db2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE1BQVQsT0FBK0I7QUFBQTs7QUFBQSxNQUFiQyxTQUFhLFFBQWJBLFNBQWE7QUFDNUMsU0FDRSxxREFBQywrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxNQUFFLEVBQUVDLE1BQU0sQ0FBQ0MsTUFBbkI7QUFBMkIsYUFBUyxFQUFFRixTQUF0QztBQUFpRCxNQUFFLEVBQUMsUUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLGtEQUFEO0FBQVcsTUFBRSxFQUFFQyxNQUFNLENBQUNFLFNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyx1REFBRDtBQUFNLE9BQUcsRUFBRUMsc0RBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBR0UscURBQUMsNkNBQUQ7QUFBTSxNQUFFLEVBQUMsS0FBVDtBQUFlLE1BQUUsRUFBRUgsTUFBTSxDQUFDSSxHQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dDLHFEQUFTLENBQUNDLEdBQVYsQ0FBYyxpQkFBa0JDLENBQWxCO0FBQUEsUUFBR0MsSUFBSCxTQUFHQSxJQUFIO0FBQUEsUUFBU0MsS0FBVCxTQUFTQSxLQUFUO0FBQUEsV0FDYixxREFBQyxpREFBRDtBQUNFLGlCQUFXLEVBQUMsUUFEZDtBQUVFLFFBQUUsRUFBRUQsSUFGTjtBQUdFLFNBQUcsRUFBRSxJQUhQO0FBSUUsWUFBTSxFQUFFLElBSlY7QUFLRSxZQUFNLEVBQUUsQ0FBQyxFQUxYO0FBTUUsY0FBUSxFQUFFLEdBTlo7QUFPRSxTQUFHLEVBQUVELENBUFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQVNHRSxLQVRILENBRGE7QUFBQSxHQUFkLENBREgsQ0FIRixFQXNCRSxxREFBQywrQ0FBRDtBQUVFLGFBQVMsRUFBQyxhQUZaO0FBR0UsV0FBTyxFQUFDLFdBSFY7QUFJRSxrQkFBVyxhQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FTRCxxREFBQyw0REFBRDtBQUFPLE1BQUUsRUFBRVQsTUFBTSxDQUFDVSxVQUFsQjtBQUE4QixRQUFJLEVBQUMsc0RBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBVEMsQ0F0QkYsRUFrQ0UscURBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWxDRixDQURGLENBREYsQ0FERjtBQTBDRDtLQTNDdUJaLE07QUE2Q3hCLElBQU1hLFlBQVksR0FBR0MsK0RBQUgsZ1NBQWxCO0FBYUEsSUFBTVosTUFBTSxHQUFHO0FBQ2JDLFFBQU0sRUFBRTtBQUNOWSxTQUFLLEVBQUUsTUFERDtBQUVOQyxjQUFVLEVBQUUsTUFGTjtBQUdOQyxNQUFFLEVBQUUsQ0FIRTtBQUlOQyxTQUFLLEVBQUUsTUFKRDtBQUtOQyxZQUFRLEVBQUUsVUFMSjtBQU1OQyxPQUFHLEVBQUUsQ0FOQztBQU9OQyxRQUFJLEVBQUUsQ0FQQTtBQVFOQyxtQkFBZSxFQUFFLGFBUlg7QUFTTkMsY0FBVSxFQUFFLGVBVE47QUFVTkMsYUFBUyxZQUFLWCxZQUFMLGVBVkg7QUFXTixvQkFBZ0I7QUFDZFksZ0JBQVUsRUFBRSxDQURFO0FBRWRDLFFBQUUsRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsSUFBVCxFQUFlLElBQWYsRUFBcUIsQ0FBckIsQ0FGVTtBQUdkQyxRQUFFLEVBQUUsQ0FBQyxNQUFELEVBQVMsSUFBVCxFQUFlLElBQWYsRUFBcUIsSUFBckIsRUFBMkIsQ0FBM0I7QUFIVSxLQVhWO0FBZ0JOLGdCQUFZO0FBQ1ZSLGNBQVEsRUFBRSxPQURBO0FBRVZHLHFCQUFlLEVBQUUsWUFGUDtBQUdWUCxXQUFLLEVBQUUsU0FIRztBQUlWYSxlQUFTLEVBQUUsK0JBSkQ7QUFLVlgsUUFBRSxFQUFFLENBTE07QUFNVixpQkFBVztBQUNURixhQUFLLEVBQUU7QUFERTtBQU5EO0FBaEJOLEdBREs7QUE0QmJYLFdBQVMsRUFBRTtBQUNUeUIsV0FBTyxFQUFFLE1BREE7QUFFVEMsY0FBVSxFQUFFLFFBRkg7QUFHVEMsa0JBQWMsRUFBRTtBQUhQLEdBNUJFO0FBaUNiekIsS0FBRyxFQUFFO0FBQ0gwQixNQUFFLEVBQUUsTUFERDtBQUVISCxXQUFPLEVBQUUsTUFGTjtBQUdILDZDQUF5QztBQUN2Q0EsYUFBTyxFQUFFO0FBRDhCLEtBSHRDO0FBTUhJLEtBQUMsRUFBRTtBQUNEQyxjQUFRLEVBQUUsQ0FEVDtBQUVEbEIsZ0JBQVUsRUFBRSxNQUZYO0FBR0RtQixRQUFFLEVBQUUsQ0FISDtBQUlEQyxZQUFNLEVBQUUsU0FKUDtBQUtEQyxnQkFBVSxFQUFFLEtBTFg7QUFNRGQsZ0JBQVUsRUFBRSxXQU5YO0FBT0QsaUJBQVc7QUFDVFIsYUFBSyxFQUFFO0FBREUsT0FQVjtBQVVELGtCQUFZO0FBQ1ZBLGFBQUssRUFBRTtBQURHO0FBVlg7QUFOQSxHQWpDUTtBQXNEYnVCLE1BQUksRUFBRTtBQUNKO0FBQ0E7QUFDQTtBQUNFO0FBQ0Y7QUFDQUMsUUFBSSxFQUFFO0FBQ0pMLGNBQVEsRUFBRSxDQUROO0FBRUpsQixnQkFBVSxFQUFFLE1BRlI7QUFHSm1CLFFBQUUsRUFBRSxDQUhBO0FBSUpDLFlBQU0sRUFBRSxTQUpKO0FBS0pDLGdCQUFVLEVBQUUsS0FMUjtBQU1KZCxnQkFBVSxFQUFFLFdBTlI7QUFPSixpQkFBVztBQUNUUixhQUFLLEVBQUU7QUFERSxPQVBQO0FBVUosa0JBQVk7QUFDVkEsYUFBSyxFQUFFO0FBREc7QUFWUjtBQU5GLEdBdERPO0FBMkViSCxZQUFVLEVBQUM7QUFDVDRCLHVCQUFtQixFQUFFO0FBRFo7QUEzRUUsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iODUwOTM5OTIzNDI0NjI5ZjNmNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIENvbnRhaW5lciwgRmxleCwgQnV0dG9uIH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHsga2V5ZnJhbWVzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtc2Nyb2xsJztcbmltcG9ydCBMb2dvIGZyb20gJ2NvbXBvbmVudHMvbG9nbyc7XG5pbXBvcnQgTGlua2sgZnJvbSAnbmV4dC9kaXN0L2NsaWVudC9saW5rJztcbmltcG9ydCBMb2dvRGFyayBmcm9tICdhc3NldHMvbG9nby5wbmcnO1xuaW1wb3J0IHsgRHJhd2VyUHJvdmlkZXIgfSBmcm9tICcuLi8uLi9jb250ZXh0cy9kcmF3ZXIvZHJhd2VyLnByb3ZpZGVyJztcbmltcG9ydCBNb2JpbGVEcmF3ZXIgZnJvbSAnLi9tb2JpbGUtZHJhd2VyJztcbmltcG9ydCBtZW51SXRlbXMgZnJvbSAnLi9oZWFkZXIuZGF0YSc7XG5pbXBvcnQgYmxvZyBmcm9tICdwYWdlcy9ibG9nJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKHsgY2xhc3NOYW1lIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8RHJhd2VyUHJvdmlkZXI+XG4gICAgICA8aGVhZGVyIHN4PXtzdHlsZXMuaGVhZGVyfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gaWQ9XCJoZWFkZXJcIj5cbiAgICAgICAgPENvbnRhaW5lciBzeD17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgPExvZ28gc3JjPXtMb2dvRGFya30vPlxuXG4gICAgICAgICAgPEZsZXggYXM9XCJuYXZcIiBzeD17c3R5bGVzLm5hdn0+XG4gICAgICAgICAgICB7bWVudUl0ZW1zLm1hcCgoeyBwYXRoLCBsYWJlbCB9LCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxuICAgICAgICAgICAgICAgIHRvPXtwYXRofVxuICAgICAgICAgICAgICAgIHNweT17dHJ1ZX1cbiAgICAgICAgICAgICAgICBzbW9vdGg9e3RydWV9XG4gICAgICAgICAgICAgICAgb2Zmc2V0PXstNzB9XG4gICAgICAgICAgICAgICAgZHVyYXRpb249ezUwMH1cbiAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICBcbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIHsvKiA8TGlua2sgaHJlZj0nL2Jsb2cnPjxhIHN4PXtzdHlsZXMuYmxvZ30gPkJsb2c8L2E+PC9MaW5raz4gKi99XG4gICAgICAgICAgPC9GbGV4PlxuXG4gXG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZG9uYXRlX19idG5cIlxuICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiR2V0IFN0YXJ0ZWRcIlxuICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgID5cbiBcbiAgICAgICAgIDxMaW5rayBzeD17c3R5bGVzLmxpbmtzY29sb3J9IGhyZWY9J2h0dHBzOi8vY2FsZW5kbHkuY29tL2FiaGlzaGJsYXplLzI1bWluP21vbnRoPTIwMjItMTEnPiAgU3BlYWsgVG8gT3VyIFRlYW0gVG9kYXkgPC9MaW5raz5cbiAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgIDxNb2JpbGVEcmF3ZXIgLz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L2hlYWRlcj5cbiAgICA8L0RyYXdlclByb3ZpZGVyPlxuICApO1xufVxuXG5jb25zdCBwb3NpdGlvbkFuaW0gPSBrZXlmcmFtZXNgXG4gIGZyb20ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgdG8ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XG4gIH1cbmA7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgaGVhZGVyOiB7XG4gICAgY29sb3I6ICd0ZXh0JyxcbiAgICBmb250V2VpZ2h0OiAnYm9keScsXG4gICAgcHk6IDQsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgdHJhbnNpdGlvbjogJ2FsbCAwLjRzIGVhc2UnLFxuICAgIGFuaW1hdGlvbjogYCR7cG9zaXRpb25BbmltfSAwLjRzIGVhc2VgLFxuICAgICcuZG9uYXRlX19idG4nOiB7XG4gICAgICBmbGV4U2hyaW5rOiAwLFxuICAgICAgbXI6IFsxNSwgMjAsIG51bGwsIG51bGwsIDBdLFxuICAgICAgbWw6IFsnYXV0bycsIG51bGwsIG51bGwsIG51bGwsIDBdLFxuICAgIH0sXG4gICAgJyYuc3RpY2t5Jzoge1xuICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdiYWNrZ3JvdW5kJyxcbiAgICAgIGNvbG9yOiAnIzAwMDAwMCcsXG4gICAgICBib3hTaGFkb3c6ICcwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjA2KScsXG4gICAgICBweTogMyxcbiAgICAgICduZXYgPiBhJzoge1xuICAgICAgICBjb2xvcjogJ3RleHQnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBjb250YWluZXI6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgfSxcbiAgbmF2OiB7XG4gICAgbXg6ICdhdXRvJyxcbiAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgJ0BtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCknOiB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIH0sXG4gICAgYToge1xuICAgICAgZm9udFNpemU6IDIsXG4gICAgICBmb250V2VpZ2h0OiAnYm9keScsXG4gICAgICBweDogNSxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgbGluZUhlaWdodDogJzEuMicsXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMTVzJyxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgICAgfSxcbiAgICAgICcmLmFjdGl2ZSc6IHtcbiAgICAgICAgY29sb3I6ICdwcmltYXJ5JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgYmxvZzoge1xuICAgIC8vIG14OiAnMCcsXG4gICAgLy8gZGlzcGxheTogJ25vbmUnLFxuICAgIC8vICdAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpJzoge1xuICAgICAgLy8gZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAvLyB9LFxuICAgIGxpbms6IHtcbiAgICAgIGZvbnRTaXplOiAyLFxuICAgICAgZm9udFdlaWdodDogJ2JvZHknLFxuICAgICAgcHg6IDAsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIGxpbmVIZWlnaHQ6ICcxLjInLFxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjE1cycsXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgY29sb3I6ICdwcmltYXJ5JyxcbiAgICAgIH0sXG4gICAgICAnJi5hY3RpdmUnOiB7XG4gICAgICAgIGNvbG9yOiAncHJpbWFyeScsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGxpbmtzY29sb3I6e1xuICAgIHRleHREZWNvcmF0aW9uQ29sb3I6ICdub25lJyxcbiAgfSxcblxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=