import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Vendor } from './vendor.interface';
import { Product } from './product.interface';
import { AuthService } from '../auth/auth';
@Injectable({
    providedIn: 'root'
})
export class VendorsService {
    constructor(
        private http: HttpClient,
        private _authService: AuthService
    ) { }

    async getVendors() {
        try {
            const user = await this._authService.getUser();
            return await this.http.get(`${environment['apiBase']}/Vendors?action=group_by_canorder&userid=${user.UID}`).toPromise();
        } catch (e) {
            throw (e);
        }
    }

    formatVendors(vendors) {
        const categorisedVendors = [];
        for (const key of Object.keys(vendors)) {
            categorisedVendors.push({
                categoryName: key,
                data: vendors[key]
            });
        }
        return categorisedVendors;
    }

    async getVendorProducts(vendorId): Promise<any> {
        try {
            return await this.http.get(`${environment['apiBase']}/Products?vendorid=${vendorId}`).toPromise();
        } catch (e) {
            throw (e);
        }
    }

    formatVendorProducts(vendorProducts) {
        const categorisedVendorProducts = [];
        for (const key of Object.keys(vendorProducts)) {
            categorisedVendorProducts.push({
                categoryName: key,
                data: vendorProducts[key]
            });
        }
        return categorisedVendorProducts;
    }

    async getVendorDetail(vendorId: String): Promise<Vendor> {
        try {
            return await this.http.get(`${environment['apiBase']}/Vendors/${vendorId}`).toPromise() as Vendor;
        } catch (e) {
            throw (e);
        }
    }

    async getProductDetail(productId: String): Promise<Product> {
        try {
            return await this.http.get(`${environment['apiBase']}/Products/${productId}`).toPromise() as Product;
        } catch (e) {
            throw (e);
        }
    }
}
