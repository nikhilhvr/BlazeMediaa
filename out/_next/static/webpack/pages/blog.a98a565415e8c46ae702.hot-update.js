webpackHotUpdate_N_E("pages/blog",{

/***/ "./src/theme/index.js":
/*!****************************!*\
  !*** ./src/theme/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony default export */ __webpack_exports__["default"] = ({
  // example colors with dark mode
  colors: {
    text: '#343D48',
    // body color and primary color
    text_secondary: '#000000',
    // secondary body color
    heading: '#0F2137',
    // primary heading color
    heading_secondary: '#0F2137',
    // heading color
    background: '#FFFFFF',
    // body background color
    background_secondary: '#ffb21b',
    // secondary background color
    border_color: '#E5ECF4',
    // border color
    yellow: '#FFA740',
    // border color
    primary: '#f97300',
    // primary button and link color
    secondary: '#ffb21b',
    // secondary color - can be used for hover states
    muted: '#E4E4E4',
    // muted color
    accent: '#609',
    // a contrast color for emphasizing UI
    get: '#ffffff',
    // highlight	a background color for highlighting text
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: '#0cf',
        secondary: '#09c',
        muted: '#111'
      }
    }
  },
  breakpoints: ['480px', '640px', '768px', '1024px', '1220px', '1366px', '1620px'],
  fonts: {
    body: "'DM Sans', sans-serif",
    heading: "'DM Sans', sans-serif"
  },
  fontSizes: [12, 15, 16, 18, 20, 22, 24, 28, 32, 36, 42, 48, 52, 64],
  fontWeights: {
    body: 'normal',
    heading: 500,
    bold: 700
  },
  lineHeights: {
    body: 1.8,
    heading: 1.5
  },
  letterSpacings: {
    body: 'normal',
    caps: '0.2em',
    heading: '-0.5px'
  },
  space: [0, 5, 10, 15, 20, 25, 30, 50, 80, 100, 120, 150],
  // variants can use custom, user-defined names
  layout: {
    container: {
      maxWidth: ['100%', null, null, '780px', '1020px', '1200px', null, '1310px'],
      px: [4, 6]
    },
    header: {
      color: '#02073E',
      fontWeight: 'normal',
      py: 3,
      position: 'absolute',
      width: '100%'
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    main: {}
  },
  section: {
    keyFeature: {
      pt: [8, null, 9, null, null, 10],
      pb: ['90px', null, 9, null, null, 10, null, '165px']
    },
    feature: {
      pb: [8, null, 9, null, null, 10, null, '170px']
    },
    news: {
      pb: [8, null, 9, null, null, 10, null, '170px']
    },
    coreFeature: {
      pb: [8, null, 9, null, null, 10, null, '170px'],
      overflow: 'hidden'
    },
    testimonial: {
      pt: [8, null, 8, '70px', null, 8, null, '145px'],
      pb: ['90px', null, 9, null, null, 10, null, '190px'],
      overflow: 'hidden'
    },
    services: {
      pb: ['90px', null, 9, null, null, 10, null, '150px']
    },
    pricing: {
      pt: [8, null, 9, null, null, 10, null, '180px'],
      pb: ['90px', null, 9, null, null, 10, null, '180px']
    }
  },
  sectionHeader: {
    width: ['100%', null, '540px'],
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: ['-3px', null, -1],
    marginBottom: ['50px', null, '60px', null, null, '65px', null, '80px'],
    mx: 'auto',
    title: {
      fontSize: ['24px', null, '28px', null, null, '32px', null, '36px'],
      color: 'heading',
      lineHeight: [1.3, null, null, 1.25],
      textAlign: 'center',
      fontWeight: '700',
      letterSpacing: '-.5px'
    },
    subTitle: {
      fontSize: [0, '13px', null, '14px'],
      color: 'primary',
      textAlign: 'center',
      letterSpacing: ['1.5px', null, '2px'],
      textTransform: 'uppercase',
      fontWeight: '700',
      mb: 2,
      lineHeight: 1.5
    }
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: [4],
      letterSpacing: '-.55px',
      color: 'heading'
    },
    heroPrimary: {
      color: 'heading',
      fontSize: ['32px', '36px', '42px', '40px', '42px', '52px', '58px', '66px'],
      lineHeight: [1.3, null, null, null, null, 1.2],
      fontWeight: 700,
      mb: [4, null, null, null, null, 5]
    },
    heroSecondary: {
      fontSize: [2, null, '17px', null, null, '19px', 4],
      lineHeight: [1.9, null, null, 2],
      fontWeight: 'body',
      mb: 5,
      px: [0, null, 5, 6, null, 8, 9],
      color: 'heading'
    },
    title: {
      // extends the text.heading styles
      variant: 'text.heading',
      fontWeight: 'bold',
      fontSize: [3, null, 4],
      lineHeight: 1.25,
      mb: 1
    },
    lead: {
      fontSize: 40,
      fontFamily: 'DM Sans',
      fontWeight: '500',
      lineHeight: '60px',
      letterSpacing: '-1.5px',
      color: '#0F2137'
    },
    muted: {
      lineHeight: '26px',
      color: 'muted'
    },
    secondary: {
      fontWeight: 500,
      color: '#00A99D',
      lineHeight: '40px'
    }
  },
  links: {
    "default": {
      cursor: 'pointer'
    },
    bold: {
      fontWeight: 'bold'
    },
    nav: {
      display: ['none', null, 'inline-block'],
      px: 25,
      fontWeight: 'normal'
    },
    blog: {
      display: 'block',
      px: 0,
      color: 'inherit',
      textDecoration: 'none',
      fontSize: 'inherit',
      transition: 'color 0.25s',
      '&:hover': {
        color: 'primary'
      }
    },
    footer: {
      display: 'block',
      px: 0,
      color: 'inherit',
      textDecoration: 'none'
    },
    logo: {
      display: 'flex'
    }
  },
  images: {
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 99999
    }
  },
  // variants for buttons
  buttons: {
    menu: {
      display: [null, null, 'none']
    },
    // default variant for MenuButton
    // you can reference other values defined in the theme
    defaultBtn: {
      borderRadius: '45px',
      fontSize: ['14px', null, null, 2],
      letterSpacings: '-0.15px',
      padding: ['12px 20px', null, '15px 30px'],
      fontFamily: 'body',
      cursor: 'pointer',
      lineHeight: 1.2,
      transition: 'all 0.25s',
      fontWeight: 500,
      '&:focus': {
        outline: 0
      }
    },
    primary: {
      variant: 'buttons.defaultBtn',
      color: 'white',
      bg: 'primary',
      '&:hover': {
        boxShadow: 'rgba(233, 76, 84, 0.57) 0px 9px 20px -5px'
      }
    },
    whiteButton: {
      variant: 'buttons.defaultBtn',
      color: 'heading_secondary',
      bg: 'white',
      '&:hover': {
        boxShadow: 'rgba(0, 0, 0, 0.5) 0px 12px 24px -10px'
      }
    },
    secondary: {
      variant: 'buttons.defaultBtn',
      border: '2px solid',
      borderColor: 'primary',
      color: 'primary',
      bg: 'transparent',
      padding: ['10px 15px', null, '15px 30px'],
      '&:hover': {
        color: 'white',
        bg: 'primary'
      }
    },
    textButton: {
      variant: 'buttons.defaultBtn',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      color: 'white',
      svg: {
        fontSize: [4, 6],
        mr: 2
      }
    }
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4
    },
    offer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      flex: ['1 1 calc(50% - 16px)', '1 1 20%'],
      minHeight: 130,
      m: 2,
      background: '#FFFFFF',
      border: '1px solid #EDEFF6',
      borderRadius: 5
    },
    featureCard: {
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'row',
      p: 3
    }
  },
  forms: {
    label: {
      fontSize: 1,
      fontWeight: 'bold'
    },
    input: {
      borderRadius: 8,
      borderColor: 'border_color',
      height: 60,
      '&:focus': {
        borderColor: 'primary',
        boxShadow: function boxShadow(t) {
          return "0 0 0 2px ".concat(t.colors.primary);
        },
        outline: 'none'
      }
    }
  },
  badges: {
    primary: {
      color: 'background',
      bg: '#28A5FF',
      borderRadius: 30,
      p: '3px 11px',
      fontSize: 1,
      letterSpacing: '-0.5px'
    },
    outline: {
      color: 'primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 0 1px'
    }
  },
  styles: {
    // To add base, top-level styles to the <body> element, use theme.styles.root.
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      fontSmoothing: 'antialiased',
      // Modal Global Style
      '.modal-video-close-btn': {
        cursor: 'pointer'
      },
      '.modal-video-movie-wrap': {
        margin: 6,
        width: 'auto'
      }
    },
    // Divider styles
    hr: {
      border: 0,
      borderBottom: '1px solid',
      borderColor: '#D9E0E7'
    },
    // also you can use other HTML elements style here
    ul: {
      listStyle: 'none'
    },
    srOnly: {
      border: '0 !important',
      clip: 'rect(1px, 1px, 1px, 1px) !important',
      clipPath: 'inset(50%) !important',
      height: '1px !important',
      margin: '-1px !important',
      overflow: 'hidden !important',
      padding: '0 !important',
      position: 'absolute !important',
      width: '1px !important',
      whiteSpace: 'nowrap !important'
    }
  }
});

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3RoZW1lL2luZGV4LmpzIl0sIm5hbWVzIjpbImNvbG9ycyIsInRleHQiLCJ0ZXh0X3NlY29uZGFyeSIsImhlYWRpbmciLCJoZWFkaW5nX3NlY29uZGFyeSIsImJhY2tncm91bmQiLCJiYWNrZ3JvdW5kX3NlY29uZGFyeSIsImJvcmRlcl9jb2xvciIsInllbGxvdyIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJtdXRlZCIsImFjY2VudCIsImdldCIsIm1vZGVzIiwiZGFyayIsImJyZWFrcG9pbnRzIiwiZm9udHMiLCJib2R5IiwiZm9udFNpemVzIiwiZm9udFdlaWdodHMiLCJib2xkIiwibGluZUhlaWdodHMiLCJsZXR0ZXJTcGFjaW5ncyIsImNhcHMiLCJzcGFjZSIsImxheW91dCIsImNvbnRhaW5lciIsIm1heFdpZHRoIiwicHgiLCJoZWFkZXIiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJweSIsInBvc2l0aW9uIiwid2lkdGgiLCJ0b29sYmFyIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIm1haW4iLCJzZWN0aW9uIiwia2V5RmVhdHVyZSIsInB0IiwicGIiLCJmZWF0dXJlIiwibmV3cyIsImNvcmVGZWF0dXJlIiwib3ZlcmZsb3ciLCJ0ZXN0aW1vbmlhbCIsInNlcnZpY2VzIiwicHJpY2luZyIsInNlY3Rpb25IZWFkZXIiLCJmbGV4RGlyZWN0aW9uIiwibXQiLCJtYXJnaW5Cb3R0b20iLCJteCIsInRpdGxlIiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwidGV4dEFsaWduIiwibGV0dGVyU3BhY2luZyIsInN1YlRpdGxlIiwidGV4dFRyYW5zZm9ybSIsIm1iIiwiZm9udEZhbWlseSIsImhlcm9QcmltYXJ5IiwiaGVyb1NlY29uZGFyeSIsInZhcmlhbnQiLCJsZWFkIiwibGlua3MiLCJjdXJzb3IiLCJuYXYiLCJibG9nIiwidGV4dERlY29yYXRpb24iLCJ0cmFuc2l0aW9uIiwiZm9vdGVyIiwibG9nbyIsImltYWdlcyIsImF2YXRhciIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsImJ1dHRvbnMiLCJtZW51IiwiZGVmYXVsdEJ0biIsInBhZGRpbmciLCJvdXRsaW5lIiwiYmciLCJib3hTaGFkb3ciLCJ3aGl0ZUJ1dHRvbiIsImJvcmRlciIsImJvcmRlckNvbG9yIiwidGV4dEJ1dHRvbiIsImJhY2tncm91bmRDb2xvciIsInN2ZyIsIm1yIiwiY2FyZHMiLCJvZmZlciIsImZsZXgiLCJtaW5IZWlnaHQiLCJtIiwiZmVhdHVyZUNhcmQiLCJwIiwiZm9ybXMiLCJsYWJlbCIsImlucHV0IiwidCIsImJhZGdlcyIsInN0eWxlcyIsInJvb3QiLCJmb250U21vb3RoaW5nIiwibWFyZ2luIiwiaHIiLCJib3JkZXJCb3R0b20iLCJ1bCIsImxpc3RTdHlsZSIsInNyT25seSIsImNsaXAiLCJjbGlwUGF0aCIsIndoaXRlU3BhY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBLDhDQUFlO0FBQ2I7QUFDQUEsUUFBTSxFQUFFO0FBQ05DLFFBQUksRUFBRSxTQURBO0FBQ1c7QUFDakJDLGtCQUFjLEVBQUUsU0FGVjtBQUVxQjtBQUMzQkMsV0FBTyxFQUFFLFNBSEg7QUFHYztBQUNwQkMscUJBQWlCLEVBQUUsU0FKYjtBQUl3QjtBQUM5QkMsY0FBVSxFQUFFLFNBTE47QUFLaUI7QUFDdkJDLHdCQUFvQixFQUFFLFNBTmhCO0FBTTJCO0FBQ2pDQyxnQkFBWSxFQUFFLFNBUFI7QUFPbUI7QUFDekJDLFVBQU0sRUFBRSxTQVJGO0FBUWE7QUFDbkJDLFdBQU8sRUFBRSxTQVRIO0FBU2M7QUFDcEJDLGFBQVMsRUFBRSxTQVZMO0FBVWdCO0FBQ3RCQyxTQUFLLEVBQUUsU0FYRDtBQVdZO0FBQ2xCQyxVQUFNLEVBQUUsTUFaRjtBQVlVO0FBQ2hCQyxPQUFHLEVBQUcsU0FiQTtBQWNOO0FBQ0FDLFNBQUssRUFBRTtBQUNMQyxVQUFJLEVBQUU7QUFDSmQsWUFBSSxFQUFFLE1BREY7QUFFSkksa0JBQVUsRUFBRSxN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TjFCLFlBQU0sRUFBRSxjQURGO0FBRU4yQixVQUFJLEVBQUUscUNBRkE7QUFHTkMsY0FBUSxFQUFFLHVCQUhKO0FBSU50QyxZQUFNLEVBQUUsZ0JBSkY7QUFLTitCLFlBQU0sRUFBRSxpQkFMRjtBQU1OL0QsY0FBUSxFQUFFLG1CQU5KO0FBT05xQyxhQUFPLEVBQUUsY0FQSDtBQVFObkQsY0FBUSxFQUFFLHFCQVJKO0FBU05DLFdBQUssRUFBRSxnQkFURDtBQVVOb0YsZ0JBQVUsRUFBRTtBQVZOO0FBMUJGO0FBcFdLLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZy5hOThhNTY1NDE1ZThjNDZhZTcwMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAvLyBleGFtcGxlIGNvbG9ycyB3aXRoIGRhcmsgbW9kZVxuICBjb2xvcnM6IHtcbiAgICB0ZXh0OiAnIzM0M0Q0OCcsIC8vIGJvZHkgY29sb3IgYW5kIHByaW1hcnkgY29sb3JcbiAgICB0ZXh0X3NlY29uZGFyeTogJyMwMDAwMDAnLCAvLyBzZWNvbmRhcnkgYm9keSBjb2xvclxuICAgIGhlYWRpbmc6ICcjMEYyMTM3JywgLy8gcHJpbWFyeSBoZWFkaW5nIGNvbG9yXG4gICAgaGVhZGluZ19zZWNvbmRhcnk6ICcjMEYyMTM3JywgLy8gaGVhZGluZyBjb2xvclxuICAgIGJhY2tncm91bmQ6ICcjRkZGRkZGJywgLy8gYm9keSBiYWNrZ3JvdW5kIGNvbG9yXG4gICAgYmFja2dyb3VuZF9zZWNvbmRhcnk6ICcjZmZiMjFiJywgLy8gc2Vjb25kYXJ5IGJhY2tncm91bmQgY29sb3JcbiAgICBib3JkZXJfY29sb3I6ICcjRTVFQ0Y0JywgLy8gYm9yZGVyIGNvbG9yXG4gICAgeWVsbG93OiAnI0ZGQTc0MCcsIC8vIGJvcmRlciBjb2xvclxuICAgIHByaW1hcnk6ICcjZjk3MzAwJywgLy8gcHJpbWFyeSBidXR0b24gYW5kIGxpbmsgY29sb3JcbiAgICBzZWNvbmRhcnk6ICcjZmZiMjFiJywgLy8gc2Vjb25kYXJ5IGNvbG9yIC0gY2FuIGJlIHVzZWQgZm9yIGhvdmVyIHN0YXRlc1xuICAgIG11dGVkOiAnI0U0RTRFNCcsIC8vIG11dGVkIGNvbG9yXG4gICAgYWNjZW50OiAnIzYwOScsIC8vIGEgY29udHJhc3QgY29sb3IgZm9yIGVtcGhhc2l6aW5nIFVJXG4gICAgZ2V0IDogJyNmZmZmZmYnLFxuICAgIC8vIGhpZ2hsaWdodFx0YSBiYWNrZ3JvdW5kIGNvbG9yIGZvciBoaWdobGlnaHRpbmcgdGV4dFxuICAgIG1vZGVzOiB7XG4gICAgICBkYXJrOiB7XG4gICAgICAgIHRleHQ6ICcjZmZmJyxcbiAgICAgICAgYmFja2dyb3VuZDogJyMwMDAnLFxuICAgICAgICBwcmltYXJ5OiAnIzBjZicsXG4gICAgICAgIHNlY29uZGFyeTogJyMwOWMnLFxuICAgICAgICBtdXRlZDogJyMxMTEnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBicmVha3BvaW50czogW1xuICAgICc0ODBweCcsXG4gICAgJzY0MHB4JyxcbiAgICAnNzY4cHgnLFxuICAgICcxMDI0cHgnLFxuICAgICcxMjIwcHgnLFxuICAgICcxMzY2cHgnLFxuICAgICcxNjIwcHgnLFxuICBdLFxuICBmb250czoge1xuICAgIGJvZHk6IFwiJ0RNIFNhbnMnLCBzYW5zLXNlcmlmXCIsXG4gICAgaGVhZGluZzogXCInRE0gU2FucycsIHNhbnMtc2VyaWZcIixcbiAgfSxcbiAgZm9udFNpemVzOiBbMTIsIDE1LCAxNiwgMTgsIDIwLCAyMiwgMjQsIDI4LCAzMiwgMzYsIDQyLCA0OCwgNTIsIDY0XSxcbiAgZm9udFdlaWdodHM6IHtcbiAgICBib2R5OiAnbm9ybWFsJyxcbiAgICBoZWFkaW5nOiA1MDAsXG4gICAgYm9sZDogNzAwLFxuICB9LFxuICBsaW5lSGVpZ2h0czoge1xuICAgIGJvZHk6IDEuOCxcbiAgICBoZWFkaW5nOiAxLjUsXG4gIH0sXG4gIGxldHRlclNwYWNpbmdzOiB7XG4gICAgYm9keTogJ25vcm1hbCcsXG4gICAgY2FwczogJzAuMmVtJyxcbiAgICBoZWFkaW5nOiAnLTAuNXB4JyxcbiAgfSxcbiAgc3BhY2U6IFswLCA1LCAxMCwgMTUsIDIwLCAyNSwgMzAsIDUwLCA4MCwgMTAwLCAxMjAsIDE1MF0sXG4gIC8vIHZhcmlhbnRzIGNhbiB1c2UgY3VzdG9tLCB1c2VyLWRlZmluZWQgbmFtZXNcbiAgbGF5b3V0OiB7XG4gICAgY29udGFpbmVyOiB7XG4gICAgICBtYXhXaWR0aDogW1xuICAgICAgICAnMTAwJScsXG4gICAgICAgIG51bGwsXG4gICAgICAgIG51bGwsXG4gICAgICAgICc3ODBweCcsXG4gICAgICAgICcxMDIwcHgnLFxuICAgICAgICAnMTIwMHB4JyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgJzEzMTBweCcsXG4gICAgICBdLFxuICAgICAgcHg6IFs0LCA2XSxcbiAgICB9LFxuICAgIGhlYWRlcjoge1xuICAgICAgY29sb3I6ICcjMDIwNzNFJyxcbiAgICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuICAgICAgcHk6IDMsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgfSxcbiAgICB0b29sYmFyOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgfSxcbiAgICBtYWluOiB7fSxcbiAgfSxcbiAgc2VjdGlvbjoge1xuICAgIGtleUZlYXR1cmU6IHtcbiAgICAgIHB0OiBbOCwgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTBdLFxuICAgICAgcGI6IFsnOTBweCcsIG51bGwsIDksIG51bGwsIG51bGwsIDEwLCBudWxsLCAnMTY1cHgnXSxcbiAgICB9LFxuICAgIGZlYXR1cmU6IHtcbiAgICAgIHBiOiBbOCwgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTAsIG51bGwsICcxNzBweCddLFxuICAgIH0sXG4gICAgbmV3czoge1xuICAgICAgcGI6IFs4LCBudWxsLCA5LCBudWxsLCBudWxsLCAxMCwgbnVsbCwgJzE3MHB4J10sXG4gICAgfSxcbiAgICBjb3JlRmVhdHVyZToge1xuICAgICAgcGI6IFs4LCBudWxsLCA5LCBudWxsLCBudWxsLCAxMCwgbnVsbCwgJzE3MHB4J10sXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgfSxcbiAgICB0ZXN0aW1vbmlhbDoge1xuICAgICAgcHQ6IFs4LCBudWxsLCA4LCAnNzBweCcsIG51bGwsIDgsIG51bGwsICcxNDVweCddLFxuICAgICAgcGI6IFsnOTBweCcsIG51bGwsIDksIG51bGwsIG51bGwsIDEwLCBudWxsLCAnMTkwcHgnXSxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICB9LFxuICAgIHNlcnZpY2VzOiB7XG4gICAgICBwYjogWyc5MHB4JywgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTAsIG51bGwsICcxNTBweCddLFxuICAgIH0sXG4gICAgcHJpY2luZzoge1xuICAgICAgcHQ6IFs4LCBudWxsLCA5LCBudWxsLCBudWxsLCAxMCwgbnVsbCwgJzE4MHB4J10sXG4gICAgICBwYjogWyc5MHB4JywgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTAsIG51bGwsICcxODBweCddLFxuICAgIH0sXG4gIH0sXG4gIHNlY3Rpb25IZWFkZXI6IHtcbiAgICB3aWR0aDogWycxMDAlJywgbnVsbCwgJzU0MHB4J10sXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIG10OiBbJy0zcHgnLCBudWxsLCAtMV0sXG4gICAgbWFyZ2luQm90dG9tOiBbJzUwcHgnLCBudWxsLCAnNjBweCcsIG51bGwsIG51bGwsICc2NXB4JywgbnVsbCwgJzgwcHgnXSxcbiAgICBteDogJ2F1dG8nLFxuICAgIHRpdGxlOiB7XG4gICAgICBmb250U2l6ZTogWycyNHB4JywgbnVsbCwgJzI4cHgnLCBudWxsLCBudWxsLCAnMzJweCcsIG51bGwsICczNnB4J10sXG4gICAgICBjb2xvcjogJ2hlYWRpbmcnLFxuICAgICAgbGluZUhlaWdodDogWzEuMywgbnVsbCwgbnVsbCwgMS4yNV0sXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgZm9udFdlaWdodDogJzcwMCcsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnLS41cHgnLFxuICAgIH0sXG5cbiAgICBzdWJUaXRsZToge1xuICAgICAgZm9udFNpemU6IFswLCAnMTNweCcsIG51bGwsICcxNHB4J10sXG4gICAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIGxldHRlclNwYWNpbmc6IFsnMS41cHgnLCBudWxsLCAnMnB4J10sXG4gICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgICAgIGZvbnRXZWlnaHQ6ICc3MDAnLFxuICAgICAgbWI6IDIsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjUsXG4gICAgfSxcbiAgfSxcbiAgdGV4dDoge1xuICAgIGhlYWRpbmc6IHtcbiAgICAgIGZvbnRGYW1pbHk6ICdoZWFkaW5nJyxcbiAgICAgIGxpbmVIZWlnaHQ6ICdoZWFkaW5nJyxcbiAgICAgIGZvbnRXZWlnaHQ6ICdoZWFkaW5nJyxcbiAgICAgIGZvbnRTaXplOiBbNF0sXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnLS41NXB4JyxcbiAgICAgIGNvbG9yOiAnaGVhZGluZycsXG4gICAgfSxcbiAgICBoZXJvUHJpbWFyeToge1xuICAgICAgY29sb3I6ICdoZWFkaW5nJyxcbiAgICAgIGZvbnRTaXplOiBbXG4gICAgICAgICczMnB4JyxcbiAgICAgICAgJzM2cHgnLFxuICAgICAgICAnNDJweCcsXG4gICAgICAgICc0MHB4JyxcbiAgICAgICAgJzQycHgnLFxuICAgICAgICAnNTJweCcsXG4gICAgICAgICc1OHB4JyxcbiAgICAgICAgJzY2cHgnLFxuICAgICAgXSxcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjMsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDEuMl0sXG4gICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICBtYjogWzQsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDVdLFxuICAgIH0sXG4gICAgaGVyb1NlY29uZGFyeToge1xuICAgICAgZm9udFNpemU6IFsyLCBudWxsLCAnMTdweCcsIG51bGwsIG51bGwsICcxOXB4JywgNF0sXG4gICAgICBsaW5lSGVpZ2h0OiBbMS45LCBudWxsLCBudWxsLCAyXSxcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2R5JyxcbiAgICAgIG1iOiA1LFxuICAgICAgcHg6IFswLCBudWxsLCA1LCA2LCBudWxsLCA4LCA5XSxcbiAgICAgIGNvbG9yOiAnaGVhZGluZycsXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgLy8gZXh0ZW5kcyB0aGUgdGV4dC5oZWFkaW5nIHN0eWxlc1xuICAgICAgdmFyaWFudDogJ3RleHQuaGVhZGluZycsXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgICBmb250U2l6ZTogWzMsIG51bGwsIDRdLFxuICAgICAgbGluZUhlaWdodDogMS4yNSxcbiAgICAgIG1iOiAxLFxuICAgIH0sXG4gICAgbGVhZDoge1xuICAgICAgZm9udFNpemU6IDQwLFxuICAgICAgZm9udEZhbWlseTogJ0RNIFNhbnMnLFxuICAgICAgZm9udFdlaWdodDogJzUwMCcsXG4gICAgICBsaW5lSGVpZ2h0OiAnNjBweCcsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnLTEuNXB4JyxcbiAgICAgIGNvbG9yOiAnIzBGMjEzNycsXG4gICAgfSxcbiAgICBtdXRlZDoge1xuICAgICAgbGluZUhlaWdodDogJzI2cHgnLFxuICAgICAgY29sb3I6ICdtdXRlZCcsXG4gICAgfSxcbiAgICBzZWNvbmRhcnk6IHtcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgIGNvbG9yOiAnIzAwQTk5RCcsXG4gICAgICBsaW5lSGVpZ2h0OiAnNDBweCcsXG4gICAgfSxcbiAgfSxcbiAgbGlua3M6IHtcbiAgICBkZWZhdWx0OiB7XG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICB9LFxuICAgIGJvbGQ6IHtcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICB9LFxuICAgIG5hdjoge1xuICAgICAgZGlzcGxheTogWydub25lJywgbnVsbCwgJ2lubGluZS1ibG9jayddLFxuICAgICAgcHg6IDI1LFxuICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXG4gICAgfSxcbiAgICBibG9nOiB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgcHg6IDAsXG4gICAgICBjb2xvcjogJ2luaGVyaXQnLFxuICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gICAgICB0cmFuc2l0aW9uOiAnY29sb3IgMC4yNXMnLFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGNvbG9yOiAncHJpbWFyeScsXG4gICAgICB9LFxuICAgIH0sXG4gICAgZm9vdGVyOiB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgcHg6IDAsXG4gICAgICBjb2xvcjogJ2luaGVyaXQnLFxuICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICB9LFxuICAgIGxvZ286IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICB9LFxuICB9LFxuICBpbWFnZXM6IHtcbiAgICBhdmF0YXI6IHtcbiAgICAgIHdpZHRoOiA0OCxcbiAgICAgIGhlaWdodDogNDgsXG4gICAgICBib3JkZXJSYWRpdXM6IDk5OTk5LFxuICAgIH0sXG4gIH0sXG4gIC8vIHZhcmlhbnRzIGZvciBidXR0b25zXG4gIGJ1dHRvbnM6IHtcbiAgICBtZW51OiB7XG4gICAgICBkaXNwbGF5OiBbbnVsbCwgbnVsbCwgJ25vbmUnXSxcbiAgICB9LCAvLyBkZWZhdWx0IHZhcmlhbnQgZm9yIE1lbnVCdXR0b25cbiAgICAvLyB5b3UgY2FuIHJlZmVyZW5jZSBvdGhlciB2YWx1ZXMgZGVmaW5lZCBpbiB0aGUgdGhlbWVcbiAgICBkZWZhdWx0QnRuOiB7XG4gICAgICBib3JkZXJSYWRpdXM6ICc0NXB4JyxcbiAgICAgIGZvbnRTaXplOiBbJzE0cHgnLCBudWxsLCBudWxsLCAyXSxcbiAgICAgIGxldHRlclNwYWNpbmdzOiAnLTAuMTVweCcsXG4gICAgICBwYWRkaW5nOiBbJzEycHggMjBweCcsIG51bGwsICcxNXB4IDMwcHgnXSxcbiAgICAgIGZvbnRGYW1pbHk6ICdib2R5JyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgbGluZUhlaWdodDogMS4yLFxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjI1cycsXG4gICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICAnJjpmb2N1cyc6IHtcbiAgICAgICAgb3V0bGluZTogMCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBwcmltYXJ5OiB7XG4gICAgICB2YXJpYW50OiAnYnV0dG9ucy5kZWZhdWx0QnRuJyxcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgYmc6ICdwcmltYXJ5JyxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBib3hTaGFkb3c6ICdyZ2JhKDIzMywgNzYsIDg0LCAwLjU3KSAwcHggOXB4IDIwcHggLTVweCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgd2hpdGVCdXR0b246IHtcbiAgICAgIHZhcmlhbnQ6ICdidXR0b25zLmRlZmF1bHRCdG4nLFxuICAgICAgY29sb3I6ICdoZWFkaW5nX3NlY29uZGFyeScsXG4gICAgICBiZzogJ3doaXRlJyxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBib3hTaGFkb3c6ICdyZ2JhKDAsIDAsIDAsIDAuNSkgMHB4IDEycHggMjRweCAtMTBweCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiB7XG4gICAgICB2YXJpYW50OiAnYnV0dG9ucy5kZWZhdWx0QnRuJyxcbiAgICAgIGJvcmRlcjogJzJweCBzb2xpZCcsXG4gICAgICBib3JkZXJDb2xvcjogJ3ByaW1hcnknLFxuICAgICAgY29sb3I6ICdwcmltYXJ5JyxcbiAgICAgIGJnOiAndHJhbnNwYXJlbnQnLFxuICAgICAgcGFkZGluZzogWycxMHB4IDE1cHgnLCBudWxsLCAnMTVweCAzMHB4J10sXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgIGJnOiAncHJpbWFyeScsXG4gICAgICB9LFxuICAgIH0sXG4gICAgdGV4dEJ1dHRvbjoge1xuICAgICAgdmFyaWFudDogJ2J1dHRvbnMuZGVmYXVsdEJ0bicsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgc3ZnOiB7XG4gICAgICAgIGZvbnRTaXplOiBbNCwgNl0sXG4gICAgICAgIG1yOiAyLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBjYXJkczoge1xuICAgIHByaW1hcnk6IHtcbiAgICAgIHBhZGRpbmc6IDIsXG4gICAgICBib3JkZXJSYWRpdXM6IDQsXG4gICAgfSxcbiAgICBvZmZlcjoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGZsZXg6IFsnMSAxIGNhbGMoNTAlIC0gMTZweCknLCAnMSAxIDIwJSddLFxuICAgICAgbWluSGVpZ2h0OiAxMzAsXG4gICAgICBtOiAyLFxuICAgICAgYmFja2dyb3VuZDogJyNGRkZGRkYnLFxuICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNFREVGRjYnLFxuICAgICAgYm9yZGVyUmFkaXVzOiA1LFxuICAgIH0sXG4gICAgZmVhdHVyZUNhcmQ6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgICAgcDogMyxcbiAgICB9LFxuICB9LFxuICBmb3Jtczoge1xuICAgIGxhYmVsOiB7XG4gICAgICBmb250U2l6ZTogMSxcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICB9LFxuICAgIGlucHV0OiB7XG4gICAgICBib3JkZXJSYWRpdXM6IDgsXG4gICAgICBib3JkZXJDb2xvcjogJ2JvcmRlcl9jb2xvcicsXG4gICAgICBoZWlnaHQ6IDYwLFxuICAgICAgJyY6Zm9jdXMnOiB7XG4gICAgICAgIGJvcmRlckNvbG9yOiAncHJpbWFyeScsXG4gICAgICAgIGJveFNoYWRvdzogKHQpID0+IGAwIDAgMCAycHggJHt0LmNvbG9ycy5wcmltYXJ5fWAsXG4gICAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcblxuICBiYWRnZXM6IHtcbiAgICBwcmltYXJ5OiB7XG4gICAgICBjb2xvcjogJ2JhY2tncm91bmQnLFxuICAgICAgYmc6ICcjMjhBNUZGJyxcbiAgICAgIGJvcmRlclJhZGl1czogMzAsXG4gICAgICBwOiAnM3B4IDExcHgnLFxuICAgICAgZm9udFNpemU6IDEsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuNXB4JyxcbiAgICB9LFxuICAgIG91dGxpbmU6IHtcbiAgICAgIGNvbG9yOiAncHJpbWFyeScsXG4gICAgICBiZzogJ3RyYW5zcGFyZW50JyxcbiAgICAgIGJveFNoYWRvdzogJ2luc2V0IDAgMCAwIDFweCcsXG4gICAgfSxcbiAgfSxcblxuICBzdHlsZXM6IHtcbiAgICAvLyBUbyBhZGQgYmFzZSwgdG9wLWxldmVsIHN0eWxlcyB0byB0aGUgPGJvZHk+IGVsZW1lbnQsIHVzZSB0aGVtZS5zdHlsZXMucm9vdC5cbiAgICByb290OiB7XG4gICAgICBmb250RmFtaWx5OiAnYm9keScsXG4gICAgICBsaW5lSGVpZ2h0OiAnYm9keScsXG4gICAgICBmb250V2VpZ2h0OiAnYm9keScsXG4gICAgICBmb250U21vb3RoaW5nOiAnYW50aWFsaWFzZWQnLFxuICAgICAgLy8gTW9kYWwgR2xvYmFsIFN0eWxlXG4gICAgICAnLm1vZGFsLXZpZGVvLWNsb3NlLWJ0bic6IHtcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICB9LFxuICAgICAgJy5tb2RhbC12aWRlby1tb3ZpZS13cmFwJzoge1xuICAgICAgICBtYXJnaW46IDYsXG4gICAgICAgIHdpZHRoOiAnYXV0bycsXG4gICAgICB9LFxuICAgIH0sXG4gICAgLy8gRGl2aWRlciBzdHlsZXNcbiAgICBocjoge1xuICAgICAgYm9yZGVyOiAwLFxuICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkJyxcbiAgICAgIGJvcmRlckNvbG9yOiAnI0Q5RTBFNycsXG4gICAgfSxcbiAgICAvLyBhbHNvIHlvdSBjYW4gdXNlIG90aGVyIEhUTUwgZWxlbWVudHMgc3R5bGUgaGVyZVxuICAgIHVsOiB7XG4gICAgICBsaXN0U3R5bGU6ICdub25lJyxcbiAgICB9LFxuICAgIHNyT25seToge1xuICAgICAgYm9yZGVyOiAnMCAhaW1wb3J0YW50JyxcbiAgICAgIGNsaXA6ICdyZWN0KDFweCwgMXB4LCAxcHgsIDFweCkgIWltcG9ydGFudCcsXG4gICAgICBjbGlwUGF0aDogJ2luc2V0KDUwJSkgIWltcG9ydGFudCcsXG4gICAgICBoZWlnaHQ6ICcxcHggIWltcG9ydGFudCcsXG4gICAgICBtYXJnaW46ICctMXB4ICFpbXBvcnRhbnQnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4gIWltcG9ydGFudCcsXG4gICAgICBwYWRkaW5nOiAnMCAhaW1wb3J0YW50JyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUgIWltcG9ydGFudCcsXG4gICAgICB3aWR0aDogJzFweCAhaW1wb3J0YW50JyxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAgIWltcG9ydGFudCcsXG4gICAgfSxcbiAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9