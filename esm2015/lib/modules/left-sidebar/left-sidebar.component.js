/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
export class LeftSidebarComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVmdC1zaWRlYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NjLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9tb2R1bGVzL2xlZnQtc2lkZWJhci9sZWZ0LXNpZGViYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQVUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFReEQsTUFBTSxPQUFPLG9CQUFvQjs7OztJQVUvQixZQUFtQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUZ2QixtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFHckQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUzs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2pDLElBQ0UsR0FBRyxZQUFZLGFBQWE7Z0JBQzVCLE1BQU0sQ0FBQyxVQUFVLElBQUksR0FBRztnQkFDeEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUNoQjtnQkFDQSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDdEI7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxZQUFZLENBQUM7SUFDckMsQ0FBQzs7OztJQUVELFNBQVM7O2NBQ0QsR0FBRyxHQUFZLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO1FBQ25ELE9BQU8sR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDakMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7SUFFRCxhQUFhOztjQUNMLEdBQUcsR0FBUSxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQztRQUMvQyxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7O1lBL0NGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQix3cEJBQTRDOzthQUU3Qzs7OztZQVBRLE1BQU07OztvQkFTWixLQUFLOzJCQUNMLEtBQUs7NkJBTUwsTUFBTTs7OztJQVBQLHFDQUF1Qjs7SUFDdkIsNENBQTRCOztJQUM1Qix3Q0FBa0I7O0lBQ2xCLHlDQUFtQjs7SUFDbkIsd0NBQWlCOztJQUNqQiw4Q0FBdUI7O0lBRXZCLDhDQUF1RDs7SUFFM0Msc0NBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvbkVuZCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge01lbnV9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvaW50ZXJmYWNlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NjLWxpYi1sZWZ0LXNpZGViYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vbGVmdC1zaWRlYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGVmdC1zaWRlYmFyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTGVmdFNpZGViYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSBtZW51U2V0dGluZ3M6IE1lbnU7XG4gIGlzQWN0aXZlOiBib29sZWFuO1xuICBjb2xsYXBzZWQ6IGJvb2xlYW47XG4gIHNob3dNZW51OiBzdHJpbmc7XG4gIHB1c2hSaWdodENsYXNzOiBzdHJpbmc7XG5cbiAgQE91dHB1dCgpIGNvbGxhcHNlZEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByb3V0ZXI6IFJvdXRlcikge1xuICAgIHRoaXMucm91dGVyLmV2ZW50cy5zdWJzY3JpYmUodmFsID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgdmFsIGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCAmJlxuICAgICAgICB3aW5kb3cuaW5uZXJXaWR0aCA8PSA5OTIgJiZcbiAgICAgICAgdGhpcy5pc1RvZ2dsZWQoKVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlU2lkZWJhcigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuY29sbGFwc2VkID0gZmFsc2U7XG4gICAgdGhpcy5zaG93TWVudSA9ICcnO1xuICAgIHRoaXMucHVzaFJpZ2h0Q2xhc3MgPSAncHVzaC1yaWdodCc7XG4gIH1cblxuICBpc1RvZ2dsZWQoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgZG9tOiBFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIHJldHVybiBkb20uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMucHVzaFJpZ2h0Q2xhc3MpO1xuICB9XG5cbiAgdG9nZ2xlQ29sbGFwc2VkKCkge1xuICAgIHRoaXMuY29sbGFwc2VkID0gIXRoaXMuY29sbGFwc2VkO1xuICAgIHRoaXMuY29sbGFwc2VkRXZlbnQuZW1pdCh0aGlzLmNvbGxhcHNlZCk7XG4gIH1cblxuICB0b2dnbGVTaWRlYmFyKCkge1xuICAgIGNvbnN0IGRvbTogYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGRvbS5jbGFzc0xpc3QudG9nZ2xlKHRoaXMucHVzaFJpZ2h0Q2xhc3MpO1xuICB9XG59XG4iXX0=