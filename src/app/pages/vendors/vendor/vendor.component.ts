import { Component, OnInit } from '@angular/core';
import { VendorsService } from '../../../providers/vendors/vendors';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements OnInit {
  vendorId: String;
  constructor(
    private _vendorsService: VendorsService,
    private route: ActivatedRoute
  ) {
    this.vendorId = this.route.snapshot.paramMap.get('vendorId');
    console.log(this.vendorId)
  }

  ngOnInit() {
    this.getVendorProduct();
  }

  async getVendorProduct() {
    this._vendorsService.getVendorProducts(this.vendorId);
  }

}
