import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import { Role } from 'src/app/model/role';

@Component({
  selector: 'app-user-template',
  templateUrl: './user-template.component.html',
  styleUrls: ['./user-template.component.css'],
})
export class UserTemplateComponent implements OnInit {
  currentUser: User;

  constructor(private userService: UserService, private router: Router) {
    this.userService.currentUser.subscribe((data) => {
      this.currentUser = data;
    });
  }

  ngOnInit(): void {}
  logOut() {
    this.userService.logOut().subscribe((data) => {
      this.router.navigate(['/login']);
    });
  }

  get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.ADMIN;
  }
}
