(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Handwind.ttf */ "./src/fonts/Handwind.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/LibreFranklin-Black.ttf */ "./src/fonts/LibreFranklin-Black.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/LibreFranklin-Medium.ttf */ "./src/fonts/LibreFranklin-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/LibreFranklin-Bold.ttf */ "./src/fonts/LibreFranklin-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Aileron-Regular.otf */ "./src/fonts/Aileron-Regular.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./modules/assets/bg.png */ "./src/modules/assets/bg.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* FONT FACES */
@font-face {
    font-family: Logo-font-up;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

@font-face {
    font-family: Logo-font-low;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

@font-face {
    font-family: LF-Normal;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}

@font-face {
    font-family: LF-Bold;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
}

@font-face {
    font-family: Button-Font;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
    font-weight:600;
}

/* ROOT */
:root {
    --offwhite-y: #f3efd2;
    --offwhite-w: rgb(231, 231, 231);
    --yellow: #DBC75E;
    --black: rgb(22, 22, 22);
    --logo: #F0E7BA;
    --normal: 'LF-Normal', sans-serif;
    --bold: 'LF-Bold', sans-serif;
    --button: 'Button-Font', sans-serif;
}

/* GLOBAL STYLES */
* {
    margin: 0;
    padding: 0;
}

/* PARENT CONTAINER */
.container {
    height: 100vh;
    display: grid;
    grid-template-rows: 80px 1fr 40px;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_5___});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

/* HEADER */
.header {
    background-color: rgba(22, 22, 22, 0.9);
    height: 100%;
    width: 100%;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-auto-flow: column;
    gap: 24px;
}

.home,
.menu,
.contact {
    all: unset;
    font-size: 22px;
    color: white;
    cursor: pointer;
    font-family: var(--button);
    padding-bottom: 3px;
    transition: padding-bottom 0.3s;
}

.header button:not(.selected):hover {
    transition: padding-bottom 0.3s;
    padding-bottom: 12px;
}

.selected {
    padding-bottom: 16px;
    border-bottom: 2px solid var(--yellow);
}

/* DISPLAY CONTAINER */
.display {
    background-color: rgba(22, 22, 22, 0.2);
    display: grid;
    place-items: center
}

.card, .card-home {
    height: 655px;
    width: 1120px;
    display: grid;
    border-radius:15px;
}
.card {
    background-color: rgba(231, 231, 231, 0.8);
}
.card-home {
    background-color: rgba(22, 22, 22, 0.8);
}

/* LOGO TYPOGRAPHY */
.logo-div {
    align-self: end;
    justify-self: center;
    font-size: 64px;
    border-bottom: 5px solid var(--yellow);
    border-radius:2px;
    width: fit-content;
    padding-right: 6px;
    padding-left: 6px;
}

.logo-upper {
    font-family: 'Logo-font-up', sans-serif;
    color: var(--yellow);
    text-align: center;
    margin-bottom: -42px;
    z-index: 3;
    position: relative;
    font-weight: bold;
}

.logo-lower {
    font-family: 'Logo-font-low', sans-serif;
    color: var(--logo);
    text-align: center;
    z-index: 2;
    position: relative;
}

/* HOME INFO */
.about-me {
    all:unset;
    color: var(--offwhite-y);
    place-self:center;
    font-size:22px;
    text-align:center;
    width:65vh;
    font-family:var(--normal);
}

/* INLINE MENU */
.inline-menu {
    justify-self:center;
    align-self:start;
    font-size:24px;
    width:98px;
    height:42px;
    font-family:var(--bold);
    color:white;
    background-color:var(--yellow);
    border:none;
    border-radius:5px;
    cursor:pointer;
}

/* MENU */
.menu-header {
    place-self: center;
    text-align: center;
    font-family: 'Logo-font-up', sans-serif;
    font-size: 84px;
    font-weight:500;
    color: var(--offwhite-y);
    background-color: rgba(22, 22, 22, 0.8);
    width: 230px;
    height: 110px;
    border-radius:15px;
}

.dish-list {
    display:grid;
    place-items:center;
    align-items:start;
}

.menu-card {
    display:grid;
    gap:16px;
}

.menu-card p {
    text-align:center;
}

.dish-title {
    font-size:28px;
    font-family:var(--bold);
    color:#222976;
}

.dish-desp {
    font-size:19px;
    font-family:var(--normal);
    color:var(--black);
}

.dish-price {
    font-size:21px;
    font-family:var(--normal);
    color:#320608;
}

#menu1, #menu2 {
    padding-bottom: 32px;
    border-bottom: 2px solid #9c6644;
}

/* CONTACTS */
.phone-number {
    font-family:var(--normal);
    font-size:21px;
    align-self:end;
    padding-left:24px;
}

.address {
    grid-row: 2 / 3;
    font-family:var(--normal);
    font-size:21px;
    padding-left:24px;
}

.map-img {
    width:620px;
    border-radius:10px;
    place-self:center;
    grid-row: 1 /3;
    grid-column:2 / 3;
}

/* FOOTER */
.footer {
    font-family: var(--normal);
    font-size: 18px;
    height: 100%;
    width: 100%;
    background-color: rgba(22, 22, 22, 0.8);
    display: grid;
    place-items: center;
    color: var(--offwhite-w);
}

a {
    all: unset;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
    font-family: var(--bold);
    color: var(--offwhite-y);
    cursor: pointer;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["/* FONT FACES */\n@font-face {\n    font-family: Logo-font-up;\n    src: url(\"./fonts/Handwind.ttf\");\n}\n\n@font-face {\n    font-family: Logo-font-low;\n    src: url(\"./fonts/LibreFranklin-Black.ttf\");\n}\n\n@font-face {\n    font-family: LF-Normal;\n    src: url(\"./fonts/LibreFranklin-Medium.ttf\");\n}\n\n@font-face {\n    font-family: LF-Bold;\n    src: url(\"./fonts/LibreFranklin-Bold.ttf\");\n}\n\n@font-face {\n    font-family: Button-Font;\n    src: url(\"./fonts/Aileron-Regular.otf\");\n    font-weight:600;\n}\n\n/* ROOT */\n:root {\n    --offwhite-y: #f3efd2;\n    --offwhite-w: rgb(231, 231, 231);\n    --yellow: #DBC75E;\n    --black: rgb(22, 22, 22);\n    --logo: #F0E7BA;\n    --normal: 'LF-Normal', sans-serif;\n    --bold: 'LF-Bold', sans-serif;\n    --button: 'Button-Font', sans-serif;\n}\n\n/* GLOBAL STYLES */\n* {\n    margin: 0;\n    padding: 0;\n}\n\n/* PARENT CONTAINER */\n.container {\n    height: 100vh;\n    display: grid;\n    grid-template-rows: 80px 1fr 40px;\n    background-image: url('./modules/assets/bg.png');\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n}\n\n/* HEADER */\n.header {\n    background-color: rgba(22, 22, 22, 0.9);\n    height: 100%;\n    width: 100%;\n    display: grid;\n    justify-content: center;\n    align-items: center;\n    grid-auto-flow: column;\n    gap: 24px;\n}\n\n.home,\n.menu,\n.contact {\n    all: unset;\n    font-size: 22px;\n    color: white;\n    cursor: pointer;\n    font-family: var(--button);\n    padding-bottom: 3px;\n    transition: padding-bottom 0.3s;\n}\n\n.header button:not(.selected):hover {\n    transition: padding-bottom 0.3s;\n    padding-bottom: 12px;\n}\n\n.selected {\n    padding-bottom: 16px;\n    border-bottom: 2px solid var(--yellow);\n}\n\n/* DISPLAY CONTAINER */\n.display {\n    background-color: rgba(22, 22, 22, 0.2);\n    display: grid;\n    place-items: center\n}\n\n.card, .card-home {\n    height: 655px;\n    width: 1120px;\n    display: grid;\n    border-radius:15px;\n}\n.card {\n    background-color: rgba(231, 231, 231, 0.8);\n}\n.card-home {\n    background-color: rgba(22, 22, 22, 0.8);\n}\n\n/* LOGO TYPOGRAPHY */\n.logo-div {\n    align-self: end;\n    justify-self: center;\n    font-size: 64px;\n    border-bottom: 5px solid var(--yellow);\n    border-radius:2px;\n    width: fit-content;\n    padding-right: 6px;\n    padding-left: 6px;\n}\n\n.logo-upper {\n    font-family: 'Logo-font-up', sans-serif;\n    color: var(--yellow);\n    text-align: center;\n    margin-bottom: -42px;\n    z-index: 3;\n    position: relative;\n    font-weight: bold;\n}\n\n.logo-lower {\n    font-family: 'Logo-font-low', sans-serif;\n    color: var(--logo);\n    text-align: center;\n    z-index: 2;\n    position: relative;\n}\n\n/* HOME INFO */\n.about-me {\n    all:unset;\n    color: var(--offwhite-y);\n    place-self:center;\n    font-size:22px;\n    text-align:center;\n    width:65vh;\n    font-family:var(--normal);\n}\n\n/* INLINE MENU */\n.inline-menu {\n    justify-self:center;\n    align-self:start;\n    font-size:24px;\n    width:98px;\n    height:42px;\n    font-family:var(--bold);\n    color:white;\n    background-color:var(--yellow);\n    border:none;\n    border-radius:5px;\n    cursor:pointer;\n}\n\n/* MENU */\n.menu-header {\n    place-self: center;\n    text-align: center;\n    font-family: 'Logo-font-up', sans-serif;\n    font-size: 84px;\n    font-weight:500;\n    color: var(--offwhite-y);\n    background-color: rgba(22, 22, 22, 0.8);\n    width: 230px;\n    height: 110px;\n    border-radius:15px;\n}\n\n.dish-list {\n    display:grid;\n    place-items:center;\n    align-items:start;\n}\n\n.menu-card {\n    display:grid;\n    gap:16px;\n}\n\n.menu-card p {\n    text-align:center;\n}\n\n.dish-title {\n    font-size:28px;\n    font-family:var(--bold);\n    color:#222976;\n}\n\n.dish-desp {\n    font-size:19px;\n    font-family:var(--normal);\n    color:var(--black);\n}\n\n.dish-price {\n    font-size:21px;\n    font-family:var(--normal);\n    color:#320608;\n}\n\n#menu1, #menu2 {\n    padding-bottom: 32px;\n    border-bottom: 2px solid #9c6644;\n}\n\n/* CONTACTS */\n.phone-number {\n    font-family:var(--normal);\n    font-size:21px;\n    align-self:end;\n    padding-left:24px;\n}\n\n.address {\n    grid-row: 2 / 3;\n    font-family:var(--normal);\n    font-size:21px;\n    padding-left:24px;\n}\n\n.map-img {\n    width:620px;\n    border-radius:10px;\n    place-self:center;\n    grid-row: 1 /3;\n    grid-column:2 / 3;\n}\n\n/* FOOTER */\n.footer {\n    font-family: var(--normal);\n    font-size: 18px;\n    height: 100%;\n    width: 100%;\n    background-color: rgba(22, 22, 22, 0.8);\n    display: grid;\n    place-items: center;\n    color: var(--offwhite-w);\n}\n\na {\n    all: unset;\n    text-decoration: none;\n}\n\na:hover {\n    text-decoration: underline;\n    font-family: var(--bold);\n    color: var(--offwhite-y);\n    cursor: pointer;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _modules_icon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/icon.js */ "./src/modules/icon.js");
/* harmony import */ var _modules_skeleton_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/skeleton.js */ "./src/modules/skeleton.js");
/* harmony import */ var _modules_skeleton_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_skeleton_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_display_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/display.js */ "./src/modules/display.js");
/* harmony import */ var _modules_accessibility_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/accessibility.js */ "./src/modules/accessibility.js");






