import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public fb: FormBuilder) {}
  form = this.fb.group({
    control: [{ value: 123, disabled: false }, Validators.required],
  });
  ngOnInit() {
    this.form.valueChanges.subscribe((data) => {
      console.log(data);
    });
  }
}
