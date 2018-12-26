import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VendorsPage } from './vendors.page';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { VendorProductsComponent } from './vendor-products/vendor-products.component';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '', component: VendorsPage,
      },
      {
        path: ':vendorId/:vendorName', component: VendorProductsComponent,
      }])
  ],
  declarations: [
    VendorsPage,
    VendorListComponent,
    VendorProductsComponent
  ]
})
export class VendorsPageModule { }
