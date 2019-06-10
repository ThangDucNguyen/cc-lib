/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './modules/footer/footer.component';
import { HeaderComponent } from './modules/header/header.component';
import { LoginComponent } from './modules/login/login.component';
import { LeftSidebarComponent } from './modules/left-sidebar/left-sidebar.component';
import { RouterModule } from '@angular/router';
import { NgHeaderProfile } from './modules/header/header-profile.directive';
import { NgHeaderLogo } from './modules/header/header-logo.directive';
import { NgHeaderMenu } from './modules/header/header-menu.directive';
export class CcLibModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2MtbGliLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NjLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jYy1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUFFLFNBQVMsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxjQUFjLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDcEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNqRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNyRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFtQ3RFLE1BQU0sT0FBTyxXQUFXOzs7WUFqQ3ZCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osZUFBZTtvQkFDZixlQUFlO29CQUNmLGNBQWM7b0JBQ2Qsb0JBQW9CO29CQUNwQixlQUFlO29CQUNmLFlBQVk7b0JBQ1osWUFBWTtpQkFDYjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO29CQUNYLGNBQWM7b0JBQ2QsU0FBUztvQkFDVCxZQUFZO29CQUNaLG1CQUFtQjtpQkFDcEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGVBQWU7b0JBQ2YsZUFBZTtvQkFDZixjQUFjO29CQUNkLG9CQUFvQjtvQkFDcEIsZUFBZTtvQkFDZixZQUFZO29CQUNaLFlBQVk7aUJBQ2I7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULGVBQWU7b0JBQ2Ysb0JBQW9CO29CQUNwQixlQUFlO2lCQUNoQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0Zvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOZ2JNb2R1bGV9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IE5nYk1vZGFsTW9kdWxlfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBGb290ZXJDb21wb25lbnQgfSBmcm9tICcuL21vZHVsZXMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9tb2R1bGVzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9tb2R1bGVzL2xvZ2luL2xvZ2luLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMZWZ0U2lkZWJhckNvbXBvbmVudCB9IGZyb20gJy4vbW9kdWxlcy9sZWZ0LXNpZGViYXIvbGVmdC1zaWRlYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTmdIZWFkZXJQcm9maWxlIH0gZnJvbSAnLi9tb2R1bGVzL2hlYWRlci9oZWFkZXItcHJvZmlsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmdIZWFkZXJMb2dvIH0gZnJvbSAnLi9tb2R1bGVzL2hlYWRlci9oZWFkZXItbG9nby5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmdIZWFkZXJNZW51IH0gZnJvbSAnLi9tb2R1bGVzL2hlYWRlci9oZWFkZXItbWVudS5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBGb290ZXJDb21wb25lbnQsXG4gICAgSGVhZGVyQ29tcG9uZW50LFxuICAgIExvZ2luQ29tcG9uZW50LFxuICAgIExlZnRTaWRlYmFyQ29tcG9uZW50LFxuICAgIE5nSGVhZGVyUHJvZmlsZSxcbiAgICBOZ0hlYWRlckxvZ28sXG4gICAgTmdIZWFkZXJNZW51LFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIE5nYk1vZGFsTW9kdWxlLFxuICAgIE5nYk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEZvb3RlckNvbXBvbmVudCxcbiAgICBIZWFkZXJDb21wb25lbnQsXG4gICAgTG9naW5Db21wb25lbnQsXG4gICAgTGVmdFNpZGViYXJDb21wb25lbnQsXG4gICAgTmdIZWFkZXJQcm9maWxlLFxuICAgIE5nSGVhZGVyTG9nbyxcbiAgICBOZ0hlYWRlck1lbnUsXG4gIF0sXG4gIGJvb3RzdHJhcDogW1xuICAgIEhlYWRlckNvbXBvbmVudCxcbiAgICBMZWZ0U2lkZWJhckNvbXBvbmVudCxcbiAgICBGb290ZXJDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDY0xpYk1vZHVsZSB7IH1cbiJdfQ==