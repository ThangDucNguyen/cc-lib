/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
var LeftSidebarComponent = /** @class */ (function () {
    function LeftSidebarComponent(router) {
        var _this = this;
        this.router = router;
        this.collapsedEvent = new EventEmitter();
        this.router.events.subscribe((/**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val instanceof NavigationEnd &&
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
        { type: Component, args: [{
                    selector: 'cc-lib-left-sidebar',
                    template: "<nav class=\"sidebar\" [ngClass]=\"{sidebarPushRight: isActive, collapsed: collapsed}\">\n  <div class=\"list-group\">\n    <div class=\"nested-menu\" *ngIf=\"menuSettings != null\">\n      <div *ngFor=\"let menu of menuSettings.menuItems\">\n      <a routerLink=\"{{menu.link}}\" class=\"list-group-item\">\n        <em class=\"fa fa-{{menu.icon}}\"></em>&nbsp;\n        <span>{{menu.title}}</span>\n      </a>\n      </div>\n    </div>\n  </div>\n  <div class=\"toggle-button\" [ngClass]=\"{collapsed: collapsed}\" (click)=\"toggleCollapsed()\">\n    <em class=\"fa fa-fw fa-angle-double-{{collapsed?'right':'left'}}\"></em>&nbsp;\n  </div>\n</nav>\n",
                    styles: [".sidebar{border-radius:0;position:fixed;text-align:left;z-index:1000;padding-right:200px;top:85px;left:235px;width:15%;margin-left:-235px;margin-bottom:48px;border:none;overflow-y:auto;background-color:#f8f9fa;bottom:0;overflow-x:hidden;padding-bottom:40px;white-space:nowrap;transition:.2s ease-in-out;border-top:1px solid rgba(255,255,255,.3)}.sidebar .list-group a.list-group-item{background:#f8f9fa;border:0;border-radius:0;color:#000;text-decoration:none}.sidebar .list-group a.list-group-item .fa{margin-right:10px}.sidebar .list-group a:hover{background:#657a8e;color:#000}.nested-menu .list-group-item{cursor:pointer}.nested-menu .nested{list-style-type:none}.nested-menu ul.submenu{display:none;height:0}.nested-menu .expand ul.submenu{display:block;list-style-type:none;height:auto}.nested-menu .expand ul.submenu li a{color:#fff;padding:10px;display:block}@media screen and (max-width:992px){.sidebar{width:60px}.sidebar span,.toggle-button{display:none}}@media print{.sidebar{display:none!important}}@media (min-width:992px){.header-fields{display:none}}.toggle-button{position:fixed;width:15%;cursor:pointer;padding:12px;bottom:0;color:#999;background:#f8f9fa;border:1px solid #999;transition:.2s ease-in-out}.toggle-button:hover{background:#cbd3da;color:#000}.collapsed{width:60px}.collapsed span{display:none}"]
                }] }
    ];
    /** @nocollapse */
    LeftSidebarComponent.ctorParameters = function () { return [
        { type: Router }
    ]; };
    LeftSidebarComponent.propDecorators = {
        title: [{ type: Input }],
        menuSettings: [{ type: Input }],
        collapsedEvent: [{ type: Output }]
    };
    return LeftSidebarComponent;
}());
export { LeftSidebarComponent };
if (false) {
    /** @type {?} */
    LeftSidebarComponent.prototype.title;
    /** @type {?} */
    LeftSidebarComponent.prototype.menuSettings;
    /** @type {?} */
    LeftSidebarComponent.prototype.isActive;
    /** @type {?} */
    LeftSidebarComponent.prototype.collapsed;
    /** @type {?} */
    LeftSidebarComponent.prototype.showMenu;
    /** @type {?} */
    LeftSidebarComponent.prototype.pushRightClass;
    /** @type {?} */
    LeftSidebarComponent.prototype.collapsedEvent;
    /** @type {?} */
    LeftSidebarComponent.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVmdC1zaWRlYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NjLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9tb2R1bGVzL2xlZnQtc2lkZWJhci9sZWZ0LXNpZGViYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQVUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHeEQ7SUFlRSw4QkFBbUIsTUFBYztRQUFqQyxpQkFVQztRQVZrQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRnZCLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUdyRCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxHQUFHO1lBQzlCLElBQ0UsR0FBRyxZQUFZLGFBQWE7Z0JBQzVCLE1BQU0sQ0FBQyxVQUFVLElBQUksR0FBRztnQkFDeEIsS0FBSSxDQUFDLFNBQVMsRUFBRSxFQUNoQjtnQkFDQSxLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDdEI7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCx1Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsY0FBYyxHQUFHLFlBQVksQ0FBQztJQUNyQyxDQUFDOzs7O0lBRUQsd0NBQVM7OztJQUFUOztZQUNRLEdBQUcsR0FBWSxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQztRQUNuRCxPQUFPLEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7O0lBRUQsOENBQWU7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDakMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7SUFFRCw0Q0FBYTs7O0lBQWI7O1lBQ1EsR0FBRyxHQUFRLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO1FBQy9DLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM1QyxDQUFDOztnQkEvQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLHdwQkFBNEM7O2lCQUU3Qzs7OztnQkFQUSxNQUFNOzs7d0JBU1osS0FBSzsrQkFDTCxLQUFLO2lDQU1MLE1BQU07O0lBbUNULDJCQUFDO0NBQUEsQUFoREQsSUFnREM7U0EzQ1ksb0JBQW9COzs7SUFDL0IscUNBQXVCOztJQUN2Qiw0Q0FBNEI7O0lBQzVCLHdDQUFrQjs7SUFDbEIseUNBQW1COztJQUNuQix3Q0FBaUI7O0lBQ2pCLDhDQUF1Qjs7SUFFdkIsOENBQXVEOztJQUUzQyxzQ0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uRW5kIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7TWVudX0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9pbnRlcmZhY2VzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2MtbGliLWxlZnQtc2lkZWJhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9sZWZ0LXNpZGViYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sZWZ0LXNpZGViYXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMZWZ0U2lkZWJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG1lbnVTZXR0aW5nczogTWVudTtcbiAgaXNBY3RpdmU6IGJvb2xlYW47XG4gIGNvbGxhcHNlZDogYm9vbGVhbjtcbiAgc2hvd01lbnU6IHN0cmluZztcbiAgcHVzaFJpZ2h0Q2xhc3M6IHN0cmluZztcblxuICBAT3V0cHV0KCkgY29sbGFwc2VkRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHJvdXRlcjogUm91dGVyKSB7XG4gICAgdGhpcy5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZSh2YWwgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICB2YWwgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kICYmXG4gICAgICAgIHdpbmRvdy5pbm5lcldpZHRoIDw9IDk5MiAmJlxuICAgICAgICB0aGlzLmlzVG9nZ2xlZCgpXG4gICAgICApIHtcbiAgICAgICAgdGhpcy50b2dnbGVTaWRlYmFyKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5jb2xsYXBzZWQgPSBmYWxzZTtcbiAgICB0aGlzLnNob3dNZW51ID0gJyc7XG4gICAgdGhpcy5wdXNoUmlnaHRDbGFzcyA9ICdwdXNoLXJpZ2h0JztcbiAgfVxuXG4gIGlzVG9nZ2xlZCgpOiBib29sZWFuIHtcbiAgICBjb25zdCBkb206IEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgcmV0dXJuIGRvbS5jbGFzc0xpc3QuY29udGFpbnModGhpcy5wdXNoUmlnaHRDbGFzcyk7XG4gIH1cblxuICB0b2dnbGVDb2xsYXBzZWQoKSB7XG4gICAgdGhpcy5jb2xsYXBzZWQgPSAhdGhpcy5jb2xsYXBzZWQ7XG4gICAgdGhpcy5jb2xsYXBzZWRFdmVudC5lbWl0KHRoaXMuY29sbGFwc2VkKTtcbiAgfVxuXG4gIHRvZ2dsZVNpZGViYXIoKSB7XG4gICAgY29uc3QgZG9tOiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgZG9tLmNsYXNzTGlzdC50b2dnbGUodGhpcy5wdXNoUmlnaHRDbGFzcyk7XG4gIH1cbn1cbiJdfQ==