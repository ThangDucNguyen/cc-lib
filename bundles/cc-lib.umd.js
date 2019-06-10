(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@ng-bootstrap/ng-bootstrap'), require('@angular/forms'), require('@angular/core'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('cc-lib', ['exports', '@angular/common', '@ng-bootstrap/ng-bootstrap', '@angular/forms', '@angular/core', '@angular/router'], factory) :
    (factory((global['cc-lib'] = {}),global.ng.common,global.ngBootstrap,global.ng.forms,global.ng.core,global.ng.router));
}(this, (function (exports,common,ngBootstrap,forms,core,router) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FooterComponent = /** @class */ (function () {
        function FooterComponent() {
        }
        /**
         * @return {?}
         */
        FooterComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        FooterComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cc-lib-footer',
                        template: "<div class=\"cc-lib-footer\">\n  <ng-content></ng-content>\n</div>\n",
                        styles: [".ngx-ccLib-footer{flex-direction:column;min-height:10rem;display:flex;justify-content:center;align-items:center}"]
                    }] }
        ];
        /** @nocollapse */
        FooterComponent.ctorParameters = function () { return []; };
        FooterComponent.propDecorators = {
            title: [{ type: core.Input }]
        };
        return FooterComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgHeaderLogo = /** @class */ (function () {
        function NgHeaderLogo(templateRef) {
            this.templateRef = templateRef;
        }
        NgHeaderLogo.decorators = [
            { type: core.Directive, args: [{ selector: 'ng-template[ngHeaderLogo]' },] }
        ];
        /** @nocollapse */
        NgHeaderLogo.ctorParameters = function () {
            return [
                { type: core.TemplateRef }
            ];
        };
        return NgHeaderLogo;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgHeaderMenu = /** @class */ (function () {
        function NgHeaderMenu(templateRef) {
            this.templateRef = templateRef;
        }
        NgHeaderMenu.decorators = [
            { type: core.Directive, args: [{ selector: 'ng-template[ngHeaderMenu]' },] }
        ];
        /** @nocollapse */
        NgHeaderMenu.ctorParameters = function () {
            return [
                { type: core.TemplateRef }
            ];
        };
        return NgHeaderMenu;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgHeaderProfile = /** @class */ (function () {
        function NgHeaderProfile(templateRef) {
            this.templateRef = templateRef;
        }
        NgHeaderProfile.decorators = [
            { type: core.Directive, args: [{ selector: 'ng-template[ngHeaderProfile]' },] }
        ];
        /** @nocollapse */
        NgHeaderProfile.ctorParameters = function () {
            return [
                { type: core.TemplateRef }
            ];
        };
        return NgHeaderProfile;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HeaderComponent = /** @class */ (function () {
        function HeaderComponent() {
        }
        /**
         * @return {?}
         */
        HeaderComponent.prototype.ngAfterContentChecked = /**
         * @return {?}
         */
            function () {
                this.menuTemplate = this.menus.first;
                this.logoTemplate = this.logos.first;
                this.profileTemplate = this.profiles.first;
            };
        HeaderComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cc-lib-header',
                        template: "<div class=\"headerContainer\">\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light shadow-sm ngx-ccLib-header\">\n    <!-- Org Name -->\n    <b class=\"navbar-brand\" href=\"#\">\n      <ng-template [ngTemplateOutlet]=\"logoTemplate?.templateRef\"></ng-template>\n    </b>\n\n    <!-- button toggle -->\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <!-- Menuitems -->\n        <ng-template [ngTemplateOutlet]=\"menuTemplate?.templateRef\"></ng-template>\n    <!-- Dropdown Profile -->\n    <div class=\"d-inline-block\" >\n        <ng-template [ngTemplateOutlet]=\"profileTemplate?.templateRef\"></ng-template>\n    </div>\n  </nav>\n</div>\n",
                        styles: [".ngx-ccLib-header{top:0;left:0;position:fixed;width:100%}"]
                    }] }
        ];
        HeaderComponent.propDecorators = {
            menus: [{ type: core.ContentChildren, args: [NgHeaderMenu,] }],
            logos: [{ type: core.ContentChildren, args: [NgHeaderLogo,] }],
            profiles: [{ type: core.ContentChildren, args: [NgHeaderProfile,] }]
        };
        return HeaderComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LoginComponent = /** @class */ (function () {
        function LoginComponent(router$$1, formBuider) {
            this.router = router$$1;
            this.formBuider = formBuider;
            this.userName = '';
            this.password = '';
            this.submitted = false;
            this.login = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        LoginComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.loginForm = this.formBuider.group({
                    userName: ['', forms.Validators.required],
                    password: ['', forms.Validators.required]
                });
            };
        Object.defineProperty(LoginComponent.prototype, "helperFunction", {
            get: /**
             * @return {?}
             */ function () {
                return this.loginForm.controls;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        LoginComponent.prototype.onSubmit = /**
         * @return {?}
         */
            function () {
                this.submitted = true;
                if (this.loginForm.invalid) {
                    return;
                }
                this.login.emit({ userName: this.loginForm.controls.userName.value,
                    password: this.loginForm.controls.password.value });
            };
        /**
         * @return {?}
         */
        LoginComponent.prototype.onLoggedin = /**
         * @return {?}
         */
            function () {
                localStorage.setItem('isLoggedin', 'true');
            };
        LoginComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cc-lib-login',
                        template: "<div class=\"loginContainer\">\n    <div class=\"container pt-5 mt-5\" >\n      <div class=\"row justify-content-md-center\">\n        <div class=\"col-md-4\">\n          <div style=\"width: 400px;\" class=\"card border-info text-center\">\n            <div class=\"card-body\">\n              <img src=\"https://static.vingroup.net/vgh_files/assets/images/icons/vingroup.png\" alt=\"VinGroup\">\n              <form class=\"form-signin\" (ngSubmit)=\"onSubmit()\" [formGroup]=\"loginForm\">\n                <div class=\"form-group\">\n                  <input type=\"text\" formControlName=\"userName\" [(ngModel)]=\"userName\"  [ngClass]=\"{ 'isInvalid': submitted && helperFunction.userName.errors }\" class=\"form-control mb-2\" placeholder=\"User Name\" required autofocus>\n                </div>\n                <div class=\"form-group\">\n                  <input formControlName=\"password\" [(ngModel)]=\"password\" [ngClass]=\"{ 'isInvalid': submitted && helperFunction.errors }\" type=\"password\" class=\"form-control mb-2\"  placeholder=\"Password\" required>\n                </div>\n                <button class=\"btn btn-info btn-primary btn-block mb-1\" type=\"submit\" [routerLink]=\"['/dashboard']\" (click)=\"onLoggedin()\">Log in</button>\n                <label class=\"checkbox float-left\">\n                  <input type=\"checkbox\" value=\"remember-me\">\n                  Remember me\n                </label>\n                <a href=\"#\" class=\"float-right\">Need help?</a>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n</div>\n",
                        styles: [":host{display:block}.loginContainer{width:100%;position:absolute;min-height:100%;background-position:center;background-repeat:no-repeat;background-size:cover;background-image:url(http://vingroup.net/Uploads/0_Tintuchoatdong/2018/Vinhomes/Anh%202_VinCity%20Ocean%20Park%20_Phoi%20canh%20tong%20the.jpg)}.login-page{position:absolute;top:0;left:0;right:0;bottom:0;overflow:auto;background:#f8f9fa;text-align:center;color:#fff;padding:3em}.login-page .col-lg-4{padding:0}.login-page .input-lg{height:46px;padding:10px 16px;font-size:18px;line-height:1.3333333;border-radius:0}.login-page .input-underline{background:0 0;border:none;box-shadow:none;border-bottom:2px solid rgba(255,255,255,.5);color:#fff;border-radius:0}.login-page .input-underline:focus{border-bottom:2px solid #fff;box-shadow:none}.login-page .rounded-btn{border-radius:50px;color:rgba(255,255,255,.8);background:#f8f9fa;border:2px solid rgba(255,255,255,.8);font-size:18px;line-height:40px;padding:0 25px}.login-page .rounded-btn:active,.login-page .rounded-btn:focus,.login-page .rounded-btn:hover,.login-page .rounded-btn:visited{color:#fff;border:2px solid #fff;outline:0}.login-page h1{font-weight:300;margin-top:20px;margin-bottom:10px;font-size:36px}.login-page h1 small{color:rgba(255,255,255,.7)}.login-page .form-group{padding:8px 0}.login-page .form-content{padding:40px 0}.login-page .user-avatar{border-radius:50%;border:2px solid #fff}"]
                    }] }
        ];
        /** @nocollapse */
        LoginComponent.ctorParameters = function () {
            return [
                { type: router.Router },
                { type: forms.FormBuilder }
            ];
        };
        LoginComponent.propDecorators = {
            userName: [{ type: core.Input }],
            password: [{ type: core.Input }],
            submitted: [{ type: core.Input }],
            login: [{ type: core.Output }]
        };
        return LoginComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LeftSidebarComponent = /** @class */ (function () {
        function LeftSidebarComponent(router$$1) {
            var _this = this;
            this.router = router$$1;
            this.collapsedEvent = new core.EventEmitter();
            this.router.events.subscribe(( /**
             * @param {?} val
             * @return {?}
             */function (val) {
                if (val instanceof router.NavigationEnd &&
                    window.innerWidth <= 992 &&
                    _this.isToggled()) {
                    _this.toggleSidebar();
                }
            }));
        }
        /**
         * @return {?}
         */
        LeftSidebarComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.isActive = false;
                this.collapsed = false;
                this.showMenu = '';
                this.pushRightClass = 'push-right';
            };
        /**
         * @return {?}
         */
        LeftSidebarComponent.prototype.isToggled = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var dom = document.querySelector('body');
                return dom.classList.contains(this.pushRightClass);
            };
        /**
         * @return {?}
         */
        LeftSidebarComponent.prototype.toggleCollapsed = /**
         * @return {?}
         */
            function () {
                this.collapsed = !this.collapsed;
                this.collapsedEvent.emit(this.collapsed);
            };
        /**
         * @return {?}
         */
        LeftSidebarComponent.prototype.toggleSidebar = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var dom = document.querySelector('body');
                dom.classList.toggle(this.pushRightClass);
            };
        LeftSidebarComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cc-lib-left-sidebar',
                        template: "<nav class=\"sidebar\" [ngClass]=\"{sidebarPushRight: isActive, collapsed: collapsed}\">\n  <div class=\"list-group\">\n    <div class=\"nested-menu\" *ngIf=\"menuSettings != null\">\n      <div *ngFor=\"let menu of menuSettings.menuItems\">\n      <a routerLink=\"{{menu.link}}\" class=\"list-group-item\">\n        <em class=\"fa fa-{{menu.icon}}\"></em>&nbsp;\n        <span>{{menu.title}}</span>\n      </a>\n      </div>\n    </div>\n  </div>\n  <div class=\"toggle-button\" [ngClass]=\"{collapsed: collapsed}\" (click)=\"toggleCollapsed()\">\n    <em class=\"fa fa-fw fa-angle-double-{{collapsed?'right':'left'}}\"></em>&nbsp;\n  </div>\n</nav>\n",
                        styles: [".sidebar{border-radius:0;position:fixed;text-align:left;z-index:1000;padding-right:200px;top:85px;left:235px;width:15%;margin-left:-235px;margin-bottom:48px;border:none;overflow-y:auto;background-color:#f8f9fa;bottom:0;overflow-x:hidden;padding-bottom:40px;white-space:nowrap;transition:.2s ease-in-out;border-top:1px solid rgba(255,255,255,.3)}.sidebar .list-group a.list-group-item{background:#f8f9fa;border:0;border-radius:0;color:#000;text-decoration:none}.sidebar .list-group a.list-group-item .fa{margin-right:10px}.sidebar .list-group a:hover{background:#657a8e;color:#000}.nested-menu .list-group-item{cursor:pointer}.nested-menu .nested{list-style-type:none}.nested-menu ul.submenu{display:none;height:0}.nested-menu .expand ul.submenu{display:block;list-style-type:none;height:auto}.nested-menu .expand ul.submenu li a{color:#fff;padding:10px;display:block}@media screen and (max-width:992px){.sidebar{width:60px}.sidebar span,.toggle-button{display:none}}@media print{.sidebar{display:none!important}}@media (min-width:992px){.header-fields{display:none}}.toggle-button{position:fixed;width:15%;cursor:pointer;padding:12px;bottom:0;color:#999;background:#f8f9fa;border:1px solid #999;transition:.2s ease-in-out}.toggle-button:hover{background:#cbd3da;color:#000}.collapsed{width:60px}.collapsed span{display:none}"]
                    }] }
        ];
        /** @nocollapse */
        LeftSidebarComponent.ctorParameters = function () {
            return [
                { type: router.Router }
            ];
        };
        LeftSidebarComponent.propDecorators = {
            title: [{ type: core.Input }],
            menuSettings: [{ type: core.Input }],
            collapsedEvent: [{ type: core.Output }]
        };
        return LeftSidebarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CcLibModule = /** @class */ (function () {
        function CcLibModule() {
        }
        CcLibModule.decorators = [
            { type: core.NgModule, args: [{
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
                            common.CommonModule,
                            forms.FormsModule,
                            ngBootstrap.NgbModalModule,
                            ngBootstrap.NgbModule,
                            router.RouterModule,
                            forms.ReactiveFormsModule,
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
        return CcLibModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.CcLibModule = CcLibModule;
    exports.ɵa = FooterComponent;
    exports.ɵd = NgHeaderLogo;
    exports.ɵc = NgHeaderMenu;
    exports.ɵe = NgHeaderProfile;
    exports.ɵb = HeaderComponent;
    exports.ɵg = LeftSidebarComponent;
    exports.ɵf = LoginComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=cc-lib.umd.js.map