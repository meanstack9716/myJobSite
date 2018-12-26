import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable({
    providedIn: 'root'
})
export class VendorsService {
    constructor(
        private http: HttpClient
    ) { }

    async getVendors() {
        try {
            return await this.http.get(`${environment['apiBase']}/Vendors?action=group_by_category`).toPromise();
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

    async getVendorProducts(vendorId) {
        try {
            return await this.http.get(`${environment['apiBase']}/Products?vendorid=${vendorId}`).toPromise();
        } catch (e) {
            throw (e);
        }
    }
}
