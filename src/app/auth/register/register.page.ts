import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  fg: FormGroup;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
    this.fg = new FormGroup({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    })
  }

  ionViewWillEnter() {}

  onSubmit(val) {
    this.http.post(`${environment.ROOT_URL}/register`, val).subscribe(() => {
      this.router.navigate(['/home']);
    })
  }
}
