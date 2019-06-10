import { CommonModule } from '@angular/common';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, Input, Directive, TemplateRef, ContentChildren, EventEmitter, Output, NgModule } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FooterComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
FooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'cc-lib-footer',
                template: "<div class=\"cc-lib-footer\">\n  <ng-content></ng-content>\n</div>\n",
                styles: [".ngx-ccLib-footer{flex-direction:column;min-height:10rem;display:flex;justify-content:center;align-items:center}"]
            }] }
];
/** @nocollapse */
FooterComponent.ctorParameters = () => [];
FooterComponent.propDecorators = {
    title: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgHeaderLogo {
    /**
     * @param {?} templateRef
     */
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NgHeaderLogo.decorators = [
    { type: Directive, args: [{ selector: 'ng-template[ngHeaderLogo]' },] }
];
/** @nocollapse */
NgHeaderLogo.ctorParameters = () => [
    { type: TemplateRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgHeaderMenu {
    /**
     * @param {?} templateRef
     */
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NgHeaderMenu.decorators = [
    { type: Directive, args: [{ selector: 'ng-template[ngHeaderMenu]' },] }
];
/** @nocollapse */
NgHeaderMenu.ctorParameters = () => [
    { type: TemplateRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgHeaderProfile {
    /**
     * @param {?} templateRef
     */
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NgHeaderProfile.decorators = [
    { type: Directive, args: [{ selector: 'ng-template[ngHeaderProfile]' },] }
];
/** @nocollapse */
NgHeaderProfile.ctorParameters = () => [
    { type: TemplateRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HeaderComponent {
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        this.menuTemplate = this.menus.first;
        this.logoTemplate = this.logos.first;
        this.profileTemplate = this.profiles.first;
    }
}
HeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'cc-lib-header',
                template: "<div class=\"headerContainer\">\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light shadow-sm ngx-ccLib-header\">\n    <!-- Org Name -->\n    <b class=\"navbar-brand\" href=\"#\">\n      <ng-template [ngTemplateOutlet]=\"logoTemplate?.templateRef\"></ng-template>\n    </b>\n\n    <!-- button toggle -->\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <!-- Menuitems -->\n        <ng-template [ngTemplateOutlet]=\"menuTemplate?.templateRef\"></ng-template>\n    <!-- Dropdown Profile -->\n    <div class=\"d-inline-block\" >\n        <ng-template [ngTemplateOutlet]=\"profileTemplate?.templateRef\"></ng-template>\n    </div>\n  </nav>\n</div>\n",
                styles: [".ngx-ccLib-header{top:0;left:0;position:fixed;width:100%}"]
            }] }
];
HeaderComponent.propDecorators = {
    menus: [{ type: ContentChildren, args: [NgHeaderMenu,] }],
    logos: [{ type: ContentChildren, args: [NgHeaderLogo,] }],
    profiles: [{ type: ContentChildren, args: [NgHeaderProfile,] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoginComponent {
    /**
     * @param {?} router
     * @param {?} formBuider
     */
    constructor(router, formBuider) {
        this.router = router;
        this.formBuider = formBuider;
        this.userName = '';
        this.password = '';
        this.submitted = false;
        this.login = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.loginForm = this.formBuider.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
    /**
     * @return {?}
     */
    get helperFunction() {
        return this.loginForm.controls;
    }
    ;
    /**
     * @return {?}
     */
    onSubmit() {
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        this.login.emit({ userName: this.loginForm.controls.userName.value,
            password: this.loginForm.controls.password.value });
    }
    /**
     * @return {?}
     */
    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
    }
}
LoginComponent.decorators = [
    { type: Component, args: [{
                selector: 'cc-lib-login',
                template: "<div class=\"loginContainer\">\n    <div class=\"container pt-5 mt-5\" >\n      <div class=\"row justify-content-md-center\">\n        <div class=\"col-md-4\">\n          <div style=\"width: 400px;\" class=\"card border-info text-center\">\n            <div class=\"card-body\">\n              <img src=\"https://static.vingroup.net/vgh_files/assets/images/icons/vingroup.png\" alt=\"VinGroup\">\n              <form class=\"form-signin\" (ngSubmit)=\"onSubmit()\" [formGroup]=\"loginForm\">\n                <div class=\"form-group\">\n                  <input type=\"text\" formControlName=\"userName\" [(ngModel)]=\"userName\"  [ngClass]=\"{ 'isInvalid': submitted && helperFunction.userName.errors }\" class=\"form-control mb-2\" placeholder=\"User Name\" required autofocus>\n                </div>\n                <div class=\"form-group\">\n                  <input formControlName=\"password\" [(ngModel)]=\"password\" [ngClass]=\"{ 'isInvalid': submitted && helperFunction.errors }\" type=\"password\" class=\"form-control mb-2\"  placeholder=\"Password\" required>\n                </div>\n                <button class=\"btn btn-info btn-primary btn-block mb-1\" type=\"submit\" [routerLink]=\"['/dashboard']\" (click)=\"onLoggedin()\">Log in</button>\n                <label class=\"checkbox float-left\">\n                  <input type=\"checkbox\" value=\"remember-me\">\n                  Remember me\n                </label>\n                <a href=\"#\" class=\"float-right\">Need help?</a>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n</div>\n",
                styles: [":host{display:block}.loginContainer{width:100%;position:absolute;min-height:100%;background-position:center;background-repeat:no-repeat;background-size:cover;background-image:url(http://vingroup.net/Uploads/0_Tintuchoatdong/2018/Vinhomes/Anh%202_VinCity%20Ocean%20Park%20_Phoi%20canh%20tong%20the.jpg)}.login-page{position:absolute;top:0;left:0;right:0;bottom:0;overflow:auto;background:#f8f9fa;text-align:center;color:#fff;padding:3em}.login-page .col-lg-4{padding:0}.login-page .input-lg{height:46px;padding:10px 16px;font-size:18px;line-height:1.3333333;border-radius:0}.login-page .input-underline{background:0 0;border:none;box-shadow:none;border-bottom:2px solid rgba(255,255,255,.5);color:#fff;border-radius:0}.login-page .input-underline:focus{border-bottom:2px solid #fff;box-shadow:none}.login-page .rounded-btn{border-radius:50px;color:rgba(255,255,255,.8);background:#f8f9fa;border:2px solid rgba(255,255,255,.8);font-size:18px;line-height:40px;padding:0 25px}.login-page .rounded-btn:active,.login-page .rounded-btn:focus,.login-page .rounded-btn:hover,.login-page .rounded-btn:visited{color:#fff;border:2px solid #fff;outline:0}.login-page h1{font-weight:300;margin-top:20px;margin-bottom:10px;font-size:36px}.login-page h1 small{color:rgba(255,255,255,.7)}.login-page .form-group{padding:8px 0}.login-page .form-content{padding:40px 0}.login-page .user-avatar{border-radius:50%;border:2px solid #fff}"]
            }] }
];
/** @nocollapse */
LoginComponent.ctorParameters = () => [
    { type: Router },
    { type: FormBuilder }
];
LoginComponent.propDecorators = {
    userName: [{ type: Input }],
    password: [{ type: Input }],
    submitted: [{ type: Input }],
    login: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LeftSidebarComponent {
    /**
     * @param {?} router
     */
    constructor(router) {
        this.router = router;
        this.collapsedEvent = new EventEmitter();
        this.router.events.subscribe((/**
         * @param {?} val
         * @return {?}
         */
        val => {
            if (val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()) {
                this.toggleSidebar();
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.isActive = false;
        this.collapsed = false;
        this.showMenu = '';
        this.pushRightClass = 'push-right';
    }
    /**
     * @return {?}
     */
    isToggled() {
        /** @type {?} */
        const dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }
    /**
     * @return {?}
     */
    toggleCollapsed() {
        this.collapsed = !this.collapsed;
        this.collapsedEvent.emit(this.collapsed);
    }
    /**
     * @return {?}
     */
    toggleSidebar() {
        /** @type {?} */
        const dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }
}
LeftSidebarComponent.decorators = [
    { type: Component, args: [{
                selector: 'cc-lib-left-sidebar',
                template: "<nav class=\"sidebar\" [ngClass]=\"{sidebarPushRight: isActive, collapsed: collapsed}\">\n  <div class=\"list-group\">\n    <div class=\"nested-menu\" *ngIf=\"menuSettings != null\">\n      <div *ngFor=\"let menu of menuSettings.menuItems\">\n      <a routerLink=\"{{menu.link}}\" class=\"list-group-item\">\n        <em class=\"fa fa-{{menu.icon}}\"></em>&nbsp;\n        <span>{{menu.title}}</span>\n      </a>\n      </div>\n    </div>\n  </div>\n  <div class=\"toggle-button\" [ngClass]=\"{collapsed: collapsed}\" (click)=\"toggleCollapsed()\">\n    <em class=\"fa fa-fw fa-angle-double-{{collapsed?'right':'left'}}\"></em>&nbsp;\n  </div>\n</nav>\n",
                styles: [".sidebar{border-radius:0;position:fixed;text-align:left;z-index:1000;padding-right:200px;top:85px;left:235px;width:15%;margin-left:-235px;margin-bottom:48px;border:none;overflow-y:auto;background-color:#f8f9fa;bottom:0;overflow-x:hidden;padding-bottom:40px;white-space:nowrap;transition:.2s ease-in-out;border-top:1px solid rgba(255,255,255,.3)}.sidebar .list-group a.list-group-item{background:#f8f9fa;border:0;border-radius:0;color:#000;text-decoration:none}.sidebar .list-group a.list-group-item .fa{margin-right:10px}.sidebar .list-group a:hover{background:#657a8e;color:#000}.nested-menu .list-group-item{cursor:pointer}.nested-menu .nested{list-style-type:none}.nested-menu ul.submenu{display:none;height:0}.nested-menu .expand ul.submenu{display:block;list-style-type:none;height:auto}.nested-menu .expand ul.submenu li a{color:#fff;padding:10px;display:block}@media screen and (max-width:992px){.sidebar{width:60px}.sidebar span,.toggle-button{display:none}}@media print{.sidebar{display:none!important}}@media (min-width:992px){.header-fields{display:none}}.toggle-button{position:fixed;width:15%;cursor:pointer;padding:12px;bottom:0;color:#999;background:#f8f9fa;border:1px solid #999;transition:.2s ease-in-out}.toggle-button:hover{background:#cbd3da;color:#000}.collapsed{width:60px}.collapsed span{display:none}"]
            }] }
];
/** @nocollapse */
LeftSidebarComponent.ctorParameters = () => [
    { type: Router }
];
LeftSidebarComponent.propDecorators = {
    title: [{ type: Input }],
    menuSettings: [{ type: Input }],
    collapsedEvent: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CcLibModule {
}
CcLibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    FooterComponent,
                    HeaderComponent,
                    LoginComponent,
                    LeftSidebarComponent,
                    NgHeaderProfile,
                    NgHeaderLogo,
                    NgHeaderMenu,
                ],
                imports: [
                    CommonModule,
                    FormsModule,
                    NgbModalModule,
                    NgbModule,
                    RouterModule,
                    ReactiveFormsModule,
                ],
                exports: [
                    FooterComponent,
                    HeaderComponent,
                    LoginComponent,
                    LeftSidebarComponent,
                    NgHeaderProfile,
                    NgHeaderLogo,
                    NgHeaderMenu,
                ],
                bootstrap: [
                    HeaderComponent,
                    LeftSidebarComponent,
                    FooterComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CcLibModule, FooterComponent as ɵa, NgHeaderLogo as ɵd, NgHeaderMenu as ɵc, NgHeaderProfile as ɵe, HeaderComponent as ɵb, LeftSidebarComponent as ɵg, LoginComponent as ɵf };

//# sourceMappingURL=cc-lib.js.map