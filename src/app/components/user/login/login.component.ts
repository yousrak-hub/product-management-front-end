import { User } from './../../../model/user';
import { Router } from '@angular/router';
import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: User = new User();
  errorMessage: string;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}
  login() {
    this.userService.login(this.user).subscribe(
      (data) => {
        this.router.navigate(['/profile']);
      },
      (err) => {
        this.errorMessage = 'Username or password is incorrect.';
      }
    );
  }
}
