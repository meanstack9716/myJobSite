import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { User } from './user.interface';
import { user } from './mockUser';
@Injectable({
    providedIn: 'root'
})
export class AuthService {
    user: User;
    constructor(
        private storage: Storage
    ) { }

    async getUser(): Promise<User> {
        this.user = await this.storage.get('user');
        if (this.user) {
            return this.user;
        } else {
            this.storage.set('user', user);
            return user;
        }
    }
}
