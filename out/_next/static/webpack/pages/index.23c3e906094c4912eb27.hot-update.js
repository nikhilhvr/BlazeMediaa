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
/* harmony import */ var components_text_feature__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/text-feature */ "./src/components/text-feature.js");


var _jsxFileName = "D:\\Games\\New folder (5)\\BlazeMediaa\\src\\components\\header\\header.js",
    _templateObject;


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/** @jsx jsx */











var data = {
  btnName: 'Speak To Our Team Today',
  btnURL: 'https://calendly.com/abhishblaze/25min?month=2022-11'
};
function Header(_ref) {
  var _this = this;

  var className = _ref.className;
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_contexts_drawer_drawer_provider__WEBPACK_IMPORTED_MODULE_8__["DrawerProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("header", {
    sx: styles.header,
    className: className,
    id: "header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    sx: styles.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(components_logo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    src: assets_logo_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    as: "nav",
    sx: styles.nav,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
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
        lineNumber: 29,
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
      lineNumber: 46,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    btnName: data.btnName,
    btnURL: data.btnURL,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, "Speak To Our Team Today ")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_mobile_drawer__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5qcyJdLCJuYW1lcyI6WyJkYXRhIiwiYnRuTmFtZSIsImJ0blVSTCIsIkhlYWRlciIsImNsYXNzTmFtZSIsInN0eWxlcyIsImhlYWRlciIsImNvbnRhaW5lciIsIkxvZ29EYXJrIiwibmF2IiwibWVudUl0ZW1zIiwibWFwIiwiaSIsInBhdGgiLCJsYWJlbCIsInBvc2l0aW9uQW5pbSIsImtleWZyYW1lcyIsImNvbG9yIiwiZm9udFdlaWdodCIsInB5Iiwid2lkdGgiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0cmFuc2l0aW9uIiwiYW5pbWF0aW9uIiwiZmxleFNocmluayIsIm1yIiwibWwiLCJib3hTaGFkb3ciLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwibXgiLCJhIiwiZm9udFNpemUiLCJweCIsImN1cnNvciIsImxpbmVIZWlnaHQiLCJibG9nIiwibGlua3Njb2xvciIsInRleHREZWNvcmF0aW9uQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxJQUFJLEdBQUc7QUFDWEMsU0FBTyxFQUFFLHlCQURFO0FBRVhDLFFBQU0sRUFBRTtBQUZHLENBQWI7QUFNZSxTQUFTQyxNQUFULE9BQStCO0FBQUE7O0FBQUEsTUFBYkMsU0FBYSxRQUFiQSxTQUFhO0FBQzVDLFNBQ0UscURBQUMsK0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsTUFBRSxFQUFFQyxNQUFNLENBQUNDLE1BQW5CO0FBQTJCLGFBQVMsRUFBRUYsU0FBdEM7QUFBaUQsTUFBRSxFQUFDLFFBQXBEO0FBQUE7QUFBQTtBQUFBO0FB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USxFQUFFLENBRFQ7QUFFRGxCLGdCQUFVLEVBQUUsTUFGWDtBQUdEbUIsUUFBRSxFQUFFLENBSEg7QUFJREMsWUFBTSxFQUFFLFNBSlA7QUFLREMsZ0JBQVUsRUFBRSxLQUxYO0FBTURkLGdCQUFVLEVBQUUsV0FOWDtBQU9ELGlCQUFXO0FBQ1RSLGFBQUssRUFBRTtBQURFLE9BUFY7QUFVRCxrQkFBWTtBQUNWQSxhQUFLLEVBQUU7QUFERztBQVZYO0FBTkEsR0FqQ1E7QUFzRGJ1QixNQUFJLEVBQUU7QUFDSjtBQUNBO0FBQ0E7QUFDRTtBQUNGO0FBQ0FMLEtBQUMsRUFBRTtBQUNEQyxjQUFRLEVBQUUsQ0FEVDtBQUVEbEIsZ0JBQVUsRUFBRSxNQUZYO0FBR0RtQixRQUFFLEVBQUUsQ0FISDtBQUlEQyxZQUFNLEVBQUUsU0FKUDtBQUtEQyxnQkFBVSxFQUFFLEtBTFg7QUFNRGQsZ0JBQVUsRUFBRSxXQU5YO0FBT0QsaUJBQVc7QUFDVFIsYUFBSyxFQUFFO0FBREUsT0FQVjtBQVVELGtCQUFZO0FBQ1ZBLGFBQUssRUFBRTtBQURHO0FBVlg7QUFOQyxHQXRETztBQTJFYndCLFlBQVUsRUFBQztBQUNUQyx1QkFBbUIsRUFBRTtBQURaO0FBM0VFLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjNjM2U5MDYwOTRjNDkxMmViMjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBDb250YWluZXIsIEZsZXgsIEJ1dHRvbiB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCB7IGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXNjcm9sbCc7XG5pbXBvcnQgTG9nbyBmcm9tICdjb21wb25lbnRzL2xvZ28nO1xuaW1wb3J0IExpbmtrIGZyb20gJ25leHQvZGlzdC9jbGllbnQvbGluayc7XG5pbXBvcnQgTG9nb0RhcmsgZnJvbSAnYXNzZXRzL2xvZ28ucG5nJztcbmltcG9ydCB7IERyYXdlclByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vY29udGV4dHMvZHJhd2VyL2RyYXdlci5wcm92aWRlcic7XG5pbXBvcnQgTW9iaWxlRHJhd2VyIGZyb20gJy4vbW9iaWxlLWRyYXdlcic7XG5pbXBvcnQgbWVudUl0ZW1zIGZyb20gJy4vaGVhZGVyLmRhdGEnO1xuaW1wb3J0IGJsb2cgZnJvbSAncGFnZXMvYmxvZyc7XG5pbXBvcnQgVGV4dEZlYXR1cmUgZnJvbSAnY29tcG9uZW50cy90ZXh0LWZlYXR1cmUnO1xuXG5jb25zdCBkYXRhID0ge1xuICBidG5OYW1lOiAnU3BlYWsgVG8gT3VyIFRlYW0gVG9kYXknLFxuICBidG5VUkw6ICdodHRwczovL2NhbGVuZGx5LmNvbS9hYmhpc2hibGF6ZS8yNW1pbj9tb250aD0yMDIyLTExJyxcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKHsgY2xhc3NOYW1lIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8RHJhd2VyUHJvdmlkZXI+XG4gICAgICA8aGVhZGVyIHN4PXtzdHlsZXMuaGVhZGVyfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gaWQ9XCJoZWFkZXJcIj5cbiAgICAgICAgPENvbnRhaW5lciBzeD17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgPExvZ28gc3JjPXtMb2dvRGFya30vPlxuXG4gICAgICAgICAgPEZsZXggYXM9XCJuYXZcIiBzeD17c3R5bGVzLm5hdn0+XG4gICAgICAgICAgICB7bWVudUl0ZW1zLm1hcCgoeyBwYXRoLCBsYWJlbCB9LCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxuICAgICAgICAgICAgICAgIHRvPXtwYXRofVxuICAgICAgICAgICAgICAgIHNweT17dHJ1ZX1cbiAgICAgICAgICAgICAgICBzbW9vdGg9e3RydWV9XG4gICAgICAgICAgICAgICAgb2Zmc2V0PXstNzB9XG4gICAgICAgICAgICAgICAgZHVyYXRpb249ezUwMH1cbiAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICBcbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIHsvKiA8TGlua2sgaHJlZj0nL2Jsb2cnPjxhIHN4PXtzdHlsZXMuYmxvZ30gPkJsb2c8L2E+PC9MaW5raz4gKi99XG4gICAgICAgICAgPC9GbGV4PlxuXG4gXG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZG9uYXRlX19idG5cIlxuICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiR2V0IFN0YXJ0ZWRcIlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGJ0bk5hbWU9e2RhdGEuYnRuTmFtZX1cbiAgICAgICAgICAgIGJ0blVSTD17ZGF0YS5idG5VUkx9PlxuICAgICAgICAgIFNwZWFrIFRvIE91ciBUZWFtIFRvZGF5IDwvZGl2PlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgXG5cbiAgICAgICAgICA8TW9iaWxlRHJhd2VyIC8+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9oZWFkZXI+XG4gICAgPC9EcmF3ZXJQcm92aWRlcj5cbiAgKTtcbn1cblxuY29uc3QgcG9zaXRpb25BbmltID0ga2V5ZnJhbWVzYFxuICBmcm9tIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIHRvIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xuICB9XG5gO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGhlYWRlcjoge1xuICAgIGNvbG9yOiAndGV4dCcsXG4gICAgZm9udFdlaWdodDogJ2JvZHknLFxuICAgIHB5OiA0LFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgIHRyYW5zaXRpb246ICdhbGwgMC40cyBlYXNlJyxcbiAgICBhbmltYXRpb246IGAke3Bvc2l0aW9uQW5pbX0gMC40cyBlYXNlYCxcbiAgICAnLmRvbmF0ZV9fYnRuJzoge1xuICAgICAgZmxleFNocmluazogMCxcbiAgICAgIG1yOiBbMTUsIDIwLCBudWxsLCBudWxsLCAwXSxcbiAgICAgIG1sOiBbJ2F1dG8nLCBudWxsLCBudWxsLCBudWxsLCAwXSxcbiAgICB9LFxuICAgICcmLnN0aWNreSc6IHtcbiAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnYmFja2dyb3VuZCcsXG4gICAgICBjb2xvcjogJyMwMDAwMDAnLFxuICAgICAgYm94U2hhZG93OiAnMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNiknLFxuICAgICAgcHk6IDMsXG4gICAgICAnbmV2ID4gYSc6IHtcbiAgICAgICAgY29sb3I6ICd0ZXh0JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgY29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gIH0sXG4gIG5hdjoge1xuICAgIG14OiAnYXV0bycsXG4gICAgZGlzcGxheTogJ25vbmUnLFxuICAgICdAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpJzoge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICB9LFxuICAgIGE6IHtcbiAgICAgIGZvbnRTaXplOiAyLFxuICAgICAgZm9udFdlaWdodDogJ2JvZHknLFxuICAgICAgcHg6IDUsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIGxpbmVIZWlnaHQ6ICcxLjInLFxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjE1cycsXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgY29sb3I6ICdwcmltYXJ5JyxcbiAgICAgIH0sXG4gICAgICAnJi5hY3RpdmUnOiB7XG4gICAgICAgIGNvbG9yOiAncHJpbWFyeScsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGJsb2c6IHtcbiAgICAvLyBteDogJzAnLFxuICAgIC8vIGRpc3BsYXk6ICdub25lJyxcbiAgICAvLyAnQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSc6IHtcbiAgICAgIC8vIGRpc3BsYXk6ICdibG9jaycsXG4gICAgLy8gfSxcbiAgICBhOiB7XG4gICAgICBmb250U2l6ZTogMixcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2R5JyxcbiAgICAgIHB4OiAwLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBsaW5lSGVpZ2h0OiAnMS4yJyxcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4xNXMnLFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGNvbG9yOiAncHJpbWFyeScsXG4gICAgICB9LFxuICAgICAgJyYuYWN0aXZlJzoge1xuICAgICAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBsaW5rc2NvbG9yOntcbiAgICB0ZXh0RGVjb3JhdGlvbkNvbG9yOiAnbm9uZScsXG4gIH0sXG5cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9