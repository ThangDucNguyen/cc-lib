/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
export class LoginComponent {
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
if (false) {
    /** @type {?} */
    LoginComponent.prototype.loginForm;
    /** @type {?} */
    LoginComponent.prototype.userName;
    /** @type {?} */
    LoginComponent.prototype.password;
    /** @type {?} */
    LoginComponent.prototype.submitted;
    /** @type {?} */
    LoginComponent.prototype.login;
    /** @type {?} */
    LoginComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    LoginComponent.prototype.formBuider;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2MtbGliLyIsInNvdXJjZXMiOlsibGliL21vZHVsZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUMsV0FBVyxFQUFhLFVBQVUsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBT2xFLE1BQU0sT0FBTyxjQUFjOzs7OztJQUN6QixZQUNTLE1BQWMsRUFBVSxVQUF1QjtRQUEvQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBYTtRQUkvQyxhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDakIsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFOdkMsQ0FBQzs7OztJQVFKLFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUNwQztZQUNFLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO1lBQ25DLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO1NBQ3BDLENBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7SUFDRCxJQUFJLGNBQWM7UUFDaEIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztJQUNqQyxDQUFDO0lBQUEsQ0FBQzs7OztJQUVGLFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFO1lBQzFCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLO1lBQy9ELFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBQ0QsVUFBVTtRQUNSLFlBQVksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzdDLENBQUM7OztZQXRDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLG1tREFBcUM7O2FBRXRDOzs7O1lBUFEsTUFBTTtZQUNQLFdBQVc7Ozt1QkFhaEIsS0FBSzt1QkFDTCxLQUFLO3dCQUNMLEtBQUs7b0JBQ0wsTUFBTTs7OztJQUpQLG1DQUFxQjs7SUFDckIsa0NBQXVCOztJQUN2QixrQ0FBdUI7O0lBQ3ZCLG1DQUEyQjs7SUFDM0IsK0JBQTBDOztJQVB4QyxnQ0FBcUI7Ozs7O0lBQUUsb0NBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2MtbGliLWxvZ2luJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvZ2luLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbG9naW4uY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgZm9ybUJ1aWRlcjogRm9ybUJ1aWxkZXJcbiAgKSB7fVxuXG4gIGxvZ2luRm9ybTogRm9ybUdyb3VwO1xuICBASW5wdXQoKSB1c2VyTmFtZSA9ICcnO1xuICBASW5wdXQoKSBwYXNzd29yZCA9ICcnO1xuICBASW5wdXQoKSBzdWJtaXR0ZWQgPSBmYWxzZTtcbiAgQE91dHB1dCgpIGxvZ2luID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5sb2dpbkZvcm0gPSB0aGlzLmZvcm1CdWlkZXIuZ3JvdXAoXG4gICAgICB7XG4gICAgICAgIHVzZXJOYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICBwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgICAgfVxuICAgICk7XG4gIH1cbiAgZ2V0IGhlbHBlckZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmxvZ2luRm9ybS5jb250cm9scztcbiAgfTtcblxuICBvblN1Ym1pdCgpIHtcbiAgICB0aGlzLnN1Ym1pdHRlZCA9IHRydWU7XG4gICAgaWYgKHRoaXMubG9naW5Gb3JtLmludmFsaWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5sb2dpbi5lbWl0KHt1c2VyTmFtZTogdGhpcy5sb2dpbkZvcm0uY29udHJvbHMudXNlck5hbWUudmFsdWUsXG4gICAgICBwYXNzd29yZDogdGhpcy5sb2dpbkZvcm0uY29udHJvbHMucGFzc3dvcmQudmFsdWUgfSk7XG4gIH1cbiAgb25Mb2dnZWRpbigpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaXNMb2dnZWRpbicsICd0cnVlJyk7XG4gIH1cbn1cbiJdfQ==