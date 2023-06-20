import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { logIn } from 'src/app/store/actions/auth-actions';

@Component({
  selector: 'auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent {
  form = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder, private store: Store) {}

  @Output() enableSpinner = new EventEmitter<boolean>();

  submitForm() {
    this.store.dispatch(
      logIn({
        data: {
          identifier: this.form.get('username').value,
          password: this.form.get('password').value,
        },
      })
    );
    this.enableSpinner.emit(true);
  }
}
