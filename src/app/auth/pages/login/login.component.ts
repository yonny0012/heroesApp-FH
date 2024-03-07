import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router, private autService: AuthService) {}
  login() {
    this.autService.login().subscribe((user) => {
      console.log(user);
      this.router.navigate(['./heroes']);
    });
  }
  loginSinAuth() {
    this.router.navigate(['./heroes']);
  }
}
