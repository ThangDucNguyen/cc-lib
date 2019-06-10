/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChildren, QueryList } from '@angular/core';
import { NgHeaderLogo } from './header-logo.directive';
import { NgHeaderMenu } from './header-menu.directive';
import { NgHeaderProfile } from './header-profile.directive';
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
    return HeaderComponent;
}());
export { HeaderComponent };
if (false) {
    /** @type {?} */
    HeaderComponent.prototype.menus;
    /** @type {?} */
    HeaderComponent.prototype.logos;
    /** @type {?} */
    HeaderComponent.prototype.profiles;
    /** @type {?} */
    HeaderComponent.prototype.menuTemplate;
    /** @type {?} */
    HeaderComponent.prototype.logoTemplate;
    /** @type {?} */
    HeaderComponent.prototype.profileTemplate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NjLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9tb2R1bGVzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUF1QixlQUFlLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpGLE9BQU8sRUFBRSxZQUFZLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBRTVEO0lBQUE7SUFxQkEsQ0FBQzs7OztJQU5DLCtDQUFxQjs7O0lBQXJCO1FBQ0UsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNyQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7SUFDN0MsQ0FBQzs7Z0JBbkJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsODRCQUFzQzs7aUJBRXZDOzs7d0JBR0UsZUFBZSxTQUFDLFlBQVk7d0JBQzVCLGVBQWUsU0FBQyxZQUFZOzJCQUM1QixlQUFlLFNBQUMsZUFBZTs7SUFZbEMsc0JBQUM7Q0FBQSxBQXJCRCxJQXFCQztTQWhCWSxlQUFlOzs7SUFFMUIsZ0NBQThEOztJQUM5RCxnQ0FBOEQ7O0lBQzlELG1DQUF1RTs7SUFFdkUsdUNBQWtDOztJQUNsQyx1Q0FBa0M7O0lBQ2xDLDBDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBBZnRlckNvbnRlbnRDaGVja2VkLCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5nSGVhZGVyTG9nb30gZnJvbSAnLi9oZWFkZXItbG9nby5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmdIZWFkZXJNZW51fSBmcm9tICcuL2hlYWRlci1tZW51LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOZ0hlYWRlclByb2ZpbGV9IGZyb20gJy4vaGVhZGVyLXByb2ZpbGUuZGlyZWN0aXZlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2MtbGliLWhlYWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9oZWFkZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkIHtcblxuICBAQ29udGVudENoaWxkcmVuKE5nSGVhZGVyTWVudSkgbWVudXM6IFF1ZXJ5TGlzdDxOZ0hlYWRlck1lbnU+O1xuICBAQ29udGVudENoaWxkcmVuKE5nSGVhZGVyTG9nbykgbG9nb3M6IFF1ZXJ5TGlzdDxOZ0hlYWRlckxvZ28+O1xuICBAQ29udGVudENoaWxkcmVuKE5nSGVhZGVyUHJvZmlsZSkgcHJvZmlsZXM6IFF1ZXJ5TGlzdDxOZ0hlYWRlclByb2ZpbGU+O1xuXG4gIG1lbnVUZW1wbGF0ZTogTmdIZWFkZXJNZW51IHwgbnVsbDtcbiAgbG9nb1RlbXBsYXRlOiBOZ0hlYWRlckxvZ28gfCBudWxsO1xuICBwcm9maWxlVGVtcGxhdGU6IE5nSGVhZGVyUHJvZmlsZSB8IG51bGw7XG5cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCkge1xuICAgIHRoaXMubWVudVRlbXBsYXRlID0gdGhpcy5tZW51cy5maXJzdDtcbiAgICB0aGlzLmxvZ29UZW1wbGF0ZSA9IHRoaXMubG9nb3MuZmlyc3Q7XG4gICAgdGhpcy5wcm9maWxlVGVtcGxhdGUgPSB0aGlzLnByb2ZpbGVzLmZpcnN0O1xuICB9XG5cbn1cblxuIl19