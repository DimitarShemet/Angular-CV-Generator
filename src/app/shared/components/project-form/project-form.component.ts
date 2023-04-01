import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DatepickerComponent } from '../controls/datepicker/datepicker.component';
import { InputComponent } from '../controls/input/input.component';
import { SelectComponent } from '../controls/select/select.component';
import { TextareaComponent } from '../controls/textarea/textarea.component';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss'],
  standalone: true,
  imports: [
    InputComponent,
    DatepickerComponent,
    TextareaComponent,
    ReactiveFormsModule,
    SelectComponent,
    TextareaComponent,
  ],
  // подумать насчёт передкли форму проекта под cve
})
export class ProjectFormComponent {
  projectForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.projectForm = fb.group({
      name: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      domain: ['', [Validators.required]],
      internalName: ['', [Validators.required]],
      skills: [[], [Validators.required]],
      responsibilities: [[], Validators.required],
      description: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.projectForm.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }
}
