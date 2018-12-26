import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../providers/auth/auth';
import { User } from '../../providers/auth/user.interface';
@Component({
  selector: 'app-vendors',
  templateUrl: 'vendors.page.html',
  styleUrls: ['vendors.page.scss']
})
export class VendorsPage implements OnInit {
  searchText: string;
  user: User;
  constructor(
    private _authService: AuthService
  ) { }

  async ngOnInit() {
    this.user = await this._authService.getUser();
  }
}
