(() => {
var exports = {};
exports.id = 345;
exports.ids = [345];
exports.modules = {

/***/ 6395:
/***/ ((module) => {

// Exports
module.exports = {
	"pageCover": "products_pageCover__cdm4t",
	"coverTitle": "products_coverTitle__gPNDf",
	"pageData": "products_pageData__Arv9h",
	"pageDataIn": "products_pageDataIn__4oPn8",
	"pageNavigator": "products_pageNavigator__Errsk",
	"navlink": "products_navlink__a_St_",
	"navlink__active": "products_navlink__active__SwhuD",
	"pageRealData": "products_pageRealData__NCvTv",
	"contentParagraph": "products_contentParagraph__ME29h",
	"contentMainTitle": "products_contentMainTitle__zdpQY",
	"contentText": "products_contentText__P_0Ds",
	"homeCircleContainer": "products_homeCircleContainer__Pj_x4",
	"homeCircleCenter": "products_homeCircleCenter__nZRIG",
	"homeCircleItem": "products_homeCircleItem__sqmXX",
	"homeCircleItem__img": "products_homeCircleItem__img__Z0Luc",
	"homeCircleItem__img_wrapper": "products_homeCircleItem__img_wrapper__T4IFG",
	"homeCircleItem__title": "products_homeCircleItem__title__yu2ec",
	"circlelink": "products_circlelink__pCrc5"
};


/***/ }),

/***/ 9250:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ products),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./pages/products/index.module.css
var index_module = __webpack_require__(6395);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./components/NavLink/index.js
var NavLink = __webpack_require__(1967);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
;// CONCATENATED MODULE: external "next-i18next/serverSideTranslations"
const serverSideTranslations_namespaceObject = require("next-i18next/serverSideTranslations");
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./store/slices/generalSlice.js
var generalSlice = __webpack_require__(4486);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/products/index.js










async function getStaticProps({ locale  }) {
    return {
        props: {
            ...await (0,serverSideTranslations_namespaceObject.serverSideTranslations)(locale, [
                "common",
                "products"
            ])
        }
    };
}
const Products = (props)=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    const siteName = (0,external_react_redux_.useSelector)(generalSlice/* showSiteName */.wI);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("meta", {
                        charSet: "utf-8"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("title", {
                        children: [
                            siteName,
                            " | Products"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                id: "pageCover",
                className: (index_module_default()).pageCover,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)((image_default()), {
                        alt: "page cover",
                        src: "/img/implantscover.jpg",
                        layout: "fill",
                        objectFit: "cover"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                        className: (index_module_default()).coverTitle,
                        children: t("common:implants").toUpperCase()
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                id: "pageData",
                className: (index_module_default()).pageData,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    id: "pageDataIn",
                    className: (index_module_default()).pageDataIn,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (index_module_default()).pageNavigator,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)(NavLink/* default */.Z, {
                                    href: "/serves",
                                    className: (index_module_default()).navlink,
                                    activeClassName: (index_module_default()).navlink__active,
                                    title: "שירותים"
                                }),
                                "/",
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)(NavLink/* default */.Z, {
                                    href: "/products",
                                    className: (index_module_default()).navlink,
                                    activeClassName: (index_module_default()).navlink__active,
                                    title: "מוצרים"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (index_module_default()).pageRealData,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (index_module_default()).contentParagraph,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                            className: (index_module_default()).contentMainTitle,
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("h1", {
                                                children: "מוצרים"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                            className: (index_module_default()).contentText,
                                            children: "QRS מספקת את השטלים הטובים בעולם השטלים שלנו עוברים תהליך קפדני ועומדים בסטנדרטים בינלואמיים"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                    className: (index_module_default()).contentParagraph,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                        id: "homeCircleContainer",
                                        className: (index_module_default()).homeCircleContainer,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            id: "homeCircleCenter",
                                            className: (index_module_default()).homeCircleCenter,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                    className: (index_module_default()).homeCircleItem,
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(NavLink/* default */.Z, {
                                                        href: "",
                                                        className: (index_module_default()).circlelink,
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                className: (index_module_default()).homeCircleItem__img,
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                    className: (index_module_default()).homeCircleItem__img_wrapper,
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((image_default()), {
                                                                        alt: "page cover",
                                                                        src: "/img/products/i1.png",
                                                                        layout: "fill",
                                                                        objectFit: "contain"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                className: (index_module_default()).homeCircleItem__title,
                                                                children: "Kits"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                    className: (index_module_default()).homeCircleItem,
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(NavLink/* default */.Z, {
                                                        href: "",
                                                        className: (index_module_default()).circlelink,
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                className: (index_module_default()).homeCircleItem__img,
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                    className: (index_module_default()).homeCircleItem__img_wrapper,
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((image_default()), {
                                                                        alt: "page cover",
                                                                        src: "/img/products/i2.png",
                                                                        layout: "fill",
                                                                        objectFit: "contain"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                className: (index_module_default()).homeCircleItem__title,
                                                                children: "Implants"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                    className: (index_module_default()).homeCircleItem,
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(NavLink/* default */.Z, {
                                                        href: "",
                                                        className: (index_module_default()).circlelink,
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                className: (index_module_default()).homeCircleItem__img,
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                    className: (index_module_default()).homeCircleItem__img_wrapper,
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((image_default()), {
                                                                        alt: "page cover",
                                                                        src: "/img/products/i3.png",
                                                                        layout: "fill",
                                                                        objectFit: "contain"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                className: (index_module_default()).homeCircleItem__title,
                                                                children: "Prosthetics"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                    className: (index_module_default()).homeCircleItem,
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(NavLink/* default */.Z, {
                                                        href: "",
                                                        className: (index_module_default()).circlelink,
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                className: (index_module_default()).homeCircleItem__img,
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                    className: (index_module_default()).homeCircleItem__img_wrapper,
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((image_default()), {
                                                                        alt: "page cover",
                                                                        src: "/img/products/i4.png",
                                                                        layout: "fill",
                                                                        objectFit: "contain"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                className: (index_module_default()).homeCircleItem__title,
                                                                children: "Tools"
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
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
// Products.title = 'Products';
/* harmony default export */ const products = (Products);


/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 1377:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next");

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
var __webpack_exports__ = __webpack_require__.X(0, [675,676,664,486,967], () => (__webpack_exec__(9250)));
module.exports = __webpack_exports__;

})();