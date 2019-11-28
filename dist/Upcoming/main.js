(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/create-company/create-company.component.html":
/*!********************************************************************!*\
  !*** ./src/app/admin/create-company/create-company.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"example-form div2 animated bounceInRight\"\n      (ngSubmit)=\"onSubmit()\"\n>\n  <mat-form-field class=\"example-full-width\" class=\"mf-f\">\n    <input matInput\n           placeholder=\"Company name\"\n           [formControl]=\"form.get('name')\"\n           [errorStateMatcher]=\"matcher\"\n    >\n    <mat-error *ngIf=\"form.get('name').hasError('minlength') && !form.get('name').hasError('required')\">\n      Please enter a valid name (Minimum length: 4)\n    </mat-error>\n    <mat-error *ngIf=\"form.get('name').hasError('maxlength') && !form.get('name').hasError('required')\">\n      Please enter a valid name (Maximum length: 20)\n    </mat-error>\n    <mat-error *ngIf=\"form.get('name').hasError('required')\">\n      Name is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n  <br>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput\n           placeholder=\"Email\"\n           [formControl]=\"form.get('email')\"\n           [errorStateMatcher]=\"matcher\"\n    >\n    <mat-error *ngIf=\"form.get('email').hasError('email') && !form.get('email').hasError('required')\">\n      Please enter a valid email address\n    </mat-error>\n    <mat-error *ngIf=\"form.get('email').hasError('maxlength') && !form.get('email').hasError('required')\">\n      Please enter a valid email (Maximum length: 20)\n    </mat-error>\n    <mat-error *ngIf=\"form.get('email').hasError('required')\">\n      Email is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n  <br>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput\n           type=\"password\"\n           placeholder=\"Password\"\n           [formControl]=\"form.get('password')\"\n           [errorStateMatcher]=\"matcher\"\n    >\n    <mat-error *ngIf=\"form.get('password').hasError('minlength') && !form.get('password').hasError('required')\">\n      Please enter a valid password (Minimum length: 4)\n    </mat-error>\n    <mat-error *ngIf=\"form.get('password').hasError('maxlength') && !form.get('password').hasError('required')\">\n      Please enter a valid password (Maximum length: 20)\n    </mat-error>\n    <mat-error *ngIf=\"form.get('password').hasError('required')\">\n      Password is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n  <button mat-button class=\"button2\" [disabled]=\"form.invalid\">Add</button>\n</form>\n"

/***/ }),

/***/ "./src/app/admin/create-company/create-company.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/create-company/create-company.component.ts ***!
  \******************************************************************/
/*! exports provided: CreateCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCompanyComponent", function() { return CreateCompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/admin.service */ "./src/app/shared/services/admin.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _models_errorStateMatcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/errorStateMatcher */ "./src/app/models/errorStateMatcher.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateCompanyComponent = /** @class */ (function () {
    function CreateCompanyComponent(admin, snackBar) {
        this.admin = admin;
        this.snackBar = snackBar;
        this.matcher = new _models_errorStateMatcher__WEBPACK_IMPORTED_MODULE_4__["MyErrorStateMatcher"]();
    }
    CreateCompanyComponent.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)
            ]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)
            ])
        });
    };
    CreateCompanyComponent.prototype.onSubmit = function () {
        var _this = this;
        this.admin.createCompany(this.form.value).subscribe(function () { return _this.snackBar.open('New company successfully added.', '', { duration: 3000 }); }, function (error) {
            _this.snackBar.open(error, '', { duration: 3000 });
        });
    };
    CreateCompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-company',
            template: __webpack_require__(/*! ./create-company.component.html */ "./src/app/admin/create-company/create-company.component.html"),
            styles: [__webpack_require__(/*! ../../../app/shared/layouts/admin/admin.component.css */ "./src/app/shared/layouts/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], CreateCompanyComponent);
    return CreateCompanyComponent;
}());



/***/ }),

/***/ "./src/app/admin/create-coupon/create-coupon.component.html":
/*!******************************************************************!*\
  !*** ./src/app/admin/create-coupon/create-coupon.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"example-form div2 animated bounceInRight\"\n      (ngSubmit)=\"onSubmit()\"\n>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput\n           placeholder=\"Title\"\n           [formControl]=\"form.get('title')\"\n           [errorStateMatcher]=\"matcher\"\n    >\n    <mat-error *ngIf=\"form.get('title').hasError('minlength') && !form.get('title').hasError('required')\">\n      Please enter a valid title (Minimum length: 4)\n    </mat-error>\n    <mat-error *ngIf=\"form.get('title').hasError('maxlength') && !form.get('title').hasError('required')\">\n      Please enter a valid title (Maximum length: 20)\n    </mat-error>\n    <mat-error *ngIf=\"form.get('title').hasError('required')\">\n      Title is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n  <br>\n  <mat-form-field style=\"width: 50%\" color=\"accent\">\n    <mat-label>Start date</mat-label>\n    <input matInput\n           type=\"date\"\n           [matDatepicker]=\"startDate\"\n           [formControl]=\"form.get('startDate')\"\n           [errorStateMatcher]=\"matcher\"\n    >\n    <mat-error *ngIf=\"form.get('startDate').hasError('required')\">\n      Start date is <strong>required</strong>\n    </mat-error>\n    <mat-datepicker-toggle matSuffix [for]=\"startDate\"></mat-datepicker-toggle>\n    <mat-datepicker #startDate></mat-datepicker>\n  </mat-form-field>\n  <mat-form-field style=\"width: 50%\" color=\"accent\">\n    <mat-label>End date</mat-label>\n    <input matInput\n           type=\"date\"\n           [matDatepicker]=\"endDate\"\n           [formControl]=\"form.get('endDate')\"\n           [errorStateMatcher]=\"matcher\"\n    >\n    <mat-error *ngIf=\"form.get('endDate').hasError('required')\">\n      End date is <strong>required</strong>\n    </mat-error>\n    <mat-datepicker-toggle matSuffix [for]=\"endDate\"></mat-datepicker-toggle>\n    <mat-datepicker #endDate color=\"primary\"></mat-datepicker>\n  </mat-form-field>\n  <br>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput\n           type=\"number\"\n           placeholder=\"Amount\"\n           [formControl]=\"form.get('amount')\"\n           [errorStateMatcher]=\"matcher\"\n    >\n    <mat-error *ngIf=\"form.get('amount').hasError('min') && !form.get('amount').hasError('required')\">\n      Please enter a valid amount (Minimum: 1)\n    </mat-error>\n    <mat-error *ngIf=\"form.get('amount').hasError('required')\">\n      Amount is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n  <br>\n  <mat-form-field>\n    <mat-select\n      placeholder=\"Coupon type\"\n      [formControl]=\"form.get('couponType')\"\n    >\n      <mat-option *ngFor=\"let coupon of coupons\" [value]=\"coupon.value\">\n        {{coupon.value}}\n      </mat-option>\n    </mat-select>\n    <mat-error *ngIf=\"form.get('couponType').hasError('required')\">\n      Coupon type is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n  <br>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput\n           placeholder=\"Message\"\n           [formControl]=\"form.get('message')\"\n           [errorStateMatcher]=\"matcher\"\n    >\n    <mat-error *ngIf=\"form.get('message').hasError('minlength') && !form.get('message').hasError('required')\">\n      Please enter a valid message (Minimum length: 4)\n    </mat-error>\n    <mat-error *ngIf=\"form.get('message').hasError('maxlength') && !form.get('message').hasError('required')\">\n      Please enter a valid message (Maximum length: 20)\n    </mat-error>\n    <mat-error *ngIf=\"form.get('message').hasError('required')\">\n      Message is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n  <br>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput\n           type=\"number\"\n           placeholder=\"Price\"\n           [formControl]=\"form.get('price')\"\n           [errorStateMatcher]=\"matcher\"\n    >\n    <mat-error *ngIf=\"form.get('price').hasError('min') && !form.get('price').hasError('required')\">\n      Please enter a valid price (Minimum: 1)\n    </mat-error>\n    <mat-error *ngIf=\"form.get('price').hasError('required')\">\n      Price is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n  <br>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput\n           type=\"number\"\n           placeholder=\"Company ID\"\n           [formControl]=\"form.get('companyId')\"\n           [errorStateMatcher]=\"matcher\"\n    >\n    <mat-error *ngIf=\"form.get('companyId').hasError('required')\">\n      Company ID is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n  <button mat-button class=\"button2\" [disabled]=\"form.invalid\">Add</button>\n</form>\n"

/***/ }),

/***/ "./src/app/admin/create-coupon/create-coupon.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/create-coupon/create-coupon.component.ts ***!
  \****************************************************************/
/*! exports provided: CreateCouponComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCouponComponent", function() { return CreateCouponComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_errorStateMatcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/errorStateMatcher */ "./src/app/models/errorStateMatcher.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_services_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/admin.service */ "./src/app/shared/services/admin.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreateCouponComponent = /** @class */ (function () {
    function CreateCouponComponent(admin, snackBar) {
        this.admin = admin;
        this.snackBar = snackBar;
        this.matcher = new _models_errorStateMatcher__WEBPACK_IMPORTED_MODULE_2__["MyErrorStateMatcher"]();
        this.coupons = [
            { value: 'FOOD' },
            { value: 'SPORTS' },
            { value: 'HEALTH' },
            { value: 'CAMPING' },
            { value: 'TRAVELLING' },
            { value: 'RESTAURANTS' },
            { value: 'ELECTRICITY' }
        ];
    }
    CreateCouponComponent.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)
            ]),
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)
            ]),
            couponType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)
            ]),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)
            ]),
            companyId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ])
        });
    };
    CreateCouponComponent.prototype.onSubmit = function () {
        var _this = this;
        var coupon = {
            title: this.form.value.title,
            startDate: new _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]('en-US').transform(this.form.value.startDate, 'yyyy-MM-dd'),
            endDate: new _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]('en-US').transform(this.form.value.endDate, 'yyyy-MM-dd'),
            amount: this.form.value.amount,
            couponType: this.form.value.couponType,
            message: this.form.value.message,
            price: this.form.value.price,
            companyId: this.form.value.companyId
        };
        this.admin.createCoupon(coupon).subscribe(function () { return _this.snackBar.open('New coupon successfully added.', '', { duration: 3000 }); }, function (error) {
            _this.snackBar.open(error, '', { duration: 3000 });
        });
    };
    CreateCouponComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-coupon',
            template: __webpack_require__(/*! ./create-coupon.component.html */ "./src/app/admin/create-coupon/create-coupon.component.html"),
            styles: [__webpack_require__(/*! ../../../app/shared/layouts/company/company.component.css */ "./src/app/shared/layouts/company/company.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], CreateCouponComponent);
    return CreateCouponComponent;
}());



/***/ }),

/***/ "./src/app/admin/create-customer/create-customer.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/admin/create-customer/create-customer.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"example-form div2 animated bounceInRight\"\n      (ngSubmit)=\"onSubmit()\"\n>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput\n           placeholder=\"Customer name\"\n           [formControl]=\"form.get('name')\"\n           [errorStateMatcher]=\"matcher\"\n    >\n    <mat-error *ngIf=\"form.get('name').hasError('minlength') && !form.get('name').hasError('required')\">\n      Please enter a valid name (Minimum length: 4)\n    </mat-error>\n    <mat-error *ngIf=\"form.get('name').hasError('maxlength') && !form.get('name').hasError('required')\">\n      Please enter a valid name (Maximum length: 20)\n    </mat-error>\n    <mat-error *ngIf=\"form.get('name').hasError('required')\">\n      Name is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n  <br>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput\n           placeholder=\"Email\"\n           [formControl]=\"form.get('email')\"\n           [errorStateMatcher]=\"matcher\"\n    >\n    <mat-error *ngIf=\"form.get('email').hasError('email') && !form.get('email').hasError('required')\">\n      Please enter a valid email address\n    </mat-error>\n    <mat-error *ngIf=\"form.get('email').hasError('maxlength') && !form.get('email').hasError('required')\">\n      Please enter a valid email (Maximum length: 20)\n    </mat-error>\n    <mat-error *ngIf=\"form.get('email').hasError('required')\">\n      Email is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n  <br>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput\n           type=\"password\"\n           placeholder=\"Password\"\n           [formControl]=\"form.get('password')\"\n           [errorStateMatcher]=\"matcher\"\n    >\n    <mat-error *ngIf=\"form.get('password').hasError('minlength') && !form.get('password').hasError('required')\">\n      Please enter a valid password (Minimum length: 4)\n    </mat-error>\n    <mat-error *ngIf=\"form.get('password').hasError('maxlength') && !form.get('password').hasError('required')\">\n      Please enter a valid password (Maximum length: 20)\n    </mat-error>\n    <mat-error *ngIf=\"form.get('password').hasError('required')\">\n      Password is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n  <button mat-button class=\"button2\" [disabled]=\"form.invalid\">Add</button>\n</form>\n"

/***/ }),

/***/ "./src/app/admin/create-customer/create-customer.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/create-customer/create-customer.component.ts ***!
  \********************************************************************/
/*! exports provided: CreateCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCustomerComponent", function() { return CreateCustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/admin.service */ "./src/app/shared/services/admin.service.ts");
/* harmony import */ var _models_errorStateMatcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/errorStateMatcher */ "./src/app/models/errorStateMatcher.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateCustomerComponent = /** @class */ (function () {
    function CreateCustomerComponent(admin, snackBar) {
        this.admin = admin;
        this.snackBar = snackBar;
        this.matcher = new _models_errorStateMatcher__WEBPACK_IMPORTED_MODULE_3__["MyErrorStateMatcher"]();
    }
    CreateCustomerComponent.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)
            ]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)
            ])
        });
    };
    CreateCustomerComponent.prototype.onSubmit = function () {
        var _this = this;
        this.admin.createCustomer(this.form.value).subscribe(function () { return _this.snackBar.open('New customer successfully added.', '', { duration: 3000 }); }, function (error) {
            _this.snackBar.open(error, '', { duration: 3000 });
        });
    };
    CreateCustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-customer',
            template: __webpack_require__(/*! ./create-customer.component.html */ "./src/app/admin/create-customer/create-customer.component.html"),
            styles: [__webpack_require__(/*! ../../../app/shared/layouts/admin/admin.component.css */ "./src/app/shared/layouts/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], CreateCustomerComponent);
    return CreateCustomerComponent;
}());



/***/ }),

/***/ "./src/app/admin/get-companies/get-companies.component.html":
/*!******************************************************************!*\
  !*** ./src/app/admin/get-companies/get-companies.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Company Table</h3>\n<form class=\"div2 animated bounceInRight\">\n  <mat-form-field>\n    <input matInput (keyup)=\"companyFilter($event.target.value)\" placeholder=\"Filter\">\n  </mat-form-field>\n  <link href='https://fonts.googleapis.com/css?family=Notable' rel='stylesheet'>\n  <table mat-table [dataSource]=\"companySource\" multiTemplateDataRows class=\"mat-elevation-z8\">\n\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef>Name</th>\n      <td mat-cell *matCellDef=\"let element\">{{element.name}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"password\">\n      <th mat-header-cell *matHeaderCellDef>Password</th>\n      <td mat-cell *matCellDef=\"let element\">{{element.password}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"email\">\n      <th mat-header-cell *matHeaderCellDef>Email</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\n    </ng-container>\n\n\n\n\n    \n    <ng-container matColumnDef=\"expandedDetail\">\n      <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"companyColumns.length\">\n        <div class=\"example-element-detail\"\n             [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\n          <div class=\"example-element-description\">\n            <button mat-stroked-button class=\"button3\"\n                    (click)=\"onShowUpdate()\"\n            >Update\n            </button>\n            <br>\n            <button mat-stroked-button class=\"button3\"\n                    (click)=\"onDelete(element.id)\"\n            >Remove\n            </button>\n            <br>\n            <form *ngIf=\"showUpdate\" class=\"example-form div2 animated bounceInUp faster\"\n                  (ngSubmit)=\"onUpdate(element.id)\"\n            >\n              <mat-form-field class=\"example-full-width\">\n                <input matInput\n                       placeholder=\"Name\"\n                       [formControl]=\"form.get('name')\"\n                       [errorStateMatcher]=\"matcher\"\n                >\n                <mat-error *ngIf=\"form.get('name').hasError('minlength') && !form.get('name').hasError('required')\">\n                  Please enter a valid name (Minimum length: 4)\n                </mat-error>\n                <mat-error *ngIf=\"form.get('name').hasError('maxlength') && !form.get('name').hasError('required')\">\n                  Please enter a valid name (Maximum length: 20)\n                </mat-error>\n                <mat-error *ngIf=\"form.get('name').hasError('required')\">\n                  Name is <strong>required</strong>\n                </mat-error>\n              </mat-form-field>\n              <br>\n              <mat-form-field class=\"example-full-width\">\n                <input matInput\n                       placeholder=\"Email\"\n                       [formControl]=\"form.get('email')\"\n                       [errorStateMatcher]=\"matcher\"\n                >\n                <mat-error *ngIf=\"form.get('email').hasError('email') && !form.get('email').hasError('required')\">\n                  Please enter a valid email address\n                </mat-error>\n                <mat-error *ngIf=\"form.get('email').hasError('maxlength') && !form.get('email').hasError('required')\">\n                  Please enter a valid email (Maximum length: 20)\n                </mat-error>\n                <mat-error *ngIf=\"form.get('email').hasError('required')\">\n                  Email is <strong>required</strong>\n                </mat-error>\n              </mat-form-field>\n              <br>\n              <mat-form-field class=\"example-full-width\">\n                <input matInput\n                       type=\"password\"\n                       placeholder=\"Password\"\n                       [formControl]=\"form.get('password')\"\n                       [errorStateMatcher]=\"matcher\"\n                >\n                <mat-error\n                  *ngIf=\"form.get('password').hasError('minlength') && !form.get('password').hasError('required')\">\n                  Please enter a valid password (Minimum length: 4)\n                </mat-error>\n                <mat-error\n                  *ngIf=\"form.get('password').hasError('maxlength') && !form.get('password').hasError('required')\">\n                  Please enter a valid password (Maximum length: 20)\n                </mat-error>\n                <mat-error *ngIf=\"form.get('password').hasError('required')\">\n                  Password is <strong>required</strong>\n                </mat-error>\n              </mat-form-field>\n              <button mat-button class=\"button2\" [disabled]=\"form.invalid\">Update</button>\n            </form>\n          </div>\n        </div>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"companyColumns\"></tr>\n    <tr mat-row *matRowDef=\"let element; columns: companyColumns;\"\n        class=\"example-element-row\"\n        [class.example-expanded-row]=\"expandedElement === element\"\n        (click)=\"expandedElement = expandedElement === element ? null : element\">\n    </tr>\n    <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\n  </table>\n</form>\n"

/***/ }),

