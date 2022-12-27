import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { LoaderService } from 'src/app/core/services/loader.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  fg: FormGroup;

  isPasswordShown = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private loaderService: LoaderService
  ) {}

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
    this.loaderService.showLoader();
    this.authService
      .register(data)
      .pipe(finalize(() => this.loaderService.hideLoader()))
      .subscribe(() => {
        this.router.navigate(['/home']);
      });
  }
}
