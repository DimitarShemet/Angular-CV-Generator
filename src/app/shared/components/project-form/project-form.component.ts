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
import { ISelectOptions } from '../../interfaces/label-options.interface';
import { Store } from '@ngrx/store';
import { skillsSelector } from 'src/app/store/selectors/skills-selectors';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    InputComponent,
    DatepickerComponent,
    TextareaComponent,
    ReactiveFormsModule,
    SelectComponent,
    TextareaComponent,
  ],
})
export class ProjectFormComponent extends BaseControl {
  skillsOption: Observable<ISelectOptions> = this.store.select(skillsSelector);
  @Input() responsibilitiesOption: ISelectOptions;

  constructor(
    private fb: FormBuilder,
    override ngControl: NgControl,
    private store: Store
  ) {
    super(ngControl);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.ngControl.control.setValidators(this.validate.bind(this));
    // разобраться до конца с этой строчкой; нужен ли validars requyired наверху, нужна ли форма наверху?
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