_modules_display_js__WEBPACK_IMPORTED_MODULE_3__["default"].createHome();

/***/ }),

/***/ "./src/modules/accessibility.js":
/*!**************************************!*\
  !*** ./src/modules/accessibility.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display.js */ "./src/modules/display.js");


const buttons = document.querySelectorAll('.home, .menu, .contact');

const homeButton = document.querySelector('.home');
homeButton.addEventListener('click', () => {
    const card = document.querySelector('.display div');
    card.remove();
    _display_js__WEBPACK_IMPORTED_MODULE_0__["default"].createHome();

    buttons.forEach(button => button.classList.remove('selected')); // remove the class from all buttons
    homeButton.classList.add('selected');
});

const menuButton = document.querySelector('.menu');
menuButton.addEventListener('click', () => {
    const card = document.querySelector('.display div');
    card.remove();
    _display_js__WEBPACK_IMPORTED_MODULE_0__["default"].createMenu();

    buttons.forEach(button => button.classList.remove('selected')); 
    menuButton.classList.add('selected');
});

const contactButton = document.querySelector('.contact');
contactButton.addEventListener('click', () => {
    const card = document.querySelector('.display div');
    card.remove();
    _display_js__WEBPACK_IMPORTED_MODULE_0__["default"].createContact();

    buttons.forEach(button => button.classList.remove('selected'));
    contactButton.classList.add('selected');
});

/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_map_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/map.png */ "./src/modules/assets/map.png");


