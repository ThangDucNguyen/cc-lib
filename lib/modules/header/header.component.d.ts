import { AfterContentChecked, QueryList } from '@angular/core';
import { NgHeaderLogo } from './header-logo.directive';
import { NgHeaderMenu } from './header-menu.directive';
import { NgHeaderProfile } from './header-profile.directive';
export declare class HeaderComponent implements AfterContentChecked {
    menus: QueryList<NgHeaderMenu>;
    logos: QueryList<NgHeaderLogo>;
    profiles: QueryList<NgHeaderProfile>;
    menuTemplate: NgHeaderMenu | null;
    logoTemplate: NgHeaderLogo | null;
    profileTemplate: NgHeaderProfile | null;
    ngAfterContentChecked(): void;
}
