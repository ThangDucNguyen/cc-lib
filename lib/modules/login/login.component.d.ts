import { EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
export declare class LoginComponent implements OnInit {
    router: Router;
    private formBuider;
    constructor(router: Router, formBuider: FormBuilder);
    loginForm: FormGroup;
    userName: string;
    password: string;
    submitted: boolean;
    login: EventEmitter<any>;
    ngOnInit(): void;
    readonly helperFunction: {
        [key: string]: import("@angular/forms").AbstractControl;
    };
    onSubmit(): void;
    onLoggedin(): void;
}
