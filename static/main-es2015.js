(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _rss_rss_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rss/rss.component */ "./src/app/rss/rss.component.ts");
/* harmony import */ var _noticia_noticia_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./noticia/noticia.component */ "./src/app/noticia/noticia.component.ts");






const routes = [
    { path: 'front-rss', component: _rss_rss_component__WEBPACK_IMPORTED_MODULE_2__["RssComponent"] },
    { path: 'front-noticia', component: _noticia_noticia_component__WEBPACK_IMPORTED_MODULE_3__["NoticiaComponent"] },
    { path: '', redirectTo: '/front-rss', pathMatch: 'full' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'SigDesastre';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 12, vars: 0, consts: [[1, "nav-wrapper"], ["href", "#", 1, "brand-logo"], ["id", "nav-mobile", 1, "right", "hide-on-med-and-down"], ["routerLink", "/front-rss", "routerLinkActive", "active"], ["routerLink", "/front-noticia", "routerLinkActive", "active"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "SigDesastre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Rss");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Noticia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _noticia_noticia_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./noticia/noticia.component */ "./src/app/noticia/noticia.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/dataview */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dataview.js");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/panel */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-panel.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-toast.js");
/* harmony import */ var _rss_rss_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./rss/rss.module */ "./src/app/rss/rss.module.ts");
/* harmony import */ var _noticia_noticia_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./noticia/noticia.module */ "./src/app/noticia/noticia.module.ts");
/* harmony import */ var _rss_rss_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./rss/rss.component */ "./src/app/rss/rss.component.ts");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dialog.js");
















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            primeng_dialog__WEBPACK_IMPORTED_MODULE_14__["DialogModule"],
            _noticia_noticia_module__WEBPACK_IMPORTED_MODULE_12__["NoticiaModule"],
            _rss_rss_module__WEBPACK_IMPORTED_MODULE_11__["RssModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_10__["ToastModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            primeng_panel__WEBPACK_IMPORTED_MODULE_8__["PanelModule"],
            primeng_dataview__WEBPACK_IMPORTED_MODULE_7__["DataViewModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        ],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _noticia_noticia_component__WEBPACK_IMPORTED_MODULE_5__["NoticiaComponent"], _rss_rss_component__WEBPACK_IMPORTED_MODULE_13__["RssComponent"]], imports: [primeng_dialog__WEBPACK_IMPORTED_MODULE_14__["DialogModule"],
        _noticia_noticia_module__WEBPACK_IMPORTED_MODULE_12__["NoticiaModule"],
        _rss_rss_module__WEBPACK_IMPORTED_MODULE_11__["RssModule"],
        primeng_toast__WEBPACK_IMPORTED_MODULE_10__["ToastModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
        primeng_panel__WEBPACK_IMPORTED_MODULE_8__["PanelModule"],
        primeng_dataview__WEBPACK_IMPORTED_MODULE_7__["DataViewModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]], exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _noticia_noticia_component__WEBPACK_IMPORTED_MODULE_5__["NoticiaComponent"], _rss_rss_component__WEBPACK_IMPORTED_MODULE_13__["RssComponent"]],
                imports: [
                    primeng_dialog__WEBPACK_IMPORTED_MODULE_14__["DialogModule"],
                    _noticia_noticia_module__WEBPACK_IMPORTED_MODULE_12__["NoticiaModule"],
                    _rss_rss_module__WEBPACK_IMPORTED_MODULE_11__["RssModule"],
                    primeng_toast__WEBPACK_IMPORTED_MODULE_10__["ToastModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                    primeng_panel__WEBPACK_IMPORTED_MODULE_8__["PanelModule"],
                    primeng_dataview__WEBPACK_IMPORTED_MODULE_7__["DataViewModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
                exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/noticia/form-noticia/form-noticia.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/noticia/form-noticia/form-noticia.component.ts ***!
  \****************************************************************/
/*! exports provided: FormNoticiaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormNoticiaComponent", function() { return FormNoticiaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FormNoticiaComponent {
    constructor() { }
    ngOnInit() {
    }
}
FormNoticiaComponent.ɵfac = function FormNoticiaComponent_Factory(t) { return new (t || FormNoticiaComponent)(); };
FormNoticiaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormNoticiaComponent, selectors: [["app-form-noticia"]], decls: 2, vars: 0, template: function FormNoticiaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ainda N\u00E3o funciona");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGljaWEvZm9ybS1ub3RpY2lhL2Zvcm0tbm90aWNpYS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormNoticiaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-form-noticia',
                templateUrl: './form-noticia.component.html',
                styleUrls: ['./form-noticia.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/noticia/noticia.component.ts":
/*!**********************************************!*\
  !*** ./src/app/noticia/noticia.component.ts ***!
  \**********************************************/
/*! exports provided: NoticiaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticiaComponent", function() { return NoticiaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_noticia_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/noticia.service */ "./src/app/noticia/services/noticia.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-toast.js");
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/dataview */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dataview.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dialog.js");
/* harmony import */ var _form_noticia_form_noticia_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./form-noticia/form-noticia.component */ "./src/app/noticia/form-noticia/form-noticia.component.ts");











function NoticiaComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NoticiaComponent_ng_template_11_div_11_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const descritor_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](descritor_r7);
} }
function NoticiaComponent_ng_template_11_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NoticiaComponent_ng_template_11_div_11_span_1_Template, 2, 1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const noticia_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", noticia_r2.descValid);
} }
function NoticiaComponent_ng_template_11_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NoticiaComponent_ng_template_11_div_12_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const noticia_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.excluir(noticia_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "excluir");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NoticiaComponent_ng_template_11_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NoticiaComponent_ng_template_11_div_13_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const noticia_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.desfazer(noticia_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "desfazer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NoticiaComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " FONTE: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " LINK: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NoticiaComponent_ng_template_11_div_11_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NoticiaComponent_ng_template_11_div_12_Template, 3, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NoticiaComponent_ng_template_11_div_13_Template, 3, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const noticia_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("className", ctx_r1.confereNoticia(noticia_r2) ? "valido" : "invalido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ID: ", noticia_r2.id, " - TITULO: ", noticia_r2.titulo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", noticia_r2.fonte.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](noticia_r2.fonte.nome);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", noticia_r2.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](noticia_r2.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", noticia_r2.descValid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !noticia_r2.excluida);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", noticia_r2.excluida);
} }
class NoticiaComponent {
    constructor(service, messageService) {
        this.service = service;
        this.messageService = messageService;
        this.pagina = 1;
        this.rows = 20;
        this.displayModal = false;
        this.descritores = [
            'mariana',
            'barragem',
            'vale',
            'fundão',
            'desastre',
            'tragédia',
            'samarco',
            'rio doce',
        ];
    }
    showDialog() {
        this.displayModal = true;
    }
    ngOnInit() { }
    loadData(event) {
        this.pagina = event.first == 0 ? 1 : 1 + event.first / this.rows;
        this.service.getNoticias(this.pagina, this.rows).subscribe((n) => {
            this.noticias = n.noticias.map((no) => {
                no.excluida = false;
                return no;
            });
            this.totalRecords = n.totalNoticias;
        });
    }
    reload() {
        console.log('reloaded');
        this.displayModal = false;
        this.service.getNoticias(this.pagina, this.rows).subscribe((n) => {
            this.noticias = n.noticias.map((no) => {
                no.excluida = false;
                return no;
            });
            this.totalRecords = n.totalNoticias;
        });
    }
    confereNoticia(noticia) {
        if (noticia.conferida == undefined) {
            noticia.conferida = true;
            this.descritores.forEach((descritor) => {
                let titulo = `${noticia.titulo.toLowerCase()} ${noticia.conteudo ? noticia.conteudo.toLowerCase() : ''}`;
                if (titulo.indexOf(descritor) >= 0) {
                    noticia.descValid == undefined
                        ? (noticia.descValid = new Array([descritor]))
                        : noticia.descValid.push(descritor);
                }
            });
            return noticia.descValid == undefined ? false : true;
        }
        return noticia.descValid == undefined ? false : true;
    }
    excluir(noticia) {
        let acao = 'Excluir';
        this.service.deleteNoticias(noticia).subscribe((next) => {
            console.log(next);
            noticia.excluida = !noticia.excluida;
            this.callMensageSuccess(acao);
        }, (error) => {
            console.log(error);
            this.callMensageErro(acao);
        });
    }
    desfazer(noticia) {
        let acao = 'Recadastro';
        this.service.postNoticias(noticia).subscribe((next) => {
            console.log(next);
            this.callMensageSuccess(acao);
            noticia.excluida = !noticia.excluida;
        }, (error) => {
            console.log(error);
            this.callMensageErro(acao);
        });
    }
    callMensageErro(action) {
        this.messageService.add({
            severity: 'error',
            summary: 'Erro!',
            detail: `${action} Falhou!`,
        });
    }
    callMensageSuccess(action) {
        this.messageService.add({
            severity: 'success',
            summary: 'Sucesso!',
            detail: `${action} com sucesso!`,
        });
    }
}
NoticiaComponent.ɵfac = function NoticiaComponent_Factory(t) { return new (t || NoticiaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_noticia_service__WEBPACK_IMPORTED_MODULE_1__["NoticiaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"])); };
NoticiaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NoticiaComponent, selectors: [["app-noticia"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"], _services_noticia_service__WEBPACK_IMPORTED_MODULE_1__["NoticiaService"]])], decls: 19, vars: 7, consts: [[1, "fixed-action-btn"], [1, "btn-floating", "btn-large", "red", "modal-trigger", 3, "click"], [1, "large", "material-icons"], ["class", "progress", 4, "ngIf"], ["layout", "grid", 3, "value", "paginator", "rows", "lazy", "totalRecords", "onLazyLoad"], ["pTemplate", "gridItem"], [3, "visible", "visibleChange"], [1, "modal-close", "waves-effect", "waves-green", "btn-flat", 3, "click"], [1, "progress"], [1, "indeterminate"], [1, "base", "ui-g-12", "ui-md-3"], [3, "className"], [3, "href"], [1, "link"], ["class", "mybadge", 4, "ngIf"], ["class", "botao", 3, "click", 4, "ngIf"], [1, "mybadge"], ["class", "new badge", "data-badge-caption", "", 4, "ngFor", "ngForOf"], ["data-badge-caption", "", 1, "new", "badge"], [1, "botao", 3, "click"], [1, "waves-effect", "waves-light", "btn", "red"], [1, "waves-effect", "waves-light", "btn", "green"]], template: function NoticiaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Noticias:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NoticiaComponent_Template_a_click_4_listener() { return ctx.showDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NoticiaComponent_div_8_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p-dataView", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onLazyLoad", function NoticiaComponent_Template_p_dataView_onLazyLoad_10_listener($event) { return ctx.loadData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NoticiaComponent_ng_template_11_Template, 14, 10, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p-dialog", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function NoticiaComponent_Template_p_dialog_visibleChange_12_listener($event) { return ctx.displayModal = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Criar nova Noticia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-form-noticia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NoticiaComponent_Template_a_click_17_listener() { return ctx.reload(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.noticias);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.noticias)("paginator", true)("rows", 20)("lazy", true)("totalRecords", ctx.totalRecords);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.displayModal);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], primeng_toast__WEBPACK_IMPORTED_MODULE_4__["Toast"], primeng_dataview__WEBPACK_IMPORTED_MODULE_5__["DataView"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["PrimeTemplate"], primeng_dialog__WEBPACK_IMPORTED_MODULE_6__["Dialog"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["Header"], _form_noticia_form_noticia_component__WEBPACK_IMPORTED_MODULE_7__["FormNoticiaComponent"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["Footer"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".conteudo[_ngcontent-%COMP%] {\n  display: flex;\n  justify-self: flex-start;\n  margin: 1 auto;\n}\n.valido[_ngcontent-%COMP%] {\n  color: darkgreen;\n}\n.invalido[_ngcontent-%COMP%] {\n  color: crimson;\n}\n.mybadge[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.base[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #ccc;\n}\n.link[_ngcontent-%COMP%] {\n  display: flex;\n  word-wrap: break-word;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90aWNpYS9ub3RpY2lhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL25vdGljaWEvbm90aWNpYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRldWRvIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xuICBtYXJnaW46IDEgYXV0bztcbn1cbi52YWxpZG8ge1xuICBjb2xvcjogZGFya2dyZWVuO1xufVxuLmludmFsaWRvIHtcbiAgY29sb3I6IGNyaW1zb247XG59XG5cbi5teWJhZGdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5iYXNlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xufVxuLmxpbmsge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoticiaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-noticia',
                templateUrl: './noticia.component.html',
                styleUrls: ['./noticia.component.css'],
                providers: [primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"], _services_noticia_service__WEBPACK_IMPORTED_MODULE_1__["NoticiaService"]],
            }]
    }], function () { return [{ type: _services_noticia_service__WEBPACK_IMPORTED_MODULE_1__["NoticiaService"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/noticia/noticia.module.ts":
/*!*******************************************!*\
  !*** ./src/app/noticia/noticia.module.ts ***!
  \*******************************************/
/*! exports provided: NoticiaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticiaModule", function() { return NoticiaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _noticia_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./noticia.component */ "./src/app/noticia/noticia.component.ts");
/* harmony import */ var _form_noticia_form_noticia_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-noticia/form-noticia.component */ "./src/app/noticia/form-noticia/form-noticia.component.ts");





class NoticiaModule {
}
NoticiaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NoticiaModule });
NoticiaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NoticiaModule_Factory(t) { return new (t || NoticiaModule)(); }, providers: [_noticia_component__WEBPACK_IMPORTED_MODULE_2__["NoticiaComponent"]], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NoticiaModule, { declarations: [_form_noticia_form_noticia_component__WEBPACK_IMPORTED_MODULE_3__["FormNoticiaComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_form_noticia_form_noticia_component__WEBPACK_IMPORTED_MODULE_3__["FormNoticiaComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoticiaModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_form_noticia_form_noticia_component__WEBPACK_IMPORTED_MODULE_3__["FormNoticiaComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                providers: [_noticia_component__WEBPACK_IMPORTED_MODULE_2__["NoticiaComponent"]],
                exports: [_form_noticia_form_noticia_component__WEBPACK_IMPORTED_MODULE_3__["FormNoticiaComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/noticia/services/noticia.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/noticia/services/noticia.service.ts ***!
  \*****************************************************/
/*! exports provided: NoticiaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticiaService", function() { return NoticiaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class NoticiaService {
    constructor(http) {
        this.http = http;
        this.url = 'https://sigdesastre.herokuapp.com/noticias'; //'http://localhost:3000/noticias'; //
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }),
        };
    }
    /**
     *
     * @param pagina id da noticia
     */
    getNoticias(pagina, quantidade) {
        return this.http.get(`${this.url}?pagina=${pagina}&qtdNoticias=${quantidade}`);
    }
    deleteNoticias(noticia) {
        return this.http.delete(`${this.url}/id/${noticia.id}`);
    }
    postNoticias(noticia) {
        return this.http.post(`${this.url}`, noticia, this.httpOptions);
    }
}
NoticiaService.ɵfac = function NoticiaService_Factory(t) { return new (t || NoticiaService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
NoticiaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NoticiaService, factory: NoticiaService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoticiaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/rss/models/rss.model.ts":
/*!*****************************************!*\
  !*** ./src/app/rss/models/rss.model.ts ***!
  \*****************************************/
/*! exports provided: Rss */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rss", function() { return Rss; });
class Rss {
    constructor(nome, url) {
        this.nome = nome || '';
        this.url = url || '';
    }
}


/***/ }),

/***/ "./src/app/rss/rss-from/rss-from.component.ts":
/*!****************************************************!*\
  !*** ./src/app/rss/rss-from/rss-from.component.ts ***!
  \****************************************************/
/*! exports provided: RssFromComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RssFromComponent", function() { return RssFromComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_rss_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/rss.model */ "./src/app/rss/models/rss.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _service_rss_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/rss.service */ "./src/app/rss/service/rss.service.ts");





class RssFromComponent {
    constructor(formBuilder, rssService) {
        this.formBuilder = formBuilder;
        this.rssService = rssService;
        this.rss = new _models_rss_model__WEBPACK_IMPORTED_MODULE_1__["Rss"]();
        this.formRss = this.formBuilder.group(this.rss);
    }
    // formValidator = new FormGroup({
    //   nome: new FormControl(this.rss.nome, [
    //     Validators.required,
    //     Validators.minLength(4),
    //   ]),
    //   url: new FormControl(this.rss.url, [
    //     Validators.required,
    //     Validators.minLength(4),
    //   ]),
    // });
    onSubmit() {
        if (!this.validador()) {
            console.log('enviado: ', this.formRss.value);
            this.rssService.postRss(this.formRss.value).subscribe((n) => {
                console.log('resposta: ', n);
                this.formRss.reset(new _models_rss_model__WEBPACK_IMPORTED_MODULE_1__["Rss"]());
            }, (e) => {
                console.log('Erro', e);
            });
        }
    }
    validador() {
        return !(this.formRss.value.nome.length >= 3 && this.formRss.value.url.length >= 4);
    }
}
RssFromComponent.ɵfac = function RssFromComponent_Factory(t) { return new (t || RssFromComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_rss_service__WEBPACK_IMPORTED_MODULE_3__["RssService"])); };
RssFromComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RssFromComponent, selectors: [["app-rss-from"]], decls: 15, vars: 3, consts: [[3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "nome"], ["required", "", "minlength", "3", "type", "text", "NgModule", "", "name", "name", "formControlName", "nome", 1, "form-control", "validate"], ["data-error", "Errado", "data-success", "Correto", 1, "helper-text"], ["for", "url"], ["required", "", "minlength", "4", "type", "text", "NgModule", "", "name", "url", "formControlName", "url", 1, "form-control", "validate"], ["type", "submit", "value", "Salvar", 1, "btn", "btn-primary", "mt-4"]], template: function RssFromComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RssFromComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Nome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "minimo 3 letras");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Url");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "minimo 4 letras");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formRss);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.validador());
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]], styles: [".conteudo[_ngcontent-%COMP%] {\n  display: flex;\n  justify-self: flex-start;\n  margin: 1 auto;\n}\n.sumir[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcnNzL3Jzcy1mcm9tL3Jzcy1mcm9tLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3Jzcy9yc3MtZnJvbS9yc3MtZnJvbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRldWRvIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xuICBtYXJnaW46IDEgYXV0bztcbn1cbi5zdW1pciB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RssFromComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-rss-from',
                templateUrl: './rss-from.component.html',
                styleUrls: ['./rss-from.component.css'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _service_rss_service__WEBPACK_IMPORTED_MODULE_3__["RssService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/rss/rss.component.ts":
/*!**************************************!*\
  !*** ./src/app/rss/rss.component.ts ***!
  \**************************************/
/*! exports provided: RssComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RssComponent", function() { return RssComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_rss_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/rss.service */ "./src/app/rss/service/rss.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-toast.js");
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/dataview */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dataview.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dialog.js");
/* harmony import */ var _rss_from_rss_from_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rss-from/rss-from.component */ "./src/app/rss/rss-from/rss-from.component.ts");











function RssComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RssComponent_ng_template_11_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RssComponent_ng_template_11_div_7_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const rss_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.excluir(rss_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "excluir");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RssComponent_ng_template_11_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RssComponent_ng_template_11_div_8_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const rss_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.desfazer(rss_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "desfazer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RssComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Link: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RssComponent_ng_template_11_div_7_Template, 3, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RssComponent_ng_template_11_div_8_Template, 3, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rss_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("ID: ", rss_r2.id, " - TITULO: ", rss_r2.nome, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", rss_r2.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rss_r2.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !rss_r2.excluido);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", rss_r2.excluido);
} }
class RssComponent {
    constructor(messageService, rssService) {
        this.messageService = messageService;
        this.rssService = rssService;
        this.displayModal = false;
    }
    ngOnInit() { }
    showDialog() {
        this.displayModal = true;
    }
    loadData() {
        this.rssService.getRss().subscribe((n) => {
            console.log(n);
            this.rss = n.map((r) => {
                r.excluido = false;
                return r;
            });
            this.totalRecords = n.length;
        });
    }
    desfazer(rss) {
        let acao = 'Recadastro';
        this.rssService.postRss(rss).subscribe((next) => {
            console.log(next);
            this.callMensageSuccess(acao);
            rss.excluido = !rss.excluido;
        }, (error) => {
            this.callMensageErro(acao);
            console.log(error);
        });
    }
    excluir(rss) {
        let acao = 'Excluir';
        this.rssService.deleteRss(rss).subscribe((next) => {
            this.callMensageSuccess(acao);
            console.log(next);
            rss.excluido = !rss.excluido;
        }, (error) => {
            this.callMensageErro(acao);
            console.log(error);
        });
    }
    callMensageErro(action) {
        this.messageService.add({
            severity: 'error',
            summary: 'Erro!',
            detail: `${action} Falhou!`,
        });
    }
    callMensageSuccess(action) {
        this.messageService.add({
            severity: 'success',
            summary: 'Sucesso!',
            detail: `${action} com sucesso!`,
        });
    }
    reload() {
        this.displayModal = false;
        this.loadData();
    }
}
RssComponent.ɵfac = function RssComponent_Factory(t) { return new (t || RssComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_rss_service__WEBPACK_IMPORTED_MODULE_1__["RssService"])); };
RssComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RssComponent, selectors: [["app-rss"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"], _service_rss_service__WEBPACK_IMPORTED_MODULE_1__["RssService"]])], decls: 19, vars: 7, consts: [[1, "fixed-action-btn"], [1, "btn-floating", "btn-large", "red", 3, "click"], [1, "large", "material-icons"], ["class", "progress", 4, "ngIf"], ["layout", "grid", 3, "value", "paginator", "rows", "lazy", "totalRecords", "onLazyLoad"], ["pTemplate", "gridItem"], [3, "visible", "visibleChange"], [1, "modal-close", "waves-effect", "waves-green", "btn-flat", 3, "click"], [1, "progress"], [1, "indeterminate"], [1, "base", "ui-g-12", "ui-md-3"], [3, "href"], ["class", "botao", 3, "click", 4, "ngIf"], [1, "botao", 3, "click"], [1, "waves-effect", "waves-light", "btn-small", "red"], [1, "waves-effect", "waves-light", "btn-small", "green"]], template: function RssComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "RSS:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RssComponent_Template_a_click_4_listener() { return ctx.showDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RssComponent_div_8_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p-dataView", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onLazyLoad", function RssComponent_Template_p_dataView_onLazyLoad_10_listener() { return ctx.loadData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RssComponent_ng_template_11_Template, 9, 6, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p-dialog", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function RssComponent_Template_p_dialog_visibleChange_12_listener($event) { return ctx.displayModal = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Criar um novo RSS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-rss-from");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RssComponent_Template_a_click_17_listener() { return ctx.reload(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.rss);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.rss)("paginator", true)("rows", 20)("lazy", true)("totalRecords", ctx.totalRecords);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.displayModal);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], primeng_toast__WEBPACK_IMPORTED_MODULE_4__["Toast"], primeng_dataview__WEBPACK_IMPORTED_MODULE_5__["DataView"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["PrimeTemplate"], primeng_dialog__WEBPACK_IMPORTED_MODULE_6__["Dialog"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["Header"], _rss_from_rss_from_component__WEBPACK_IMPORTED_MODULE_7__["RssFromComponent"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["Footer"]], styles: [".base[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #ccc;\n}\n.conteudo[_ngcontent-%COMP%] {\n  display: flex;\n  justify-self: flex-start;\n  margin: 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcnNzL3Jzcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHdCQUF3QjtFQUN4QixjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvcnNzL3Jzcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhc2Uge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG59XG4uY29udGV1ZG8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbjogMSBhdXRvO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RssComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-rss',
                templateUrl: './rss.component.html',
                styleUrls: ['./rss.component.css'],
                providers: [primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"], _service_rss_service__WEBPACK_IMPORTED_MODULE_1__["RssService"]],
            }]
    }], function () { return [{ type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }, { type: _service_rss_service__WEBPACK_IMPORTED_MODULE_1__["RssService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/rss/rss.module.ts":
/*!***********************************!*\
  !*** ./src/app/rss/rss.module.ts ***!
  \***********************************/
/*! exports provided: RssModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RssModule", function() { return RssModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _rss_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rss.component */ "./src/app/rss/rss.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _rss_from_rss_from_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rss-from/rss-from.component */ "./src/app/rss/rss-from/rss-from.component.ts");






class RssModule {
}
RssModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RssModule });
RssModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RssModule_Factory(t) { return new (t || RssModule)(); }, providers: [_rss_component__WEBPACK_IMPORTED_MODULE_2__["RssComponent"]], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RssModule, { declarations: [_rss_from_rss_from_component__WEBPACK_IMPORTED_MODULE_4__["RssFromComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]], exports: [_rss_from_rss_from_component__WEBPACK_IMPORTED_MODULE_4__["RssFromComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RssModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_rss_from_rss_from_component__WEBPACK_IMPORTED_MODULE_4__["RssFromComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
                providers: [_rss_component__WEBPACK_IMPORTED_MODULE_2__["RssComponent"]],
                exports: [_rss_from_rss_from_component__WEBPACK_IMPORTED_MODULE_4__["RssFromComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/rss/service/rss.service.ts":
/*!********************************************!*\
  !*** ./src/app/rss/service/rss.service.ts ***!
  \********************************************/
/*! exports provided: RssService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RssService", function() { return RssService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");




class RssService {
    constructor(http) {
        this.http = http;
        this.url = 'https://sigdesastre.herokuapp.com/rss'; //'http://localhost:3000/rss'; //
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' }),
        };
    }
    getRss() {
        return this.http.get(`${this.url}`);
    }
    postRss(rss) {
        return this.http.post(`${this.url}`, rss, this.httpOptions);
    }
    deleteRss(rss) {
        return this.http.delete(`${this.url}/id/${rss.id}`);
    }
}
RssService.ɵfac = function RssService_Factory(t) { return new (t || RssService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
RssService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RssService, factory: RssService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RssService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/icaro/projetos/sdmanager/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map