import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(public fb: FormBuilder) {}
  form = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  ngOnInit() {
    this.form.valueChanges.subscribe((data) => {
      console.log(data);
    });
  }
}
