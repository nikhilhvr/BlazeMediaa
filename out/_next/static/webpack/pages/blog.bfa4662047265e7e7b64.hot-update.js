webpackHotUpdate_N_E("pages/blog",{

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
/* harmony import */ var _theme_mystyle_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../theme/mystyle.module.css */ "./src/theme/mystyle.module.css");
/* harmony import */ var _theme_mystyle_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_theme_mystyle_module_css__WEBPACK_IMPORTED_MODULE_12__);


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
      lineNumber: 16,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("header", {
    sx: styles.header,
    className: className,
    id: "header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    sx: styles.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(components_logo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    src: assets_logo_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    as: "nav",
    sx: styles.nav,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
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
        lineNumber: 23,
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
      lineNumber: 40,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(next_dist_client_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: mystyles.colortext,
    href: "https://calendly.com/abhishblaze/25min?month=2022-11",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 10
    }
  }, "  Speak To Our Team Today ")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_mobile_drawer__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
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
    a: {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJjbGFzc05hbWUiLCJzdHlsZXMiLCJoZWFkZXIiLCJjb250YWluZXIiLCJMb2dvRGFyayIsIm5hdiIsIm1lbnVJdGVtcyIsIm1hcCIsImkiLCJwYXRoIiwibGFiZWwiLCJteXN0eWxlcyIsImNvbG9ydGV4dCIsInBvc2l0aW9uQW5pbSIsImtleWZyYW1lcyIsImNvbG9yIiwiZm9udFdlaWdodCIsInB5Iiwid2lkdGgiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0cmFuc2l0aW9uIiwiYW5pbWF0aW9uIiwiZmxleFNocmluayIsIm1yIiwibWwiLCJib3hTaGFkb3ciLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwibXgiLCJhIiwiZm9udFNpemUiLCJweCIsImN1cnNvciIsImxpbmVIZWlnaHQiLCJibG9nIiwibGlua3Njb2xvciIsInRleHREZWNvcmF0aW9uQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxPQUErQjtBQUFBOztBQUFBLE1BQWJDLFNBQWEsUUFBYkEsU0FBYTtBQUM1QyxTQUNFLHFEQUFDLCtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLE1BQUUsRUFBRUMsTUFBTSxDQUFDQyxNQUFuQjtBQUEyQixhQUFTLEVBQUVGLFNBQXRDO0FBQWlELE1BQUUsRUFBQyxRQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsa0RBQUQ7QUFBVyxNQUFFLEVBQUVDLE1BQU0sQ0FBQ0UsU0FBdEI7QUFB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RUFBRSxTQUpQO0FBS0RDLGdCQUFVLEVBQUUsS0FMWDtBQU1EZCxnQkFBVSxFQUFFLFdBTlg7QUFPRCxpQkFBVztBQUNUUixhQUFLLEVBQUU7QUFERSxPQVBWO0FBVUQsa0JBQVk7QUFDVkEsYUFBSyxFQUFFO0FBREc7QUFWWDtBQU5BLEdBakNRO0FBc0RidUIsTUFBSSxFQUFFO0FBQ0o7QUFDQTtBQUNBO0FBQ0U7QUFDRjtBQUNBTCxLQUFDLEVBQUU7QUFDREMsY0FBUSxFQUFFLENBRFQ7QUFFRGxCLGdCQUFVLEVBQUUsTUFGWDtBQUdEbUIsUUFBRSxFQUFFLENBSEg7QUFJREMsWUFBTSxFQUFFLFNBSlA7QUFLREMsZ0JBQVUsRUFBRSxLQUxYO0FBTURkLGdCQUFVLEVBQUUsV0FOWDtBQU9ELGlCQUFXO0FBQ1RSLGFBQUssRUFBRTtBQURFLE9BUFY7QUFVRCxrQkFBWTtBQUNWQSxhQUFLLEVBQUU7QUFERztBQVZYO0FBTkMsR0F0RE87QUEyRWJ3QixZQUFVLEVBQUM7QUFDVEMsdUJBQW1CLEVBQUU7QUFEWjtBQTNFRSxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2cuYmZhNDY2MjA0NzI2NWU3ZTdiNjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBDb250YWluZXIsIEZsZXgsIEJ1dHRvbiB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCB7IGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXNjcm9sbCc7XG5pbXBvcnQgTG9nbyBmcm9tICdjb21wb25lbnRzL2xvZ28nO1xuaW1wb3J0IExpbmtrIGZyb20gJ25leHQvZGlzdC9jbGllbnQvbGluayc7XG5pbXBvcnQgTG9nb0RhcmsgZnJvbSAnYXNzZXRzL2xvZ28ucG5nJztcbmltcG9ydCB7IERyYXdlclByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vY29udGV4dHMvZHJhd2VyL2RyYXdlci5wcm92aWRlcic7XG5pbXBvcnQgTW9iaWxlRHJhd2VyIGZyb20gJy4vbW9iaWxlLWRyYXdlcic7XG5pbXBvcnQgbWVudUl0ZW1zIGZyb20gJy4vaGVhZGVyLmRhdGEnO1xuaW1wb3J0IGJsb2cgZnJvbSAncGFnZXMvYmxvZyc7XG5pbXBvcnQgbXlzdHlsZSBmcm9tICcuLi8uLi90aGVtZS9teXN0eWxlLm1vZHVsZS5jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcih7IGNsYXNzTmFtZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPERyYXdlclByb3ZpZGVyPlxuICAgICAgPGhlYWRlciBzeD17c3R5bGVzLmhlYWRlcn0gY2xhc3NOYW1lPXtjbGFzc05hbWV9IGlkPVwiaGVhZGVyXCI+XG4gICAgICAgIDxDb250YWluZXIgc3g9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICAgIDxMb2dvIHNyYz17TG9nb0Rhcmt9Lz5cblxuICAgICAgICAgIDxGbGV4IGFzPVwibmF2XCIgc3g9e3N0eWxlcy5uYXZ9PlxuICAgICAgICAgICAge21lbnVJdGVtcy5tYXAoKHsgcGF0aCwgbGFiZWwgfSwgaSkgPT4gKFxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzPVwiYWN0aXZlXCJcbiAgICAgICAgICAgICAgICB0bz17cGF0aH1cbiAgICAgICAgICAgICAgICBzcHk9e3RydWV9XG4gICAgICAgICAgICAgICAgc21vb3RoPXt0cnVlfVxuICAgICAgICAgICAgICAgIG9mZnNldD17LTcwfVxuICAgICAgICAgICAgICAgIGR1cmF0aW9uPXs1MDB9XG4gICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgXG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICB7LyogPExpbmtrIGhyZWY9Jy9ibG9nJz48YSBzeD17c3R5bGVzLmJsb2d9ID5CbG9nPC9hPjwvTGlua2s+ICovfVxuICAgICAgICAgIDwvRmxleD5cblxuIFxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICBcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImRvbmF0ZV9fYnRuXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkdldCBTdGFydGVkXCJcbiAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICA+XG4gXG4gICAgICAgICA8TGlua2sgY2xhc3NOYW1lPXtteXN0eWxlcy5jb2xvcnRleHR9IGhyZWY9J2h0dHBzOi8vY2FsZW5kbHkuY29tL2FiaGlzaGJsYXplLzI1bWluP21vbnRoPTIwMjItMTEnPiAgU3BlYWsgVG8gT3VyIFRlYW0gVG9kYXkgPC9MaW5raz5cbiAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgIDxNb2JpbGVEcmF3ZXIgLz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L2hlYWRlcj5cbiAgICA8L0RyYXdlclByb3ZpZGVyPlxuICApO1xufVxuXG5jb25zdCBwb3NpdGlvbkFuaW0gPSBrZXlmcmFtZXNgXG4gIGZyb20ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgdG8ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XG4gIH1cbmA7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgaGVhZGVyOiB7XG4gICAgY29sb3I6ICd0ZXh0JyxcbiAgICBmb250V2VpZ2h0OiAnYm9keScsXG4gICAgcHk6IDQsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgdHJhbnNpdGlvbjogJ2FsbCAwLjRzIGVhc2UnLFxuICAgIGFuaW1hdGlvbjogYCR7cG9zaXRpb25BbmltfSAwLjRzIGVhc2VgLFxuICAgICcuZG9uYXRlX19idG4nOiB7XG4gICAgICBmbGV4U2hyaW5rOiAwLFxuICAgICAgbXI6IFsxNSwgMjAsIG51bGwsIG51bGwsIDBdLFxuICAgICAgbWw6IFsnYXV0bycsIG51bGwsIG51bGwsIG51bGwsIDBdLFxuICAgIH0sXG4gICAgJyYuc3RpY2t5Jzoge1xuICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdiYWNrZ3JvdW5kJyxcbiAgICAgIGNvbG9yOiAnIzAwMDAwMCcsXG4gICAgICBib3hTaGFkb3c6ICcwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjA2KScsXG4gICAgICBweTogMyxcbiAgICAgICduZXYgPiBhJzoge1xuICAgICAgICBjb2xvcjogJ3RleHQnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBjb250YWluZXI6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgfSxcbiAgbmF2OiB7XG4gICAgbXg6ICdhdXRvJyxcbiAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgJ0BtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCknOiB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIH0sXG4gICAgYToge1xuICAgICAgZm9udFNpemU6IDIsXG4gICAgICBmb250V2VpZ2h0OiAnYm9keScsXG4gICAgICBweDogNSxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgbGluZUhlaWdodDogJzEuMicsXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMTVzJyxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgICAgfSxcbiAgICAgICcmLmFjdGl2ZSc6IHtcbiAgICAgICAgY29sb3I6ICdwcmltYXJ5JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgYmxvZzoge1xuICAgIC8vIG14OiAnMCcsXG4gICAgLy8gZGlzcGxheTogJ25vbmUnLFxuICAgIC8vICdAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpJzoge1xuICAgICAgLy8gZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAvLyB9LFxuICAgIGE6IHtcbiAgICAgIGZvbnRTaXplOiAyLFxuICAgICAgZm9udFdlaWdodDogJ2JvZHknLFxuICAgICAgcHg6IDAsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIGxpbmVIZWlnaHQ6ICcxLjInLFxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjE1cycsXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgY29sb3I6ICdwcmltYXJ5JyxcbiAgICAgIH0sXG4gICAgICAnJi5hY3RpdmUnOiB7XG4gICAgICAgIGNvbG9yOiAncHJpbWFyeScsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGxpbmtzY29sb3I6e1xuICAgIHRleHREZWNvcmF0aW9uQ29sb3I6ICdub25lJyxcbiAgfSxcblxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=