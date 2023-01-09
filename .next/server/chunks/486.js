"use strict";
exports.id = 486;
exports.ids = [486];
exports.modules = {

/***/ 4486:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OL": () => (/* binding */ showSiteAddress),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "d$": () => (/* binding */ showSiteTelePhone),
/* harmony export */   "l4": () => (/* binding */ showSiteMail),
/* harmony export */   "o7": () => (/* binding */ showSitePhone2),
/* harmony export */   "q_": () => (/* binding */ showSitePhone),
/* harmony export */   "wI": () => (/* binding */ showSiteName)
/* harmony export */ });
/* unused harmony exports generalSlice, getSiteName */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

// create a slice
const generalSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "siteData",
    initialState: {
        sitename: "Qrs Medical",
        sitemail: "info@qrs-global.com",
        sitetelephone: "04-6860006",
        sitephone: "054-2021912",
        sitephone2: "054-3023043",
        siteaddress: "רחוב תובל, פארק תעשייה קורן, מעלות"
    },
    reducers: {
        getSiteName: (state, action)=>{
            state.sitename = action.payload;
        }
    }
});
const { getSiteName  } = generalSlice.actions;
const showSiteName = (state)=>state.generaldata.sitename;
const showSiteMail = (state)=>state.generaldata.sitemail;
const showSiteTelePhone = (state)=>state.generaldata.sitetelephone;
const showSitePhone = (state)=>state.generaldata.sitephone;
const showSitePhone2 = (state)=>state.generaldata.sitephone2;
const showSiteAddress = (state)=>state.generaldata.siteaddress;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generalSlice.reducer);


/***/ })

};
;