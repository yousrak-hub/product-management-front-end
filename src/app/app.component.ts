import { Router, RoutesRecognized } from '@angular/router';
import { Component } from '@angular/core';
import { User } from './model/user';
import { UserService } from './services/user.service';
import { Role } from './model/role';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'product-management-front';
  currentUser: User;
  isAdminPanel: boolean = false;
  constructor(private userService: UserService, private router: Router) {
    this.userService.currentUser.subscribe((data) => {
      this.currentUser = data;
      this.userChanged();
    });
  }
  userChanged() {
    if (!this.currentUser || Role.ADMIN !== this.currentUser.role) {
      this.isAdminPanel = false;
      return;
    }
    this.router.events.subscribe((evt) => {
      if (evt instanceof RoutesRecognized) {
        var roles = evt.state.root.firstChild.data.roles;
        if (roles && roles.indexOf(this.currentUser.role) !== -1) {
          this.isAdminPanel = true;
        }
      }
    });
  }
}
