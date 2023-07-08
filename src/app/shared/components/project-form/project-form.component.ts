import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormBuilder,
  NgControl,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getResponsibilities } from 'src/app/store/actions/responsibilities-actions';
import { getSkills } from 'src/app/store/actions/skills-actions';
import { skillsSelector } from 'src/app/store/selectors/skills-selectors';
import { BaseControl } from '../../classes/base-control.class';

import { DatepickerComponent } from '../controls/datepicker/datepicker.component';
import { InputComponent } from '../controls/input/input.component';
import { SelectComponent } from '../controls/select/select.component';
import { TextareaComponent } from '../controls/textarea/textarea.component';
import { responsibilitiesSelector } from 'src/app/store/selectors/responsibilities-selectors';
import { IOption } from '../../interfaces/common.interface';

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
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectFormComponent extends BaseControl {
  skillsOption: Observable<IOption[]> = this.store.select(skillsSelector);
  responsibilitiesOption: Observable<IOption[]> = this.store.select(
    responsibilitiesSelector
  );

  constructor(
    private fb: FormBuilder,
    override ngControl: NgControl,
    private store: Store
  ) {
    super(ngControl);
  }

  override ngOnInit(): void {
    this.store.dispatch(getSkills());
    this.store.dispatch(getResponsibilities());
    super.ngOnInit();
    this.ngControl.control.setValidators(this.validate.bind(this));
    // разобраться до конца с этой строчкой; нужен ли validars requyired снизу, нужна ли форма в шаблоне? validatorsRequired скидывает все зхначения по валидации и
    // новые?
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

  override writeValue(value: object): void {
    //когда запускается этот метод
    if (value) {
      this.formControl.patchValue(value);
    }
  }
}
