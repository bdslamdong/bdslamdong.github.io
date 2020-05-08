webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Layouts/Navbar.js":
/*!**************************************!*\
  !*** ./components/Layouts/Navbar.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-anchor-link-smooth-scroll */ "./node_modules/react-anchor-link-smooth-scroll/lib/anchor-link.js");
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_9__);







var _jsxFileName = "/Users/thinhtran/Documents/private/work/real_estate/src/ziran-react-next-multi-purpose-landing-page-template/ziran-react/components/Layouts/Navbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;




var Navbar =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Navbar, _Component);

  function Navbar() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Navbar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Navbar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      collapsed: true
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "toggleNavbar", function () {
      _this.setState({
        collapsed: !_this.state.collapsed
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "menuActiveClass", function () {
      var mainNavLinks = document.querySelectorAll(".navbar-nav li a");
      window.addEventListener("scroll", function () {
        var fromTop = window.scrollY;
        mainNavLinks.forEach(function (link) {
          if (link.hash) {
            var section = document.querySelector(link.hash);

            if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
              link.classList.add("active");
            } else {
              link.classList.remove("active");
            }
          }
        });
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Navbar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._isMounted = true;
      var elementId = document.getElementById("navbar");
      document.addEventListener("scroll", function () {
        if (window.scrollY > 170) {
          elementId.classList.add("is-sticky");
        } else {
          elementId.classList.remove("is-sticky");
        }
      });
      window.scrollTo(0, 0);
      this.menuActiveClass();
    }
  }, {
    key: "render",
    value: function render() {
      var collapsed = this.state.collapsed;
      var classOne = collapsed ? 'collapse navbar-collapse' : 'navbar-collapse collapse show';
      var classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, __jsx("nav", {
        id: "navbar",
        className: "navbar navbar-expand-lg navbar-light bg-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, __jsx("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, __jsx("a", {
        className: "navbar-brand",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/logo.png */ "./images/logo.png"),
        alt: "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }), __jsx("img", {
        src: __webpack_require__(/*! ../../images/logo2.png */ "./images/logo2.png"),
        alt: "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }))), __jsx("button", {
        onClick: this.toggleNavbar,
        className: classTwo,
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#navbarSupportedContent",
        "aria-controls": "navbarSupportedContent",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, __jsx("span", {
        className: "navbar-toggler-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      })), __jsx("div", {
        className: classOne,
        id: "navbarSupportedContent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, __jsx("ul", {
        className: "navbar-nav ml-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, __jsx(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_9___default.a, {
        onClick: this.toggleNavbar,
        offset: function offset() {
          return 100;
        },
        className: "nav-link active",
        href: "#home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "Trang Ch\u1EE7")), __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, __jsx(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_9___default.a, {
        onClick: this.toggleNavbar,
        offset: function offset() {
          return -1;
        },
        className: "nav-link",
        href: "#about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "Gi\u1EDBi Thi\u1EC7u")), __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, __jsx(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_9___default.a, {
        onClick: this.toggleNavbar,
        offset: function offset() {
          return -1;
        },
        className: "nav-link",
        href: "#services",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, "S\u1EA3n Ph\u1EA9m")), __jsx("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, __jsx(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_9___default.a, {
        onClick: this.toggleNavbar,
        offset: function offset() {
          return -1;
        },
        className: "nav-link",
        href: "#contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, "Li\xEAn H\u1EC7")))))));
    }
  }]);

  return Navbar;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Layouts_Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layouts/Navbar */ "./components/Layouts/Navbar.js");
/* harmony import */ var _components_PageBanners_MainBannerTwenty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/PageBanners/MainBannerTwenty */ "./components/PageBanners/MainBannerTwenty.js");
/* harmony import */ var _components_Common_OurFeatures__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Common/OurFeatures */ "./components/Common/OurFeatures.js");
/* harmony import */ var _components_Common_AboutUs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Common/AboutUs */ "./components/Common/AboutUs.js");
/* harmony import */ var _components_Common_CtaArea__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Common/CtaArea */ "./components/Common/CtaArea.js");
/* harmony import */ var _components_Common_OurServices__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Common/OurServices */ "./components/Common/OurServices.js");
/* harmony import */ var _components_Common_WhoWeAre__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Common/WhoWeAre */ "./components/Common/WhoWeAre.js");
/* harmony import */ var _components_Common_SkillsArea__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Common/SkillsArea */ "./components/Common/SkillsArea.js");
/* harmony import */ var _components_Common_WhyWeDifferent__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Common/WhyWeDifferent */ "./components/Common/WhyWeDifferent.js");
/* harmony import */ var _components_Common_OurPortfolio__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Common/OurPortfolio */ "./components/Common/OurPortfolio.js");
/* harmony import */ var _components_Common_FunFacts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Common/FunFacts */ "./components/Common/FunFacts.js");
/* harmony import */ var _components_Common_Team__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/Common/Team */ "./components/Common/Team.js");
/* harmony import */ var _components_Common_OurStory__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/Common/OurStory */ "./components/Common/OurStory.js");
/* harmony import */ var _components_Common_Pricing__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/Common/Pricing */ "./components/Common/Pricing.js");
/* harmony import */ var _components_Common_OurTestimonials__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/Common/OurTestimonials */ "./components/Common/OurTestimonials.js");
/* harmony import */ var _components_Common_WeAreBestCompany__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/Common/WeAreBestCompany */ "./components/Common/WeAreBestCompany.js");
/* harmony import */ var _components_Common_Faq__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../components/Common/Faq */ "./components/Common/Faq.js");
/* harmony import */ var _components_Common_BlogSlider__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../components/Common/BlogSlider */ "./components/Common/BlogSlider.js");
/* harmony import */ var _components_Common_CtaAreaTwo__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../components/Common/CtaAreaTwo */ "./components/Common/CtaAreaTwo.js");
/* harmony import */ var _components_Common_Partner__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../components/Common/Partner */ "./components/Common/Partner.js");
/* harmony import */ var _components_Common_Subscribe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../components/Common/Subscribe */ "./components/Common/Subscribe.js");
/* harmony import */ var _components_Common_Contact__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../components/Common/Contact */ "./components/Common/Contact.js");
/* harmony import */ var _components_Layouts_Footer__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../components/Layouts/Footer */ "./components/Layouts/Footer.js");





var _jsxFileName = "/Users/thinhtran/Documents/private/work/real_estate/src/ziran-react-next-multi-purpose-landing-page-template/ziran-react/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

























var Index20 =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Index20, _Component);

  function Index20() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index20);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index20).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index20, [{
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, __jsx(_components_Layouts_Navbar__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), __jsx(_components_PageBanners_MainBannerTwenty__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), __jsx(_components_Common_OurFeatures__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), __jsx(_components_Common_AboutUs__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), __jsx(_components_Common_CtaArea__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), __jsx(_components_Common_OurServices__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), __jsx(_components_Common_Team__WEBPACK_IMPORTED_MODULE_17__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), __jsx(_components_Common_Contact__WEBPACK_IMPORTED_MODULE_27__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }), __jsx(_components_Layouts_Footer__WEBPACK_IMPORTED_MODULE_28__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }));
    }
  }]);

  return Index20;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index20);

/***/ })

})
//# sourceMappingURL=index.js.a94164cf7c24fd00d760.hot-update.js.map