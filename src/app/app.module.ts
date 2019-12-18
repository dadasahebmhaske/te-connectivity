import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UiGridDirective } from './directive/uigrid.directive';
import { CommonModule } from '@angular/common';
import { UpgradeModule } from '@angular/upgrade/static';
import { GridComponent } from './grid/grid.component';
import { RouterModule, Router } from '@angular/router';
import { TestComponent } from './test/test.component';
import { HttpClientModule, HttpHeaders, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LayoutModule } from '../app/shared/layout/layout.module';
import {environment} from '../environments/environment';
import{FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    UiGridDirective,
    GridComponent,
    TestComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    UpgradeModule,
    HttpClientModule,
    LayoutModule,
    FormsModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(
      { timeOut: 5000,
        positionClass: 'toast-bottom-right',
        preventDuplicates: true,}
    ),
    RouterModule.forRoot(
      [
        { path: "grid", component: GridComponent },
        { path: "test", component: TestComponent },
      ]
    ),
  ],
  providers: [],
  exports:[UiGridDirective],
  bootstrap: [AppComponent]
})
export class AppModule {
      // static headers:HttpHeaders;
  // static BaseUrl;
  // static ImagePath;
  // static secureKey;
  // static router:Router;
  // constructor(public router:Router){
  //   AppModule.headers=new HttpHeaders({
  //     'content-Type':'application/json',Authorization:'Basic'+btoa(environment.authKey)
  //   });
  //   AppModule.BaseUrl=environment.BaseUrl;
  
  //   AppModule.router=router;

  // }

 }
