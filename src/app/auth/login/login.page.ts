import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  fg: FormGroup;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.fg = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit(data) {
    this.authService
      .login(data)
      .subscribe(() => this.router.navigate(['/home']));
  }
}
