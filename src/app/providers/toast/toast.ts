import { ToastController } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ToastService {
    constructor(
        public toastController: ToastController
    ) { }

    async message(message, duration?) {
        const toast = await this.toastController.create({
            message: message,
            duration: duration ? duration : 2000
        });
        toast.present();
    }
}
