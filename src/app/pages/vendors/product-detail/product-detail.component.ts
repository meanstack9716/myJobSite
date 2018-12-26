import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoaderService } from '../../../providers/loader/loader';
import { VendorsService } from '../../../providers/vendors/vendors';
import { Product } from '../../../providers/vendors/product.interface';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  productId: String;
  product: Product;
  constructor(
    private route: ActivatedRoute,
    private _loaderService: LoaderService,
    private _vendorsService: VendorsService
  ) {
    this.productId = this.route.snapshot.paramMap.get('productId');
  }

  ngOnInit() {
    this.getProductDetail();
  }

  async getProductDetail() {
    this._loaderService.apiLoader();
    const res = await this._vendorsService.getProductDetail(this.productId);
    this.product = res[0];
    this._loaderService.dismissLoader();
  }

}
