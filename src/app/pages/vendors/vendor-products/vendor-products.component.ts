import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { VendorsService } from '../../../providers/vendors/vendors';
import { ActivatedRoute } from '@angular/router';
import { LoaderService } from '../../../providers/loader/loader';
@Component({
  selector: 'app-vendor',
  templateUrl: './vendor-products.component.html',
  styleUrls: ['./vendor-products.component.scss']
})
export class VendorProductsComponent implements OnInit {
  vendorId: String;
  vendorName: String;
  vendorProducts = [];
  slideOpts = {
    effect: 'flip'
  };
  activeSliderIndex = 0;
  @ViewChild('vendorProductSlider') slides: IonSlides;
  constructor(
    private _vendorsService: VendorsService,
    private route: ActivatedRoute,
    private _loaderService: LoaderService
  ) {
    this.vendorId = this.route.snapshot.paramMap.get('vendorId');
    this.vendorName = this.route.snapshot.paramMap.get('vendorName');
  }

  ngOnInit() {
    this.getVendorProduct();
  }

  async getVendorProduct() {
    try {
      this._loaderService.apiLoader();
      const res = await this._vendorsService.getVendorProducts(this.vendorId);
      this.vendorProducts = this._vendorsService.formatVendorProducts(res);
      this._loaderService.dismissLoader();
    } catch (e) {
      console.log(e);
      this._loaderService.dismissLoader();
    }
  }

  goToVendorCategory(to) {
    this.activeSliderIndex = to;
    this.slides.slideTo(to);
  }

  async vanderSlideChanges() {
    this.activeSliderIndex = await this.slides.getActiveIndex();
  }

}
