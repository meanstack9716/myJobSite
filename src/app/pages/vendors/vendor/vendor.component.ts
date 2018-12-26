import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VendorsService } from '../../../providers/vendors/vendors';
import { Vendor } from '../../../providers/vendors/vendor.interface';
import { LoaderService } from '../../../providers/loader/loader';
@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements OnInit {
  vendorId: String;
  vendor: Vendor;
  constructor(
    private route: ActivatedRoute,
    private _vendorsService: VendorsService,
    private _loaderService: LoaderService
  ) {
    this.vendorId = this.route.snapshot.paramMap.get('vendorId');
  }

  ngOnInit() {
    this.getVendorDetail();
  }

  async getVendorDetail() {
    this._loaderService.apiLoader();
    const res = await this._vendorsService.getVendorDetail(this.vendorId);
    this.vendor = res[0];
    this._loaderService.dismissLoader();
  }

}
