import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_core/_services/auth.service';
import { AlertifyService } from 'src/app/_core/_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  model: any = {};
  constructor(
    public authService: AuthService,
    private alertify: AlertifyService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  login() {
    this.authService.login(this.model).subscribe(
      (next) => {
        this.alertify.success('logged in Successfully');
      },
      (error) => {
        if (error === 'Unauthorized') {
          this.alertify.error('plese enter proper credentials');
        } else {
          this.alertify.error(error);
        }
      },
      () => {
        this.router.navigate(['/products']);
      }
    );
  }

  loggedIn() {
    return this.authService.loggedIn();
  }
  logout() {
    localStorage.removeItem('token');
    this.alertify.message('Logged out');
    this.router.navigate(['/home']);
  }
}