/***/ "./src/app/admin/get-companies/get-companies.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/get-companies/get-companies.component.ts ***!
  \****************************************************************/
/*! exports provided: GetCompaniesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCompaniesComponent", function() { return GetCompaniesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/admin.service */ "./src/app/shared/services/admin.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_errorStateMatcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/errorStateMatcher */ "./src/app/models/errorStateMatcher.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GetCompaniesComponent = /** @class */ (function () {
    function GetCompaniesComponent(admin, snackBar) {
        this.admin = admin;
        this.snackBar = snackBar;
        this.companyColumns = ['name', 'password', 'email'];
        this.matcher = new _models_errorStateMatcher__WEBPACK_IMPORTED_MODULE_5__["MyErrorStateMatcher"]();
        this.showUpdate = false;
    }
    GetCompaniesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.admin.getAllCompanies().subscribe(function (comps) { return _this.companySource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](comps); }, function (error) {
            _this.snackBar.open(error, '', { duration: 3000 });
        });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(20)
            ]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(20)
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(20)
            ])
        });
    };
    GetCompaniesComponent.prototype.companyFilter = function (filterValue) {
        this.companySource.filter = filterValue.trim().toLowerCase();
    };
    GetCompaniesComponent.prototype.onDelete = function (id) {
        var _this = this;
        this.admin.deleteCompany(id).subscribe(function () { return _this.snackBar.open('Company successfully removed.', '', { duration: 3000 }); }, function (error) {
            _this.snackBar.open(error, '', { duration: 3000 });
        });
    };
    GetCompaniesComponent.prototype.onUpdate = function (id) {
        var _this = this;
        var company = {
            id: id,
            name: this.form.value.name,
            password: this.form.value.password,
            email: this.form.value.email
        };
        this.admin.updateCompany(company).subscribe(function () { return _this.snackBar.open('Company successfully updated.', '', { duration: 3000 }); }, function (error) {
            _this.snackBar.open(error, '', { duration: 3000 });
        });
    };
    GetCompaniesComponent.prototype.onShowUpdate = function () {
        this.showUpdate === false ? this.showUpdate = true : this.showUpdate = false;
    };
    GetCompaniesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-get-companies',
            template: __webpack_require__(/*! ./get-companies.component.html */ "./src/app/admin/get-companies/get-companies.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('detailExpand', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ height: '0px', minHeight: '0', display: 'none' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ height: '*' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
                ])
            ],
            styles: [__webpack_require__(/*! ../../../app/shared/layouts/admin/admin.component.css */ "./src/app/shared/layouts/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], GetCompaniesComponent);
    return GetCompaniesComponent;
}());



/***/ }),

/***/ "./src/app/admin/get-coupons/get-coupons.component.html":
/*!**************************************************************!*\
  !*** ./src/app/admin/get-coupons/get-coupons.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Coupon Table</h3>\n<form class=\"div2 animated bounceInRight\">\n  <mat-form-field>\n    <input matInput (keyup)=\"couponFilter($event.target.value)\" placeholder=\"Filter\">\n  </mat-form-field>\n\n  <table mat-table [dataSource]=\"couponSource\" multiTemplateDataRows class=\"mat-elevation-z8\">\n\n    <ng-container matColumnDef=\"title\">\n      <th mat-header-cell *matHeaderCellDef>Title</th>\n      <td mat-cell *matCellDef=\"let element\">{{element.title}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"startDate\">\n      <th mat-header-cell *matHeaderCellDef>Creation Date</th>\n      <td mat-cell *matCellDef=\"let element\">{{element.startDate}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"endDate\">\n      <th mat-header-cell *matHeaderCellDef>Experation Date</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.endDate}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"amount\">\n      <th mat-header-cell *matHeaderCellDef>Amount</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.amount}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"couponType\">\n      <th mat-header-cell *matHeaderCellDef>Coupon Type</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.couponType}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"message\">\n      <th mat-header-cell *matHeaderCellDef>Message</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.message}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"price\">\n      <th mat-header-cell *matHeaderCellDef>Price</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.price}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"companyId\">\n      <th mat-header-cell *matHeaderCellDef>Company ID</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.companyId}} </td>\n    </ng-container>\n\n\n<!-- ['title', 'startDate', 'endDate', 'amount', 'couponType', 'message', 'price', 'companyId'] -->\n\n\n    <ng-container matColumnDef=\"expandedDetail\">\n      <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"couponColumns.length\">\n        <div class=\"example-element-detail\"\n             [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\n          <div class=\"example-element-description\">\n            <button mat-stroked-button class=\"button3\"\n                    (click)=\"onShowUpdate()\"\n            >Update\n            </button>\n            <br>\n            <button mat-stroked-button class=\"button3\"\n                    (click)=\"onDelete(element.id)\"\n            >Remove\n            </button>\n            <br>\n            <form *ngIf=\"showUpdate\" class=\"example-form div2 animated bounceInUp faster\"\n                  (ngSubmit)=\"onUpdate(element.id)\"\n            >\n              <mat-form-field class=\"example-full-width\">\n                <input matInput\n                       placeholder=\"Title\"\n                       [formControl]=\"form.get('Title')\"\n                       [errorStateMatcher]=\"matcher\"\n                >\n                <mat-error *ngIf=\"form.get('Title').hasError('minlength') && !form.get('Title').hasError('required')\">\n                  Please enter a valid title (Minimum length: 4)\n                </mat-error>\n                <mat-error *ngIf=\"form.get('Title').hasError('maxlength') && !form.get('Title').hasError('required')\">\n                  Please enter a valid title (Maximum length: 20)\n                </mat-error>\n                <mat-error *ngIf=\"form.get('Title').hasError('required')\">\n                  Title is <strong>required</strong>\n                </mat-error>\n              </mat-form-field>\n              <br>\n              <mat-form-field style=\"width: 50%\" color=\"accent\">\n                <mat-label>Start date</mat-label>\n                <input matInput\n                       type=\"date\"\n                       [matDatepicker]=\"startDate\"\n                       [formControl]=\"form.get('startDate')\"\n                       [errorStateMatcher]=\"matcher\"\n                >\n                <mat-error *ngIf=\"form.get('startDate').hasError('required')\">\n                  Start date is <strong>required</strong>\n                </mat-error>\n                <mat-datepicker-toggle matSuffix [for]=\"startDate\"></mat-datepicker-toggle>\n                <mat-datepicker #startDate></mat-datepicker>\n              </mat-form-field>\n              <mat-form-field style=\"width: 50%\" color=\"accent\">\n                <mat-label>End date</mat-label>\n                <input matInput\n                       type=\"date\"\n                       [matDatepicker]=\"endDate\"\n                       [formControl]=\"form.get('endDate')\"\n                       [errorStateMatcher]=\"matcher\"\n                >\n                <mat-error *ngIf=\"form.get('endDate').hasError('required')\">\n                  End date is <strong>required</strong>\n                </mat-error>\n                <mat-datepicker-toggle matSuffix [for]=\"endDate\"></mat-datepicker-toggle>\n                <mat-datepicker #endDate color=\"primary\"></mat-datepicker>\n              </mat-form-field>\n              <br>\n              <mat-form-field class=\"example-full-width\">\n                <input matInput\n                       type=\"number\"\n                       placeholder=\"Amount\"\n                       [formControl]=\"form.get('amount')\"\n                       [errorStateMatcher]=\"matcher\"\n                >\n                <mat-error *ngIf=\"form.get('amount').hasError('min') && !form.get('amount').hasError('required')\">\n                  Please enter a valid amount (Minimum: 1)\n                </mat-error>\n                <mat-error *ngIf=\"form.get('amount').hasError('required')\">\n                  Amount is <strong>required</strong>\n                </mat-error>\n              </mat-form-field>\n              <br>\n              <mat-form-field>\n                <mat-select\n                  placeholder=\"Coupon type\"\n                  [formControl]=\"form.get('couponType')\"\n                >\n                  <mat-option *ngFor=\"let coupon of coupons\" [value]=\"coupon.value\">\n                    {{coupon.value}}\n                  </mat-option>\n                </mat-select>\n                <mat-error *ngIf=\"form.get('couponType').hasError('required')\">\n                  Coupon type is <strong>required</strong>\n                </mat-error>\n              </mat-form-field>\n              <br>\n              <mat-form-field class=\"example-full-width\">\n                <input matInput\n                       placeholder=\"Message\"\n                       [formControl]=\"form.get('message')\"\n                       [errorStateMatcher]=\"matcher\"\n                >\n                <mat-error\n                  *ngIf=\"form.get('message').hasError('minlength') && !form.get('message').hasError('required')\">\n                  Please enter a valid message (Minimum length: 4)\n                </mat-error>\n                <mat-error\n                  *ngIf=\"form.get('message').hasError('maxlength') && !form.get('message').hasError('required')\">\n                  Please enter a valid message (Maximum length: 20)\n                </mat-error>\n                <mat-error *ngIf=\"form.get('message').hasError('required')\">\n                  Message is <strong>required</strong>\n                </mat-error>\n              </mat-form-field>\n              <br>\n              <mat-form-field class=\"example-full-width\">\n                <input matInput\n                       type=\"number\"\n                       placeholder=\"Price\"\n                       [formControl]=\"form.get('price')\"\n                       [errorStateMatcher]=\"matcher\"\n                >\n                <mat-error *ngIf=\"form.get('price').hasError('min') && !form.get('price').hasError('required')\">\n                  Please enter a valid price (Minimum: 1)\n                </mat-error>\n                <mat-error *ngIf=\"form.get('price').hasError('required')\">\n                  Price is <strong>required</strong>\n                </mat-error>\n              </mat-form-field>\n              <br>\n              <mat-form-field class=\"example-full-width\">\n                <input matInput\n                       type=\"number\"\n                       placeholder=\"Company ID\"\n                       [formControl]=\"form.get('companyId')\"\n                       [errorStateMatcher]=\"matcher\"\n                >\n                <mat-error *ngIf=\"form.get('companyId').hasError('required')\">\n                  Company ID is <strong>required</strong>\n                </mat-error>\n              </mat-form-field>\n              <button mat-button class=\"button2\" [disabled]=\"form.invalid\">Update</button>\n            </form>\n          </div>\n        </div>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"couponColumns\"></tr>\n    <tr mat-row *matRowDef=\"let element; columns: couponColumns;\"\n        class=\"example-element-row\"\n        [class.example-expanded-row]=\"expandedElement === element\"\n        (click)=\"expandedElement = expandedElement === element ? null : element\">\n    </tr>\n    <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\n  </table>\n</form>\n"

/***/ }),

/***/ "./src/app/admin/get-coupons/get-coupons.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/get-coupons/get-coupons.component.ts ***!
  \************************************************************/
/*! exports provided: GetCouponsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCouponsComponent", function() { return GetCouponsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/admin.service */ "./src/app/shared/services/admin.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_errorStateMatcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/errorStateMatcher */ "./src/app/models/errorStateMatcher.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GetCouponsComponent = /** @class */ (function () {
    function GetCouponsComponent(admin, snackBar) {
        this.admin = admin;
        this.snackBar = snackBar;
        this.couponColumns = ['title', 'startDate', 'endDate', 'amount', 'couponType', 'message', 'price', 'companyId'];
        this.matcher = new _models_errorStateMatcher__WEBPACK_IMPORTED_MODULE_5__["MyErrorStateMatcher"]();
        this.showUpdate = false;
        this.coupons = [
            { value: 'FOOD' },
            { value: 'SPORTS' },
            { value: 'HEALTH' },
            { value: 'CAMPING' },
            { value: 'TRAVELLING' },
            { value: 'RESTAURANTS' },
            { value: 'ELECTRICITY' }
        ];
    }
    GetCouponsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.admin.getAllCoupons().subscribe(function (coupons) { return _this.couponSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](coupons); }, function (error) {
            _this.snackBar.open(error, '', { duration: 3000 });
        });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(20)
            ]),
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ]),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ]),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1)
            ]),
            couponType: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ]),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(20)
            ]),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1)
            ]),
            companyId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ])
        });
    };
    GetCouponsComponent.prototype.couponFilter = function (filterValue) {
        this.couponSource.filter = filterValue.trim().toLowerCase();
    };
    GetCouponsComponent.prototype.onDelete = function (id) {
        var _this = this;
        this.admin.deleteCoupon(id).subscribe(function () { return _this.snackBar.open('Coupon successfully removed.', '', { duration: 3000 }); }, function (error) {
            _this.snackBar.open(error, '', { duration: 3000 });
        });
    };
    GetCouponsComponent.prototype.onUpdate = function (id) {
        var _this = this;
        var coupon = {
            id: id,
            title: this.form.value.title,
            startDate: new _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]('en-US').transform(this.form.value.startDate, 'yyyy-MM-dd'),
            endDate: new _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]('en-US').transform(this.form.value.endDate, 'yyyy-MM-dd'),
            amount: this.form.value.amount,
            couponType: this.form.value.couponType,
            message: this.form.value.message,
            price: this.form.value.price,
            companyId: this.form.value.companyId
        };
        this.admin.updateCoupon(coupon).subscribe(function () { return _this.snackBar.open('Coupon successfully updated.', '', { duration: 3000 }); }, function (error) {
            _this.snackBar.open(error, '', { duration: 3000 });
        });
    };
    GetCouponsComponent.prototype.onShowUpdate = function () {
        this.showUpdate === false ? this.showUpdate = true : this.showUpdate = false;
    };
    GetCouponsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-get-coupons',
            template: __webpack_require__(/*! ./get-coupons.component.html */ "./src/app/admin/get-coupons/get-coupons.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('detailExpand', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ height: '0px', minHeight: '0', display: 'none' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ height: '*' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
                ])
            ],
            styles: [__webpack_require__(/*! ../../../app/shared/layouts/admin/admin.component.css */ "./src/app/shared/layouts/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], GetCouponsComponent);
    return GetCouponsComponent;
}());



/***/ }),

/***/ "./src/app/admin/get-customers/get-customers.component.html":
/*!******************************************************************!*\
  !*** ./src/app/admin/get-customers/get-customers.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Customer Table</h3>\n<div class=\"div2 animated bounceInRight\">\n  <mat-form-field>\n    <input matInput (keyup)=\"customerFilter($event.target.value)\" placeholder=\"Filter\">\n  </mat-form-field>\n\n   <table mat-table [dataSource]=\"customerSource\" multiTemplateDataRows class=\"mat-elevation-z8\">\n\n     <ng-container matColumnDef=\"name\">\n       <th mat-header-cell *matHeaderCellDef>Name</th>\n       <td mat-cell *matCellDef=\"let element\">{{element.name}} </td>\n     </ng-container>\n\n     <ng-container matColumnDef=\"password\">\n       <th mat-header-cell *matHeaderCellDef>Password</th>\n       <td mat-cell *matCellDef=\"let element\">{{element.password}} </td>\n     </ng-container>\n\n     <ng-container matColumnDef=\"email\">\n       <th mat-header-cell *matHeaderCellDef>Email</th>\n       <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\n     </ng-container>\n\n\n\n\n\n    <ng-container matColumnDef=\"expandedDetail\">\n      <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"customerColumns.length\">\n        <div class=\"example-element-detail\"\n             [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\n          <div class=\"example-element-description\">\n            <button mat-stroked-button class=\"button3\"\n                    (click)=\"onShowUpdate()\"\n            >Update\n            </button>\n            <br>\n            <button mat-stroked-button class=\"button3\"\n                    (click)=\"onDelete(element.id)\"\n            >Remove\n            </button>\n            <br>\n            <form *ngIf=\"showUpdate\" class=\"example-form div2 animated bounceInUp faster\"\n                  (ngSubmit)=\"onUpdate(element.id)\"\n            >\n              <mat-form-field class=\"example-full-width\">\n                <input matInput\n                       placeholder=\"Name\"\n                       [formControl]=\"form.get('name')\"\n                       [errorStateMatcher]=\"matcher\"\n                >\n                <mat-error *ngIf=\"form.get('name').hasError('minlength') && !form.get('name').hasError('required')\">\n                  Please enter a valid name (Minimum length: 4)\n                </mat-error>\n                <mat-error *ngIf=\"form.get('name').hasError('maxlength') && !form.get('name').hasError('required')\">\n                  Please enter a valid name (Maximum length: 20)\n                </mat-error>\n                <mat-error *ngIf=\"form.get('name').hasError('required')\">\n                  Name is <strong>required</strong>\n                </mat-error>\n              </mat-form-field>\n              <br>\n              <mat-form-field class=\"example-full-width\">\n                <input matInput\n                       placeholder=\"Email\"\n                       [formControl]=\"form.get('email')\"\n                       [errorStateMatcher]=\"matcher\"\n                >\n                <mat-error *ngIf=\"form.get('email').hasError('email') && !form.get('email').hasError('required')\">\n                  Please enter a valid email address\n                </mat-error>\n                <mat-error *ngIf=\"form.get('email').hasError('maxlength') && !form.get('email').hasError('required')\">\n                  Please enter a valid email (Maximum length: 20)\n                </mat-error>\n                <mat-error *ngIf=\"form.get('email').hasError('required')\">\n                  Email is <strong>required</strong>\n                </mat-error>\n              </mat-form-field>\n              <br>\n              <mat-form-field class=\"example-full-width\">\n                <input matInput\n                       type=\"password\"\n                       placeholder=\"Password\"\n                       [formControl]=\"form.get('password')\"\n                       [errorStateMatcher]=\"matcher\"\n                >\n                <mat-error\n                  *ngIf=\"form.get('password').hasError('minlength') && !form.get('password').hasError('required')\">\n                  Please enter a valid password (Minimum length: 4)\n                </mat-error>\n                <mat-error\n                  *ngIf=\"form.get('password').hasError('maxlength') && !form.get('password').hasError('required')\">\n                  Please enter a valid password (Maximum length: 20)\n                </mat-error>\n                <mat-error *ngIf=\"form.get('password').hasError('required')\">\n                  Password is <strong>required</strong>\n                </mat-error>\n              </mat-form-field>\n              <button mat-button class=\"button2\" [disabled]=\"form.invalid\">Update</button>\n            </form>\n          </div>\n        </div>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"customerColumns\"></tr>\n    <tr mat-row *matRowDef=\"let element; columns: customerColumns;\"\n        class=\"example-element-row\"\n        [class.example-expanded-row]=\"expandedElement === element\"\n        (click)=\"expandedElement = expandedElement === element ? null : element\">\n    </tr>\n    <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/get-customers/get-customers.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/get-customers/get-customers.component.ts ***!
  \****************************************************************/
