import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from "./shared/layout/app-layouts/main-layout.component";
import { AuthLayoutComponent } from "./shared/layout/app-layouts/auth-layout.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "auth/login",
    pathMatch: "full"
  },
  {
    path: "",
    component: MainLayoutComponent,
    data: { pageTitle: "Home" },
    children: [
      // {
      //   path: "",
      //   redirectTo: "auth/login",
      //   pathMatch: "full"
      // },
  {
    path: "dashboard",
    loadChildren:()=> import('./features/dashboard/dashboard.module').then(d => d.DashboardModule),
    //loadChildren: "./features/dashboard/dashboard.module#DashboardModule",

    data: { pageTitle: "Dashboard" }
  },
      {
        path: "master",
        loadChildren:()=> import('./features/master/master.module').then(r => r.MasterModule),
        //loadChildren: "./features/master/master.module#MasterModule",
        data: { pageTitle: "Master" }
      },   
      {
        path: "report",
        //loadChildren: "./features/report/report.module#ReportModule",
        loadChildren: () => import('./features/report/report.module').
        then(r => r.ReportModule)

      },    
      {
        path: "setting",
        //loadChildren: "./features/setting/setting.module#SettingModule",
         loadChildren: () => import('./features/setting/setting.module').then(s => s.SettingModule) 
        
      },   
      {
        path: "transaction",
        //loadChildren: "./features/setting/setting.module#SettingModule",
         loadChildren: () => import('./features/transaction/transaction.module').then(t => t.TransactionModule) 
        
      }, 
       {
        path: "configuration",
         loadChildren: () => import('./features/configuration/configuration.module').then(c => c.ConfigurationModule) 
        
      },   
      {
        path: "menu",
         loadChildren: () => import('./features/menu/menu.module').then(c => c.MenuModule) 
        
      },   
   ]
   },
  //  {
  //   path: "dashboard",
  //   component: MainLayoutComponent,
  //   loadChildren: "./features/master/master.module#MasterModule",
  // },
  {
    path: "auth",
    component: AuthLayoutComponent,
    loadChildren: "./features/auth/auth.module#AuthModule"
  },
  { path: "**", redirectTo: "miscellaneous/error404" }
];



@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }




