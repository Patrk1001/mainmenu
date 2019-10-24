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

/***/ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/about/about.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n    <h1>About Us</h1>\n    <p style=\"margin-left:10%\">This is a paragraph</p>\n</body>\n</html>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"picto\">\n  <img src=\"assets/smash.jpg\">\n  </div>\n  <h1>\n    <ul class=\"main-nav\">\n    <nav>\n     <li><a routerLink=\"/whoweare\">Home</a></li> \n     <li><a routerLink=\"/whatwedo\">Services</a></li>\n     <li><a routerLink=\"/about\">About</a></li>\n    </nav>\n    </ul>\n    <ul class=\"signin\">\n      <li><a routerLink=\"/signin\">Sign in</a></li>\n      <li><a routerLink=\"/getstarted\">GET STARTED</a></li>\n      </ul>\n  </h1>\n  <router-outlet></router-outlet>\n\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/getstarted/getstarted.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/getstarted/getstarted.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n    <h1>Get Started</h1>\n    <p style=\"margin-left:10%\">This is a paragraph</p>\n</body>\n</html>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/signin/signin.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/signin/signin.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n    <h1>Sign In</h1>\n    <p style=\"margin-left:10%\">This is a paragraph</p>\n</body>\n</html>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/what-we-do/what-we-do.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/what-we-do/what-we-do.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en_US\">\n<html>\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<head>\n</head>\n<body>\n<h1>Services</h1>\n<p style=\"margin-left:10%\">This is a paragraph</p>\n</body>\n</html>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/who-we-are/who-we-are.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/who-we-are/who-we-are.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n        \r\n</head>\r\n<body>\r\n        <img src=\"assets/smash.jpg\">\r\n</body>\r\n</html>\r\n"

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: __webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html"),
        styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
    })
], AboutComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./who-we-are/who-we-are.component */ "./src/app/who-we-are/who-we-are.component.ts");
/* harmony import */ var _what_we_do_what_we_do_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./what-we-do/what-we-do.component */ "./src/app/what-we-do/what-we-do.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");
/* harmony import */ var _getstarted_getstarted_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./getstarted/getstarted.component */ "./src/app/getstarted/getstarted.component.ts");