/*! exports provided: GetCustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCustomersComponent", function() { return GetCustomersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/admin.service */ "./src/app/shared/services/admin.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_errorStateMatcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/errorStateMatcher */ "./src/app/models/errorStateMatcher.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GetCustomersComponent = /** @class */ (function () {
    function GetCustomersComponent(admin, snackBar) {
        this.admin = admin;
        this.snackBar = snackBar;
        this.customerColumns = ['name', 'password', 'email'];
        this.matcher = new _models_errorStateMatcher__WEBPACK_IMPORTED_MODULE_5__["MyErrorStateMatcher"]();
        this.showUpdate = false;
    }
    GetCustomersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.admin.getAllCustomers().subscribe(function (customers) { return _this.customerSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](customers); }, function (error) {
            _this.snackBar.open(error, '', { duration: 3000 });
        });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(20)
            ]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(20)
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(20)
            ])
        });
    };
    GetCustomersComponent.prototype.customerFilter = function (filterValue) {
        this.customerSource.filter = filterValue.trim().toLowerCase();
    };
    GetCustomersComponent.prototype.onDelete = function (id) {
        var _this = this;
        this.admin.deleteCustomer(id).subscribe(function () { return _this.snackBar.open('Customer successfully removed.', '', { duration: 3000 }); }, function (error) {
            _this.snackBar.open(error, '', { duration: 3000 });
        });
    };
    GetCustomersComponent.prototype.onUpdate = function (id) {
        var _this = this;
        var customer = {
            id: id,
            name: this.form.value.name,
            password: this.form.value.password,
            email: this.form.value.email
        };
        this.admin.updateCustomer(customer).subscribe(function () { return _this.snackBar.open('Customer successfully updated.', '', { duration: 3000 }); }, function (error) {
            _this.snackBar.open(error, '', { duration: 3000 });
        });
    };
    GetCustomersComponent.prototype.onShowUpdate = function () {
        this.showUpdate === false ? this.showUpdate = true : this.showUpdate = false;
    };
    GetCustomersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-get-customers',
            template: __webpack_require__(/*! ./get-customers.component.html */ "./src/app/admin/get-customers/get-customers.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('detailExpand', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ height: '0px', minHeight: '0', display: 'none' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ height: '*' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
                ])
            ],
            styles: [__webpack_require__(/*! ../../../app/shared/layouts/admin/admin.component.css */ "./src/app/shared/layouts/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], GetCustomersComponent);
    return GetCustomersComponent;
}());



/***/ }),

/***/ "./src/app/admin/get-incomes/get-incomes.component.html":
/*!**************************************************************!*\
  !*** ./src/app/admin/get-incomes/get-incomes.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Income Table</h3>\n<form class=\"div2 animated bounceInRight\">\n  <mat-form-field>\n    <input matInput (keyup)=\"incomeFilter($event.target.value)\" placeholder=\"Filter\">\n  </mat-form-field>\n\n  <table mat-table [dataSource]=\"incomeSource\" class=\"mat-elevation-z8\">\n\n    <!-- Company name column -->\n    <ng-container matColumnDef=\"companyName\">\n      <th mat-header-cell *matHeaderCellDef>Company Name</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.companyName}} </td>\n    </ng-container>\n\n    <!-- Customer name column -->\n    <ng-container matColumnDef=\"customerName\">\n      <th mat-header-cell *matHeaderCellDef>Customer Name</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.customerName}} </td>\n    </ng-container>\n\n    <!-- Date column -->\n    <ng-container matColumnDef=\"date\">\n      <th mat-header-cell *matHeaderCellDef>@ Date</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.date}} </td>\n    </ng-container>\n\n    <!-- ExperationDate column\n    <ng-container matColumnDef=\"expDate\">\n      <th mat-header-cell *matHeaderCellDef>ExperationDate</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.expDate}} </td>\n    </ng-container> -->\n\n    <!-- Description column -->\n    <ng-container matColumnDef=\"description\">\n      <th mat-header-cell *matHeaderCellDef>Description</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\n    </ng-container>\n\n      <!-- Price column -->\n      <ng-container matColumnDef=\"price\">\n       <th mat-header-cell *matHeaderCellDef>Price</th>\n       <td mat-cell *matCellDef=\"let element\"> {{element.price}} </td>\n      </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"incomeColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: incomeColumns;\"></tr>\n  </table>\n</form>\n"

/***/ }),

/***/ "./src/app/admin/get-incomes/get-incomes.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/get-incomes/get-incomes.component.ts ***!
  \************************************************************/
/*! exports provided: GetIncomesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetIncomesComponent", function() { return GetIncomesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/admin.service */ "./src/app/shared/services/admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetIncomesComponent = /** @class */ (function () {
    function GetIncomesComponent(admin, snackBar) {
        this.admin = admin;
        this.snackBar = snackBar;
        this.incomeColumns = ['companyName', 'customerName', 'description', 'date', 'price'];
    }
    GetIncomesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.admin.getIncomes().subscribe(function (incomes) { return _this.incomeSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](incomes); }, function (error) {
            _this.snackBar.open(error, '', { duration: 3000 });
        });
    };
    GetIncomesComponent.prototype.incomeFilter = function (filterValue) {
        this.incomeSource.filter = filterValue.trim().toLowerCase();
    };
    GetIncomesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-get-all-incomes',
            template: __webpack_require__(/*! ./get-incomes.component.html */ "./src/app/admin/get-incomes/get-incomes.component.html"),
            styles: [__webpack_require__(/*! ../../../app/shared/layouts/admin/admin.component.css */ "./src/app/shared/layouts/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], GetIncomesComponent);
    return GetIncomesComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_layouts_admin_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/layouts/admin/admin.component */ "./src/app/shared/layouts/admin/admin.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _shared_layouts_company_company_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/layouts/company/company.component */ "./src/app/shared/layouts/company/company.component.ts");
/* harmony import */ var _shared_layouts_customer_customer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/layouts/customer/customer.component */ "./src/app/shared/layouts/customer/customer.component.ts");
/* harmony import */ var _shared_layouts_authorisation_authorisation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/layouts/authorisation/authorisation.component */ "./src/app/shared/layouts/authorisation/authorisation.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _admin_create_company_create_company_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/create-company/create-company.component */ "./src/app/admin/create-company/create-company.component.ts");
/* harmony import */ var _admin_get_companies_get_companies_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/get-companies/get-companies.component */ "./src/app/admin/get-companies/get-companies.component.ts");
/* harmony import */ var _admin_create_customer_create_customer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/create-customer/create-customer.component */ "./src/app/admin/create-customer/create-customer.component.ts");
/* harmony import */ var _admin_get_customers_get_customers_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin/get-customers/get-customers.component */ "./src/app/admin/get-customers/get-customers.component.ts");
/* harmony import */ var _company_create_company_coupon_create_company_coupon_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./company/create-company-coupon/create-company-coupon.component */ "./src/app/company/create-company-coupon/create-company-coupon.component.ts");
/* harmony import */ var _company_get_company_coupons_get_company_coupons_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./company/get-company-coupons/get-company-coupons.component */ "./src/app/company/get-company-coupons/get-company-coupons.component.ts");
/* harmony import */ var _customer_purchase_coupon_purchase_coupon_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./customer/purchase-coupon/purchase-coupon.component */ "./src/app/customer/purchase-coupon/purchase-coupon.component.ts");
/* harmony import */ var _customer_get_customer_coupons_get_customer_coupons_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./customer/get-customer-coupons/get-customer-coupons.component */ "./src/app/customer/get-customer-coupons/get-customer-coupons.component.ts");
/* harmony import */ var _admin_create_coupon_create_coupon_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin/create-coupon/create-coupon.component */ "./src/app/admin/create-coupon/create-coupon.component.ts");
/* harmony import */ var _admin_get_coupons_get_coupons_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin/get-coupons/get-coupons.component */ "./src/app/admin/get-coupons/get-coupons.component.ts");
/* harmony import */ var _shared_guards_admin_auth_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/guards/admin-auth.guard */ "./src/app/shared/guards/admin-auth.guard.ts");
/* harmony import */ var _shared_page404_page404_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/page404/page404.component */ "./src/app/shared/page404/page404.component.ts");
/* harmony import */ var _shared_guards_company_auth_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/guards/company-auth.guard */ "./src/app/shared/guards/company-auth.guard.ts");
/* harmony import */ var _shared_guards_customer_auth_guard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/guards/customer-auth.guard */ "./src/app/shared/guards/customer-auth.guard.ts");
/* harmony import */ var _admin_get_incomes_get_incomes_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./admin/get-incomes/get-incomes.component */ "./src/app/admin/get-incomes/get-incomes.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var routes = [
    {
        path: '', component: _shared_layouts_authorisation_authorisation_component__WEBPACK_IMPORTED_MODULE_6__["AuthorisationComponent"], children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
            { path: 'registration', component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_7__["RegistrationComponent"] }
        ]
    },
    {
        path: 'admin', component: _shared_layouts_admin_admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"], canActivate: [_shared_guards_admin_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AdminAuthGuard"]], children: [
            { path: 'create-company', component: _admin_create_company_create_company_component__WEBPACK_IMPORTED_MODULE_8__["CreateCompanyComponent"] },
            { path: 'get-companies', component: _admin_get_companies_get_companies_component__WEBPACK_IMPORTED_MODULE_9__["GetCompaniesComponent"] },
            { path: 'create-coupon', component: _admin_create_coupon_create_coupon_component__WEBPACK_IMPORTED_MODULE_16__["CreateCouponComponent"] },
            { path: 'get-coupons', component: _admin_get_coupons_get_coupons_component__WEBPACK_IMPORTED_MODULE_17__["GetCouponsComponent"] },
            { path: 'create-customer', component: _admin_create_customer_create_customer_component__WEBPACK_IMPORTED_MODULE_10__["CreateCustomerComponent"] },
            { path: 'get-customers', component: _admin_get_customers_get_customers_component__WEBPACK_IMPORTED_MODULE_11__["GetCustomersComponent"] },
            { path: 'get-incomes', component: _admin_get_incomes_get_incomes_component__WEBPACK_IMPORTED_MODULE_22__["GetIncomesComponent"] }
        ]
    },
    {
        path: 'company', component: _shared_layouts_company_company_component__WEBPACK_IMPORTED_MODULE_4__["CompanyComponent"], canActivate: [_shared_guards_company_auth_guard__WEBPACK_IMPORTED_MODULE_20__["CompanyAuthGuard"]], children: [
            { path: 'create-coupon', component: _company_create_company_coupon_create_company_coupon_component__WEBPACK_IMPORTED_MODULE_12__["CreateCompanyCouponComponent"] },
            { path: 'my-coupons', component: _company_get_company_coupons_get_company_coupons_component__WEBPACK_IMPORTED_MODULE_13__["GetCompanyCouponsComponent"] }
        ]
    },
    {
        path: 'customer', component: _shared_layouts_customer_customer_component__WEBPACK_IMPORTED_MODULE_5__["CustomerComponent"], canActivate: [_shared_guards_customer_auth_guard__WEBPACK_IMPORTED_MODULE_21__["CustomerAuthGuard"]], children: [
            { path: 'purchase-coupon', component: _customer_purchase_coupon_purchase_coupon_component__WEBPACK_IMPORTED_MODULE_14__["PurchaseCouponComponent"] },
            { path: 'my-coupons', component: _customer_get_customer_coupons_get_customer_coupons_component__WEBPACK_IMPORTED_MODULE_15__["GetCustomerCouponsComponent"] }
        ]
    },
    { path: '**', component: _shared_page404_page404_component__WEBPACK_IMPORTED_MODULE_19__["Page404Component"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: '<router-outlet></router-outlet>'
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-progressbar/core */ "./node_modules/@ngx-progressbar/core/esm5/ngx-progressbar-core.js");
/* harmony import */ var _ngx_progressbar_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-progressbar/router */ "./node_modules/@ngx-progressbar/router/esm5/ngx-progressbar-router.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _shared_layouts_authorisation_authorisation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/layouts/authorisation/authorisation.component */ "./src/app/shared/layouts/authorisation/authorisation.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _shared_layouts_admin_admin_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/layouts/admin/admin.component */ "./src/app/shared/layouts/admin/admin.component.ts");
/* harmony import */ var _shared_layouts_company_company_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/layouts/company/company.component */ "./src/app/shared/layouts/company/company.component.ts");
/* harmony import */ var _shared_layouts_customer_customer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/layouts/customer/customer.component */ "./src/app/shared/layouts/customer/customer.component.ts");
/* harmony import */ var _admin_create_company_create_company_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin/create-company/create-company.component */ "./src/app/admin/create-company/create-company.component.ts");
/* harmony import */ var _admin_get_companies_get_companies_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./admin/get-companies/get-companies.component */ "./src/app/admin/get-companies/get-companies.component.ts");
/* harmony import */ var _admin_create_customer_create_customer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./admin/create-customer/create-customer.component */ "./src/app/admin/create-customer/create-customer.component.ts");
/* harmony import */ var _admin_get_customers_get_customers_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./admin/get-customers/get-customers.component */ "./src/app/admin/get-customers/get-customers.component.ts");
/* harmony import */ var _company_create_company_coupon_create_company_coupon_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./company/create-company-coupon/create-company-coupon.component */ "./src/app/company/create-company-coupon/create-company-coupon.component.ts");
/* harmony import */ var _company_get_company_coupons_get_company_coupons_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./company/get-company-coupons/get-company-coupons.component */ "./src/app/company/get-company-coupons/get-company-coupons.component.ts");
/* harmony import */ var _customer_purchase_coupon_purchase_coupon_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./customer/purchase-coupon/purchase-coupon.component */ "./src/app/customer/purchase-coupon/purchase-coupon.component.ts");
/* harmony import */ var _customer_get_customer_coupons_get_customer_coupons_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./customer/get-customer-coupons/get-customer-coupons.component */ "./src/app/customer/get-customer-coupons/get-customer-coupons.component.ts");
/* harmony import */ var _admin_get_coupons_get_coupons_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./admin/get-coupons/get-coupons.component */ "./src/app/admin/get-coupons/get-coupons.component.ts");
/* harmony import */ var _admin_create_coupon_create_coupon_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./admin/create-coupon/create-coupon.component */ "./src/app/admin/create-coupon/create-coupon.component.ts");
/* harmony import */ var _shared_page404_page404_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./shared/page404/page404.component */ "./src/app/shared/page404/page404.component.ts");
/* harmony import */ var _admin_get_incomes_get_incomes_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./admin/get-incomes/get-incomes.component */ "./src/app/admin/get-incomes/get-incomes.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _shared_page404_page404_component__WEBPACK_IMPORTED_MODULE_28__["Page404Component"],
                _shared_layouts_authorisation_authorisation_component__WEBPACK_IMPORTED_MODULE_12__["AuthorisationComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _registration_registration_component__WEBPACK_IMPORTED_MODULE_14__["RegistrationComponent"],
                _shared_layouts_admin_admin_component__WEBPACK_IMPORTED_MODULE_15__["AdminComponent"],
                _admin_create_company_create_company_component__WEBPACK_IMPORTED_MODULE_18__["CreateCompanyComponent"],
                _admin_get_companies_get_companies_component__WEBPACK_IMPORTED_MODULE_19__["GetCompaniesComponent"],
                _admin_create_coupon_create_coupon_component__WEBPACK_IMPORTED_MODULE_27__["CreateCouponComponent"],
                _admin_get_coupons_get_coupons_component__WEBPACK_IMPORTED_MODULE_26__["GetCouponsComponent"],
                _admin_create_customer_create_customer_component__WEBPACK_IMPORTED_MODULE_20__["CreateCustomerComponent"],
                _admin_get_customers_get_customers_component__WEBPACK_IMPORTED_MODULE_21__["GetCustomersComponent"],
                _shared_layouts_company_company_component__WEBPACK_IMPORTED_MODULE_16__["CompanyComponent"],
                _company_create_company_coupon_create_company_coupon_component__WEBPACK_IMPORTED_MODULE_22__["CreateCompanyCouponComponent"],
                _company_get_company_coupons_get_company_coupons_component__WEBPACK_IMPORTED_MODULE_23__["GetCompanyCouponsComponent"],
                _shared_layouts_customer_customer_component__WEBPACK_IMPORTED_MODULE_17__["CustomerComponent"],
                _customer_purchase_coupon_purchase_coupon_component__WEBPACK_IMPORTED_MODULE_24__["PurchaseCouponComponent"],
                _customer_get_customer_coupons_get_customer_coupons_component__WEBPACK_IMPORTED_MODULE_25__["GetCustomerCouponsComponent"],
                _admin_get_incomes_get_incomes_component__WEBPACK_IMPORTED_MODULE_29__["GetIncomesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_4__["NgProgressModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _ngx_progressbar_router__WEBPACK_IMPORTED_MODULE_5__["NgProgressRouterModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__["ServiceWorkerModule"].register('/ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].production })
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/company/create-company-coupon/create-company-coupon.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/company/create-company-coupon/create-company-coupon.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Coupon Creation Menu</h3>\n<link href='https://fonts.googleapis.com/css?family=Notable' rel='stylesheet'>\n<form class=\"example-form div2 animated bounceInRight\"\n      (ngSubmit)=\"onSubmit()\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput\n           placeholder=\"Title\"\n           [formControl]=\"form.get('title')\"\n           [errorStateMatcher]=\"matcher\"\n    >\n    <mat-error *ngIf=\"form.get('title').hasError('minlength') && !form.get('title').hasError('required')\">\n      Please enter a valid title (Minimum length: 4)\n    </mat-error>\n    <mat-error *ngIf=\"form.get('title').hasError('maxlength') && !form.get('title').hasError('required')\">\n      Please enter a valid title (Maximum length: 20)\n    </mat-error>\n    <mat-error *ngIf=\"form.get('title').hasError('required')\">\n      Title is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n  <br>\n  <mat-form-field style=\"width: 50%\" color=\"accent\">\n    <input matInput\n           placeholder=\"Start date\"\n           [formControl]=\"form.get('startDate')\"\n           [errorStateMatcher]=\"matcher\"\n           [matDatepicker]=\"startDate\"\n    >\n    <mat-error *ngIf=\"form.get('startDate').hasError('required')\">\n      Start date is <strong>required</strong>\n    </mat-error>\n    <mat-datepicker-toggle matSuffix [for]=\"startDate\"></mat-datepicker-toggle>\n    <mat-datepicker #startDate></mat-datepicker>\n  </mat-form-field>\n  <mat-form-field style=\"width: 50%\" color=\"accent\">\n    <input matInput\n           placeholder=\"End date\"\n           [formControl]=\"form.get('endDate')\"\n           [errorStateMatcher]=\"matcher\"\n           [matDatepicker]=\"endDate\"\n    >\n    <mat-error *ngIf=\"form.get('endDate').hasError('required')\">\n      End date is <strong>required</strong>\n    </mat-error>\n    <mat-datepicker-toggle matSuffix [for]=\"endDate\"></mat-datepicker-toggle>\n    <mat-datepicker #endDate color=\"primary\"></mat-datepicker>\n  </mat-form-field>\n  <br>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput\n           type=\"number\"\n           placeholder=\"Amount\"\n           [formControl]=\"form.get('amount')\"\n           [errorStateMatcher]=\"matcher\"\n    >\n    <mat-error *ngIf=\"form.get('amount').hasError('min') && !form.get('amount').hasError('required')\">\n      Please enter a valid amount (Minimum: 1)\n    </mat-error>\n    <mat-error *ngIf=\"form.get('amount').hasError('required')\">\n      Amount is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n  <br>\n  <mat-form-field>\n    <mat-select\n      placeholder=\"Coupon type\"\n      [formControl]=\"form.get('couponType')\"\n    >\n      <mat-option *ngFor=\"let coupon of coupons\" [value]=\"coupon.value\">\n        {{coupon.value}}\n      </mat-option>\n    </mat-select>\n    <mat-error *ngIf=\"form.get('couponType').hasError('required')\">\n      Coupon type is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n  <br>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput\n           placeholder=\"Message\"\n           [formControl]=\"form.get('message')\"\n           [errorStateMatcher]=\"matcher\"\n    >\n    <mat-error *ngIf=\"form.get('message').hasError('minlength') && !form.get('message').hasError('required')\">\n      Please enter a valid message (Minimum length: 4)\n    </mat-error>\n    <mat-error *ngIf=\"form.get('message').hasError('maxlength') && !form.get('message').hasError('required')\">\n      Please enter a valid message (Maximum length: 20)\n    </mat-error>\n    <mat-error *ngIf=\"form.get('message').hasError('required')\">\n      Message is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n  <br>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput\n           type=\"number\"\n           placeholder=\"Price\"\n           [formControl]=\"form.get('price')\"\n           [errorStateMatcher]=\"matcher\"\n    >\n    <mat-error *ngIf=\"form.get('price').hasError('min') && !form.get('price').hasError('required')\">\n      Please enter a valid price (Minimum: 1)\n    </mat-error>\n    <mat-error *ngIf=\"form.get('price').hasError('required')\">\n      Price is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n  <button mat-button class=\"button2\" [disabled]=\"form.invalid\">Add</button>\n</form>\n"

/***/ }),

/***/ "./src/app/company/create-company-coupon/create-company-coupon.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/company/create-company-coupon/create-company-coupon.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CreateCompanyCouponComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCompanyCouponComponent", function() { return CreateCompanyCouponComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/company.service */ "./src/app/shared/services/company.service.ts");
/* harmony import */ var _models_errorStateMatcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/errorStateMatcher */ "./src/app/models/errorStateMatcher.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreateCompanyCouponComponent = /** @class */ (function () {
    function CreateCompanyCouponComponent(company, snackBar) {
        this.company = company;
        this.snackBar = snackBar;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)
            ]),
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)
            ]),
            couponType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)
            ]),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)
            ]),
        });
        this.matcher = new _models_errorStateMatcher__WEBPACK_IMPORTED_MODULE_3__["MyErrorStateMatcher"]();
        this.coupons = [
            { value: 'FOOD' },
            { value: 'SPORTS' },
            { value: 'HEALTH' },
            { value: 'CAMPING' },
            { value: 'TRAVELLING' },
            { value: 'RESTAURANTS' },
            { value: 'ELECTRICITY' }
        ];
    }
    CreateCompanyCouponComponent.prototype.onSubmit = function () {
        var _this = this;
        var coupon = {
            title: this.form.value.title,
            startDate: new _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]('en-US').transform(this.form.value.startDate, 'yyyy-MM-dd'),
            endDate: new _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]('en-US').transform(this.form.value.endDate, 'yyyy-MM-dd'),
            amount: this.form.value.amount,
            couponType: this.form.value.couponType,
            message: this.form.value.message,
            price: this.form.value.price,
        };
        this.company.createCoupon(coupon).subscribe(function () { return _this.snackBar.open('New coupon successfully added.', '', { duration: 3000 }); }, function (error) {
            _this.snackBar.open(error, '', { duration: 3000 });
        });
    };
    CreateCompanyCouponComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-coupon',
            template: __webpack_require__(/*! ./create-company-coupon.component.html */ "./src/app/company/create-company-coupon/create-company-coupon.component.html"),
            styles: [__webpack_require__(/*! ../../../app/shared/layouts/company/company.component.css */ "./src/app/shared/layouts/company/company.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], CreateCompanyCouponComponent);
    return CreateCompanyCouponComponent;
}());



