

import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from '@angular/router';


export const routes: Routes = [
  {
    path: '', redirectTo: 'analytics', pathMatch: 'full'
  },
  {
    path: 'analytics',
   // loadChildren:'./analytics/analytics.module#AnalyticsModule',
    loadChildren: () => import('./analytics/analytics.module').
    then(a => a.AnalyticsModule)

  }
 
];

export const routing = RouterModule.forChild(routes);
