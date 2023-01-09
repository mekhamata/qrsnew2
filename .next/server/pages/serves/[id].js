(() => {
var exports = {};
exports.id = 273;
exports.ids = [273];
exports.modules = {

/***/ 6301:
/***/ ((module) => {

// Exports
module.exports = {
	"pageCover": "in_pageCover__VRSGb",
	"coverTitle": "in_coverTitle__tllTs",
	"pageData": "in_pageData__Yaxb4",
	"pageDataIn": "in_pageDataIn__B2AfB",
	"pageNavigator": "in_pageNavigator__BPdnZ",
	"navlink": "in_navlink__cBTfb",
	"navlink__active": "in_navlink__active__nqQId",
	"pageRealData": "in_pageRealData__eqsPm",
	"contentParagraph": "in_contentParagraph__V1WiG",
	"contentParagraph_copy1": "in_contentParagraph_copy1__jJTlU",
	"contentParagraph_copy1_text": "in_contentParagraph_copy1_text__4NN5T",
	"contentParagraph_copy1_img": "in_contentParagraph_copy1_img___wfmW",
	"contentParagraph_copy2": "in_contentParagraph_copy2__HxUX9",
	"contentMainTitle": "in_contentMainTitle__5k3BH",
	"contentMainTitle_copy": "in_contentMainTitle_copy__09xzi",
	"titleIconContainer": "in_titleIconContainer__Q1dvw",
	"titleIcon": "in_titleIcon__agfp6",
	"contentText": "in_contentText__C5FtS",
	"coursesListTitle": "in_coursesListTitle__NoYSb",
	"coursesListContainer": "in_coursesListContainer__0SUig",
	"coursesListFormContainer": "in_coursesListFormContainer__sQ7Gu",
	"coursesListFormFullRow": "in_coursesListFormFullRow__cc8oT",
	"coursesListFormHalfRow": "in_coursesListFormHalfRow__ZY4ro",
	"coursesFormInput": "in_coursesFormInput__TRVBi",
	"filled": "in_filled__Dqy94",
	"datePickerClearIcon": "in_datePickerClearIcon__WKRTr",
	"coursesFormButton": "in_coursesFormButton__F9rA7",
	"coursesList": "in_coursesList__Bj2ao",
	"courseItem": "in_courseItem__W9Zbl",
	"courseItemIn": "in_courseItemIn__WoLXA",
	"courseItemIn2": "in_courseItemIn2__hjR7Y",
	"courseItemCircle": "in_courseItemCircle__nkpb_",
	"courseItemInInside": "in_courseItemInInside__DmE8f",
	"courseItemInInside2": "in_courseItemInInside2__hbTT2",
	"courseItemInInsideImg": "in_courseItemInInsideImg__LVbqk",
	"courseItemInInsideText": "in_courseItemInInsideText__pQxIH",
	"courseItemInInside2Img": "in_courseItemInInside2Img__4bFTZ",
	"courseItemInInside2Text": "in_courseItemInInside2Text__ztehO",
	"courseItemInInsideImg_link": "in_courseItemInInsideImg_link__P2dQ7",
	"courseItemInInsideText_link": "in_courseItemInInsideText_link__6vSZd"
};


/***/ }),

/***/ 6996:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ iconComponent)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@fortawesome/fontawesome-svg-core"
var fontawesome_svg_core_ = __webpack_require__(3195);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(7197);
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(6466);
;// CONCATENATED MODULE: external "@fortawesome/free-brands-svg-icons"
const free_brands_svg_icons_namespaceObject = require("@fortawesome/free-brands-svg-icons");
;// CONCATENATED MODULE: external "@fortawesome/free-regular-svg-icons"
const free_regular_svg_icons_namespaceObject = require("@fortawesome/free-regular-svg-icons");
;// CONCATENATED MODULE: ./components/iconComponent/index.js






fontawesome_svg_core_.library.add(free_solid_svg_icons_.fas, free_regular_svg_icons_namespaceObject.far, free_brands_svg_icons_namespaceObject.fab);
const IconComponent = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)(react_fontawesome_.FontAwesomeIcon, {
        icon: props.name,
        className: props.className ? props.className : "socialIcons"
    });
};
/* harmony default export */ const iconComponent = (IconComponent);


/***/ }),

/***/ 5505:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./pages/serves/in.module.css
var in_module = __webpack_require__(6301);
var in_module_default = /*#__PURE__*/__webpack_require__.n(in_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./components/NavLink/index.js
var NavLink = __webpack_require__(1967);
// EXTERNAL MODULE: ./components/iconComponent/index.js + 2 modules
var iconComponent = __webpack_require__(6996);
;// CONCATENATED MODULE: external "react-datepicker"
const external_react_datepicker_namespaceObject = require("react-datepicker");
var external_react_datepicker_default = /*#__PURE__*/__webpack_require__.n(external_react_datepicker_namespaceObject);
// EXTERNAL MODULE: ./node_modules/react-datepicker/dist/react-datepicker.css
var react_datepicker = __webpack_require__(5994);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./store/slices/generalSlice.js
var generalSlice = __webpack_require__(4486);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/serves/[id].js












//create floating text input
function TextInput({ type ="text" , label , name , onclick  }) {
    const { 0: value , 1: setValue  } = (0,external_react_.useState)("");
    function handleChange(e) {
        setValue(e.target.value);
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (in_module_default()).coursesFormInput,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("input", {
                type: type,
                value: value,
                onChange: handleChange,
                onClick: onclick
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("label", {
                className: value && (in_module_default()).filled,
                htmlFor: name,
                children: label
            })
        ]
    });
}
//create floating select
function SelectInput({ type ="text" , label , name , onclick  }) {
    const { 0: value , 1: setValue  } = (0,external_react_.useState)("");
    function handleChange(e) {
        setValue(e.target.value);
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (in_module_default()).coursesFormInput,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                onClick: onclick,
                onChange: handleChange,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("option", {
                        selected: true,
                        value: ""
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("option", {
                        value: "1",
                        children: "asdasdasdasd"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("option", {
                        value: "2",
                        children: "asdasdasdasd"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("option", {
                        value: "3",
                        children: "asdasdasdasd"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("label", {
                className: value && (in_module_default()).filled,
                children: label
            })
        ]
    });
}
//date picker custom input
// eslint-disable-next-line react/display-name
const FloatingDatePicker = /*#__PURE__*/ (0,external_react_.forwardRef)(({ value , onClick , name , label , type ="text"  }, ref)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (in_module_default()).coursesFormInput,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("input", {
                type: type,
                value: value,
                onClick: onClick
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("label", {
                className: value && (in_module_default()).filled,
                htmlFor: name,
                children: label
            })
        ]
    }));
const LearningIn = ({ serve  })=>{
    const router = (0,router_.useRouter)();
    const { id  } = router.query;
    //datepicker state:
    const { 0: startDate , 1: setStartDate  } = (0,external_react_.useState)("");
    const siteName = (0,external_react_redux_.useSelector)(generalSlice/* showSiteName */.wI);
    const theserve = serve.serves || "";
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
                            " | ",
                            theserve.title
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                id: "pageCover",
                className: (in_module_default()).pageCover,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((image_default()), {
                    alt: "page cover",
                    src: "/img/learningcover.jpg",
                    layout: "fill",
                    objectFit: "cover"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                id: "pageData",
                className: (in_module_default()).pageData,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                    id: "pageDataIn",
                    className: (in_module_default()).pageDataIn,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (in_module_default()).pageRealData,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (in_module_default()).pageNavigator,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)(NavLink/* default */.Z, {
                                        href: "/",
                                        className: (in_module_default()).navlink,
                                        activeClassName: (in_module_default()).navlink__active,
                                        title: "בית"
                                    }),
                                    "/",
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)(NavLink/* default */.Z, {
                                        href: "/serves",
                                        className: (in_module_default()).navlink,
                                        activeClassName: (in_module_default()).navlink__active,
                                        title: "שירותים"
                                    }),
                                    "/",
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)(NavLink/* default */.Z, {
                                        href: `/serves/${id}`,
                                        className: (in_module_default()).navlink,
                                        activeClassName: (in_module_default()).navlink__active,
                                        title: `${theserve.title}`
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (in_module_default()).contentParagraph_copy1,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (in_module_default()).contentParagraph_copy1_text,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: (in_module_default()).contentMainTitle_copy,
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                        className: (in_module_default()).titleIconContainer,
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(iconComponent/* default */.Z, {
                                                            name: "fa-sharp fa-solid fa-chalkboard-user",
                                                            className: (in_module_default()).titleIcon
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("h1", {
                                                        children: theserve.title
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                className: (in_module_default()).contentText,
                                                dangerouslySetInnerHTML: {
                                                    __html: theserve.text
                                                }
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                        className: (in_module_default()).contentParagraph_copy1_img,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((image_default()), {
                                            alt: "page cover",
                                            src: "/img/servesin.png",
                                            width: 624,
                                            height: 670,
                                            objectFit: "scale-down"
                                        })
                                    })
                                ]
                            }),
                            (theserve.title?.includes("courses") || theserve.title?.includes("הדרכות") || theserve.title?.includes("קורסים")) && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (in_module_default()).contentParagraph_copy2,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                        className: (in_module_default()).coursesListTitle,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("h2", {
                                            children: "לרשימת הקורסים"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (in_module_default()).coursesListContainer,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                className: (in_module_default()).coursesListFormContainer,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                            className: (in_module_default()).coursesListFormFullRow,
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(TextInput, {
                                                                label: "כתובת",
                                                                name: "address"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: (in_module_default()).coursesListFormFullRow,
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: (in_module_default()).coursesListFormHalfRow,
                                                                    style: {
                                                                        paddingInlineEnd: "10px"
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)((external_react_datepicker_default()), {
                                                                            selected: startDate,
                                                                            onChange: (date)=>setStartDate(date),
                                                                            customInput: /*#__PURE__*/ (0,jsx_runtime_.jsx)(FloatingDatePicker, {
                                                                                name: "startdate",
                                                                                label: "מתאריך"
                                                                            }),
                                                                            dateFormat: "dd/MM/yyyy"
                                                                        }),
                                                                        startDate ? /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                            onClick: ()=>setStartDate(""),
                                                                            className: (in_module_default()).datePickerClearIcon,
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(iconComponent/* default */.Z, {
                                                                                type: "fab",
                                                                                name: "fa-solid fa-x"
                                                                            })
                                                                        }) : ""
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                    className: (in_module_default()).coursesListFormHalfRow,
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                        className: (in_module_default()).coursesFormInput,
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(SelectInput, {
                                                                            name: "cat",
                                                                            label: "בחר קטגוריה"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                    className: (in_module_default()).coursesListFormHalfRow,
                                                                    style: {
                                                                        flex: 0.7,
                                                                        marginInlineStart: "0.5vw"
                                                                    },
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("button", {
                                                                        type: "button",
                                                                        className: (in_module_default()).coursesFormButton,
                                                                        children: "חיפוש"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: (in_module_default()).coursesList,
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                        className: (in_module_default()).courseItem,
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                            className: (in_module_default()).courseItemIn,
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: (in_module_default()).courseItemInInside,
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                        className: (in_module_default()).courseItemInInsideImg,
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(NavLink/* default */.Z, {
                                                                            href: "/products",
                                                                            className: (in_module_default()).courseItemInInsideImg_link,
                                                                            activeClassName: (in_module_default()).courseItemInInsideImg_link,
                                                                            children: [
                                                                                "לפרטים",
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("br", {}),
                                                                                "והרשמה"
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                        className: (in_module_default()).courseItemInInsideText,
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(NavLink/* default */.Z, {
                                                                            href: "/products",
                                                                            className: (in_module_default()).courseItemInInsideText_link,
                                                                            activeClassName: (in_module_default()).courseItemInInsideText_link,
                                                                            children: "הטקסט פה פהפהפה הטקסט פה פהפהפה הטקסט פה פהפהפה הטקסט פה פהפהפה הטקסט פה פהפהפה הטקסט פה פהפהפה הטקסט פה פהפהפה הטקסט פה פהפהפה הטקסט פה פהפהפה"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: (in_module_default()).courseItem,
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                className: (in_module_default()).courseItemIn2,
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: (in_module_default()).courseItemInInside2,
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                            className: (in_module_default()).courseItemInInside2Text,
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(NavLink/* default */.Z, {
                                                                                href: "/products",
                                                                                className: (in_module_default()).courseItemInInsideText_link,
                                                                                activeClassName: (in_module_default()).courseItemInInsideText_link,
                                                                                children: "הטקסט פה פהפהפה הטקסט פה פהפהפה הטקסט פה פהפהפה הטקסט פה פהפהפה הטקסט פה פהפהפה הטקסט פה פהפהפה הטקסט פה פהפהפה הטקסט פה פהפהפה הטקסט פה פהפהפה"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                            className: (in_module_default()).courseItemInInside2Img,
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(NavLink/* default */.Z, {
                                                                                href: "/products",
                                                                                className: (in_module_default()).courseItemInInsideImg_link,
                                                                                activeClassName: (in_module_default()).courseItemInInsideImg_link,
                                                                                children: [
                                                                                    "לפרטים",
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("br", {}),
                                                                                    "והרשמה"
                                                                                ]
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                className: (in_module_default()).courseItemCircle
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                        className: (in_module_default()).courseItem,
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                            className: (in_module_default()).courseItemIn,
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: (in_module_default()).courseItemInInside,
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                        className: (in_module_default()).courseItemInInsideImg,
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(NavLink/* default */.Z, {
                                                                            href: "/products",
                                                                            className: (in_module_default()).courseItemInInsideImg_link,
                                                                            activeClassName: (in_module_default()).courseItemInInsideImg_link,
                                                                            children: [
                                                                                "לפרטים",
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("br", {}),
                                                                                "והרשמה"
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                        className: (in_module_default()).courseItemInInsideText,
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(NavLink/* default */.Z, {
                                                                            href: "/products",
                                                                            className: (in_module_default()).courseItemInInsideText_link,
                                                                            activeClassName: (in_module_default()).courseItemInInsideText_link,
                                                                            children: "הטקסט פה פהפהפה הטקסט פה פהפהפה הטקסט פה פהפהפה הטקסט פה פהפהפה הטקסט פה פהפהפה הטקסט פה פהפהפה הטקסט פה פהפהפה הטקסט פה פהפהפה הטקסט פה פהפהפה"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: (in_module_default()).courseItem,
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                className: (in_module_default()).courseItemIn2,
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: (in_module_default()).courseItemInInside2,
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                            className: (in_module_default()).courseItemInInside2Text,
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(NavLink/* default */.Z, {
                                                                                href: "/products",
                                                                                className: (in_module_default()).courseItemInInsideText_link,
                                                                                activeClassName: (in_module_default()).courseItemInInsideText_link,
                                                                                children: "הטקסט פה פהפהפה הטקסט פה פהפהפה הטקסט פה פהפהפה הטקסט פה פהפהפה הטקסט פה פהפהפה הטקסט פה פהפהפה הטקסט פה פהפהפה הטקסט פה פהפהפה הטקסט פה פהפהפה"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                            className: (in_module_default()).courseItemInInside2Img,
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(NavLink/* default */.Z, {
                                                                                href: "/products",
                                                                                className: (in_module_default()).courseItemInInsideImg_link,
                                                                                activeClassName: (in_module_default()).courseItemInInsideImg_link,
                                                                                children: [
                                                                                    "לפרטים",
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("br", {}),
                                                                                    "והרשמה"
                                                                                ]
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                className: (in_module_default()).courseItemCircle
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                        className: (in_module_default()).courseItem,
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                            className: (in_module_default()).courseItemIn,
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: (in_module_default()).courseItemInInside,
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                        className: (in_module_default()).courseItemInInsideImg,
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(NavLink/* default */.Z, {
                                                                            href: "/products",
                                                                            className: (in_module_default()).courseItemInInsideImg_link,
                                                                            activeClassName: (in_module_default()).courseItemInInsideImg_link,
                                                                            children: [
                                                                                "לפרטים",
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("br", {}),
                                                                                "והרשמה"
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                        className: (in_module_default()).courseItemInInsideText,
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(NavLink/* default */.Z, {
                                                                            href: "/products",
                                                                            className: (in_module_default()).courseItemInInsideText_link,
                                                                            activeClassName: (in_module_default()).courseItemInInsideText_link,
                                                                            children: "הטקסט פה פהפהפה הטקסט פה פהפהפה הטקסט פה פהפהפה הטקסט פה פהפהפה הטקסט פה פהפהפה הטקסט פה פהפהפה הטקסט פה פהפהפה הטקסט פה פהפהפה הטקסט פה פהפהפה"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: (in_module_default()).courseItem,
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                className: (in_module_default()).courseItemIn2,
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: (in_module_default()).courseItemInInside2,
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                            className: (in_module_default()).courseItemInInside2Text,
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(NavLink/* default */.Z, {
                                                                                href: "/products",
                                                                                className: (in_module_default()).courseItemInInsideText_link,
                                                                                activeClassName: (in_module_default()).courseItemInInsideText_link,
                                                                                children: "הטקסט פה פהפהפה הטקסט פה פהפהפה הטקסט פה פהפהפה הטקסט פה פהפהפה הטקסט פה פהפהפה הטקסט פה פהפהפה הטקסט פה פהפהפה הטקסט פה פהפהפה הטקסט פה פהפהפה"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                            className: (in_module_default()).courseItemInInside2Img,
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(NavLink/* default */.Z, {
                                                                                href: "/products",
                                                                                className: (in_module_default()).courseItemInInsideImg_link,
                                                                                activeClassName: (in_module_default()).courseItemInInsideImg_link,
                                                                                children: [
                                                                                    "לפרטים",
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("br", {}),
                                                                                    "והרשמה"
                                                                                ]
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                className: (in_module_default()).courseItemCircle
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
};
// This function gets called at build time
async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch("https://qrs-global.com/react/serves/serves.php");
    const serves = await res.json();
    // Get the paths we want to pre-render based on posts
    const paths = serves.allserves.map((serve)=>({
            params: {
                id: serve.id
            }
        }));
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return {
        paths,
        fallback: false
    };
}
// This also gets called at build time
async function getStaticProps({ params  }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await fetch(`https://qrs-global.com/react/serves/index.php?id=${params.id}`);
    const serve = await res.json();
    // Pass post data to the page via props
    return {
        props: {
            serve
        }
    };
}
// Learning.title = 'Learning';
/* harmony default export */ const _id_ = (LearningIn);


/***/ }),

/***/ 5994:
/***/ (() => {



/***/ }),

/***/ 3195:
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),

/***/ 6466:
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ 7197:
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/react-fontawesome");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,676,664,486,967], () => (__webpack_exec__(5505)));
module.exports = __webpack_exports__;

})();