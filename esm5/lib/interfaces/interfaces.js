/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Header Interface Model
 * @record
 */
export function HeaderSettings() { }
if (false) {
    /** @type {?} */
    HeaderSettings.prototype.isLogin;
    /** @type {?} */
    HeaderSettings.prototype.searchEnabled;
    /** @type {?} */
    HeaderSettings.prototype.menuEnabled;
    /** @type {?} */
    HeaderSettings.prototype.logoUrl;
    /** @type {?} */
    HeaderSettings.prototype.orgName;
    /** @type {?|undefined} */
    HeaderSettings.prototype.menus;
    /** @type {?} */
    HeaderSettings.prototype.user;
}
/**
 * Header Menu Interface Model
 * @record
 */
export function MenuData() { }
if (false) {
    /** @type {?} */
    MenuData.prototype.title;
    /** @type {?} */
    MenuData.prototype.link;
}
/**
 * User Info Interface Model
 * @record
 */
export function User() { }
if (false) {
    /** @type {?} */
    User.prototype.userName;
    /** @type {?} */
    User.prototype.profileImage;
    /** @type {?|undefined} */
    User.prototype.tags;
}
/**
 * User Profile tags Interface Model
 * @record
 */
export function Tag() { }
if (false) {
    /** @type {?} */
    Tag.prototype.detail;
    /** @type {?} */
    Tag.prototype.link;
}
/**
 * User Info Interface Model
 * @record
 */
export function Menu() { }
if (false) {
    /** @type {?} */
    Menu.prototype.menuItems;
}
/**
 * User Info Interface Model
 * @record
 */
export function MenuItem() { }
if (false) {
    /** @type {?} */
    MenuItem.prototype.title;
    /** @type {?} */
    MenuItem.prototype.link;
    /** @type {?|undefined} */
    MenuItem.prototype.icon;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NjLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9pbnRlcmZhY2VzL2ludGVyZmFjZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFHQSxvQ0FRQzs7O0lBUEMsaUNBQWlCOztJQUNqQix1Q0FBdUI7O0lBQ3ZCLHFDQUFxQjs7SUFDckIsaUNBQWdCOztJQUNoQixpQ0FBZ0I7O0lBQ2hCLCtCQUFtQjs7SUFDbkIsOEJBQVc7Ozs7OztBQU1iLDhCQUdDOzs7SUFGQyx5QkFBYzs7SUFDZCx3QkFBYTs7Ozs7O0FBTWYsMEJBSUM7OztJQUhDLHdCQUFpQjs7SUFDakIsNEJBQXFCOztJQUNyQixvQkFBYTs7Ozs7O0FBTWYseUJBR0M7OztJQUZDLHFCQUFlOztJQUNmLG1CQUFhOzs7Ozs7QUFNZiwwQkFFQzs7O0lBREMseUJBQXNCOzs7Ozs7QUFNeEIsOEJBSUM7OztJQUhDLHlCQUFjOztJQUNkLHdCQUFhOztJQUNiLHdCQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBIZWFkZXIgSW50ZXJmYWNlIE1vZGVsXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSGVhZGVyU2V0dGluZ3Mge1xuICBpc0xvZ2luOiBib29sZWFuO1xuICBzZWFyY2hFbmFibGVkOiBib29sZWFuO1xuICBtZW51RW5hYmxlZDogYm9vbGVhbjtcbiAgbG9nb1VybDogc3RyaW5nO1xuICBvcmdOYW1lOiBzdHJpbmc7XG4gIG1lbnVzPzogTWVudURhdGFbXTtcbiAgdXNlcjogVXNlcjtcbn1cblxuLyoqXG4gKiBIZWFkZXIgTWVudSBJbnRlcmZhY2UgTW9kZWxcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBNZW51RGF0YSB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGxpbms6IHN0cmluZztcbn1cblxuLyoqXG4gKiBVc2VyIEluZm8gSW50ZXJmYWNlIE1vZGVsXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVXNlciB7XG4gIHVzZXJOYW1lOiBzdHJpbmc7XG4gIHByb2ZpbGVJbWFnZTogc3RyaW5nO1xuICB0YWdzPzogVGFnW107XG59XG5cbi8qKlxuICogVXNlciBQcm9maWxlIHRhZ3MgSW50ZXJmYWNlIE1vZGVsXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVGFnIHtcbiAgZGV0YWlsOiBzdHJpbmc7XG4gIGxpbms6IHN0cmluZztcbn1cblxuLyoqXG4gKiBVc2VyIEluZm8gSW50ZXJmYWNlIE1vZGVsXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTWVudSB7XG4gIG1lbnVJdGVtczogTWVudUl0ZW1bXTtcbn1cblxuLyoqXG4gKiBVc2VyIEluZm8gSW50ZXJmYWNlIE1vZGVsXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTWVudUl0ZW0ge1xuICB0aXRsZTogc3RyaW5nO1xuICBsaW5rOiBzdHJpbmc7XG4gIGljb24/OiBzdHJpbmc7XG59XG5cbiJdfQ==