const routes = [
    { path: '', redirectTo: '/whoweare', pathMatch: 'full' },
    { path: 'whoweare', component: _who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__["WhoWeAreComponent"] },
    { path: 'whatwedo', component: _what_we_do_what_we_do_component__WEBPACK_IMPORTED_MODULE_4__["WhatWeDoComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"] },
    { path: 'signin', component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_6__["SigninComponent"] },
    { path: 'getstarted', component: _getstarted_getstarted_component__WEBPACK_IMPORTED_MODULE_7__["GetstartedComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* AppComponent's private CSS styles */\r\nh1 {\r\n    font-size: 1.2em;\r\n    margin-bottom: 2;\r\n  }\r\n.main-nav nav{\r\n    text-align:left;\r\n    list-style:none;\r\n    margin-left:0px;\r\n    margin-top:100px;\r\n    }\r\n.main-nav nav li{\r\n    display:inline-block;\r\n    }\r\n.main-nav nav li a{\r\n    color:white;\r\n    padding:20px;\r\n    background-color:red;\r\n    text-decoration:none;\r\n    }\r\n.main-nav nav li:hover{\r\n    text-decoration:underline;\r\n    }\r\n.picto img{\r\n      float: left;\r\n      height:100px;\r\n      width:100px;\r\n      }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0NBQXNDO0FBQ3RDO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQUNsQjtBQUVBO0lBQ0UsZUFBZTtJQUNmLGVBQWU7SUFDZixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCO0FBRUE7SUFDQSxvQkFBb0I7SUFDcEI7QUFFQTtJQUNBLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQjtBQUVBO0lBQ0EseUJBQXlCO0lBQ3pCO0FBRUE7TUFDRSxXQUFXO01BQ1gsWUFBWTtNQUNaLFdBQVc7TUFDWCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQXBwQ29tcG9uZW50J3MgcHJpdmF0ZSBDU1Mgc3R5bGVzICovXHJcbmgxIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyO1xyXG4gIH1cclxuXHJcbiAgLm1haW4tbmF2IG5hdntcclxuICAgIHRleHQtYWxpZ246bGVmdDtcclxuICAgIGxpc3Qtc3R5bGU6bm9uZTtcclxuICAgIG1hcmdpbi1sZWZ0OjBweDtcclxuICAgIG1hcmdpbi10b3A6MTAwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5tYWluLW5hdiBuYXYgbGl7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm1haW4tbmF2IG5hdiBsaSBhe1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBwYWRkaW5nOjIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJlZDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubWFpbi1uYXYgbmF2IGxpOmhvdmVye1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnBpY3RvIGltZ3tcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIGhlaWdodDoxMDBweDtcclxuICAgICAgd2lkdGg6MTAwcHg7XHJcbiAgICAgIH0iXX0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'test1';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./who-we-are/who-we-are.component */ "./src/app/who-we-are/who-we-are.component.ts");
/* harmony import */ var _what_we_do_what_we_do_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./what-we-do/what-we-do.component */ "./src/app/what-we-do/what-we-do.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");
/* harmony import */ var _getstarted_getstarted_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./getstarted/getstarted.component */ "./src/app/getstarted/getstarted.component.ts");










let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_5__["WhoWeAreComponent"],
            _what_we_do_what_we_do_component__WEBPACK_IMPORTED_MODULE_6__["WhatWeDoComponent"],
            _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
            _signin_signin_component__WEBPACK_IMPORTED_MODULE_8__["SigninComponent"],
            _getstarted_getstarted_component__WEBPACK_IMPORTED_MODULE_9__["GetstartedComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/getstarted/getstarted.component.css":
/*!*****************************************************!*\
  !*** ./src/app/getstarted/getstarted.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dldHN0YXJ0ZWQvZ2V0c3RhcnRlZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/getstarted/getstarted.component.ts":
/*!****************************************************!*\
  !*** ./src/app/getstarted/getstarted.component.ts ***!
  \****************************************************/
/*! exports provided: GetstartedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetstartedComponent", function() { return GetstartedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GetstartedComponent = class GetstartedComponent {
    constructor() { }
    ngOnInit() {
    }
};
GetstartedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-getstarted',
        template: __webpack_require__(/*! raw-loader!./getstarted.component.html */ "./node_modules/raw-loader/index.js!./src/app/getstarted/getstarted.component.html"),
        styles: [__webpack_require__(/*! ./getstarted.component.css */ "./src/app/getstarted/getstarted.component.css")]
    })
], GetstartedComponent);



/***/ }),

/***/ "./src/app/signin/signin.component.css":
/*!*********************************************!*\
  !*** ./src/app/signin/signin.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/signin/signin.component.ts":
/*!********************************************!*\
  !*** ./src/app/signin/signin.component.ts ***!
  \********************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SigninComponent = class SigninComponent {
    constructor() { }
    ngOnInit() {
    }
};
SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signin',
        template: __webpack_require__(/*! raw-loader!./signin.component.html */ "./node_modules/raw-loader/index.js!./src/app/signin/signin.component.html"),
        styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/signin/signin.component.css")]
    })
], SigninComponent);



/***/ }),