const createDisplay = (() => {
    function createHome() {
        const display = document.querySelector('.display');

        const card = document.createElement('div');
        card.classList.add('card-home');
        card.style.gridTemplateRows = "1fr 145px 1fr"

        const logoDiv = document.createElement('div')
        logoDiv.classList.add('logo-div');
        logoDiv.innerHTML = '<p class="logo-upper">Al Gusto</p> <p class="logo-lower">TRENETTE</p>'

        const homeInfo = document.createElement('p');
        homeInfo.classList.add('about-me');
        homeInfo.textContent = 'A culinary haven celebrating authentic Italian flavors. Meticulously crafted Trenette dishes, inviting ambiance, and a commitment to delivering a delightful dining experience. Buon Appetito!'

        const menuButton = document.createElement('button');
        menuButton.classList.add('inline-menu');
        menuButton.textContent = 'MENU';
        menuButton.addEventListener('click', () => {
            const card = document.querySelector('.display div');
            card.remove();
            createMenu();
        });

        card.appendChild(logoDiv);
        card.appendChild(homeInfo);
        card.appendChild(menuButton);

        display.appendChild(card);
    }

    function createMenu() {
        const display = document.querySelector('.display');

        const card = document.createElement('div');
        card.classList.add('card');
        card.style.gridTemplateRows = "180px 1fr";

        const cardHeader = document.createElement('p');
        cardHeader.classList.add('menu-header');
        cardHeader.textContent = 'Menu';

        const dishList = document.createElement('div');
        dishList.classList.add('dish-list');
        dishList.innerHTML =
    `<div class="menu-card" id="menu1">
        <p class="dish-title">Linguine Trenette al Pesto Genovese</p>
        <p class="dish-desp">Classic Ligurian dish with basil, garlic, pine nuts, Parmesan, and olive oil</p>
        <p class="dish-price">24€</p>
    </div>
    <div class="menu-card" id="menu2">
        <p class="dish-title">Delectable Trenette alle Vongole</p>
        <p class="dish-desp">Flat noodles served with fresh clams, garlic, white wine, and parsley</p>
        <p class="dish-price">48€</p>
    </div>
    <div class="menu-card">
        <p class="dish-title">Lavish Trenette ai Frutti di Mare</p>
        <p class="dish-desp">Seafood lovers' delight featuring trenette with a variety of fresh seafood</p>
        <p class="dish-price">32€</p>
    </div>`;

        card.appendChild(cardHeader);
        card.appendChild(dishList);

        display.appendChild(card);
    }

    function createContact() {
        const display = document.querySelector('.display');

        const card = document.createElement('div');
        card.classList.add('card');
        card.style.gridTemplateRows = "1fr 1fr";
        card.style.gridTemplateColumns = "350px auto";

        card.innerHTML = 
        `<p class="phone-number">📞 123 456 789</p>
        <p class="address">🏠 Beach City, Oceanfront Avenue 23rd, Italy</p>
        <img class="map-img" src=${_assets_map_png__WEBPACK_IMPORTED_MODULE_0__} alt="location pointed on a map">`

        display.appendChild(card);
    }

    // Publicly accessible methods
    return {
        createHome,
        createMenu,
        createContact
    };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createDisplay);

/***/ }),

/***/ "./src/modules/icon.js":
/*!*****************************!*\
  !*** ./src/modules/icon.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_favicon_ico__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/favicon.ico */ "./src/modules/assets/favicon.ico");


const link = document.createElement('link');
link.rel = 'icon';
link.href = `${_assets_favicon_ico__WEBPACK_IMPORTED_MODULE_0__}`;
document.head.appendChild(link);


/***/ }),

/***/ "./src/modules/skeleton.js":
/*!*********************************!*\
  !*** ./src/modules/skeleton.js ***!
  \*********************************/
/***/ (() => {

/* Creates
        <div class="header">
            <button class="home">HOME</button>
            <button class="menu">MENU</button>
            <button class="contact">CONTACT</button>
        </div>
        <div class="display">
        </div>
        <div class="footer">
            <p>© Jay Singh <a href="https://github.com/mathdebate09/restaurant-page" target="_blank">(mathdebate09)</a></p>
        </div> */

const container = document.querySelector('.container');

const createHeader = document.createElement('div');
createHeader.classList.add('header');
createHeader.innerHTML = '<button class="home">HOME</button> <button class="menu">MENU</button> <button class="contact">CONTACT</button>'
container.appendChild(createHeader);

const createDisplay = document.createElement('div');
createDisplay.classList.add('display');
container.appendChild(createDisplay);

const createFooter = document.createElement('div');
createFooter.classList.add('footer');
createFooter.innerHTML = '<p>© Jay Singh <a href="https://github.com/mathdebate09/restaurant-page" target="_blank">(mathdebate09)</a></p>'
container.appendChild(createFooter);

/***/ }),

/***/ "./src/fonts/Aileron-Regular.otf":
/*!***************************************!*\
  !*** ./src/fonts/Aileron-Regular.otf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fbda4f2d3cde2ab23080.otf";

/***/ }),

/***/ "./src/fonts/Handwind.ttf":
/*!********************************!*\
  !*** ./src/fonts/Handwind.ttf ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4c97c0f5584bdfa6c944.ttf";

/***/ }),

/***/ "./src/fonts/LibreFranklin-Black.ttf":
/*!*******************************************!*\
  !*** ./src/fonts/LibreFranklin-Black.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "85623b5ef689bdf672cf.ttf";

/***/ }),

/***/ "./src/fonts/LibreFranklin-Bold.ttf":
/*!******************************************!*\
  !*** ./src/fonts/LibreFranklin-Bold.ttf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f8a6adeeee2d88b5e4e6.ttf";

/***/ }),

/***/ "./src/fonts/LibreFranklin-Medium.ttf":
/*!********************************************!*\
  !*** ./src/fonts/LibreFranklin-Medium.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "713a2f7a5993dd85cac9.ttf";

/***/ }),

/***/ "./src/modules/assets/bg.png":
/*!***********************************!*\
  !*** ./src/modules/assets/bg.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9a7fd83fcd61b75672f1.png";

/***/ }),

/***/ "./src/modules/assets/favicon.ico":
/*!****************************************!*\
  !*** ./src/modules/assets/favicon.ico ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "85f5a07f5e620da935f6.ico";

/***/ }),

