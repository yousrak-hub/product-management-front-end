import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  errorMessage: string;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}
  register() {
    this.userService.register(this.user).subscribe(
      (data) => {
        this.router.navigate(['/login']);
      },
      (err) => {
        this.errorMessage = 'Username is already exist';
      }
    );
  }
}
