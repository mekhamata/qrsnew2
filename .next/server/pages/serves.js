(() => {
var exports = {};
exports.id = 299;
exports.ids = [299];
exports.modules = {

/***/ 2339:
/***/ ((module) => {

// Exports
module.exports = {
	"pageCover": "serves_pageCover__5dy7o",
	"coverTitle": "serves_coverTitle__4jxsJ",
	"pageData": "serves_pageData__sImgS",
	"pageDataIn": "serves_pageDataIn__Oh8mU",
	"pageNavigator": "serves_pageNavigator__tprWo",
	"navlink": "serves_navlink__s6gtn",
	"navlink__active": "serves_navlink__active__Y_LT0",
	"pageRealData": "serves_pageRealData__M2mn3",
	"contentParagraph": "serves_contentParagraph__FjK3r",
	"contentMainTitle": "serves_contentMainTitle__9cGcf",
	"contentText": "serves_contentText__LAvhk",
	"homeCircleContainer": "serves_homeCircleContainer__YaXDZ",
	"homeCircleCenter": "serves_homeCircleCenter__X9N7M",
	"homeCircleItem": "serves_homeCircleItem__X8Vfp",
	"homeCircleItem__img": "serves_homeCircleItem__img__jOsB3",
	"homeCircleItem__img_wrapper": "serves_homeCircleItem__img_wrapper__dJD2K",
	"homeCircleItem__title": "serves_homeCircleItem__title__CyVr1",
	"circlelink": "serves_circlelink__7ZSZV"
};


/***/ }),

/***/ 8571:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2339);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_NavLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1967);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_slices_generalSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4486);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);







const Serves = ({ servescat , allserves  })=>{
    const siteName = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_store_slices_generalSlice__WEBPACK_IMPORTED_MODULE_4__/* .showSiteName */ .wI);
    const catdata = servescat.servescat;
    //all serves <--start-->
    const allservesdata = allserves.allserves;
    const myLoader = ({ src , width , quality  })=>{
        return `https://qrs-global.com/uploads/${src}?w=${width}&q=${quality || 75}`;
    };
    const Allservescircles = ()=>{
        return allservesdata && allservesdata.map((item)=>{
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_6___default().homeCircleItem),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_NavLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    href: `/serves/${item.id}`,
                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_6___default().circlelink),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_6___default().homeCircleItem__img),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_6___default().homeCircleItem__img_wrapper),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    loader: myLoader,
                                    alt: "page cover",
                                    src: `${item.pic}`,
                                    // src='/img/serves/i1.png'
                                    layout: "fill",
                                    objectFit: "contain"
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_6___default().homeCircleItem__title),
                            children: item.title
                        })
                    ]
                })
            }, item.id);
        });
    };
    //all serves <--end-->
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta", {
                        charSet: "utf-8"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                        children: [
                            siteName,
                            " | ",
                            catdata.title
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                id: "pageCover",
                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_6___default().pageCover),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                        alt: "page cover",
                        src: "/img/servescover.jpg",
                        layout: "fill",
                        objectFit: "cover"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_6___default().coverTitle),
                        children: "SERVES"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                id: "pageData",
                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_6___default().pageData),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    id: "pageDataIn",
                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_6___default().pageDataIn),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_6___default().pageNavigator),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_NavLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    href: "/serves",
                                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_6___default().navlink),
                                    activeClassName: (_index_module_css__WEBPACK_IMPORTED_MODULE_6___default().navlink__active),
                                    title: catdata.title
                                }),
                                "/",
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_NavLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    href: "/products",
                                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_6___default().navlink),
                                    activeClassName: (_index_module_css__WEBPACK_IMPORTED_MODULE_6___default().navlink__active),
                                    title: "מוצרים"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_6___default().pageRealData),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_6___default().contentParagraph),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_6___default().contentMainTitle),
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
                                                children: catdata.title
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_6___default().contentText),
                                            dangerouslySetInnerHTML: {
                                                __html: catdata.description
                                            }
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_6___default().contentParagraph),
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                        id: "homeCircleContainer",
                                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_6___default().homeCircleContainer),
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                            id: "homeCircleCenter",
                                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_6___default().homeCircleCenter),
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Allservescircles, {})
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
const getStaticProps = async ()=>{
    const res1 = await fetch("https://qrs-global.com/react/serves/servescat.php?id=5");
    const data1 = await res1.json();
    const res2 = await fetch("https://qrs-global.com/react/serves/serves.php");
    const data2 = await res2.json();
    return {
        props: {
            servescat: data1,
            allserves: data2
        }
    };
};
// Serves.title = 'Serves';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Serves);


/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,676,664,486,967], () => (__webpack_exec__(8571)));
module.exports = __webpack_exports__;

})();