/***/ }),

/***/ "./src/app/company/get-company-coupons/get-company-coupons.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/company/get-company-coupons/get-company-coupons.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Company's Coupon Information </h3>\n\n<form class=\"div2 animated bounceInRight\">\n  <mat-form-field>\n    <input matInput (keyup)=\"couponFilter($event.target.value)\" placeholder=\"Filter\">\n  </mat-form-field>\n\n<table mat-table [dataSource]=\"couponSource\" multiTemplateDataRows class=\"mat-elevation-z8\">\n\n  <ng-container matColumnDef=\"title\">\n    <th mat-header-cell *matHeaderCellDef>Title</th>\n    <td mat-cell *matCellDef=\"let element\">{{element.title}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"startDate\">\n    <th mat-header-cell *matHeaderCellDef>Creation Date</th>\n    <td mat-cell *matCellDef=\"let element\">{{element.startDate}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"endDate\">\n    <th mat-header-cell *matHeaderCellDef>Experation Date</th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.endDate}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"amount\">\n    <th mat-header-cell *matHeaderCellDef>Amount</th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.amount}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"couponType\">\n    <th mat-header-cell *matHeaderCellDef>Coupon Type</th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.couponType}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"message\">\n    <th mat-header-cell *matHeaderCellDef>Message</th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.message}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"price\">\n    <th mat-header-cell *matHeaderCellDef>Price</th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.price}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"companyId\">\n    <th mat-header-cell *matHeaderCellDef>Company ID</th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.companyId}} </td>\n  </ng-container>\n\n\n\n    <ng-container matColumnDef=\"expandedDetail\">\n      <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"couponColumns.length\">\n        <div class=\"example-element-detail\"\n             [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\n          <div class=\"example-element-description\">\n            <button mat-stroked-button class=\"button3\"\n                    (click)=\"onShowUpdate()\"\n            >Update\n            </button>\n            <button mat-stroked-button class=\"button3\"\n                    (click)=\"onDelete(element.id)\"\n            >Remove\n            </button>\n            <br>\n            <form *ngIf=\"showUpdate\" class=\"example-form div2 animated bounceInUp faster\"\n                  (ngSubmit)=\"onUpdate(element.id)\"\n            >\n              <mat-form-field color=\"accent\">\n                <mat-label>End date</mat-label>\n                <input matInput\n                       [matDatepicker]=\"endDate\"\n                       [formControl]=\"form.get('endDate')\"\n                       [errorStateMatcher]=\"matcher\"\n                >\n                <mat-error *ngIf=\"form.get('endDate').hasError('required')\">\n                  End date is <strong>required</strong>\n                </mat-error>\n                <mat-datepicker-toggle matSuffix [for]=\"endDate\"></mat-datepicker-toggle>\n                <mat-datepicker #endDate color=\"primary\"></mat-datepicker>\n              </mat-form-field>\n              <br>\n              <mat-form-field class=\"example-full-width\">\n                <input matInput\n                       type=\"number\"\n                       placeholder=\"Price\"\n                       [formControl]=\"form.get('price')\"\n                       [errorStateMatcher]=\"matcher\"\n                >\n                <mat-error *ngIf=\"form.get('price').hasError('min') && !form.get('price').hasError('required')\">\n                  Please enter a valid price (Minimum: 1)\n                </mat-error>\n                <mat-error *ngIf=\"form.get('price').hasError('required')\">\n                  Price is <strong>required</strong>\n                </mat-error>\n              </mat-form-field>\n              <br>\n              <mat-form-field class=\"example-full-width\">\n                <input matInput\n                       type=\"number\"\n                       placeholder=\"Amount\"\n                       [formControl]=\"form.get('amount')\"\n                       [errorStateMatcher]=\"matcher\"\n                >\n                <mat-error *ngIf=\"form.get('amount').hasError('min') && !form.get('amount').hasError('required')\">\n                  Please enter a valid amount (Minimum: 1)\n                </mat-error>\n                <mat-error *ngIf=\"form.get('amount').hasError('required')\">\n                  Amount is <strong>required</strong>\n                </mat-error>\n              </mat-form-field>\n              <button mat-button class=\"button2\" [disabled]=\"form.invalid\">Update</button>\n            </form>\n          </div>\n        </div>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"couponColumns\"></tr>\n    <tr mat-row *matRowDef=\"let element; columns: couponColumns;\"\n        class=\"example-element-row\"\n        [class.example-expanded-row]=\"expandedElement === element\"\n        (click)=\"expandedElement = expandedElement === element ? null : element\">\n    </tr>\n    <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\n  </table>\n</form>\n"

/***/ }),

/***/ "./src/app/company/get-company-coupons/get-company-coupons.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/company/get-company-coupons/get-company-coupons.component.ts ***!
  \******************************************************************************/
/*! exports provided: GetCompanyCouponsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCompanyCouponsComponent", function() { return GetCompanyCouponsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_services_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/company.service */ "./src/app/shared/services/company.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_errorStateMatcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/errorStateMatcher */ "./src/app/models/errorStateMatcher.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GetCompanyCouponsComponent = /** @class */ (function () {
    function GetCompanyCouponsComponent(company, snackBar) {
        this.company = company;
        this.snackBar = snackBar;
        this.couponColumns = ['title', 'startDate', 'endDate', 'amount', 'couponType', 'message', 'price'];
        this.matcher = new _models_errorStateMatcher__WEBPACK_IMPORTED_MODULE_5__["MyErrorStateMatcher"]();
        this.showUpdate = false;
        this.coupons = [
            { value: 'FOOD' },
            { value: 'SPORTS' },
            { value: 'HEALTH' },
            { value: 'CAMPING' },
            { value: 'TRAVELLING' },
            { value: 'RESTAURANTS' },
            { value: 'ELECTRICITY' }
        ];
    }
    GetCompanyCouponsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.company.getAllCoupons().subscribe(function (coupons) { return _this.couponSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](coupons); }, function (error) {
            _this.snackBar.open(error, '', { duration: 3000 });
        });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ]),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ]),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ])
        });
    };
    GetCompanyCouponsComponent.prototype.couponFilter = function (filterValue) {
        this.couponSource.filter = filterValue.trim().toLowerCase();
    };
    GetCompanyCouponsComponent.prototype.onDelete = function (id) {
        var _this = this;
        this.company.deleteCoupon(id).subscribe(function () { return _this.snackBar.open('Coupon successfully removed.', '', { duration: 3000 }); }, function (error) {
            _this.snackBar.open(error, '', { duration: 3000 });
        });
    };
    GetCompanyCouponsComponent.prototype.onUpdate = function (id) {
        var _this = this;
        var coupon = {
            id: id,
            endDate: new _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]('en-US').transform(this.form.value.endDate, 'yyyy-MM-dd'),
            amount: this.form.value.amount,
            price: this.form.value.price
        };
        this.company.updateCoupon(coupon).subscribe(function () { return _this.snackBar.open('Coupon successfully updated.', '', { duration: 3000 }); }, function (error) {
            _this.snackBar.open(error, '', { duration: 3000 });
        });
    };
    GetCompanyCouponsComponent.prototype.onShowUpdate = function () {
        this.showUpdate === false ? this.showUpdate = true : this.showUpdate = false;
    };
    GetCompanyCouponsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-get-coupons',
            template: __webpack_require__(/*! ./get-company-coupons.component.html */ "./src/app/company/get-company-coupons/get-company-coupons.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('detailExpand', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ height: '0px', minHeight: '0', display: 'none' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ height: '*' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
                ])
            ],
            styles: [__webpack_require__(/*! ../../shared/layouts/company/company.component.css */ "./src/app/shared/layouts/company/company.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], GetCompanyCouponsComponent);
    return GetCompanyCouponsComponent;
}());



/***/ }),

/***/ "./src/app/customer/get-customer-coupons/get-customer-coupons.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/customer/get-customer-coupons/get-customer-coupons.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>My Coupons</h3>\n\n<form class=\"div2 animated bounceInRight\">\n  <mat-form-field>\n    <input matInput (keyup)=\"couponFilter($event.target.value)\" placeholder=\"Filter\">\n  </mat-form-field>\n\n  <table mat-table [dataSource]=\"couponSource\" class=\"mat-elevation-z8\">\n\n    <!-- Title column -->\n    <ng-container matColumnDef=\"title\">\n      <th mat-header-cell *matHeaderCellDef>Title</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.title}} </td>\n    </ng-container>\n\n    <!-- Start date column -->\n    <ng-container matColumnDef=\"startDate\">\n      <th mat-header-cell *matHeaderCellDef>Creation Date</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.startDate}} </td>\n    </ng-container>\n\n    <!-- End date column -->\n    <ng-container matColumnDef=\"endDate\">\n      <th mat-header-cell *matHeaderCellDef>Experation Date</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.endDate}} </td>\n    </ng-container>\n\n    <!-- Amount column -->\n    <ng-container matColumnDef=\"amount\">\n      <th mat-header-cell *matHeaderCellDef>Amount</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.amount}} </td>\n    </ng-container>\n\n    <!-- Type column -->\n    <ng-container matColumnDef=\"couponType\">\n      <th mat-header-cell *matHeaderCellDef>Coupon Type</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.couponType}} </td>\n    </ng-container>\n\n    <!-- Message column -->\n    <ng-container matColumnDef=\"message\">\n      <th mat-header-cell *matHeaderCellDef>Message</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.message}} </td>\n    </ng-container>\n\n    <!-- Price column -->\n    <ng-container matColumnDef=\"price\">\n      <th mat-header-cell *matHeaderCellDef>Price</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.price}} </td>\n    </ng-container>\n\n    <!-- Image column -->\n    <ng-container matColumnDef=\"image\">\n      <th mat-header-cell *matHeaderCellDef>Image</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.image}} </td>\n    </ng-container>\n\n\n\n\n\n    <tr mat-header-row *matHeaderRowDef=\"couponColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: couponColumns;\"></tr>\n  </table>\n</form>\n"

