import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModulePath } from 'src/app/shared/enums/routing-path.enums';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent {
  constructor(
    public fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}
  form = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });
  submitForm() {
    this.authService.logIn({
      identifier: this.form.get('username').value,
      password: this.form.get('password').value,
    });
    this.router.navigate([ModulePath.CoreFullPath]);
  }

  ngOnInit() {
    this.form.valueChanges.subscribe((data) => {
      console.log(data);
    });
  }
}
