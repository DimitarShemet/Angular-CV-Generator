import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public fb: FormBuilder) {}
  form = this.fb.group({
    input: ['', [Validators.required, Validators.maxLength(10)]],
    date: [null, Validators.required],
    textarea: ['', Validators.required],
    select: ['', Validators.required],
  });
  listOfOption = [
    { label: 'label1', value: 'value1' },
    { label: 'label2', value: 'value2' },
  ];
  ngOnInit() {
    this.form.valueChanges.subscribe((data) => {
      console.log(data);
    });
  }
}