/***/ "./src/app/what-we-do/what-we-do.component.css":
/*!*****************************************************!*\
  !*** ./src/app/what-we-do/what-we-do.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-nav{\r\n    text-align:left;\r\n    list-style:none;\r\n    margin-left:200px;\r\n    margin-top:100px;\r\n    }\r\n    \r\n    .main-nav li{\r\n    display:inline-block;\r\n    }\r\n    \r\n    .main-nav li a{\r\n    color:white;\r\n    padding:20px;\r\n    background-color:red;\r\n    text-decoration:none;\r\n    }\r\n    \r\n    .main-nav li:hover{\r\n    text-decoration:underline;\r\n    }\r\n    \r\n    .signin{\r\n    text-align:right;\r\n  \r\n    }\r\n    \r\n    .signin li{\r\n    display:inline-block;\r\n    }\r\n    \r\n    .signin li a{\r\n    color:rgb(153, 14, 14);\r\n    border: 2px solid white;\r\n    padding:18px;\r\n    text-decoration:none;\r\n    }\r\n    \r\n    .signin li:hover{\r\n    text-decoration:underline;\r\n    }\r\n    \r\n    .picto img{\r\n        float: left;\r\n        margin-left:50px;\r\n        margin-top:-50px;\r\n        height:100px;\r\n        width:100px;\r\n        }\r\n    \r\n   \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2hhdC13ZS1kby93aGF0LXdlLWRvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEI7O0lBRUE7SUFDQSxvQkFBb0I7SUFDcEI7O0lBRUE7SUFDQSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEI7O0lBRUE7SUFDQSx5QkFBeUI7SUFDekI7O0lBRUE7SUFDQSxnQkFBZ0I7O0lBRWhCOztJQUVBO0lBQ0Esb0JBQW9CO0lBQ3BCOztJQUVBO0lBQ0Esc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCOztJQUVBO0lBQ0EseUJBQXlCO0lBQ3pCOztJQUVBO1FBQ0ksV0FBVztRQUNYLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsWUFBWTtRQUNaLFdBQVc7UUFDWCIsImZpbGUiOiJzcmMvYXBwL3doYXQtd2UtZG8vd2hhdC13ZS1kby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tbmF2e1xyXG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgbGlzdC1zdHlsZTpub25lO1xyXG4gICAgbWFyZ2luLWxlZnQ6MjAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOjEwMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubWFpbi1uYXYgbGl7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm1haW4tbmF2IGxpIGF7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIHBhZGRpbmc6MjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmVkO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5tYWluLW5hdiBsaTpob3ZlcntcclxuICAgIHRleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zaWduaW57XHJcbiAgICB0ZXh0LWFsaWduOnJpZ2h0O1xyXG4gIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc2lnbmluIGxpe1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zaWduaW4gbGkgYXtcclxuICAgIGNvbG9yOnJnYigxNTMsIDE0LCAxNCk7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgIHBhZGRpbmc6MThweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc2lnbmluIGxpOmhvdmVye1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnBpY3RvIGltZ3tcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBtYXJnaW4tbGVmdDo1MHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6LTUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OjEwMHB4O1xyXG4gICAgICAgIHdpZHRoOjEwMHB4O1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAiXX0= */"

/***/ }),

/***/ "./src/app/what-we-do/what-we-do.component.ts":
/*!****************************************************!*\
  !*** ./src/app/what-we-do/what-we-do.component.ts ***!
  \****************************************************/
/*! exports provided: WhatWeDoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhatWeDoComponent", function() { return WhatWeDoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WhatWeDoComponent = class WhatWeDoComponent {
    constructor() { }
    ngOnInit() {
    }
};
WhatWeDoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-what-we-do',
        template: __webpack_require__(/*! raw-loader!./what-we-do.component.html */ "./node_modules/raw-loader/index.js!./src/app/what-we-do/what-we-do.component.html"),
        styles: [__webpack_require__(/*! ./what-we-do.component.css */ "./src/app/what-we-do/what-we-do.component.css")]
    })
], WhatWeDoComponent);



/***/ }),

/***/ "./src/app/who-we-are/who-we-are.component.css":
/*!*****************************************************!*\
  !*** ./src/app/who-we-are/who-we-are.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3doby13ZS1hcmUvd2hvLXdlLWFyZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/who-we-are/who-we-are.component.ts":
/*!****************************************************!*\
  !*** ./src/app/who-we-are/who-we-are.component.ts ***!
  \****************************************************/
/*! exports provided: WhoWeAreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhoWeAreComponent", function() { return WhoWeAreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WhoWeAreComponent = class WhoWeAreComponent {
    constructor() {
        this.hero = 'Windfall';
    }
    ngOnInit() {
    }
};
WhoWeAreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-who-we-are',
        template: __webpack_require__(/*! raw-loader!./who-we-are.component.html */ "./node_modules/raw-loader/index.js!./src/app/who-we-are/who-we-are.component.html"),
        styles: [__webpack_require__(/*! ./who-we-are.component.css */ "./src/app/who-we-are/who-we-are.component.css")]
    })
], WhoWeAreComponent);



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
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Program Files\nodejs\test1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map