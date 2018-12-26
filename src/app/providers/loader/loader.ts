import { LoadingController } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoaderService {
    constructor(
        public loadingController: LoadingController
    ) { }

    async loader(message, duration) {
        const loading = await this.loadingController.create({
            message: message,
            duration: duration ? duration : 2000
        });
        return await loading.present();
    }

    async apiLoader() {
        const loading = await this.loadingController.create({
            message: 'Please Wait...'
        });
        return await loading.present();
    }

    async dismissLoader() {
        this.loadingController.dismiss();
    }
}