/***/ }),

/***/ "./src/app/customer/get-customer-coupons/get-customer-coupons.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/customer/get-customer-coupons/get-customer-coupons.component.ts ***!
  \*********************************************************************************/
/*! exports provided: GetCustomerCouponsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCustomerCouponsComponent", function() { return GetCustomerCouponsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_services_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/customer.service */ "./src/app/shared/services/customer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetCustomerCouponsComponent = /** @class */ (function () {
    function GetCustomerCouponsComponent(customer, snackBar) {
        this.customer = customer;
        this.snackBar = snackBar;
        this.couponColumns = ['title', 'startDate', 'endDate', 'amount', 'couponType', 'message', 'price', 'image'];
    }
    GetCustomerCouponsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.customer.getPurchasedCoupons().subscribe(function (coupons) { return _this.couponSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](coupons); }, function (error) {
            _this.snackBar.open(error, '', { duration: 3000 });
        });
    };
    GetCustomerCouponsComponent.prototype.couponFilter = function (filterValue) {
        this.couponSource.filter = filterValue.trim().toLowerCase();
    };
    GetCustomerCouponsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-get-coupons',
            template: __webpack_require__(/*! ./get-customer-coupons.component.html */ "./src/app/customer/get-customer-coupons/get-customer-coupons.component.html"),
            styles: [__webpack_require__(/*! ../../shared/layouts/customer/customer.component.css */ "./src/app/shared/layouts/customer/customer.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], GetCustomerCouponsComponent);
    return GetCustomerCouponsComponent;
}());



/***/ }),

/***/ "./src/app/customer/purchase-coupon/purchase-coupon.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/customer/purchase-coupon/purchase-coupon.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Available Coupons Table</h3>\n\n<form class=\"div2 animated bounceInRight\">\n  <mat-form-field>\n    <input matInput (keyup)=\"couponFilter($event.target.value)\" placeholder=\"Filter\">\n  </mat-form-field>\n\n  <table mat-table [dataSource]=\"couponSource\" multiTemplateDataRows class=\"mat-elevation-z8\">\n\n    <ng-container matColumnDef=\"title\">\n      <th mat-header-cell *matHeaderCellDef>Title</th>\n      <td mat-cell *matCellDef=\"let element\">{{element.title}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"startDate\">\n      <th mat-header-cell *matHeaderCellDef>Creation Date</th>\n      <td mat-cell *matCellDef=\"let element\">{{element.startDate}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"endDate\">\n      <th mat-header-cell *matHeaderCellDef>Experation Date</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.endDate}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"amount\">\n      <th mat-header-cell *matHeaderCellDef>Amount</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.amount}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"couponType\">\n      <th mat-header-cell *matHeaderCellDef>Coupon Type</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.couponType}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"message\">\n      <th mat-header-cell *matHeaderCellDef>Message</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.message}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"price\">\n      <th mat-header-cell *matHeaderCellDef>Price</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.price}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"companyId\">\n      <th mat-header-cell *matHeaderCellDef>Company ID</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.companyId}} </td>\n    </ng-container>\n\n\n\n    <ng-container matColumnDef=\"expandedDetail\">\n      <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"couponColumns.length\">\n        <div class=\"example-element-detail\"\n             [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\n          <div class=\"example-element-description\">\n            <button mat-stroked-button class=\"button3\"\n                    (click)=\"onPurchase(element.id)\"\n            >Purchase\n            </button>\n          </div>\n        </div>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"couponColumns\"></tr>\n    <tr mat-row *matRowDef=\"let element; columns: couponColumns;\"\n        class=\"example-element-row\"\n        [class.example-expanded-row]=\"expandedElement === element\"\n        (click)=\"expandedElement = expandedElement === element ? null : element\">\n    </tr>\n    <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\n  </table>\n</form>\n"

/***/ }),

/***/ "./src/app/customer/purchase-coupon/purchase-coupon.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/customer/purchase-coupon/purchase-coupon.component.ts ***!
  \***********************************************************************/
/*! exports provided: PurchaseCouponComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseCouponComponent", function() { return PurchaseCouponComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_services_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/customer.service */ "./src/app/shared/services/customer.service.ts");
/* harmony import */ var _models_errorStateMatcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/errorStateMatcher */ "./src/app/models/errorStateMatcher.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PurchaseCouponComponent = /** @class */ (function () {
    function PurchaseCouponComponent(customer, snackBar) {
        this.customer = customer;
        this.snackBar = snackBar;
        this.couponColumns = ['title', 'startDate', 'endDate', 'amount', 'couponType', 'message', 'price'];
        this.matcher = new _models_errorStateMatcher__WEBPACK_IMPORTED_MODULE_3__["MyErrorStateMatcher"]();
    }
    PurchaseCouponComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.customer.getAvailableCoupons().subscribe(function (coupons) { return _this.couponSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](coupons); }, function (error) {
            _this.snackBar.open(error, '', { duration: 3000 });
        });
    };
    PurchaseCouponComponent.prototype.couponFilter = function (filterValue) {
        this.couponSource.filter = filterValue.trim().toLowerCase();
    };
    PurchaseCouponComponent.prototype.onPurchase = function (id) {
        var _this = this;
        this.customer.purchaseCoupon(id).subscribe(function () { return _this.snackBar.open('Coupon successfully purchased.', '', { duration: 3000 }); }, function (error) {
            _this.snackBar.open(error, '', { duration: 3000 });
        });
    };
    PurchaseCouponComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-purchase-coupon',
            template: __webpack_require__(/*! ./purchase-coupon.component.html */ "./src/app/customer/purchase-coupon/purchase-coupon.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('detailExpand', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ height: '0px', minHeight: '0', display: 'none' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ height: '*' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
                ])
            ],
            styles: [__webpack_require__(/*! ../../../app/shared/layouts/customer/customer.component.css */ "./src/app/shared/layouts/customer/customer.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], PurchaseCouponComponent);
    return PurchaseCouponComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"div1 animated fadeIn slow\"\n      (ngSubmit)=\"onSubmit()\"\n>\n<link href='https://fonts.googleapis.com/css?family=Notable' rel='stylesheet'>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput\n           placeholder=\"Username\"\n           [formControl]=\"form.get('name')\"\n           [errorStateMatcher]=\"matcher\"\n    >\n    <mat-error *ngIf=\"form.get('name').hasError('minlength') && !form.get('name').hasError('required')\">\n      Please enter a valid username (Minimum length: 4)\n    </mat-error>\n    <mat-error *ngIf=\"form.get('name').hasError('maxlength') && !form.get('name').hasError('required')\">\n      Please enter a valid username (Maximum length: 20)\n    </mat-error>\n    <mat-error *ngIf=\"form.get('name').hasError('required')\">\n      Username is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n  <br>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput\n           type=\"password\"\n           placeholder=\"Password\"\n           [formControl]=\"form.get('password')\"\n           [errorStateMatcher]=\"matcher\"\n    >\n    <mat-error *ngIf=\"form.get('password').hasError('minlength') && !form.get('password').hasError('required')\">\n      Please enter a valid password (Minimum length: 4)\n    </mat-error>\n    <mat-error *ngIf=\"form.get('password').hasError('maxlength') && !form.get('password').hasError('required')\">\n      Please enter a valid password (Maximum length: 20)\n    </mat-error>\n    <mat-error *ngIf=\"form.get('password').hasError('required')\">\n      Password is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n  <br>\n  <mat-form-field>\n    <mat-select\n      placeholder=\"Client type\"\n      [formControl]=\"form.get('clientType')\"\n    >\n      <mat-option *ngFor=\"let client of clients\" [value]=\"client.value\">\n        {{client.value}}\n      </mat-option>\n    </mat-select>\n    <mat-error *ngIf=\"form.get('clientType').hasError('required')\">\n      Client type is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n  <br>\n  <button mat-button [disabled]=\"form.invalid || form.disabled\">Log in</button>\n  <button mat-button routerLink=\"/registration\">Sign In</button>\n</form>\n\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_authorisation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/authorisation.service */ "./src/app/shared/services/authorisation.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_errorStateMatcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/errorStateMatcher */ "./src/app/models/errorStateMatcher.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router, snackBar) {
        this.auth = auth;
        this.router = router;
        this.snackBar = snackBar;
        this.matcher = new _models_errorStateMatcher__WEBPACK_IMPORTED_MODULE_4__["MyErrorStateMatcher"]();
        this.clients = [
            { value: 'ADMIN' },
            { value: 'COMPANY' },
            { value: 'CUSTOMER' }
        ];
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)
            ]),
            clientType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ])
        });
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.form.disable();
        this.sub = this.auth.login(this.form.value).subscribe(function () {
            if (_this.form.value.clientType === 'ADMIN') {
                _this.router.navigate(['/admin']);
            }
            else if (_this.form.value.clientType === 'COMPANY') {
                _this.router.navigate(['/company']);
            }
            else if (_this.form.value.clientType === 'CUSTOMER') {
                _this.router.navigate(['/customer']);
            }
        }, function (error) {
            _this.snackBar.open(error, '', { duration: 3000 });
            _this.form.enable();
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ../shared/layouts/authorisation/authorisation.component.css */ "./src/app/shared/layouts/authorisation/authorisation.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_authorisation_service__WEBPACK_IMPORTED_MODULE_2__["AuthorisationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/errorStateMatcher.ts":
/*!*********************************************!*\
  !*** ./src/app/models/errorStateMatcher.ts ***!
  \*********************************************/
/*! exports provided: MyErrorStateMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/** Error when invalid control is dirty, touched, or submitted. */
var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());



/***/ }),

/***/ "./src/app/registration/registration.component.html":
/*!**********************************************************!*\
  !*** ./src/app/registration/registration.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"div1 animated fadeIn slow\"\n      (ngSubmit)=\"onSubmit()\"\n>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput\n           placeholder=\"Email\"\n           [formControl]=\"form.get('email')\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error *ngIf=\"form.get('email').hasError('email') && !form.get('email').hasError('required')\">\n      Please enter a valid email address\n    </mat-error>\n    <mat-error *ngIf=\"form.get('email').hasError('maxlength') && !form.get('email').hasError('required')\">\n      Please enter a valid email (Maximum length: 20)\n    </mat-error>\n    <mat-error *ngIf=\"form.get('email').hasError('required')\">\n      Email is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n  <br>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput\n           placeholder=\"Username\"\n           [formControl]=\"form.get('name')\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error *ngIf=\"form.get('name').hasError('minlength') && !form.get('name').hasError('required')\">\n      Please enter a valid username (Minimum length: 4)\n    </mat-error>\n    <mat-error *ngIf=\"form.get('name').hasError('maxlength') && !form.get('name').hasError('required')\">\n      Please enter a valid username (Maximum length: 20)\n    </mat-error>\n    <mat-error *ngIf=\"form.get('name').hasError('required')\">\n      Username is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n  <br>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput\n           type=\"password\"\n           placeholder=\"Password\"\n           [formControl]=\"form.get('password')\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error *ngIf=\"form.get('password').hasError('minlength') && !form.get('password').hasError('required')\">\n      Please enter a valid password (Minimum length: 4)\n    </mat-error>\n    <mat-error *ngIf=\"form.get('password').hasError('maxlength') && !form.get('password').hasError('required')\">\n      Please enter a valid password (Maximum length: 20)\n    </mat-error>\n    <mat-error *ngIf=\"form.get('password').hasError('required')\">\n      Password is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n  <br>\n  <mat-form-field>\n    <mat-select\n      placeholder=\"Client type\"\n      [formControl]=\"form.get('clientType')\"\n    >\n      <mat-option *ngFor=\"let client of clients\" [value]=\"client.value\">\n        {{client.value}}\n      </mat-option>\n    </mat-select>\n    <mat-error *ngIf=\"form.get('clientType').hasError('required')\">\n      Client type is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n  <br>\n  <button mat-button routerLink=\"/login\">Sing in</button>\n  <button mat-button [disabled]=\"form.invalid || form.disabled\">Sing up</button>\n</form>\n\n"

/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_authorisation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/authorisation.service */ "./src/app/shared/services/authorisation.service.ts");
/* harmony import */ var _models_errorStateMatcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/errorStateMatcher */ "./src/app/models/errorStateMatcher.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(auth, snackBar) {
        this.auth = auth;
        this.snackBar = snackBar;
        this.matcher = new _models_errorStateMatcher__WEBPACK_IMPORTED_MODULE_3__["MyErrorStateMatcher"]();
        this.clients = [
            { value: 'COMPANY' },
            { value: 'CUSTOMER' }
        ];
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)
            ]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)
            ]),
            clientType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ])
        });
    };
    RegistrationComponent.prototype.ngOnDestroy = function () {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    };
    RegistrationComponent.prototype.onSubmit = function () {
        var _this = this;
        this.form.disable();
        var regUser = {
            name: this.form.value.name,
            password: this.form.value.password,
            email: this.form.value.email
        };
        if (this.form.value.clientType === 'COMPANY') {
            this.sub = this.auth.regCompany(regUser).subscribe(function () { return _this.snackBar.open('Successful registration.', '', { duration: 3000 }); }, function (error) {
                _this.snackBar.open(error, '', { duration: 3000 });
                _this.form.enable();
            });
        }
        else if (this.form.value.clientType === 'CUSTOMER') {
            this.sub = this.auth.regCustomer(regUser).subscribe(function () { return _this.snackBar.open('Successful registration.', '', { duration: 3000 }); }, function (error) {
                _this.snackBar.open(error, '', { duration: 3000 });
                _this.form.enable();
            });
        }
    };
    RegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ../shared/layouts/authorisation/authorisation.component.css */ "./src/app/shared/layouts/authorisation/authorisation.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_authorisation_service__WEBPACK_IMPORTED_MODULE_2__["AuthorisationService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/shared/guards/admin-auth.guard.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/guards/admin-auth.guard.ts ***!
  \***************************************************/
