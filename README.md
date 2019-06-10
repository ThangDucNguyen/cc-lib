# @thangducnguyen/cc-lib

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Infrastructure:

```shell
--- interfaces
------ interfaces.ts
--- modules
------ footer
------------ footer.component.html
------------ footer.component.scss
------------ footer.component.ts
------ header
------------ header.component.html
------------ header.component.ts
------------ header.component.scss
------------ header-logo.directive.ts
------------ header-menu.directive.ts
------------ header-profile.directive.ts
------ login
------------ login.component.html
------------ login.component.scss
------------ login.component.ts
------ left-slidebar
------------ left-slidebar.component.html
------------ left-slidebar.component.scss
------------ left-slidebar.component.ts
------------ left-slidebar.component.ts
```


## Dependencies
| ng-bootstrap | Angular |
| ------------ | ------- | 
| 4.x.x        | 7.x.x   |

## Intall npm

NPM link: [https://www.npmjs.com/package/@thangducnguyen/cc-lib](https://www.npmjs.com/package/@thangducnguyen/cc-lib)

```shell
npm i @thangducnguyen/cc-lib
```

## How to use cc-lib

### Before start to use
Please help me to make sure your project installed some dependencies:
  - ng-bootstrap
```shell
npm install --save @ng-bootstrap/ng-bootstrap
```
  - boostrap
```shell
npm install --save bootstrap
```


### 1. Add Bootstrap CSS to styles.scss or styles.css
You also need to add Bootstrap 4 CSS to your application by using your preferred way (it really depends on the setup you're using). Ex. for Angular CLI you can [get Bootstrap from npm](https://www.npmjs.com/package/bootstrap) and update your `angular.json` with something like:

```json
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css"
]
```

Or update this on file style.css or style.scss

```scss
@import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
```


```html
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
```

### 2. Import @thangducnguyen/cc-lib modules to projects

  Template
```html
   import { CcLibModule } from '@thangducnguyen/cc-lib'
   ```
   
   ```html
 
  @NgModule({
    declarations: [
    ...
    ],
    imports: [
      ...,
      CcLibModule,
    ],
   ```
 
 
 ###3. How to use @thangducnguyen/cc-lib  and HeaderComponent

   Template
 ```html
  <cc-lib-header class={{className}}>
   </cc-lib-header>
 ```
 
  Example for  header component
 ```ts
   <cc-lib-header class="header">
       <ng-template ngHeaderLogo>
         <img src="{{config.logoUrl}}" height="50px" width="50px" alt="..." class="rounded">
         {{config.orgName}}
       </ng-template>
        <ng-template ngHeaderMenu>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul *ngIf="config.menus != null && config.menuEnabled" class="navbar-nav mr-auto">
              <li *ngFor="let menu of config.menus" class="nav-item active decor">
                <label ngbButtonLabel><a class="nav-link text-dark" href="{{menu.link}}">{{menu.title}} <span
                  class="sr-only">(current)</span></a></label>
              </li>
            </ul>
          </div>
        </ng-template>
      <ng-template ngHeaderProfile>
        <div aria-labelledby="dropdownForm1">
          <form class="px-4">
            <div class="form-group">
              <div class="dropdown">
                <a role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"  >
                  <img src="{{config.user.profileImage}}" height="30" width="30" alt="My Profile" id="dropdownForm1" class="rounded-circle">
                  <div><i>{{config.user.userName}}</i></div>
                </a>
                <div class="dropdown-menu">
                  <label *ngFor="let tag of config.user.tags">
                    <a class="dropdown-item" href="{{tag.link}}">{{tag.detail}}</a>
                  </label>
                  <a class="dropdown-item" href="/login">Log Out</a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </ng-template>

   
 ```
 Format for example input data:
 ````
 menus = {
   isLogin: true,
   user: {
   userName: 'ThangNguyen',
   profileImage: 'https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-9/49058269_1985461634907847_3784438921664921600_o.jpg?_nc_cat=107&_nc_oc=AQkqvMfjiV6VRWNTW2JxZD9gWlVUhAIJvaMCebYdJEOpC2H7T4-clY2yB0iNwKl1xQ8&_nc_ht=scontent.fsgn5-2.fna&oh=d84853d81f6923ae73db35a13913760a&oe=5D53237E',
     tags: [
       {
         detail: 'My Profile',
         link: ''
       }
     ]
   },
   searchEnabled: true,
   menuEnabled: true,
   orgName: 'VinGroup',
   logoUrl: 'data:image/png;base64,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',
   menus: [{
     title: 'Home',
     link: '/inventory'
   }, {
     title: 'Product List',
     link: '/product'
   },
   ]
   };
   ````
 
 ### How to use @thangducnguyen/cc-lib and FooterComponent

   Template
 ```html
 <cc-lib-footer></cc-lib-footer>

 ```
 Example for footer render:
  ```html
    <cc-lib-footer>
      <div class="footer-inner has-top-divider">
        <ul class="footer-social-links list-reset">
          <li>
            <a href="#">
              <i class="fab fa-facebook"></i>
              <span class="screen-reader-text">Facebook</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-twitter"></i>
              <span class="screen-reader-text">Twitter</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-youtube"></i>
              <span class="screen-reader-text">Youtube</span>
            </a>
          </li>
        </ul>
        <div class="footer-copyright">
          &copy; 2019 VinGroup, all rights reserved
        </div>
      </div>
  
    </cc-lib-footer>
 
  ```
 

 
 ### How to use @thangducnguyen/cc-lib and LeftSidebarComponent
 
   Template
 ```html
 <cc-lib-left-sidebar [menuSettings]="slideBar"></cc-lib-left-sidebar>
 ````
 
 Inputs
 
 | Name         | Type                   | Description                   |
 |--------------|------------------------|-------------------------------|
 | menuSettings | Menu Interface         | Setting slide bar menu input  |
 
 ````
 // Init toggle
 isOpen: boolean = true;
 // Init slidebar settings to render
 menuSettings: Menu = {
      {
        menuItems: [
          {
            title: 'Menu',
            link: 'menuItem1',
            icon: 'address-book'
          },
          {
            title: 'Inventory',
            link: '/inventory',
            icon: 'dolly'
          },
          {
            title: 'Cash',
            link: '/Cash',
            icon: 'wallet'
          },
          {
            title: 'Logistic',
            link: '/logistic',
            icon: 'truck'
          },
          {
            title: 'Services',
            link: '/service',
            icon: 'plus'
          },
      
        ]
      }
     };
 ````
 
 #### How to use @thangducnguyen/cc-lib and LoginComponent
  
````html
   <cc-lib-login class="login-form" (login)="onLogin($event)" [submitted]="submitted" [userName]="username" [password]="password"></cc-lib-login>
````
 ### Demo page using 4 components: Header, SlideBar, Footer, Login
 Comming soon...
 

