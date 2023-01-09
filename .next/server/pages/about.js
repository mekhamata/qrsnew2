(() => {
var exports = {};
exports.id = 521;
exports.ids = [521];
exports.modules = {

/***/ 324:
/***/ ((module) => {

// Exports
module.exports = {
	"pageCover": "about_pageCover__tyBEg",
	"pageData": "about_pageData__TLSu0",
	"pageDataIn": "about_pageDataIn__SF1eG",
	"emansDiv": "about_emansDiv__6vO7w",
	"imgDiv": "about_imgDiv__ZHgZ1",
	"imanTitle": "about_imanTitle__2OS95",
	"imanDesc": "about_imanDesc__ocUTI",
	"imanBold": "about_imanBold__faBM0",
	"contentDiv": "about_contentDiv__kb_rt",
	"contentParagraph": "about_contentParagraph__hoByG",
	"contentMainTitle": "about_contentMainTitle__gf4Kc",
	"contentMainH2Title": "about_contentMainH2Title__Z7oLH",
	"contentText": "about_contentText__erYWu",
	"contentMainH3Title": "about_contentMainH3Title__dP_hR"
};


/***/ }),

/***/ 8051:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(324);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_slices_generalSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4486);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* eslint-disable react/no-unescaped-entities */ 





const About = ({ about , eman  })=>{
    const siteName = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_store_slices_generalSlice__WEBPACK_IMPORTED_MODULE_3__/* .showSiteName */ .wI);
    console.log(eman);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta", {
                        charSet: "utf-8"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                        children: [
                            siteName,
                            " | ",
                            about.about.title
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                id: "pageCover",
                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().pageCover),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                    alt: "page cover",
                    src: "/img/aboutcover.jpg",
                    layout: "fill",
                    objectFit: "cover"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                id: "pageData",
                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().pageData),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    id: "pageDataIn",
                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().pageDataIn),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            id: "emansDiv",
                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().emansDiv),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().imgDiv),
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        alt: "page main pic",
                                        src: "/img/iman.png",
                                        layout: "fill",
                                        objectFit: "cover"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().imanTitle),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                            children: "אימן חורשיד"
                                        }),
                                        ' מייסדת ומנכ"לית חברת QRS'
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().imanDesc),
                                    children: "בעלת תואר ראשון במדעי הטבע - האוניברסיטה הפתוחה תואר שני בהבטחת איכות ואמינות - הטכניון תואר שני במנהל עסקים - אוניברסיטת חיפה"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().imanBold),
                                    children: "אמינות, זמינות ומחויבות לשירות הטוב ביותר ולשביעות רצונם של לקוחותינו"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            id: "contentDiv",
                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().contentDiv),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().contentParagraph),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().contentMainTitle),
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
                                                children: about.about.title
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().contentText),
                                            dangerouslySetInnerHTML: {
                                                __html: about.about.text
                                            }
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().contentParagraph),
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().contentText),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                                                children: "QRS נוסדה בשנת 2014"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                                                children: 'אימן חורשיד מייסדת ומנכ"לית חברת QRS'
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                children: 'אימן חורשיד מייסדת ומנכ"לית חברת QRS לאימאן יש יותר מעשרים שנות ניסיון של פיתוח ויישום של מערכות QMS המעודכנות, במגוון רחב של תעשיות: כלי חיתוך, ברזים תעשייתיים, ציוד לחץ, יציקות מתכת ומכשור רפואי. בנוסף, יש לה ניסיון רב בשילוב מדיניות סביבתית וניהול בטיחות כחלק ממערכת ניהול האיכות בחברות מובילות. היא כיהנה כסמנכ"ל איכות ורגולציה בחברת MIS , אחת החבורות המובילות בעולם בתחום תעשיית שתלים דנטליים בנוסף לתפקידים ניהוליים בחברות גלובליות כמו לומינס מדיקל. אימאן מייעצת ומלווה חברות בארץ ובחו"ל: ברישום למכשור רפואי ו- IVD, בארה"ב (FDA), באיחוד האירופאי (CE) ובמדינות כמו: סין, קנדה, דרום אמריקה, מזרח אירופה ומדינות אחרות ברחבי העולם. וגם מלווה חברות לקראת מבדקי הסמכה לתקנים בינלאומיים וביקורת ה- FDA, ובונה מערכות איכות בהתאם לתקנים בינלאומיים ומדריכה לתקנים אלו למעורבים בפיתוח וייצור מוצרים, במטרה להגביר את ההיכרות וההבנה של עבודה מול דרישות התקנים והתקינה הבינלאומיים.'
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().contentParagraph),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().contentMainH2Title),
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                                                children: "QRS נוסדה בשנת 2014"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().contentText),
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                children: 'הצוות שלנו מורכב ממומחים לרגולציה, מהנדסי איכות המצטיינים בתעשייה בכלל ובתעשיית המכשור הרפואי בפרט ומהנדסי מכונות וכימיה שילוו אותכם באמינות ובמקצועיות. צוות QRS הינו צוות מקצועי בעל מומחיות, יצירתיות וניסיון רב בחשיבה מחוץ לקופסה המאפשר לנו להציע ללקוחותינו ייצור מוצרים חדשים וייחודיים כמו גם שיפור משמעותי של תהליכי הייצור של מוצרים קיימים, באמצעות תכנון תהליכי ייצור ייעילים ואופטימליים. לצוות QRS ידע אקדמי, ניסיון רב לאורך שנים וקשרים רבים עם רשויות בתחום האיכות ורגולציה בישראל ובחו"ל כמו: FDA, משרד הבריאות הישראלי, רשויות קנדיות, גופי הסמכה שונים (Notified Body) ונציגות אירופאיות.'
                                            })
                                        })
                                    ]
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
    const res1 = await fetch("https://qrs-global.com/react/about/index.php?id=6");
    const data1 = await res1.json();
    const res2 = await fetch("https://qrs-global.com/react/about/index.php?id=3");
    const data2 = await res2.json();
    return {
        props: {
            about: data1,
            eman: data2
        }
    };
};
// About.title = 'About';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About); // import connectMongo from '../../utils/dbConnect';
 // import Samar from '../../models/toursModel';
 // const About = ({ samars }) => {
 //   return (
 //     <div>
 //       {samars.map((samars) => (
 //         <div key={samars._id}>{samars.name}</div>
 //       ))}
 //     </div>
 //   );
 // };
 // About.title = 'About';
 // export const getServerSideProps = async () => {
 //   try {
 //     console.log('connecting to mongo');
 //     await connectMongo();
 //     console.log('connected to mongo');
 //     console.log('Fetching documents');
 //     const samars = await Samar.find();
 //     console.log('fetched documents');
 //     return {
 //       props: {
 //         samars: JSON.parse(JSON.stringify(samars)),
 //       },
 //     };
 //   } catch (err) {
 //     return {
 //       notFound: true,
 //     };
 //   }
 // };
 // export default About;


/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

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

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [675,486], () => (__webpack_exec__(8051)));
module.exports = __webpack_exports__;

})();