import { Component, OnInit, ViewChild, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { VendorsService } from '../../../providers/vendors/vendors';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.scss']
})
export class VendorListComponent implements OnInit, OnChanges {
  @Input() searchText: string;
  slideOpts = {
    effect: 'flip'
  };
  vendors = [];
  vendorsBackUpData = [];
  activeSliderIndex = 0;
  @ViewChild('vendorSlider') slides: IonSlides;
  constructor(
    private _vendorsService: VendorsService
  ) { }

  ngOnInit() {
    this.getVendors();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['searchText'] && changes['searchText']['currentValue']) {
      const searchText = changes['searchText']['currentValue'];
      this.vendors = this.vendorsBackUpData.filter(a => {
        if (a['categoryName'].toLowerCase().indexOf(searchText.toLowerCase()) !== -1) {
          return a;
        }
      });
    } else {
      this.vendors = this.vendorsBackUpData;
    }
  }

  async getVendors() {
    const res = await this._vendorsService.getVendors();
    this.vendors = this._vendorsService.formatVendors(res);
    this.vendorsBackUpData = Object.assign([], this.vendors);
  }

  goToVendorCategory(to) {
    this.activeSliderIndex = to;
    this.slides.slideTo(to);
  }

  async vanderSlideChanges() {
    this.activeSliderIndex = await this.slides.getActiveIndex();
  }
}