/***/ "./src/modules/assets/map.png":
/*!************************************!*\
  !*** ./src/modules/assets/map.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a15624301154146f868b.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QyxxSEFBdUM7QUFDbkYsNENBQTRDLDJJQUFrRDtBQUM5Riw0Q0FBNEMsNklBQW1EO0FBQy9GLDRDQUE0Qyx5SUFBaUQ7QUFDN0YsNENBQTRDLG1JQUE4QztBQUMxRiw0Q0FBNEMsMkhBQTBDO0FBQ3RGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHNGQUFzRixLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxVQUFVLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxNQUFNLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sVUFBVSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLE9BQU8sVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxVQUFVLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sVUFBVSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLFVB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDRDQUFPLEVBQUU7O0FBRTVDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxhQUFhOzs7Ozs7Ozs7Ozs7O0FDOUZhOztBQUV6QztBQUNBO0FBQ0EsZUFBZSxnREFBTSxDQUFDO0FBQ3RCOzs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvYWNjZXNzaWJpbGl0eS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9kaXNwbGF5LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2ljb24uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvc2tlbGV0b24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvSGFuZHdpbmQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy9MaWJyZUZyYW5rbGluLUJsYWNrLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vZm9udHMvTGlicmVGcmFua2xpbi1NZWRpdW0udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9mb250cy9MaWJyZUZyYW5rbGluLUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi9mb250cy9BaWxlcm9uLVJlZ3VsYXIub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi9tb2R1bGVzL2Fzc2V0cy9iZy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogRk9OVCBGQUNFUyAqL1xuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IExvZ28tZm9udC11cDtcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IExvZ28tZm9udC1sb3c7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBMRi1Ob3JtYWw7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBMRi1Cb2xkO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogQnV0dG9uLUZvbnQ7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19ffSk7XG4gICAgZm9udC13ZWlnaHQ6NjAwO1xufVxuXG4vKiBST09UICovXG46cm9vdCB7XG4gICAgLS1vZmZ3aGl0ZS15OiAjZjNlZmQyO1xuICAgIC0tb2Zmd2hpdGUtdzogcmdiKDIzMSwgMjMxLCAyMzEpO1xuICAgIC0teWVsbG93OiAjREJDNzVFO1xuICAgIC0tYmxhY2s6IHJnYigyMiwgMjIsIDIyKTtcbiAgICAtLWxvZ286ICNGMEU3QkE7XG4gICAgLS1ub3JtYWw6ICdMRi1Ob3JtYWwnLCBzYW5zLXNlcmlmO1xuICAgIC0tYm9sZDogJ0xGLUJvbGQnLCBzYW5zLXNlcmlmO1xuICAgIC0tYnV0dG9uOiAnQnV0dG9uLUZvbnQnLCBzYW5zLXNlcmlmO1xufVxuXG4vKiBHTE9CQUwgU1RZTEVTICovXG4qIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLyogUEFSRU5UIENPTlRBSU5FUiAqL1xuLmNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogODBweCAxZnIgNDBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLyogSEVBREVSICovXG4uaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyLCAyMiwgMjIsIDAuOSk7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICAgIGdhcDogMjRweDtcbn1cblxuLmhvbWUsXG4ubWVudSxcbi5jb250YWN0IHtcbiAgICBhbGw6IHVuc2V0O1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1idXR0b24pO1xuICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gICAgdHJhbnNpdGlvbjogcGFkZGluZy1ib3R0b20gMC4zcztcbn1cblxuLmhlYWRlciBidXR0b246bm90KC5zZWxlY3RlZCk6aG92ZXIge1xuICAgIHRyYW5zaXRpb246IHBhZGRpbmctYm90dG9tIDAuM3M7XG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XG59XG5cbi5zZWxlY3RlZCB7XG4gICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXllbGxvdyk7XG59XG5cbi8qIERJU1BMQVkgQ09OVEFJTkVSICovXG4uZGlzcGxheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMiwgMjIsIDIyLCAwLjIpO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlclxufVxuXG4uY2FyZCwgLmNhcmQtaG9tZSB7XG4gICAgaGVpZ2h0OiA2NTVweDtcbiAgICB3aWR0aDogMTEyMHB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYm9yZGVyLXJhZGl1czoxNXB4O1xufVxuLmNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMxLCAyMzEsIDIzMSwgMC44KTtcbn1cbi5jYXJkLWhvbWUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIsIDIyLCAyMiwgMC44KTtcbn1cblxuLyogTE9HTyBUWVBPR1JBUEhZICovXG4ubG9nby1kaXYge1xuICAgIGFsaWduLXNlbGY6IGVuZDtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDY0cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHZhcigtLXllbGxvdyk7XG4gICAgYm9yZGVyLXJhZGl1czoycHg7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIHBhZGRpbmctcmlnaHQ6IDZweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDZweDtcbn1cblxuLmxvZ28tdXBwZXIge1xuICAgIGZvbnQtZmFtaWx5OiAnTG9nby1mb250LXVwJywgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogdmFyKC0teWVsbG93KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogLTQycHg7XG4gICAgei1pbmRleDogMztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5sb2dvLWxvd2VyIHtcbiAgICBmb250LWZhbWlseTogJ0xvZ28tZm9udC1sb3cnLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiB2YXIoLS1sb2dvKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgei1pbmRleDogMjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi8qIEhPTUUgSU5GTyAqL1xuLmFib3V0LW1lIHtcbiAgICBhbGw6dW5zZXQ7XG4gICAgY29sb3I6IHZhcigtLW9mZndoaXRlLXkpO1xuICAgIHBsYWNlLXNlbGY6Y2VudGVyO1xuICAgIGZvbnQtc2l6ZToyMnB4O1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIHdpZHRoOjY1dmg7XG4gICAgZm9udC1mYW1pbHk6dmFyKC0tbm9ybWFsKTtcbn1cblxuLyogSU5MSU5FIE1FTlUgKi9cbi5pbmxpbmUtbWVudSB7XG4gICAganVzdGlmeS1zZWxmOmNlbnRlcjtcbiAgICBhbGlnbi1zZWxmOnN0YXJ0O1xuICAgIGZvbnQtc2l6ZToyNHB4O1xuICAgIHdpZHRoOjk4cHg7XG4gICAgaGVpZ2h0OjQycHg7XG4gICAgZm9udC1mYW1pbHk6dmFyKC0tYm9sZCk7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS15ZWxsb3cpO1xuICAgIGJvcmRlcjpub25lO1xuICAgIGJvcmRlci1yYWRpdXM6NXB4O1xuICAgIGN1cnNvcjpwb2ludGVyO1xufVxuXG4vKiBNRU5VICovXG4ubWVudS1oZWFkZXIge1xuICAgIHBsYWNlLXNlbGY6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6ICdMb2dvLWZvbnQtdXAnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogODRweDtcbiAgICBmb250LXdlaWdodDo1MDA7XG4gICAgY29sb3I6IHZhcigtLW9mZndoaXRlLXkpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIsIDIyLCAyMiwgMC44KTtcbiAgICB3aWR0aDogMjMwcHg7XG4gICAgaGVpZ2h0OiAxMTBweDtcbiAgICBib3JkZXItcmFkaXVzOjE1cHg7XG59XG5cbi5kaXNoLWxpc3Qge1xuICAgIGRpc3BsYXk6Z3JpZDtcbiAgICBwbGFjZS1pdGVtczpjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6c3RhcnQ7XG59XG5cbi5tZW51LWNhcmQge1xuICAgIGRpc3BsYXk6Z3JpZDtcbiAgICBnYXA6MTZweDtcbn1cblxuLm1lbnUtY2FyZCBwIHtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbn1cblxuLmRpc2gtdGl0bGUge1xuICAgIGZvbnQtc2l6ZToyOHB4O1xuICAgIGZvbnQtZmFtaWx5OnZhcigtLWJvbGQpO1xuICAgIGNvbG9yOiMyMjI5NzY7XG59XG5cbi5kaXNoLWRlc3Age1xuICAgIGZvbnQtc2l6ZToxOXB4O1xuICAgIGZvbnQtZmFtaWx5OnZhcigtLW5vcm1hbCk7XG4gICAgY29sb3I6dmFyKC0tYmxhY2spO1xufVxuXG4uZGlzaC1wcmljZSB7XG4gICAgZm9udC1zaXplOjIxcHg7XG4gICAgZm9udC1mYW1pbHk6dmFyKC0tbm9ybWFsKTtcbiAgICBjb2xvcjojMzIwNjA4O1xufVxuXG4jbWVudTEsICNtZW51MiB7XG4gICAgcGFkZGluZy1ib3R0b206IDMycHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM5YzY2NDQ7XG59XG5cbi8qIENPTlRBQ1RTICovXG4ucGhvbmUtbnVtYmVyIHtcbiAgICBmb250LWZhbWlseTp2YXIoLS1ub3JtYWwpO1xuICAgIGZvbnQtc2l6ZToyMXB4O1xuICAgIGFsaWduLXNlbGY6ZW5kO1xuICAgIHBhZGRpbmctbGVmdDoyNHB4O1xufVxuXG4uYWRkcmVzcyB7XG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xuICAgIGZvbnQtZmFtaWx5OnZhcigtLW5vcm1hbCk7XG4gICAgZm9udC1zaXplOjIxcHg7XG4gICAgcGFkZGluZy1sZWZ0OjI0cHg7XG59XG5cbi5tYXAtaW1nIHtcbiAgICB3aWR0aDo2MjBweDtcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XG4gICAgcGxhY2Utc2VsZjpjZW50ZXI7XG4gICAgZ3JpZC1yb3c6IDEgLzM7XG4gICAgZ3JpZC1jb2x1bW46MiAvIDM7XG59XG5cbi8qIEZPT1RFUiAqL1xuLmZvb3RlciB7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW5vcm1hbCk7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyLCAyMiwgMjIsIDAuOCk7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiB2YXIoLS1vZmZ3aGl0ZS13KTtcbn1cblxuYSB7XG4gICAgYWxsOiB1bnNldDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmE6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1ib2xkKTtcbiAgICBjb2xvcjogdmFyKC0tb2Zmd2hpdGUteSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZUFBZTtBQUNmO0lBQ0kseUJBQXlCO0lBQ3pCLDRDQUFnQztBQUNwQzs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQiw0Q0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsNENBQTRDO0FBQ2hEOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLDRDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4Qiw0Q0FBdUM7SUFDdkMsZUFBZTtBQUNuQjs7QUFFQSxTQUFTO0FBQ1Q7SUFDSSxxQkFBcUI7SUFDckIsZ0NBQWdDO0lBQ2hDLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLGlDQUFpQztJQUNqQyw2QkFBNkI7SUFDN0IsbUNBQW1DO0FBQ3ZDOztBQUVBLGtCQUFrQjtBQUNsQjtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUEscUJBQXFCO0FBQ3JCO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixpQ0FBaUM7SUFDakMseURBQWdEO0lBQ2hELHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsMkJBQTJCO0FBQy9COztBQUVBLFdBQVc7QUFDWDtJQUNJLHVDQUF1QztJQUN2QyxZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7OztJQUdJLFVBQVU7SUFDVixlQUFlO0lBQ2YsWUFBWTtJQUNaLGVBQWU7SUFDZiwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsc0NBQXNDO0FBQzFDOztBQUVBLHNCQUFzQjtBQUN0QjtJQUNJLHVDQUF1QztJQUN2QyxhQUFhO0lBQ2I7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsYUFBYTtJQUNiLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksMENBQTBDO0FBQzlDO0FBQ0E7SUFDSSx1Q0FBdUM7QUFDM0M7O0FBRUEsb0JBQW9CO0FBQ3BCO0lBQ0ksZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2Ysc0NBQXNDO0lBQ3RDLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHVDQUF1QztJQUN2QyxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHdDQUF3QztJQUN4QyxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUEsY0FBYztBQUNkO0lBQ0ksU0FBUztJQUNULHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YseUJBQXlCO0FBQzdCOztBQUVBLGdCQUFnQjtBQUNoQjtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFVBQVU7SUFDVixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBLFNBQVM7QUFDVDtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsdUNBQXVDO0lBQ3ZDLGVBQWU7SUFDZixlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLHVDQUF1QztJQUN2QyxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtJQUN6QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGdDQUFnQztBQUNwQzs7QUFFQSxhQUFhO0FBQ2I7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBLFdBQVc7QUFDWDtJQUNJLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCx1Q0FBdUM7SUFDdkMsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLHdCQUF3QjtJQUN4Qix3QkFBd0I7SUFDeEIsZUFBZTtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBGT05UIEZBQ0VTICovXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBMb2dvLWZvbnQtdXA7XFxuICAgIHNyYzogdXJsKFxcXCIuL2ZvbnRzL0hhbmR3aW5kLnR0ZlxcXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IExvZ28tZm9udC1sb3c7XFxuICAgIHNyYzogdXJsKFxcXCIuL2ZvbnRzL0xpYnJlRnJhbmtsaW4tQmxhY2sudHRmXFxcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogTEYtTm9ybWFsO1xcbiAgICBzcmM6IHVybChcXFwiLi9mb250cy9MaWJyZUZyYW5rbGluLU1lZGl1bS50dGZcXFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBMRi1Cb2xkO1xcbiAgICBzcmM6IHVybChcXFwiLi9mb250cy9MaWJyZUZyYW5rbGluLUJvbGQudHRmXFxcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogQnV0dG9uLUZvbnQ7XFxuICAgIHNyYzogdXJsKFxcXCIuL2ZvbnRzL0FpbGVyb24tUmVndWxhci5vdGZcXFwiKTtcXG4gICAgZm9udC13ZWlnaHQ6NjAwO1xcbn1cXG5cXG4vKiBST09UICovXFxuOnJvb3Qge1xcbiAgICAtLW9mZndoaXRlLXk6ICNmM2VmZDI7XFxuICAgIC0tb2Zmd2hpdGUtdzogcmdiKDIzMSwgMjMxLCAyMzEpO1xcbiAgICAtLXllbGxvdzogI0RCQzc1RTtcXG4gICAgLS1ibGFjazogcmdiKDIyLCAyMiwgMjIpO1xcbiAgICAtLWxvZ286ICNGMEU3QkE7XFxuICAgIC0tbm9ybWFsOiAnTEYtTm9ybWFsJywgc2Fucy1zZXJpZjtcXG4gICAgLS1ib2xkOiAnTEYtQm9sZCcsIHNhbnMtc2VyaWY7XFxuICAgIC0tYnV0dG9uOiAnQnV0dG9uLUZvbnQnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4vKiBHTE9CQUwgU1RZTEVTICovXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLyogUEFSRU5UIENPTlRBSU5FUiAqL1xcbi5jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDgwcHggMWZyIDQwcHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9tb2R1bGVzL2Fzc2V0cy9iZy5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG5cXG4vKiBIRUFERVIgKi9cXG4uaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMiwgMjIsIDIyLCAwLjkpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgZ2FwOiAyNHB4O1xcbn1cXG5cXG4uaG9tZSxcXG4ubWVudSxcXG4uY29udGFjdCB7XFxuICAgIGFsbDogdW5zZXQ7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1idXR0b24pO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xcbiAgICB0cmFuc2l0aW9uOiBwYWRkaW5nLWJvdHRvbSAwLjNzO1xcbn1cXG5cXG4uaGVhZGVyIGJ1dHRvbjpub3QoLnNlbGVjdGVkKTpob3ZlciB7XFxuICAgIHRyYW5zaXRpb246IHBhZGRpbmctYm90dG9tIDAuM3M7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXllbGxvdyk7XFxufVxcblxcbi8qIERJU1BMQVkgQ09OVEFJTkVSICovXFxuLmRpc3BsYXkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyLCAyMiwgMjIsIDAuMik7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXJcXG59XFxuXFxuLmNhcmQsIC5jYXJkLWhvbWUge1xcbiAgICBoZWlnaHQ6IDY1NXB4O1xcbiAgICB3aWR0aDogMTEyMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBib3JkZXItcmFkaXVzOjE1cHg7XFxufVxcbi5jYXJkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzEsIDIzMSwgMjMxLCAwLjgpO1xcbn1cXG4uY2FyZC1ob21lIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMiwgMjIsIDIyLCAwLjgpO1xcbn1cXG5cXG4vKiBMT0dPIFRZUE9HUkFQSFkgKi9cXG4ubG9nby1kaXYge1xcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDY0cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB2YXIoLS15ZWxsb3cpO1xcbiAgICBib3JkZXItcmFkaXVzOjJweDtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA2cHg7XFxuICAgIHBhZGRpbmctbGVmdDogNnB4O1xcbn1cXG5cXG4ubG9nby11cHBlciB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTG9nby1mb250LXVwJywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHZhcigtLXllbGxvdyk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogLTQycHg7XFxuICAgIHotaW5kZXg6IDM7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5sb2dvLWxvd2VyIHtcXG4gICAgZm9udC1mYW1pbHk6ICdMb2dvLWZvbnQtbG93Jywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHZhcigtLWxvZ28pO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLyogSE9NRSBJTkZPICovXFxuLmFib3V0LW1lIHtcXG4gICAgYWxsOnVuc2V0O1xcbiAgICBjb2xvcjogdmFyKC0tb2Zmd2hpdGUteSk7XFxuICAgIHBsYWNlLXNlbGY6Y2VudGVyO1xcbiAgICBmb250LXNpemU6MjJweDtcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxuICAgIHdpZHRoOjY1dmg7XFxuICAgIGZvbnQtZmFtaWx5OnZhcigtLW5vcm1hbCk7XFxufVxcblxcbi8qIElOTElORSBNRU5VICovXFxuLmlubGluZS1tZW51IHtcXG4gICAganVzdGlmeS1zZWxmOmNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjpzdGFydDtcXG4gICAgZm9udC1zaXplOjI0cHg7XFxuICAgIHdpZHRoOjk4cHg7XFxuICAgIGhlaWdodDo0MnB4O1xcbiAgICBmb250LWZhbWlseTp2YXIoLS1ib2xkKTtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0teWVsbG93KTtcXG4gICAgYm9yZGVyOm5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6NXB4O1xcbiAgICBjdXJzb3I6cG9pbnRlcjtcXG59XFxuXFxuLyogTUVOVSAqL1xcbi5tZW51LWhlYWRlciB7XFxuICAgIHBsYWNlLXNlbGY6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogJ0xvZ28tZm9udC11cCcsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogODRweDtcXG4gICAgZm9udC13ZWlnaHQ6NTAwO1xcbiAgICBjb2xvcjogdmFyKC0tb2Zmd2hpdGUteSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIsIDIyLCAyMiwgMC44KTtcXG4gICAgd2lkdGg6IDIzMHB4O1xcbiAgICBoZWlnaHQ6IDExMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOjE1cHg7XFxufVxcblxcbi5kaXNoLWxpc3Qge1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIHBsYWNlLWl0ZW1zOmNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6c3RhcnQ7XFxufVxcblxcbi5tZW51LWNhcmQge1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGdhcDoxNnB4O1xcbn1cXG5cXG4ubWVudS1jYXJkIHAge1xcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcXG59XFxuXFxuLmRpc2gtdGl0bGUge1xcbiAgICBmb250LXNpemU6MjhweDtcXG4gICAgZm9udC1mYW1pbHk6dmFyKC0tYm9sZCk7XFxuICAgIGNvbG9yOiMyMjI5NzY7XFxufVxcblxcbi5kaXNoLWRlc3Age1xcbiAgICBmb250LXNpemU6MTlweDtcXG4gICAgZm9udC1mYW1pbHk6dmFyKC0tbm9ybWFsKTtcXG4gICAgY29sb3I6dmFyKC0tYmxhY2spO1xcbn1cXG5cXG4uZGlzaC1wcmljZSB7XFxuICAgIGZvbnQtc2l6ZToyMXB4O1xcbiAgICBmb250LWZhbWlseTp2YXIoLS1ub3JtYWwpO1xcbiAgICBjb2xvcjojMzIwNjA4O1xcbn1cXG5cXG4jbWVudTEsICNtZW51MiB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAzMnB4O1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzljNjY0NDtcXG59XFxuXFxuLyogQ09OVEFDVFMgKi9cXG4ucGhvbmUtbnVtYmVyIHtcXG4gICAgZm9udC1mYW1pbHk6dmFyKC0tbm9ybWFsKTtcXG4gICAgZm9udC1zaXplOjIxcHg7XFxuICAgIGFsaWduLXNlbGY6ZW5kO1xcbiAgICBwYWRkaW5nLWxlZnQ6MjRweDtcXG59XFxuXFxuLmFkZHJlc3Mge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGZvbnQtZmFtaWx5OnZhcigtLW5vcm1hbCk7XFxuICAgIGZvbnQtc2l6ZToyMXB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6MjRweDtcXG59XFxuXFxuLm1hcC1pbWcge1xcbiAgICB3aWR0aDo2MjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czoxMHB4O1xcbiAgICBwbGFjZS1zZWxmOmNlbnRlcjtcXG4gICAgZ3JpZC1yb3c6IDEgLzM7XFxuICAgIGdyaWQtY29sdW1uOjIgLyAzO1xcbn1cXG5cXG4vKiBGT09URVIgKi9cXG4uZm9vdGVyIHtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW5vcm1hbCk7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMiwgMjIsIDIyLCAwLjgpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogdmFyKC0tb2Zmd2hpdGUtdyk7XFxufVxcblxcbmEge1xcbiAgICBhbGw6IHVuc2V0O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbmE6aG92ZXIge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWJvbGQpO1xcbiAgICBjb2xvcjogdmFyKC0tb2Zmd2hpdGUteSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCAnLi9tb2R1bGVzL2ljb24uanMnO1xuaW1wb3J0ICcuL21vZHVsZXMvc2tlbGV0b24uanMnO1xuaW1wb3J0IGNyZWF0ZURpc3BsYXkgZnJvbSAnLi9tb2R1bGVzL2Rpc3BsYXkuanMnO1xuaW1wb3J0ICcuL21vZHVsZXMvYWNjZXNzaWJpbGl0eS5qcyc7XG5cbmNyZWF0ZURpc3BsYXkuY3JlYXRlSG9tZSgpOyIsImltcG9ydCBjcmVhdGVEaXNwbGF5IGZyb20gJy4vZGlzcGxheS5qcydcblxuY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob21lLCAubWVudSwgLmNvbnRhY3QnKTtcblxuY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lJyk7XG5ob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlzcGxheSBkaXYnKTtcbiAgICBjYXJkLnJlbW92ZSgpO1xuICAgIGNyZWF0ZURpc3BsYXkuY3JlYXRlSG9tZSgpO1xuXG4gICAgYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKSk7IC8vIHJlbW92ZSB0aGUgY2xhc3MgZnJvbSBhbGwgYnV0dG9uc1xuICAgIGhvbWVCdXR0b24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbn0pO1xuXG5jb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKTtcbm1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXNwbGF5IGRpdicpO1xuICAgIGNhcmQucmVtb3ZlKCk7XG4gICAgY3JlYXRlRGlzcGxheS5jcmVhdGVNZW51KCk7XG5cbiAgICBidXR0b25zLmZvckVhY2goYnV0dG9uID0+IGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpKTsgXG4gICAgbWVudUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xufSk7XG5cbmNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdCcpO1xuY29udGFjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpc3BsYXkgZGl2Jyk7XG4gICAgY2FyZC5yZW1vdmUoKTtcbiAgICBjcmVhdGVEaXNwbGF5LmNyZWF0ZUNvbnRhY3QoKTtcblxuICAgIGJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4gYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJykpO1xuICAgIGNvbnRhY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbn0pOyIsImltcG9ydCBtYXBQYXRoIGZyb20gJy4vYXNzZXRzL21hcC5wbmcnO1xuXG5jb25zdCBjcmVhdGVEaXNwbGF5ID0gKCgpID0+IHtcbiAgICBmdW5jdGlvbiBjcmVhdGVIb21lKCkge1xuICAgICAgICBjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpc3BsYXknKTtcblxuICAgICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZC1ob21lJyk7XG4gICAgICAgIGNhcmQuc3R5bGUuZ3JpZFRlbXBsYXRlUm93cyA9IFwiMWZyIDE0NXB4IDFmclwiXG5cbiAgICAgICAgY29uc3QgbG9nb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGxvZ29EaXYuY2xhc3NMaXN0LmFkZCgnbG9nby1kaXYnKTtcbiAgICAgICAgbG9nb0Rpdi5pbm5lckhUTUwgPSAnPHAgY2xhc3M9XCJsb2dvLXVwcGVyXCI+QWwgR3VzdG88L3A+IDxwIGNsYXNzPVwibG9nby1sb3dlclwiPlRSRU5FVFRFPC9wPidcblxuICAgICAgICBjb25zdCBob21lSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgaG9tZUluZm8uY2xhc3NMaXN0LmFkZCgnYWJvdXQtbWUnKTtcbiAgICAgICAgaG9tZUluZm8udGV4dENvbnRlbnQgPSAnQSBjdWxpbmFyeSBoYXZlbiBjZWxlYnJhdGluZyBhdXRoZW50aWMgSXRhbGlhbiBmbGF2b3JzLiBNZXRpY3Vsb3VzbHkgY3JhZnRlZCBUcmVuZXR0ZSBkaXNoZXMsIGludml0aW5nIGFtYmlhbmNlLCBhbmQgYSBjb21taXRtZW50IHRvIGRlbGl2ZXJpbmcgYSBkZWxpZ2h0ZnVsIGRpbmluZyBleHBlcmllbmNlLiBCdW9uIEFwcGV0aXRvISdcblxuICAgICAgICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIG1lbnVCdXR0b24uY2xhc3NMaXN0LmFkZCgnaW5saW5lLW1lbnUnKTtcbiAgICAgICAgbWVudUJ1dHRvbi50ZXh0Q29udGVudCA9ICdNRU5VJztcbiAgICAgICAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlzcGxheSBkaXYnKTtcbiAgICAgICAgICAgIGNhcmQucmVtb3ZlKCk7XG4gICAgICAgICAgICBjcmVhdGVNZW51KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQobG9nb0Rpdik7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoaG9tZUluZm8pO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xuXG4gICAgICAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQoY2FyZCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlTWVudSgpIHtcbiAgICAgICAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXNwbGF5Jyk7XG5cbiAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcbiAgICAgICAgY2FyZC5zdHlsZS5ncmlkVGVtcGxhdGVSb3dzID0gXCIxODBweCAxZnJcIjtcblxuICAgICAgICBjb25zdCBjYXJkSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjYXJkSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtaGVhZGVyJyk7XG4gICAgICAgIGNhcmRIZWFkZXIudGV4dENvbnRlbnQgPSAnTWVudSc7XG5cbiAgICAgICAgY29uc3QgZGlzaExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGlzaExpc3QuY2xhc3NMaXN0LmFkZCgnZGlzaC1saXN0Jyk7XG4gICAgICAgIGRpc2hMaXN0LmlubmVySFRNTCA9XG4gICAgYDxkaXYgY2xhc3M9XCJtZW51LWNhcmRcIiBpZD1cIm1lbnUxXCI+XG4gICAgICAgIDxwIGNsYXNzPVwiZGlzaC10aXRsZVwiPkxpbmd1aW5lIFRyZW5ldHRlIGFsIFBlc3RvIEdlbm92ZXNlPC9wPlxuICAgICAgICA8cCBjbGFzcz1cImRpc2gtZGVzcFwiPkNsYXNzaWMgTGlndXJpYW4gZGlzaCB3aXRoIGJhc2lsLCBnYXJsaWMsIHBpbmUgbnV0cywgUGFybWVzYW4sIGFuZCBvbGl2ZSBvaWw8L3A+XG4gICAgICAgIDxwIGNsYXNzPVwiZGlzaC1wcmljZVwiPjI04oKsPC9wPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJtZW51LWNhcmRcIiBpZD1cIm1lbnUyXCI+XG4gICAgICAgIDxwIGNsYXNzPVwiZGlzaC10aXRsZVwiPkRlbGVjdGFibGUgVHJlbmV0dGUgYWxsZSBWb25nb2xlPC9wPlxuICAgICAgICA8cCBjbGFzcz1cImRpc2gtZGVzcFwiPkZsYXQgbm9vZGxlcyBzZXJ2ZWQgd2l0aCBmcmVzaCBjbGFtcywgZ2FybGljLCB3aGl0ZSB3aW5lLCBhbmQgcGFyc2xleTwvcD5cbiAgICAgICAgPHAgY2xhc3M9XCJkaXNoLXByaWNlXCI+NDjigqw8L3A+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm1lbnUtY2FyZFwiPlxuICAgICAgICA8cCBjbGFzcz1cImRpc2gtdGl0bGVcIj5MYXZpc2ggVHJlbmV0dGUgYWkgRnJ1dHRpIGRpIE1hcmU8L3A+XG4gICAgICAgIDxwIGNsYXNzPVwiZGlzaC1kZXNwXCI+U2VhZm9vZCBsb3ZlcnMnIGRlbGlnaHQgZmVhdHVyaW5nIHRyZW5ldHRlIHdpdGggYSB2YXJpZXR5IG9mIGZyZXNoIHNlYWZvb2Q8L3A+XG4gICAgICAgIDxwIGNsYXNzPVwiZGlzaC1wcmljZVwiPjMy4oKsPC9wPlxuICAgIDwvZGl2PmA7XG5cbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkSGVhZGVyKTtcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChkaXNoTGlzdCk7XG5cbiAgICAgICAgZGlzcGxheS5hcHBlbmRDaGlsZChjYXJkKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVDb250YWN0KCkge1xuICAgICAgICBjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpc3BsYXknKTtcblxuICAgICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xuICAgICAgICBjYXJkLnN0eWxlLmdyaWRUZW1wbGF0ZVJvd3MgPSBcIjFmciAxZnJcIjtcbiAgICAgICAgY2FyZC5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gXCIzNTBweCBhdXRvXCI7XG5cbiAgICAgICAgY2FyZC5pbm5lckhUTUwgPSBcbiAgICAgICAgYDxwIGNsYXNzPVwicGhvbmUtbnVtYmVyXCI+8J+TniAxMjMgNDU2IDc4OTwvcD5cbiAgICAgICAgPHAgY2xhc3M9XCJhZGRyZXNzXCI+8J+PoCBCZWFjaCBDaXR5LCBPY2VhbmZyb250IEF2ZW51ZSAyM3JkLCBJdGFseTwvcD5cbiAgICAgICAgPGltZyBjbGFzcz1cIm1hcC1pbWdcIiBzcmM9JHttYXBQYXRofSBhbHQ9XCJsb2NhdGlvbiBwb2ludGVkIG9uIGEgbWFwXCI+YFxuXG4gICAgICAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQoY2FyZCk7XG4gICAgfVxuXG4gICAgLy8gUHVibGljbHkgYWNjZXNzaWJsZSBtZXRob2RzXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3JlYXRlSG9tZSxcbiAgICAgICAgY3JlYXRlTWVudSxcbiAgICAgICAgY3JlYXRlQ29udGFjdFxuICAgIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVEaXNwbGF5OyIsImltcG9ydCBteUljb24gZnJvbSAnLi9hc3NldHMvZmF2aWNvbi5pY28nXG5cbmNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG5saW5rLnJlbCA9ICdpY29uJztcbmxpbmsuaHJlZiA9IGAke215SWNvbn1gO1xuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiIsIi8qIENyZWF0ZXNcbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImhvbWVcIj5IT01FPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibWVudVwiPk1FTlU8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjb250YWN0XCI+Q09OVEFDVDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRpc3BsYXlcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJcIj5cbiAgICAgICAgICAgIDxwPsKpIEpheSBTaW5naCA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL21hdGhkZWJhdGUwOS9yZXN0YXVyYW50LXBhZ2VcIiB0YXJnZXQ9XCJfYmxhbmtcIj4obWF0aGRlYmF0ZTA5KTwvYT48L3A+XG4gICAgICAgIDwvZGl2PiAqL1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG5cbmNvbnN0IGNyZWF0ZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY3JlYXRlSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuY3JlYXRlSGVhZGVyLmlubmVySFRNTCA9ICc8YnV0dG9uIGNsYXNzPVwiaG9tZVwiPkhPTUU8L2J1dHRvbj4gPGJ1dHRvbiBjbGFzcz1cIm1lbnVcIj5NRU5VPC9idXR0b24+IDxidXR0b24gY2xhc3M9XCJjb250YWN0XCI+Q09OVEFDVDwvYnV0dG9uPidcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIpO1xuXG5jb25zdCBjcmVhdGVEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jcmVhdGVEaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXknKTtcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVEaXNwbGF5KTtcblxuY29uc3QgY3JlYXRlRm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jcmVhdGVGb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG5jcmVhdGVGb290ZXIuaW5uZXJIVE1MID0gJzxwPsKpIEpheSBTaW5naCA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL21hdGhkZWJhdGUwOS9yZXN0YXVyYW50LXBhZ2VcIiB0YXJnZXQ9XCJfYmxhbmtcIj4obWF0aGRlYmF0ZTA5KTwvYT48L3A+J1xuY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUZvb3Rlcik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9