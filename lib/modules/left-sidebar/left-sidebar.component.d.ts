import { EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from '../../interfaces/interfaces';
export declare class LeftSidebarComponent implements OnInit {
    router: Router;
    title: string;
    menuSettings: Menu;
    isActive: boolean;
    collapsed: boolean;
    showMenu: string;
    pushRightClass: string;
    collapsedEvent: EventEmitter<boolean>;
    constructor(router: Router);
    ngOnInit(): void;
    isToggled(): boolean;
    toggleCollapsed(): void;
    toggleSidebar(): void;
}
