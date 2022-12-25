import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  fg: FormGroup;

  isPasswordShown = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.fg = new FormGroup({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  ionViewWillEnter() {}

  onSubmit(data) {
    this.authService.register(data).subscribe(() => {
      this.router.navigate(['/home']);
    });
  }
}