/*! exports provided: AdminAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAuthGuard", function() { return AdminAuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_authorisation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authorisation.service */ "./src/app/shared/services/authorisation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminAuthGuard = /** @class */ (function () {
    function AdminAuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    // makes sure we cant just use api address to enter the next page ..we must log in first
    AdminAuthGuard.prototype.canActivate = function (route, state) {
        if (this.auth.isAdminLoggedIn()) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
        }
        else {
            this.router.navigate(['/login']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
        }
    };
    AdminAuthGuard.prototype.canActivateChild = function (childRoute, state) {
        return this.canActivate(childRoute, state);
    };
    AdminAuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_authorisation_service__WEBPACK_IMPORTED_MODULE_3__["AuthorisationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AdminAuthGuard);
    return AdminAuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/guards/company-auth.guard.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/guards/company-auth.guard.ts ***!
  \*****************************************************/
/*! exports provided: CompanyAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyAuthGuard", function() { return CompanyAuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_authorisation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authorisation.service */ "./src/app/shared/services/authorisation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompanyAuthGuard = /** @class */ (function () {
    function CompanyAuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    CompanyAuthGuard.prototype.canActivate = function (route, state) {
        if (this.auth.isCompanyLoggedIn()) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
        }
        else {
            this.router.navigate(['/login']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
        }
    };
    CompanyAuthGuard.prototype.canActivateChild = function (childRoute, state) {
        return this.canActivate(childRoute, state);
    };
    CompanyAuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_authorisation_service__WEBPACK_IMPORTED_MODULE_3__["AuthorisationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CompanyAuthGuard);
    return CompanyAuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/guards/customer-auth.guard.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/guards/customer-auth.guard.ts ***!
  \******************************************************/
/*! exports provided: CustomerAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerAuthGuard", function() { return CustomerAuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_authorisation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authorisation.service */ "./src/app/shared/services/authorisation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomerAuthGuard = /** @class */ (function () {
    function CustomerAuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    CustomerAuthGuard.prototype.canActivate = function (route, state) {
        if (this.auth.isCustomerLoggedIn()) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
        }
        else {
            this.router.navigate(['/login']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
        }
    };
    CustomerAuthGuard.prototype.canActivateChild = function (childRoute, state) {
        return this.canActivate(childRoute, state);
    };
    CustomerAuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_authorisation_service__WEBPACK_IMPORTED_MODULE_3__["AuthorisationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CustomerAuthGuard);
    return CustomerAuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/layouts/admin/admin.component.css":
/*!**********************************************************!*\
  !*** ./src/app/shared/layouts/admin/admin.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spacer {\n  flex: 1 1 auto;\n}\n\n\n.mat-menu-item {\n  color: #45047a;\n  text-align: center;\n}\n\n\n/*Sign Out*/\n\n\n.sure {\n  font-family: notable;\n  font-size: small;\n  text-align: center;\n  color: #6a0883;\n  margin-top: 5px;\n  margin-bottom: 15px;\n  margin-left: 15px;\n}\n\n\n/* Main Page*/\n\n\n.container {\n  background-color: rgba(53, 52, 52, 0.966);\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n\nmat-sidenav {\n  \n  width: 250px;;\n}\n\n\n.no-shadow {\n  background-color: #45047a;\n  box-shadow: none !important;\n}\n\n\n::ng-deep .mat-expansion-panel-body {\n  padding: 0 !important;\n  padding-left: 10px !important;\n}\n\n\n/*Tool-Bar*/\n\n\n.header-box-shadow {\n  background-color: #45047a;\n  box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);\n}\n\n\n/*Nav-Bar*/\n\n\n.bottom-to-top {\n  background-color: #45047a;\n  border: 0 solid;\n  border-right-width: 1px;\n  -o-border-image:\n  linear-gradient(to top, #c1c1c1, rgba(0, 0, 0, 0)) 1 100%;\n     border-image:\n  linear-gradient(to top, #c1c1c1, rgba(0, 0, 0, 0)) 1 100%\n}\n\n\n.mat-form-field {\n  \n  font-size: 14px;\n  width: 100%;\n}\n\n\n/*Nav-Bar -- add+show buttons*/\n\n\n.button1 {\n  color: ghostwhite;\n  text-align: left;\n  font-weight: normal;\n  font-size: 14px;\n  width: 230px;\n}\n\n\n/*Nav-Bar --add button (create) */\n\n\n.button2 {\n  color: ghostwhite;\n  width: 100%;\n}\n\n\n/*Nav-Bar --update+remove(show button)*/\n\n\n.button3 {\n  color: #43076b;\n  width: 1000px;\n}\n\n\n/*Nav-Bar --Income button*/\n\n\n.button4 {\n  color: ghostwhite;\n  font-family: notable;\n  text-align: left;\n  font-weight: normal;\n  font-size: 14px;\n  width: 230px;\n  margin-left: 9px;\n}\n\n\n/*WELCOME fade-in header*/\n\n\nh1 {\n  text-align: center;\n  font-family: notable;\n  font-size: 130px;\n  color: #410572;\n  text-shadow: 1px 3px 0 #5c00a7, 1px 13px 5px #c752d6;\n}\n\n\n/*DATE fade-in header*/\n\n\nh2 {\n  text-align: center;\n  font-family: notable;\n  font-size: 65px;\n  color: #410572;\n  text-shadow: 1px 3px 0 #5c00a7, 1px 10px 5px #c752d6;\n}\n\n\n/*Header -- Company,Coupon,Customer,Income Tables*/\n\n\nh3 {\n  text-align: center;\n  font-family: notable;\n  font-size: 40px;\n  color: #410572;\n  text-shadow: 1px 2px 1px #5c00a7, 1px 2px 1px #c752d6;\n}\n\n\n/*Table --header*/\n\n\nth {\n  background-color: #45047a;\n  font-size: 15px;\n  font-weight: bold;\n    color: ghostwhite;\n}\n\n\ntable {\n  width: 100%;\n}\n\n\ntr.example-detail-row {\n  height: 0;\n}\n\n\n/*Table Hover -color*/\n\n\ntr.example-element-row:not(.example-expanded-row):hover {\n  background: #2f5fb9;\n}\n\n\ntr.example-element-row:not(.example-expanded-row):active {\n  background: #610479;\n}\n\n\n.example-element-row td {\n  border-bottom-width: 0;\n}\n\n\n.example-element-detail {\n  overflow: hidden;\n  display: flex;\n}\n\n\n.example-element-diagram {\n  min-width: 80px;\n  border: 2px solid rgb(17, 179, 17);\n  padding: 8px;\n  font-weight: lighter;\n  margin: 8px 0;\n  height: 104px;\n}\n\n\n.example-element-symbol {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: normal;\n}\n\n\n.example-element-description {\n  padding: 16px;\n}\n\n\n.example-element-description-attribution {\n  opacity: 0.5;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xheW91dHMvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEI7OztBQUdBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7O0FBQ0EsV0FBVzs7O0FBQ1g7RUFDRSxvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7OztBQUNBLGFBQWE7OztBQUNiO0VBQ0UseUNBQXlDO0VBQ3pDLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0FBQ1Y7OztBQUVBOztFQUVFLFlBQVk7QUFDZDs7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsMkJBQTJCO0FBQzdCOzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiw2QkFBNkI7QUFDL0I7OztBQUNBLFdBQVc7OztBQUNYO0VBQ0UseUJBQXlCO0VBQ3pCLHFHQUFxRztBQUN2Rzs7O0FBQ0EsVUFBVTs7O0FBQ1Y7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QjsyREFDd0Q7S0FEeEQ7O0FBRUY7OztBQUVBOztFQUVFLGVBQWU7RUFDZixXQUFXO0FBQ2I7OztBQUNBLDhCQUE4Qjs7O0FBQzlCO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFlBQVk7QUFDZDs7O0FBQ0EsaUNBQWlDOzs7QUFDakM7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztBQUNiOzs7QUFDQSx1Q0FBdUM7OztBQUN2QztFQUNFLGNBQWM7RUFDZCxhQUFhO0FBQ2Y7OztBQUNBLDBCQUEwQjs7O0FBQzFCO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOzs7QUFDQSx5QkFBeUI7OztBQUN6QjtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxvREFBb0Q7QUFDdEQ7OztBQUNBLHNCQUFzQjs7O0FBQ3RCO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsY0FBYztFQUNkLG9EQUFvRDtBQUN0RDs7O0FBQ0Esa0RBQWtEOzs7QUFDbEQ7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixjQUFjO0VBQ2QscURBQXFEO0FBQ3ZEOzs7QUFDQSxpQkFBaUI7OztBQUNqQjtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsaUJBQWlCO0lBQ2YsaUJBQWlCO0FBQ3JCOzs7QUFHQTtFQUNFLFdBQVc7QUFDYjs7O0FBR0E7RUFDRSxTQUFTO0FBQ1g7OztBQUNBLHFCQUFxQjs7O0FBQ3JCO0VBQ0UsbUJBQW1CO0FBQ3JCOzs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7OztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLGFBQWE7QUFDZjs7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7OztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2xheW91dHMvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuXG4ubWF0LW1lbnUtaXRlbSB7XG4gIGNvbG9yOiAjNDUwNDdhO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4vKlNpZ24gT3V0Ki9cbi5zdXJlIHtcbiAgZm9udC1mYW1pbHk6IG5vdGFibGU7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM2YTA4ODM7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG4vKiBNYWluIFBhZ2UqL1xuLmNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTMsIDUyLCA1MiwgMC45NjYpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxubWF0LXNpZGVuYXYge1xuICBcbiAgd2lkdGg6IDI1MHB4Oztcbn1cblxuLm5vLXNoYWRvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NTA0N2E7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWJvZHkge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xufVxuLypUb29sLUJhciovXG4uaGVhZGVyLWJveC1zaGFkb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDUwNDdhO1xuICBib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCByZ2JhKDAsMCwwLC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwwLDAsLjEyKTtcbn1cbi8qTmF2LUJhciovXG4uYm90dG9tLXRvLXRvcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NTA0N2E7XG4gIGJvcmRlcjogMCBzb2xpZDtcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAxcHg7XG4gIGJvcmRlci1pbWFnZTpcbiAgbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgI2MxYzFjMSwgcmdiYSgwLCAwLCAwLCAwKSkgMSAxMDAlXG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIFxuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLypOYXYtQmFyIC0tIGFkZCtzaG93IGJ1dHRvbnMqL1xuLmJ1dHRvbjEge1xuICBjb2xvcjogZ2hvc3R3aGl0ZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMjMwcHg7XG59XG4vKk5hdi1CYXIgLS1hZGQgYnV0dG9uIChjcmVhdGUpICovXG4uYnV0dG9uMiB7XG4gIGNvbG9yOiBnaG9zdHdoaXRlO1xuICB3aWR0aDogMTAwJTtcbn1cbi8qTmF2LUJhciAtLXVwZGF0ZStyZW1vdmUoc2hvdyBidXR0b24pKi9cbi5idXR0b24zIHtcbiAgY29sb3I6ICM0MzA3NmI7XG4gIHdpZHRoOiAxMDAwcHg7XG59XG4vKk5hdi1CYXIgLS1JbmNvbWUgYnV0dG9uKi9cbi5idXR0b240IHtcbiAgY29sb3I6IGdob3N0d2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBub3RhYmxlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiAyMzBweDtcbiAgbWFyZ2luLWxlZnQ6IDlweDtcbn1cbi8qV0VMQ09NRSBmYWRlLWluIGhlYWRlciovXG5oMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IG5vdGFibGU7XG4gIGZvbnQtc2l6ZTogMTMwcHg7XG4gIGNvbG9yOiAjNDEwNTcyO1xuICB0ZXh0LXNoYWRvdzogMXB4IDNweCAwICM1YzAwYTcsIDFweCAxM3B4IDVweCAjYzc1MmQ2O1xufVxuLypEQVRFIGZhZGUtaW4gaGVhZGVyKi9cbmgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogbm90YWJsZTtcbiAgZm9udC1zaXplOiA2NXB4O1xuICBjb2xvcjogIzQxMDU3MjtcbiAgdGV4dC1zaGFkb3c6IDFweCAzcHggMCAjNWMwMGE3LCAxcHggMTBweCA1cHggI2M3NTJkNjtcbn1cbi8qSGVhZGVyIC0tIENvbXBhbnksQ291cG9uLEN1c3RvbWVyLEluY29tZSBUYWJsZXMqL1xuaDMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBub3RhYmxlO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiAjNDEwNTcyO1xuICB0ZXh0LXNoYWRvdzogMXB4IDJweCAxcHggIzVjMDBhNywgMXB4IDJweCAxcHggI2M3NTJkNjtcbn1cbi8qVGFibGUgLS1oZWFkZXIqL1xudGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDUwNDdhO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiBnaG9zdHdoaXRlO1xufVxuXG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cblxudHIuZXhhbXBsZS1kZXRhaWwtcm93IHtcbiAgaGVpZ2h0OiAwO1xufVxuLypUYWJsZSBIb3ZlciAtY29sb3IqL1xudHIuZXhhbXBsZS1lbGVtZW50LXJvdzpub3QoLmV4YW1wbGUtZXhwYW5kZWQtcm93KTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMyZjVmYjk7XG59XG5cbnRyLmV4YW1wbGUtZWxlbWVudC1yb3c6bm90KC5leGFtcGxlLWV4cGFuZGVkLXJvdyk6YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzYxMDQ3OTtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1yb3cgdGQge1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xufVxuXG4uZXhhbXBsZS1lbGVtZW50LWRldGFpbCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5leGFtcGxlLWVsZW1lbnQtZGlhZ3JhbSB7XG4gIG1pbi13aWR0aDogODBweDtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDE3LCAxNzksIDE3KTtcbiAgcGFkZGluZzogOHB4O1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgbWFyZ2luOiA4cHggMDtcbiAgaGVpZ2h0OiAxMDRweDtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1zeW1ib2wge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuXG4uZXhhbXBsZS1lbGVtZW50LWRlc2NyaXB0aW9uIHtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1kZXNjcmlwdGlvbi1hdHRyaWJ1dGlvbiB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/layouts/admin/admin.component.html":
/*!***********************************************************!*\
  !*** ./src/app/shared/layouts/admin/admin.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- sidenav container = nav-bar-->\n<mat-sidenav-container class=\"container\">\n  <mat-sidenav #sidenav [(mode)]=\"over\" [(opened)]=\"opened\" class=\"bottom-to-top\">\n    <div class=\"my-2\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\"></div>\n    <div class=\"mt-2 py-3 text-white\" fxLayout=\"column\"\n         fxLayoutAlign=\"center center\"\n         fxLayoutGap=\"7px\">\n      <div>\n        <a>\n          <link href='https://fonts.googleapis.com/css?family=Notable' rel='stylesheet'>\n          <span class=\"lead\">Administrator</span>\n        </a>\n      </div>\n    </div>\n    <hr width=\"90%\">\n    <div>\n      <mat-accordion multi=\"true\" [displayMode]=\"displayMode\">\n        <mat-expansion-panel class=\"no-shadow my-0\">\n          <mat-expansion-panel-header fxLayout=\"row\" [expandedHeight]=\"expandHeight\" [collapsedHeight]=\"collapseHeight\">\n            <mat-panel-title class=\"text-white\">\n              Companies\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n          <mat-nav-list class=\"ml-0\" dense>\n            <mat-nav-list class=\"ml-0\" dense>\n              <button mat-button class=\"button1\" routerLink=\"/admin/create-company\">Add Companies</button>\n              <button mat-button class=\"button1\" routerLink=\"/admin/get-companies\">List of Companies</button>\n              <hr width=\"90%\">\n            </mat-nav-list>\n          </mat-nav-list>\n        </mat-expansion-panel>       <!--no shadow-->\n        <mat-expansion-panel class=\"no-shadow my-0\">\n          <mat-expansion-panel-header fxLayout=\"row\" [expandedHeight]=\"expandHeight\" [collapsedHeight]=\"collapseHeight\">\n            <mat-panel-title class=\"text-white\">\n              Customers\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n          <mat-nav-list class=\"ml-0\" dense>\n            <button mat-button class=\"button1\" routerLink=\"/admin/create-customer\">Add</button>\n            <button mat-button class=\"button1\" routerLink=\"/admin/get-customers\">Show</button>\n            <hr width=\"90%\">\n          </mat-nav-list>\n        </mat-expansion-panel>\n        <mat-expansion-panel class=\"no-shadow my-0\">\n          <mat-expansion-panel-header fxLayout=\"row\" [expandedHeight]=\"expandHeight\" [collapsedHeight]=\"collapseHeight\">\n            <mat-panel-title class=\"text-white\">\n              Coupons\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n          <mat-nav-list class=\"ml-0\" dense>\n            <button mat-button class=\"button1\" routerLink=\"/admin/create-coupon\">Add</button>\n            <button mat-button class=\"button1\" routerLink=\"/admin/get-coupons\">Show</button>\n            <hr width=\"90%\">\n          </mat-nav-list>\n        </mat-expansion-panel>\n        <button mat-button class=\"button4\" routerLink=\"/admin/get-incomes\">Incomes</button>\n        <button mat-button [matMenuTriggerFor]=\"menu\" fxShow.lt-md=\"false\" fxShow.gt-sm=\"true\">\n          <mat-icon class=\"ml-2-1\">exit_to_app</mat-icon>\n          <span class=\"ml-2\">Sign out</span>\n        </button>\n        <button mat-icon-button class=\"button5\" [matMenuTriggerFor]=\"menu\" fxShow.sm=\"true\" fxShow.gt-sm=\"false\">\n          <mat-menu #menu=\"matMenu\" overlapTrigger=\"false\">\n            <span class=\"sure\">Are You Sure?</span>\n            <button mat-menu-item>\n              <span>No</span>\n            </button>\n            <button mat-menu-item (click)=\"auth.logout()\">\n              <span>Yes</span>\n            </button>\n  \n          </mat-menu>\n        </button>\n      </mat-accordion>\n    </div>\n  </mat-sidenav>\n<!----------------------------------------------------------------------------------------------------------------------------------------->\n  <!--sidenav content -->\n<mat-sidenav-content> \n    <mat-toolbar class=\"header-box-shadow\">\n      <button mat-icon-button (click)=\"sidenav.toggle()\" fxShow.sm=\"true\" fxShow.gt-sm=\"false\">\n        <mat-icon>list</mat-icon>\n      </button>\n      <mat-icon class=\"mr-1\">home</mat-icon>\n      <span class=\"logo\"> Ghost Coupon</span>\n      <span class=\"spacer\"></span>\n      <button mat-button [matMenuTriggerFor]=\"menu\" fxShow.lt-md=\"false\" fxShow.gt-sm=\"true\">\n        <mat-icon>exit_to_app</mat-icon>\n        <span class=\"ml-2\">Sign out</span>\n      </button>\n      <button mat-icon-button [matMenuTriggerFor]=\"menu\" fxShow.lt-md=\"true\" fxShow.gt-sm=\"false\">\n        <mat-menu #menu=\"matMenu\" overlapTrigger=\"false\">\n          <span class=\"sure\">Are You Sure?</span>\n          <button mat-menu-item>\n            <span>No</span>\n          </button>\n          <button mat-menu-item (click)=\"auth.logout()\">\n            <span>Yes</span>\n          </button>\n        </mat-menu>\n      </button>\n    </mat-toolbar>\n\n    <router-outlet></router-outlet>\n    <div class=\"animated fadeOut slower\">\n      <h1>Welcome</h1>\n      <h2>{{date}}</h2>\n    </div>\n\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/shared/layouts/admin/admin.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/layouts/admin/admin.component.ts ***!
  \*********************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _services_authorisation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authorisation.service */ "./src/app/shared/services/authorisation.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// tslint:disable-next-line: quotemark


var AdminComponent = /** @class */ (function () {
    function AdminComponent(media, auth) {
        var _this = this;
        this.auth = auth;
        this.date = new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]('en-US').transform(new Date(), 'EEEE, MMMM d, y');
        this.opened = true;
        this.over = 'side';
        this.expandHeight = '42px';
        this.collapseHeight = '42px';
        this.displayMode = 'flat';
        this.watcher = media.subscribe(function (change) {
            if (change.mqAlias === 'sm' || change.mqAlias === 'xs') {
                _this.opened = false;
                _this.over = 'over';
            }
            else {
                _this.opened = true;
                _this.over = 'side';
            }
        });
    }
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/shared/layouts/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/shared/layouts/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["ObservableMedia"], _services_authorisation_service__WEBPACK_IMPORTED_MODULE_2__["AuthorisationService"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/shared/layouts/authorisation/authorisation.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/shared/layouts/authorisation/authorisation.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  font-family: notable;\n  font-size:120px;\n  background-color: #41035e;\n  background-image: linear-gradient(\n    -75deg,\n    transparent 0,\n    transparent 5%,\n    rgba(255,255,255,0.5) 5%,\n    rgba(255,255,255,0.5) 10%,\n    transparent 10%,\n    transparent 100%\n  );\n  background-size: 200% 100%;\n  -webkit-text-fill-color: transparent;\n  -webkit-background-clip: text;\n  background-clip: 0;\n  \n  transition: 1.0s;\n}\nh1:hover{\n  background-position: -120% 0;\n}\n.container {\n  background-color: rgb(63, 61, 61);\n  position: absolute;\n  padding:0;\n  margin:0;\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  \n}\n.mat-button {\n  color: ghostwhite;\n  width: 20%;\n}\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xheW91dHMvYXV0aG9yaXNhdGlvbi9hdXRob3Jpc2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6Qjs7Ozs7Ozs7R0FRQztFQUNELDBCQUEwQjtFQUMxQixvQ0FBb0M7RUFDcEMsNkJBQTZCO0VBQzdCLGtCQUFrQjs7RUFFbEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSw0QkFBNEI7QUFDOUI7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7RUFDUixhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCOztBQUV6QjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sYXlvdXRzL2F1dGhvcmlzYXRpb24vYXV0aG9yaXNhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xuICBmb250LWZhbWlseTogbm90YWJsZTtcbiAgZm9udC1zaXplOjEyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDEwMzVlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgLTc1ZGVnLFxuICAgIHRyYW5zcGFyZW50IDAsXG4gICAgdHJhbnNwYXJlbnQgNSUsXG4gICAgcmdiYSgyNTUsMjU1LDI1NSwwLjUpIDUlLFxuICAgIHJnYmEoMjU1LDI1NSwyNTUsMC41KSAxMCUsXG4gICAgdHJhbnNwYXJlbnQgMTAlLFxuICAgIHRyYW5zcGFyZW50IDEwMCVcbiAgKTtcbiAgYmFja2dyb3VuZC1zaXplOiAyMDAlIDEwMCU7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIGJhY2tncm91bmQtY2xpcDogMDtcbiAgXG4gIHRyYW5zaXRpb246IDEuMHM7XG59XG5oMTpob3ZlcntcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEyMCUgMDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2MywgNjEsIDYxKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nOjA7XG4gIG1hcmdpbjowO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBcbn1cblxuLm1hdC1idXR0b24ge1xuICBjb2xvcjogZ2hvc3R3aGl0ZTtcbiAgd2lkdGg6IDIwJTtcbn1cblxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/layouts/authorisation/authorisation.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/shared/layouts/authorisation/authorisation.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"container\">\n    <div class=\"animated fadeInDown fast\">\n      <h1>Ghost Coupon</h1>\n    </div>\n  <router-outlet></router-outlet>\n</mat-sidenav-container>\n\n"

/***/ }),

/***/ "./src/app/shared/layouts/authorisation/authorisation.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/shared/layouts/authorisation/authorisation.component.ts ***!
  \*************************************************************************/
/*! exports provided: AuthorisationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorisationComponent", function() { return AuthorisationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthorisationComponent = /** @class */ (function () {
    function AuthorisationComponent() {
    }
    AuthorisationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-authorization',
            template: __webpack_require__(/*! ./authorisation.component.html */ "./src/app/shared/layouts/authorisation/authorisation.component.html"),
            styles: [__webpack_require__(/*! ./authorisation.component.css */ "./src/app/shared/layouts/authorisation/authorisation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AuthorisationComponent);
    return AuthorisationComponent;
}());



/***/ }),

/***/ "./src/app/shared/layouts/company/company.component.css":
/*!**************************************************************!*\
  !*** ./src/app/shared/layouts/company/company.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spacer {\n  flex: 1 1 auto;\n}\n.logo{\n  color: ghostwhite;\n  position: relative;\n  font-family: notable;\n}\n.container {\n  background-color: rgba(53, 52, 52, 0.966);\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.mat-menu-item {\n  color: #45047a;\n  text-align: center;\n}\n.sure {\n  font-family: Arial;\n  font-size: small;\n  text-align: center;\n  color: #6a0883;\n  margin-top: 5px;\n  margin-bottom: 15px;\n  margin-left: 15px;\n}\nmat-sidenav {\n  width: 250px;;\n}\n.no-shadow {\n  background-color: #45047a;\n  box-shadow: none !important;\n}\n::ng-deep .mat-expansion-panel-body {\n  padding: 0 !important;\n  padding-left: 10px !important;\n}\n.header-box-shadow {\n  background-color: #45047a;\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, .2), 0 6px 10px 0 rgba(0, 0, 0, .14), 0 1px 18px 0 rgba(0, 0, 0, .12);\n}\n.bottom-to-top {\n  background-color: #45047a;\n  border: 0 solid;\n  border-right-width: 1px;\n  -o-border-image: linear-gradient(to top, #c1c1c1, rgba(0, 0, 0, 0)) 1 100%;\n     border-image: linear-gradient(to top, #c1c1c1, rgba(0, 0, 0, 0)) 1 100%\n}\ntable {\n  width: 100%;\n}\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n.button1 {\n  color: ghostwhite;\n  font-family: notable;\n  text-align: left;\n  font-weight: normal;\n  font-size: 14px;\n  width: 230px;\n}\n.button2 {\n  color: #3e50b5;\n  width: 100%;\n}\n.button3 {\n  color: #3e50b5;\n  width: 1000px;\n}\nh1 {\n  text-align: center;\n  font-family: notable;\n  font-size: 130px;\n  color: #410572;\n  text-shadow: 1px 3px 0 #5c00a7, 1px 13px 5px #c752d6;\n}\nh2 {\n  text-align: center;\n  font-family: notable;\n  font-size: 65px;\n  color: #410572;\n  text-shadow: 1px 3px 0 #5c00a7, 1px 10px 5px #c752d6;\n}\nh3 {\n  text-align: center;\n  font-family: Arial;\n  font-size: 40px;\n  color: #410572;\n  text-shadow: 1px 2px 1px #5c00a7, 1px 2px 1px #c752d6;\n}\nth {\n  font-size: 15px;\n  font-weight: bold;\n  background-color: #690797;\n  color:ghostwhite;\n}\ntable {\n  width: 100%;\n}\ntr.example-detail-row {\n  height: 0;\n}\ntr.example-element-row:not(.example-expanded-row):hover {\n  background: #f5f5f5;\n}\ntr.example-element-row:not(.example-expanded-row):active {\n  background: #efefef;\n}\n.example-element-row td {\n  border-bottom-width: 0;\n}\n.example-element-detail {\n  overflow: hidden;\n  display: flex;\n}\n.example-element-diagram {\n  min-width: 80px;\n  border: 2px solid black;\n  padding: 8px;\n  font-weight: lighter;\n  margin: 8px 0;\n  height: 104px;\n}\n.example-element-symbol {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: normal;\n}\n.example-element-description {\n  padding: 16px;\n}\n.example-element-description-attribution {\n  opacity: 0.5;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xheW91dHMvY29tcGFueS9jb21wYW55LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UseUNBQXlDO0VBQ3pDLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0FBQ1Y7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsMkJBQTJCO0FBQzdCO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsNkJBQTZCO0FBQy9CO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsOEdBQThHO0FBQ2hIO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QiwwRUFBc0U7S0FBdEU7QUFDRjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQUNiO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7QUFDYjtBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7QUFDZjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG9EQUFvRDtBQUN0RDtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsY0FBYztFQUNkLG9EQUFvRDtBQUN0RDtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsY0FBYztFQUNkLHFEQUFxRDtBQUN2RDtBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLFNBQVM7QUFDWDtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjtBQUVBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixhQUFhO0FBQ2Y7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sYXlvdXRzL2NvbXBhbnkvY29tcGFueS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuLmxvZ297XG4gIGNvbG9yOiBnaG9zdHdoaXRlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtZmFtaWx5OiBub3RhYmxlO1xufVxuLmNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTMsIDUyLCA1MiwgMC45NjYpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLm1hdC1tZW51LWl0ZW0ge1xuICBjb2xvcjogIzQ1MDQ3YTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3VyZSB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzZhMDg4MztcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxubWF0LXNpZGVuYXYge1xuICB3aWR0aDogMjUwcHg7O1xufVxuXG4ubm8tc2hhZG93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1MDQ3YTtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC1leHBhbnNpb24tcGFuZWwtYm9keSB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXItYm94LXNoYWRvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NTA0N2E7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLCAwLCAwLCAuMTIpO1xufVxuXG4uYm90dG9tLXRvLXRvcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NTA0N2E7XG4gIGJvcmRlcjogMCBzb2xpZDtcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAxcHg7XG4gIGJvcmRlci1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgI2MxYzFjMSwgcmdiYSgwLCAwLCAwLCAwKSkgMSAxMDAlXG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5idXR0b24xIHtcbiAgY29sb3I6IGdob3N0d2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBub3RhYmxlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiAyMzBweDtcbn1cblxuLmJ1dHRvbjIge1xuICBjb2xvcjogIzNlNTBiNTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5idXR0b24zIHtcbiAgY29sb3I6ICMzZTUwYjU7XG4gIHdpZHRoOiAxMDAwcHg7XG59XG5cbmgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogbm90YWJsZTtcbiAgZm9udC1zaXplOiAxMzBweDtcbiAgY29sb3I6ICM0MTA1NzI7XG4gIHRleHQtc2hhZG93OiAxcHggM3B4IDAgIzVjMDBhNywgMXB4IDEzcHggNXB4ICNjNzUyZDY7XG59XG5cbmgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogbm90YWJsZTtcbiAgZm9udC1zaXplOiA2NXB4O1xuICBjb2xvcjogIzQxMDU3MjtcbiAgdGV4dC1zaGFkb3c6IDFweCAzcHggMCAjNWMwMGE3LCAxcHggMTBweCA1cHggI2M3NTJkNjtcbn1cblxuaDMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBjb2xvcjogIzQxMDU3MjtcbiAgdGV4dC1zaGFkb3c6IDFweCAycHggMXB4ICM1YzAwYTcsIDFweCAycHggMXB4ICNjNzUyZDY7XG59XG5cbnRoIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY5MDc5NztcbiAgY29sb3I6Z2hvc3R3aGl0ZTtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxudHIuZXhhbXBsZS1kZXRhaWwtcm93IHtcbiAgaGVpZ2h0OiAwO1xufVxuXG50ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbn1cblxudHIuZXhhbXBsZS1lbGVtZW50LXJvdzpub3QoLmV4YW1wbGUtZXhwYW5kZWQtcm93KTphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xufVxuXG4uZXhhbXBsZS1lbGVtZW50LXJvdyB0ZCB7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG59XG5cbi5leGFtcGxlLWVsZW1lbnQtZGV0YWlsIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1kaWFncmFtIHtcbiAgbWluLXdpZHRoOiA4MHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogOHB4O1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgbWFyZ2luOiA4cHggMDtcbiAgaGVpZ2h0OiAxMDRweDtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1zeW1ib2wge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuXG4uZXhhbXBsZS1lbGVtZW50LWRlc2NyaXB0aW9uIHtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1kZXNjcmlwdGlvbi1hdHRyaWJ1dGlvbiB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/shared/layouts/company/company.component.html":
/*!***************************************************************!*\
  !*** ./src/app/shared/layouts/company/company.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"container\">\n  <mat-sidenav #sidenav [(mode)]=\"over\" [(opened)]=\"opened\" class=\"bottom-to-top\">\n    <div class=\"my-2\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\"></div>\n    <div class=\"mt-2 py-3 text-white\" fxLayout=\"column\"\n         fxLayoutAlign=\"center center\"\n         fxLayoutGap=\"7px\">\n      <div>\n        <a>\n            <link href='https://fonts.googleapis.com/css?family=Notable' rel='stylesheet'>\n          <span class=\"lead\">COMPANY</span>\n        </a>\n      </div>\n    </div>\n    <hr width=\"90%\">\n    <div>\n      <mat-nav-list>\n        <button mat-button class=\"button1\" routerLink=\"/company/create-coupon\">Add Coupon</button>\n        <button mat-button class=\"button1\" routerLink=\"/company/my-coupons\">My Coupons</button>\n      </mat-nav-list>\n    </div>\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\" class=\"header-box-shadow\">\n      <button mat-icon-button (click)=\"sidenav.toggle()\" fxShow.sm=\"true\" fxShow.gt-sm=\"false\">\n        <mat-icon>menu</mat-icon>\n      </button>\n      <mat-icon class=\"mr-1\">home</mat-icon>\n      <span class=\"logo\">Coupon System</span>\n      <span class=\"spacer\"></span>\n      <button mat-button [matMenuTriggerFor]=\"menu\" fxShow.lt-md=\"false\" fxShow.gt-sm=\"true\">\n        <mat-icon>exit_to_app</mat-icon>\n        <span class=\"ml-2\">Sign out</span>\n      </button>\n      <button mat-icon-button [matMenuTriggerFor]=\"menu\" fxShow.lt-md=\"true\" fxShow.gt-sm=\"false\">\n        <mat-menu #menu=\"matMenu\" overlapTrigger=\"false\">\n          <span class=\"sure\">Are you sure?</span>\n          <button mat-menu-item>\n            <span>No</span>\n          </button>\n          <button mat-menu-item (click)=\"auth.logout()\">\n            <span>Yes</span>\n          </button>\n        </mat-menu>\n      </button>\n    </mat-toolbar>\n\n    <router-outlet></router-outlet>\n    <div class=\"animated fadeOut slower\">\n      <h1>Welcome</h1>\n      <h2>{{date}}</h2>\n    </div>\n\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/shared/layouts/company/company.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/layouts/company/company.component.ts ***!
  \*************************************************************/
/*! exports provided: CompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyComponent", function() { return CompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _services_authorisation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authorisation.service */ "./src/app/shared/services/authorisation.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompanyComponent = /** @class */ (function () {
    function CompanyComponent(media, auth) {
        var _this = this;
        this.auth = auth;
        this.date = new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]('en-US').transform(new Date(), 'EEEE, MMMM d, y');
        this.opened = true;
        this.over = 'side';
        this.expandHeight = '42px';
        this.collapseHeight = '42px';
        this.displayMode = 'flat';
        this.watcher = media.subscribe(function (change) {
            if (change.mqAlias === 'sm' || change.mqAlias === 'xs') {
                _this.opened = false;
                _this.over = 'over';
            }
            else {
                _this.opened = true;
                _this.over = 'side';
            }
        });
    }
    CompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-company',
            template: __webpack_require__(/*! ./company.component.html */ "./src/app/shared/layouts/company/company.component.html"),
            styles: [__webpack_require__(/*! ./company.component.css */ "./src/app/shared/layouts/company/company.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["ObservableMedia"], _services_authorisation_service__WEBPACK_IMPORTED_MODULE_2__["AuthorisationService"]])
    ], CompanyComponent);
    return CompanyComponent;
}());



/***/ }),

