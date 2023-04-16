import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { logIn } from 'src/app/store/actions/auth-actions';

@Component({
  selector: 'auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent {
  constructor(
    private fb: FormBuilder,

    private store: Store
  ) {}
  form = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });
  submitForm() {
    this.store.dispatch(
      logIn({
        data: {
          identifier: this.form.get('username').value,
          password: this.form.get('password').value,
        },
      })
    );
  }
}
