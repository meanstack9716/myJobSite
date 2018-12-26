import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { VendorsService } from '../../../providers/vendors/vendors';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements OnInit {
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
    private route: ActivatedRoute
  ) {
    this.vendorId = this.route.snapshot.paramMap.get('vendorId');
    this.vendorName = this.route.snapshot.paramMap.get('vendorName');
  }

  ngOnInit() {
    this.getVendorProduct();
  }

  async getVendorProduct() {
    try {
      const res = await this._vendorsService.getVendorProducts(this.vendorId);
      this.vendorProducts = this._vendorsService.formatVendorProducts(res);
    } catch (e) {
      console.log(e);
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