/***/ "./src/app/shared/layouts/customer/customer.component.css":
/*!****************************************************************!*\
  !*** ./src/app/shared/layouts/customer/customer.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spacer {\n  flex: 1 1 auto;\n}\n\n.container {\n  background-color: rgba(53, 52, 52, 0.966);\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.mat-menu-item {\n  color: #45047a;\n  text-align: center;\n}\n\n.sure {\n  font-family: notable;\n  font-size: small;\n  text-align: center;\n  color: #6a0883;\n  margin-top: 5px;\n  margin-bottom: 15px;\n  margin-left: 15px;\n}\n\nmat-sidenav {\n  width: 250px;;\n}\n\n.no-shadow {\n  background-color: #45047a;\n  box-shadow: none !important;\n}\n\n::ng-deep .mat-expansion-panel-body {\n  padding: 0 !important;\n  padding-left: 10px !important;\n}\n\n.header-box-shadow {\n  background-color: #45047a;\n  box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);\n}\n\n.bottom-to-top {\n  background-color: #45047a;\n  border: 0 solid;\n  border-right-width: 1px;\n  -o-border-image:\n  linear-gradient(to top, #c1c1c1, rgba(0, 0, 0, 0)) 1 100%;\n     border-image:\n  linear-gradient(to top, #c1c1c1, rgba(0, 0, 0, 0)) 1 100%\n}\n\ntable {\n  width: 100%;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\n.button1 {\n  color: ghostwhite;\n  text-align: left;\n  font-weight: normal;\n  font-size: 14px;\n  width: 230px;\n}\n\n.button2 {\n  color: ghostwhite;\n  width: 100%;\n}\n\n.button3 {\n  color: #43076b;\n  width: 1000px;\n}\n\nh1 {\n    text-align: center;\n    font-family: notable;\n    font-size: 130px;\n    color: #410572;\n    text-shadow: 1px 3px 0 #5c00a7, 1px 13px 5px #c752d6;\n}\n\nh2 {\n  text-align: center;\n  font-family: notable;\n  font-size: 65px;\n  color: #410572;\n  text-shadow: 1px 3px 0 #5c00a7, 1px 10px 5px #c752d6;\n}\n\nh3 {\n  text-align: center;\n  font-family: notable;\n  font-size: 40px;\n  color: #410572;\n  text-shadow: 1px 2px 1px #5c00a7, 1px 2px 1px #c752d6;\n}\n\nth {\n  background-color: #45047a;\n  font-size: 15px;\n  font-weight: bold;\n    color: ghostwhite;\n}\n\ntable {\n  width: 100%;\n}\n\ntr.example-detail-row {\n  height: 0;\n}\n\ntr.example-element-row:not(.example-expanded-row):hover {\n  background: #2f5fb9;\n\n}\n\ntr.example-element-row:not(.example-expanded-row):active {\n  background: #610479;\n}\n\n.example-element-row td {\n  border-bottom-width: 0;\n}\n\n.example-element-detail {\n  overflow: hidden;\n  display: flex;\n}\n\n.example-element-diagram {\n  min-width: 80px;\n  border: 2px solid black;\n  padding: 8px;\n  font-weight: lighter;\n  margin: 8px 0;\n  height: 104px;\n}\n\n.example-element-symbol {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: normal;\n}\n\n.example-element-description {\n  padding: 16px;\n}\n\n.example-element-description-attribution {\n  opacity: 0.5;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xheW91dHMvY3VzdG9tZXIvY3VzdG9tZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixxR0FBcUc7QUFDdkc7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QjsyREFDd0Q7S0FEeEQ7O0FBRUY7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLG9EQUFvRDtBQUN4RDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxvREFBb0Q7QUFDdEQ7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixjQUFjO0VBQ2QscURBQXFEO0FBQ3ZEOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixpQkFBaUI7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxtQkFBbUI7O0FBRXJCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbGF5b3V0cy9jdXN0b21lci9jdXN0b21lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4uY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MywgNTIsIDUyLCAwLjk2Nik7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4ubWF0LW1lbnUtaXRlbSB7XG4gIGNvbG9yOiAjNDUwNDdhO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zdXJlIHtcbiAgZm9udC1mYW1pbHk6IG5vdGFibGU7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM2YTA4ODM7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbm1hdC1zaWRlbmF2IHtcbiAgd2lkdGg6IDI1MHB4Oztcbn1cblxuLm5vLXNoYWRvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NTA0N2E7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWJvZHkge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyLWJveC1zaGFkb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDUwNDdhO1xuICBib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCByZ2JhKDAsMCwwLC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwwLDAsLjEyKTtcbn1cblxuLmJvdHRvbS10by10b3Age1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDUwNDdhO1xuICBib3JkZXI6IDAgc29saWQ7XG4gIGJvcmRlci1yaWdodC13aWR0aDogMXB4O1xuICBib3JkZXItaW1hZ2U6XG4gIGxpbmVhci1ncmFkaWVudCh0byB0b3AsICNjMWMxYzEsIHJnYmEoMCwgMCwgMCwgMCkpIDEgMTAwJVxufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYnV0dG9uMSB7XG4gIGNvbG9yOiBnaG9zdHdoaXRlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiAyMzBweDtcbn1cblxuLmJ1dHRvbjIge1xuICBjb2xvcjogZ2hvc3R3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5idXR0b24zIHtcbiAgY29sb3I6ICM0MzA3NmI7XG4gIHdpZHRoOiAxMDAwcHg7XG59XG5cbmgxIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IG5vdGFibGU7XG4gICAgZm9udC1zaXplOiAxMzBweDtcbiAgICBjb2xvcjogIzQxMDU3MjtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDNweCAwICM1YzAwYTcsIDFweCAxM3B4IDVweCAjYzc1MmQ2O1xufVxuXG5oMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IG5vdGFibGU7XG4gIGZvbnQtc2l6ZTogNjVweDtcbiAgY29sb3I6ICM0MTA1NzI7XG4gIHRleHQtc2hhZG93OiAxcHggM3B4IDAgIzVjMDBhNywgMXB4IDEwcHggNXB4ICNjNzUyZDY7XG59XG5cbmgzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogbm90YWJsZTtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBjb2xvcjogIzQxMDU3MjtcbiAgdGV4dC1zaGFkb3c6IDFweCAycHggMXB4ICM1YzAwYTcsIDFweCAycHggMXB4ICNjNzUyZDY7XG59XG5cbnRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1MDQ3YTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogZ2hvc3R3aGl0ZTtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxudHIuZXhhbXBsZS1kZXRhaWwtcm93IHtcbiAgaGVpZ2h0OiAwO1xufVxuXG50ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzJmNWZiOTtcblxufVxuXG50ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICM2MTA0Nzk7XG59XG5cbi5leGFtcGxlLWVsZW1lbnQtcm93IHRkIHtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1kZXRhaWwge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZXhhbXBsZS1lbGVtZW50LWRpYWdyYW0ge1xuICBtaW4td2lkdGg6IDgwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiA4cHg7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBtYXJnaW46IDhweCAwO1xuICBoZWlnaHQ6IDEwNHB4O1xufVxuXG4uZXhhbXBsZS1lbGVtZW50LXN5bWJvbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG5cbi5leGFtcGxlLWVsZW1lbnQtZGVzY3JpcHRpb24ge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG4uZXhhbXBsZS1lbGVtZW50LWRlc2NyaXB0aW9uLWF0dHJpYnV0aW9uIHtcbiAgb3BhY2l0eTogMC41O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/shared/layouts/customer/customer.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/shared/layouts/customer/customer.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"container\">\n  <mat-sidenav #sidenav [(mode)]=\"over\" [(opened)]=\"opened\" class=\"bottom-to-top\">\n    <div class=\"my-2\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\"></div>\n    <div class=\"mt-2 py-3 text-white\" fxLayout=\"column\"\n         fxLayoutAlign=\"center center\"\n         fxLayoutGap=\"7px\">\n      <div>\n        <a>\n            <link href='https://fonts.googleapis.com/css?family=Notable' rel='stylesheet'>\n          <span class=\"lead\">CUSTOMER</span>\n        </a>\n      </div>\n    </div>\n    <hr width=\"90%\">\n    <div>\n      <mat-nav-list>\n        <button mat-button class=\"button1\" routerLink=\"/customer/purchase-coupon\">Purchase Coupon</button>\n        <button mat-button class=\"button1\" routerLink=\"/customer/my-coupons\">My Coupons</button>\n      </mat-nav-list>\n    </div>\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\" class=\"header-box-shadow\">\n      <button mat-icon-button (click)=\"sidenav.toggle()\" fxShow.sm=\"true\" fxShow.gt-sm=\"false\">\n        <mat-icon>list</mat-icon>\n      </button>\n      <mat-icon class=\"mr-1\">home</mat-icon>\n      <span class=\"logo\">Ghost Coupon</span>\n      <span class=\"spacer\"></span>\n      <button mat-button [matMenuTriggerFor]=\"menu\" fxShow.lt-md=\"false\" fxShow.gt-sm=\"true\">\n        <mat-icon>exit_to_app</mat-icon>\n        <span class=\"ml-2\">Sign out</span>\n      </button>\n      <button mat-icon-button [matMenuTriggerFor]=\"menu\" fxShow.lt-md=\"true\" fxShow.gt-sm=\"false\">\n        <mat-menu #menu=\"matMenu\" overlapTrigger=\"false\">\n          <span class=\"sure\">Are you sure?</span>\n          <button mat-menu-item>\n            <span>No</span>\n          </button>\n          <button mat-menu-item (click)=\"auth.logout()\">\n            <span>Yes</span>\n          </button>\n        </mat-menu>\n      </button>\n    </mat-toolbar>\n\n    <router-outlet></router-outlet>\n    <div class=\"animated fadeOut slower\">\n      <h1>Welcome</h1>\n      <h2>{{date}}</h2>\n    </div>\n\n  </mat-sidenav-content>\n</mat-sidenav-container>\n\n"

/***/ }),

