import { Component, Input } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  NgControl,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { DatepickerComponent } from '../controls/datepicker/datepicker.component';
import { InputComponent } from '../controls/input/input.component';
import { SelectComponent } from '../controls/select/select.component';
import { TextareaComponent } from '../controls/textarea/textarea.component';
import { ProjectsApiService } from '../../services/api/projects.api.service';
import { BaseControl } from '../../classes/base-control.class';

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
export class ProjectFormComponent extends BaseControl {
  skillsOption: any = [
    { label: 'Vue', value: 1 },
    { label: 'javaScript', value: 2 },
    { label: 'Angular', value: 3 },
  ];
  responsibilitiesOption: any = [
    { label: 'общение с заказчиком', value: 1 },
    { label: 'дейлики', value: 2 },
    { label: 'back api', value: 3 },
  ];
  constructor(private fb: FormBuilder, override ngControl: NgControl) {
    super(ngControl);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.ngControl.control.setValidators(this.validate.bind(this));
  }

  validate(): ValidationErrors | null {
    return this.formControl.invalid ? { invalidControl: true } : null;
  }

  override formControl = this.fb.group({
    name: ['', [Validators.required]],
    from: ['', [Validators.required]],
    to: ['', [Validators.required]],
    domain: ['', [Validators.required]],
    internalName: ['', [Validators.required]],
    skills: [[], [Validators.required]],
    responsibilities: [[], Validators.required],
    description: ['', [Validators.required]],
  });

  override writeValue(value: any): void {
    if (value) {
      this.formControl.patchValue(value);
    }
  }
}
