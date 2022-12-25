"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_auth_register_register_module_ts"],{

/***/ 8024:
/*!**********************************************************!*\
  !*** ./src/app/auth/register/register-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageRoutingModule": () => (/* binding */ RegisterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page */ 4169);




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ 1932:
/*!**************************************************!*\
  !*** ./src/app/auth/register/register.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageModule": () => (/* binding */ RegisterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-routing.module */ 8024);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page */ 4169);








let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPage]
    })
], RegisterPageModule);



/***/ }),

/***/ 4169:
/*!************************************************!*\
  !*** ./src/app/auth/register/register.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _Users_yashsolanki_Documents_comet_mobile_app_comet_ui_node_modules_ngtools_webpack_src_loaders_direct_resource_js_register_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./register.page.html */ 6519);
/* harmony import */ var _register_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.scss */ 54);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/auth.service */ 7686);







let RegisterPage = class RegisterPage {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    ngOnInit() {
        this.fg = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(8),
            ]),
        });
    }
    ionViewWillEnter() { }
    onSubmit(data) {
        this.authService.register(data).subscribe(() => {
            this.router.navigate(['/home']);
        });
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-register',
        template: _Users_yashsolanki_Documents_comet_mobile_app_comet_ui_node_modules_ngtools_webpack_src_loaders_direct_resource_js_register_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegisterPage);



/***/ }),

/***/ 6519:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/auth/register/register.page.html ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"h-max register\">\n    <img class=\"register__logo\" src=\"../../../assets/images/comet-logo.png\" alt=\"comet-logo\">\n    <form [formGroup]=\"fg\" (ngSubmit)=\"onSubmit(fg.value)\" class=\"w-max register__form\">\n      <ion-grid>\n        <ion-row class=\"register__form__input-container\">\n          <ion-col size=\"12px\">\n            <ion-icon class=\"register__form__icon\" name=\"person-outline\"></ion-icon>\n          </ion-col>\n          <ion-col>\n            <ion-input class=\"register__form__input\" placeholder=\"First Name\" formControlName=\"firstName\"></ion-input>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-grid>\n        <ion-row class=\"register__form__input-container\">\n          <ion-col size=\"12px\">\n            <ion-icon class=\"register__form__icon\" name=\"person-outline\"></ion-icon>\n          </ion-col>\n          <ion-col>\n            <ion-input class=\"register__form__input\" placeholder=\"Last Name\" formControlName=\"lastName\"></ion-input>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-grid>\n        <ion-row class=\"register__form__input-container\">\n          <ion-col size=\"12px\">\n            <ion-icon class=\"register__form__icon\" name=\"mail-outline\"></ion-icon>\n          </ion-col>\n          <ion-col>\n            <ion-input class=\"register__form__input\" inputmode=\"email\" type=\"email\" placeholder=\"Email\" formControlName=\"email\"></ion-input>\n          </ion-col>\n        </ion-row>\n        <div *ngIf=\"fg.controls.email.touched && !fg.controls.email.valid\">Please enter a valid email</div>\n      </ion-grid>\n      <ion-grid>\n        <ion-row class=\"register__form__input-container\">\n          <ion-col size=\"12px\">\n            <ion-icon class=\"register__form__icon\" name=\"lock-closed-outline\"></ion-icon>\n          </ion-col>\n          <ion-col>\n            <ion-input class=\"register__form__input\" type=\"password\" placeholder=\"Password\" formControlName=\"password\" required></ion-input>\n          </ion-col>\n        </ion-row>\n        <div *ngIf=\"fg.controls.password.touched && !fg.controls.password.valid\">Password is too short</div>\n      </ion-grid>\n      <ion-button class=\"register__form__cta\" color=\"dark\" expand=\"block\" size=\"large\" type=\"submit\" [disabled]=\"!fg.valid\"> REGISTER </ion-button>\n    </form>\n    <ion-text class=\"register__bottom-text\"> Already have an account? <a class=\"register__bottom-text--link\" [routerLink]=\"['/login']\">Log in here</a></ion-text>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 54:
/*!**************************************************!*\
  !*** ./src/app/auth/register/register.page.scss ***!
  \**************************************************/
/***/ ((module) => {

module.exports = ".register {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.register__logo {\n  width: 70%;\n  margin-top: 20%;\n}\n.register__form {\n  margin-top: 36px;\n}\n.register__form__input-container {\n  border-bottom: 1px solid #46CDCF;\n  margin-top: 18px;\n}\n.register__form__icon {\n  font-size: 24px;\n  margin-top: 8px;\n  opacity: 0.5;\n}\n.register__form__input {\n  --padding-bottom: 16px;\n}\n.register__form__cta {\n  margin-top: 24px;\n  font-size: 18px;\n}\n.register__bottom-text {\n  position: absolute;\n  bottom: 36px;\n}\n.register__bottom-text--link {\n  color: #46CDCF;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBREY7QUFHRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FBREo7QUFJRTtFQUNFLGdCQUFBO0FBRko7QUFJSTtFQUNFLGdDQUFBO0VBQ0EsZ0JBQUE7QUFGTjtBQUtJO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBSE47QUFNSTtFQUNFLHNCQUFBO0FBSk47QUFPSTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQUxOO0FBU0U7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUFQSjtBQVNJO0VBQ0UsY0F6Q087RUEwQ1AscUJBQUE7QUFQTiIsImZpbGUiOiJyZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbG9nby1jb2xvcjogIzQ2Q0RDRjtcblxuLnJlZ2lzdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAmX19sb2dvIHtcbiAgICB3aWR0aDogNzAlO1xuICAgIG1hcmdpbi10b3A6IDIwJTtcbiAgfVxuXG4gICZfX2Zvcm0ge1xuICAgIG1hcmdpbi10b3A6IDM2cHg7XG5cbiAgICAmX19pbnB1dC1jb250YWluZXIge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRsb2dvLWNvbG9yO1xuICAgICAgbWFyZ2luLXRvcDogMThweDtcbiAgICB9XG5cbiAgICAmX19pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICB9XG5cbiAgICAmX19pbnB1dCB7XG4gICAgICAtLXBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgIH1cblxuICAgICZfX2N0YSB7XG4gICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cbiAgfVxuXG4gICZfX2JvdHRvbS10ZXh0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAzNnB4O1xuXG4gICAgJi0tbGluayB7XG4gICAgICBjb2xvcjogJGxvZ28tY29sb3I7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxuICB9XG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_auth_register_register_module_ts.js.map