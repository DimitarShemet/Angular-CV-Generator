import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent {
  constructor(public fb: FormBuilder, private authService: AuthService) {}
  form = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });
  submitForm() {
    this.authService.logIn({
      identifier: this.form.get('username').value,
      password: this.form.get('password').value,
    });
  }

  ngOnInit() {
    this.form.valueChanges.subscribe((data) => {
      console.log(data);
    });
  }
}
