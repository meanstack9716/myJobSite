import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VendorsPage } from './vendors.page';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { VendorComponent } from './vendor/vendor.component';
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
        path: ':vendorId/:vendorName', component: VendorComponent,
      }])
  ],
  declarations: [
    VendorsPage,
    VendorListComponent,
    VendorComponent
  ]
})
export class VendorsPageModule { }
