"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_note_note_module_ts"],{

/***/ 9781:
/*!***************************************************************!*\
  !*** ./src/app/pages/note/date-input/date-input.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateInputComponent": () => (/* binding */ DateInputComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _Users_yashsolanki_Documents_comet_mobile_app_comet_ui_node_modules_ngtools_webpack_src_loaders_direct_resource_js_date_input_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./date-input.component.html */ 3785);
/* harmony import */ var _date_input_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date-input.component.scss */ 1735);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8267);
var DateInputComponent_1;







let DateInputComponent = DateInputComponent_1 = class DateInputComponent {
    constructor(popoverController, datePipe) {
        this.popoverController = popoverController;
        this.datePipe = datePipe;
        this.onChange = (value) => { };
    }
    ngOnInit() {
        this.maxDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    }
    writeValue(val) {
        this.value = val;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
    }
    setDisabledState(isDisabled) {
    }
    dateSelected(event) {
        this.value = event.target.value;
        this.onChange(this.value);
        this.popoverController.dismiss();
    }
};
DateInputComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.PopoverController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe }
];
DateInputComponent.propDecorators = {
    class: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    isEditMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
DateInputComponent = DateInputComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-date-input',
        template: _Users_yashsolanki_Documents_comet_mobile_app_comet_ui_node_modules_ngtools_webpack_src_loaders_direct_resource_js_date_input_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [{
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NG_VALUE_ACCESSOR,
                multi: true,
                useExisting: DateInputComponent_1,
            }],
        styles: [_date_input_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], DateInputComponent);



/***/ }),

/***/ 4761:
/*!***************************************************!*\
  !*** ./src/app/pages/note/note-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotePageRoutingModule": () => (/* binding */ NotePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _note_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./note.page */ 1984);





const routes = [
    {
        path: '',
        component: _note_page__WEBPACK_IMPORTED_MODULE_0__.NotePage,
    },
];
let NotePageRoutingModule = class NotePageRoutingModule {
};
NotePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
    })
], NotePageRoutingModule);



/***/ }),

/***/ 7155:
/*!*******************************************!*\
  !*** ./src/app/pages/note/note.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotePageModule": () => (/* binding */ NotePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _note_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./note-routing.module */ 4761);
/* harmony import */ var _note_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./note.page */ 1984);
/* harmony import */ var _date_input_date_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./date-input/date-input.component */ 9781);








let NotePageModule = class NotePageModule {
};
NotePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _note_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotePageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        ],
        declarations: [_note_page__WEBPACK_IMPORTED_MODULE_1__.NotePage, _date_input_date_input_component__WEBPACK_IMPORTED_MODULE_2__.DateInputComponent]
    })
], NotePageModule);



/***/ }),

/***/ 1984:
/*!*****************************************!*\
  !*** ./src/app/pages/note/note.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotePage": () => (/* binding */ NotePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _Users_yashsolanki_Documents_comet_mobile_app_comet_ui_node_modules_ngtools_webpack_src_loaders_direct_resource_js_note_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./note.page.html */ 6003);
/* harmony import */ var _note_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./note.page.scss */ 7473);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 8260);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 8565);









let NotePage = class NotePage {
    constructor(activatedRoute, http) {
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.mode = 'VIEW';
    }
    ngOnInit() {
        this.noteId = this.activatedRoute.snapshot.params.id;
        if (this.activatedRoute.snapshot.params.mode === 'add') {
            this.mode = 'ADD';
        }
        this.noteForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            createdAt: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(new Date().toISOString()),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(),
            content: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(),
        });
        if (this.noteId) {
            this.http
                .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.ROOT_URL}/api/v1/note/${this.noteId}`)
                .subscribe((note) => {
                this.noteForm.patchValue({
                    createdAt: note.createdAt
                        ? note.createdAt
                        : new Date().toISOString(),
                    title: note.title,
                    content: note.content,
                });
            });
        }
    }
    onFabClicked() {
        if (this.mode === 'ADD') {
            this.http
                .post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.ROOT_URL}/api/v1/note`, this.noteForm.value)
                .subscribe(rxjs__WEBPACK_IMPORTED_MODULE_4__.noop);
            this.mode = 'VIEW';
        }
        else if (this.mode === 'EDIT') {
            this.http
                .patch(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.ROOT_URL}/api/v1/note/${this.noteId}`, this.noteForm.value)
                .subscribe(rxjs__WEBPACK_IMPORTED_MODULE_4__.noop);
            this.mode = 'VIEW';
        }
        else {
            this.mode = 'EDIT';
        }
    }
};
NotePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient }
];
NotePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-note',
        template: _Users_yashsolanki_Documents_comet_mobile_app_comet_ui_node_modules_ngtools_webpack_src_loaders_direct_resource_js_note_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_note_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], NotePage);



/***/ }),

/***/ 3785:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/note/date-input/date-input.component.html ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"date input-div\" id=\"date\"> \n  <span> \n    {{  value | date: 'd' }}\n  </span>\n  <span  class=\"date--sm\">\n    {{  value | date: 'MMM y' }}\n  </span>\n</div>\n<ion-popover *ngIf=\"isEditMode\" trigger=\"date\" size=\"cover\">\n  <ng-template>\n    <ion-datetime presentation=\"date\" (ionChange)=\"dateSelected($event)\" [max]=\"maxDate\"></ion-datetime>\n  </ng-template>\n</ion-popover>");

/***/ }),

/***/ 6003:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/note/note.page.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>note</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [ngClass]=\"{'bg-white': mode !== 'VIEW'}\">\n  <form [formGroup]=\"noteForm\" class=\"note__content\">\n    <app-date-input\n      formControlName=\"createdAt\"\n      class=\"note__date input-div\"\n      [isEditMode]=\"mode !== 'VIEW'\"\n    ></app-date-input>\n    <ion-textarea\n      autoGrow=\"true\"\n      class=\"note__title input-div\"\n      placeholder=\"Title\"\n      formControlName=\"title\"\n      [readonly]=\"mode === 'VIEW'\"\n    ></ion-textarea>\n    <ion-textarea\n      autoGrow=\"true\"\n      class=\"note__body input-div\"\n      placeholder=\"Write more here...\"\n      formControlName=\"content\"\n      [readonly]=\"mode === 'VIEW'\"\n    ></ion-textarea>\n  </form>\n  <ion-fab class=\"note__fab\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"onFabClicked()\">\n      <ion-icon *ngIf=\"mode === 'VIEW'\" name=\"pencil\"></ion-icon>\n      <ion-icon *ngIf=\"mode !== 'VIEW'\" name=\"save\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n");

/***/ }),

/***/ 1735:
/*!*****************************************************************!*\
  !*** ./src/app/pages/note/date-input/date-input.component.scss ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = ".date {\n  font-size: 24px;\n}\n.date--sm {\n  font-size: 16px;\n  color: #404040;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGUtaW5wdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0Y7QUFDRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBQ0oiLCJmaWxlIjoiZGF0ZS1pbnB1dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXRlIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuXG4gICYtLXNtIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICM0MDQwNDA7XG4gIH1cbn0iXX0= */";

/***/ }),

/***/ 7473:
/*!*******************************************!*\
  !*** ./src/app/pages/note/note.page.scss ***!
  \*******************************************/
/***/ ((module) => {

module.exports = ".note__content {\n  padding: 24px 16px;\n}\n.note__title {\n  font-size: 20px;\n  color: #404040;\n}\n.note__title:empty:before {\n  content: \"Title\";\n  color: gray;\n}\n.note__body {\n  font-size: 16px;\n  color: #737373;\n}\n.note__body:empty:before {\n  content: \"Write more here...\";\n  color: gray;\n}\n.note__fab {\n  margin: 8px 16px 24px 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usa0JBQUE7QUFBSjtBQUdFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFESjtBQUdJO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FBRE47QUFLRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBSEo7QUFLSTtFQUNFLDZCQUFBO0VBQ0EsV0FBQTtBQUhOO0FBT0U7RUFDRSx5QkFBQTtBQUxKIiwiZmlsZSI6Im5vdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdGUge1xuICAmX19jb250ZW50IHtcbiAgICBwYWRkaW5nOiAyNHB4IDE2cHg7XG4gIH1cblxuICAmX190aXRsZSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjNDA0MDQwO1xuXG4gICAgJjplbXB0eTpiZWZvcmUge1xuICAgICAgY29udGVudDogJ1RpdGxlJztcbiAgICAgIGNvbG9yOiBncmF5O1xuICAgIH1cbiAgfVxuXG4gICZfX2JvZHkge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogIzczNzM3MztcblxuICAgICY6ZW1wdHk6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6ICdXcml0ZSBtb3JlIGhlcmUuLi4nO1xuICAgICAgY29sb3I6IGdyYXk7XG4gICAgfVxuICB9XG5cbiAgJl9fZmFiIHtcbiAgICBtYXJnaW46IDhweCAxNnB4IDI0cHggOHB4O1xuICB9XG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_note_note_module_ts.js.map