import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { ToastController } from '@ionic/angular';
import { LoaderService } from 'src/app/core/services/loader.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  fg: FormGroup;

  isPasswordShown = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private toastController: ToastController,
    private loaderService: LoaderService
  ) {}

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

  async showErrorMessage(errorMessage) {
    const errorToast = await this.toastController.create({
      message: errorMessage || 'Something went wrong',
      position: 'bottom',
      duration: 3000,
      icon: 'warning',
      color: 'danger',
      buttons: [
        {
          icon: 'close',
          side: 'end',
          role: 'cancel',
        },
      ],
      cssClass: 'toast-error',
    });

    await errorToast.present();
  }

  onSubmit(data) {
    this.loaderService.showLoader();
    this.authService
      .login(data)
      .pipe(finalize(() => this.loaderService.hideLoader()))
      .subscribe({
        next: () => this.router.navigate(['/home']),
        error: (err) => this.showErrorMessage(err?.error?.message),
      });
  }
}
