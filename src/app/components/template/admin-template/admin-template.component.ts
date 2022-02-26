import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-template',
  templateUrl: './admin-template.component.html',
  styleUrls: ['./admin-template.component.css'],
})
export class AdminTemplateComponent implements OnInit {
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
}
