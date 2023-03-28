import { Component } from '@angular/core';
import {
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
})
export class ProjectFormComponent {
  projectForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.projectForm = fb.group({
      name: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      teamSize: ['', [Validators.required]],
      techStack: ['', [Validators.required]],
      roles: ['', [Validators.required]],
      description: ['', [Validators.required]],
      responsibilities: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.projectForm.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }
}
