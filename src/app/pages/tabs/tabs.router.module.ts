import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'vendors',
        children: [
          {
            path: '',
            loadChildren: '../vendors/vendors.module#VendorsPageModule'
          }
        ]
      },
      {
        path: 'jobsite',
        children: [
          {
            path: '',
            loadChildren: '../jobsite/jobsite.module#JobsitePageModule'
          }
        ]
      },
      {
        path: 'orders',
        children: [
          {
            path: '',
            loadChildren: '../orders/orders.module#OrdersPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/vendors',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/vendors',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