/***/ "./src/app/shared/layouts/customer/customer.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/layouts/customer/customer.component.ts ***!
  \***************************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _services_authorisation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authorisation.service */ "./src/app/shared/services/authorisation.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// tslint:disable-next-line: semicolon

// tslint:disable-next-line: semicolon

// tslint:disable-next-line: semicolon


var CustomerComponent = /** @class */ (function () {
    function CustomerComponent(media, auth) {
        var _this = this;
        this.auth = auth;
        this.date = new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]('en-US').transform(new Date(), 'EEEE, MMMM d, y');
        this.opened = true;
        this.over = 'side';
        this.watcher = media.subscribe(function (change) {
            if (change.mqAlias === 'sm' || change.mqAlias === 'xs') {
                _this.opened = false;
                _this.over = 'over';
            }
            else {
                _this.opened = true;
                _this.over = 'side';
            }
        });
    }
    CustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer',
            template: __webpack_require__(/*! ./customer.component.html */ "./src/app/shared/layouts/customer/customer.component.html"),
            styles: [__webpack_require__(/*! ./customer.component.css */ "./src/app/shared/layouts/customer/customer.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["ObservableMedia"], _services_authorisation_service__WEBPACK_IMPORTED_MODULE_2__["AuthorisationService"]])
    ], CustomerComponent);
    return CustomerComponent;
}());



/***/ }),

/***/ "./src/app/shared/page404/page404.component.html":
/*!*******************************************************!*\
  !*** ./src/app/shared/page404/page404.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <button mat-fab color=\"primary\" routerLink=\"/login\">Home</button>\n    <img src=\"/src/assets/404ghost.gif\" alt=\"page 404\" class=\"center\">\n    <router-outlet></router-outlet>\n  \n"

/***/ }),

/***/ "./src/app/shared/page404/page404.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/page404/page404.component.ts ***!
  \*****************************************************/
/*! exports provided: Page404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page404Component", function() { return Page404Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Page404Component = /** @class */ (function () {
    function Page404Component() {
    }
    Page404Component.prototype.ngOnInit = function () {
    };
    Page404Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page404',
            template: __webpack_require__(/*! ./page404.component.html */ "./src/app/shared/page404/page404.component.html"),
            styles: ["./page404.component.css\n"]
        }),
        __metadata("design:paramtypes", [])
    ], Page404Component);
    return Page404Component;
}());



/***/ }),

/***/ "./src/app/shared/services/admin.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/admin.service.ts ***!
  \**************************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _error_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error.service */ "./src/app/shared/services/error.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminService = /** @class */ (function () {
    function AdminService(http, errorService) {
        this.http = http;
        this.errorService = errorService;
        this.companyUrl = 'http://localhost:8080/admin/companies';
        this.couponUrl = 'http://localhost:8080/admin/coupons';
        this.customerUrl = 'http://localhost:8080/admin/customers';
        this.incomeUrl = 'http://localhost:8080/admin/incomes';
    }
    AdminService.prototype.createCompany = function (company) {
        var _this = this;
        return this.http.post(this.companyUrl, company, { withCredentials: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { return _this.errorService.errorHandler(err); }));
    };
    AdminService.prototype.deleteCompany = function (id) {
        var _this = this;
        return this.http.delete(this.companyUrl + '/' + id, { withCredentials: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { return _this.errorService.errorHandler(err); }));
    };
    AdminService.prototype.updateCompany = function (company) {
        var _this = this;
        return this.http.put(this.companyUrl, company, { withCredentials: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { return _this.errorService.errorHandler(err); }));
    };
    AdminService.prototype.getAllCompanies = function () {
        var _this = this;
        return this.http.get(this.companyUrl, { withCredentials: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { return _this.errorService.errorHandler(err); }));
    };
    AdminService.prototype.createCoupon = function (coupon) {
        var _this = this;
        return this.http.post(this.couponUrl + '/' + coupon.companyId, coupon, { withCredentials: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { return _this.errorService.errorHandler(err); }));
    };
    AdminService.prototype.deleteCoupon = function (id) {
        var _this = this;
        return this.http.delete(this.couponUrl + '/' + id, { withCredentials: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { return _this.errorService.errorHandler(err); }));
    };
    AdminService.prototype.updateCoupon = function (coupon) {
        var _this = this;
        return this.http.put(this.couponUrl + '/' + coupon.companyId, coupon, { withCredentials: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { return _this.errorService.errorHandler(err); }));
    };
    AdminService.prototype.getAllCoupons = function () {
        var _this = this;
        return this.http.get(this.couponUrl, { withCredentials: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { return _this.errorService.errorHandler(err); }));
    };
    AdminService.prototype.createCustomer = function (customer) {
        var _this = this;
        return this.http.post(this.customerUrl, customer, { withCredentials: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { return _this.errorService.errorHandler(err); }));
    };
    AdminService.prototype.deleteCustomer = function (id) {
        var _this = this;
        return this.http.delete(this.customerUrl + '/' + id, { withCredentials: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { return _this.errorService.errorHandler(err); }));
    };
    AdminService.prototype.updateCustomer = function (customer) {
        var _this = this;
        return this.http.put(this.customerUrl, customer, { withCredentials: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { return _this.errorService.errorHandler(err); }));
    };
    AdminService.prototype.getAllCustomers = function () {
        var _this = this;
        return this.http.get(this.customerUrl, { withCredentials: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { return _this.errorService.errorHandler(err); }));
    };
    AdminService.prototype.getIncomes = function () {
        var _this = this;
        return this.http.get(this.incomeUrl, { withCredentials: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { return _this.errorService.errorHandler(err); }));
    };
    AdminService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _error_service__WEBPACK_IMPORTED_MODULE_3__["ErrorService"]])
    ], AdminService);
    return AdminService;
}());



/***/ }),

/***/ "./src/app/shared/services/authorisation.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/authorisation.service.ts ***!
  \**********************************************************/
/*! exports provided: AuthorisationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorisationService", function() { return AuthorisationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _error_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error.service */ "./src/app/shared/services/error.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthorisationService = /** @class */ (function () {
    function AuthorisationService(http, errorService, router) {
        this.http = http;
        this.errorService = errorService;
        this.router = router;
        this.logUrl = 'http://localhost:8080/login';
        this.regCompanyUrl = 'http://localhost:8080/registration/companies';
        this.regCustomerUrl = 'http://localhost:8080/registration/customers';
    }
    AuthorisationService.prototype.login = function (logUser) {
        var _this = this;
        return this.http.post(this.logUrl, logUser, { withCredentials: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
            if (logUser.clientType === 'ADMIN') {
                sessionStorage.setItem('adminLogged', logUser.clientType);
            }
            else if (logUser.clientType === 'COMPANY') {
                sessionStorage.setItem('companyLogged', logUser.clientType);
            }
            else if (logUser.clientType === 'CUSTOMER') {
                sessionStorage.setItem('customerLogged', logUser.clientType);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.errorService.errorHandler(err); }));
    };
    AuthorisationService.prototype.regCompany = function (regUser) {
        var _this = this;
        return this.http.post(this.regCompanyUrl, regUser, { withCredentials: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.errorService.errorHandler(err); }));
    };
    AuthorisationService.prototype.regCustomer = function (regUser) {
        var _this = this;
        return this.http.post(this.regCustomerUrl, regUser, { withCredentials: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.errorService.errorHandler(err); }));
    };
    AuthorisationService.prototype.isAdminLoggedIn = function () {
        if (sessionStorage.getItem('adminLogged') === 'ADMIN') {
            return true;
        }
    };
    AuthorisationService.prototype.isCompanyLoggedIn = function () {
        if (sessionStorage.getItem('companyLogged') === 'COMPANY') {
            return true;
        }
    };
    AuthorisationService.prototype.isCustomerLoggedIn = function () {
        if (sessionStorage.getItem('customerLogged') === 'CUSTOMER') {
            return true;
        }
    };
    AuthorisationService.prototype.logout = function () {
        sessionStorage.clear();
        this.router.navigate(['/login']);
    };
    AuthorisationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _error_service__WEBPACK_IMPORTED_MODULE_2__["ErrorService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AuthorisationService);
    return AuthorisationService;
}());



/***/ }),

/***/ "./src/app/shared/services/company.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/company.service.ts ***!
  \****************************************************/
/*! exports provided: CompanyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyService", function() { return CompanyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _error_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error.service */ "./src/app/shared/services/error.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompanyService = /** @class */ (function () {
    function CompanyService(http, errorService) {
        this.http = http;
        this.errorService = errorService;
        this.companyUrl = 'http://localhost:8080/company/coupons';
    }
    CompanyService.prototype.createCoupon = function (coupon) {
        var _this = this;
        return this.http.post(this.companyUrl, coupon, { withCredentials: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.errorService.errorHandler(err); }));
    };
    CompanyService.prototype.deleteCoupon = function (id) {
        var _this = this;
        return this.http.delete(this.companyUrl + '/' + id, { withCredentials: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.errorService.errorHandler(err); }));
    };
    CompanyService.prototype.updateCoupon = function (coupon) {
        var _this = this;
        return this.http.put(this.companyUrl, coupon, { withCredentials: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.errorService.errorHandler(err); }));
    };
    CompanyService.prototype.getAllCoupons = function () {
        var _this = this;
        return this.http.get(this.companyUrl, { withCredentials: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.errorService.errorHandler(err); }));
    };
    CompanyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _error_service__WEBPACK_IMPORTED_MODULE_2__["ErrorService"]])
    ], CompanyService);
    return CompanyService;
}());



/***/ }),

/***/ "./src/app/shared/services/customer.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/customer.service.ts ***!
  \*****************************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _error_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error.service */ "./src/app/shared/services/error.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomerService = /** @class */ (function () {
    function CustomerService(http, errorService) {
        this.http = http;
        this.errorService = errorService;
        this.couponsUrl = 'http://localhost:8080/customer/coupons';
        this.availableUrl = 'http://localhost:8080/customer/coupons-available';
    }
    CustomerService.prototype.purchaseCoupon = function (id) {
        var _this = this;
        return this.http.get(this.couponsUrl + '/' + id, { withCredentials: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.errorService.errorHandler(err); }));
    };
    CustomerService.prototype.getPurchasedCoupons = function () {
        var _this = this;
        return this.http.get(this.couponsUrl, { withCredentials: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.errorService.errorHandler(err); }));
    };
    CustomerService.prototype.getAvailableCoupons = function () {
        var _this = this;
        return this.http.get(this.availableUrl, { withCredentials: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.errorService.errorHandler(err); }));
    };
    CustomerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _error_service__WEBPACK_IMPORTED_MODULE_2__["ErrorService"]])
    ], CustomerService);
    return CustomerService;
}());



/***/ }),

/***/ "./src/app/shared/services/error.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/error.service.ts ***!
  \**************************************************/
/*! exports provided: ErrorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorService", function() { return ErrorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ErrorService = /** @class */ (function () {
    function ErrorService() {
    }
    ErrorService.prototype.errorHandler = function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error.error);
    };
    ErrorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], ErrorService);
    return ErrorService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"]
            ],
        })
    ], SharedModule);
    return SharedModule;
}());



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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kimkom/Desktop/GhostCoupon/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map