import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  NgControl,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { Observable } from 'rxjs';
import { BaseControl } from 'src/app/shared/classes/base-control.class';
import { InputComponent } from 'src/app/shared/components/controls/input/input.component';
import { SelectComponent } from 'src/app/shared/components/controls/select/select.component';
import { TextareaComponent } from 'src/app/shared/components/controls/textarea/textarea.component';
import { IOption } from 'src/app/shared/interfaces/common.interface';
import { getSkills } from 'src/app/store/actions/skills-actions';
import { skillsSelector } from 'src/app/store/selectors/skills-selectors';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    InputComponent,
    FormsModule,
    TextareaComponent,
    SelectComponent,
    NzButtonModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeFormComponent extends BaseControl {
  skillsOption: Observable<IOption[]> = this.store.select(skillsSelector);
  constructor(
    private fb: FormBuilder,
    override ngControl: NgControl,
    private store: Store
  ) {
    super(ngControl);
  }

  override ngOnInit(): void {
    this.store.dispatch(getSkills());
    super.ngOnInit();
    this.ngControl.control.setValidators(this.validate.bind(this));
    // разобраться до конца с этой строчкой; нужен ли validars requyired снизу, нужна ли форма в шаблоне? validatorsRequired скидывает все зхначения по валидации и
    // новые?
  }

  validate(): ValidationErrors | null {
    return this.formControl.invalid ? { invalidControl: true } : null;
  }

  override formControl = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    description: ['', Validators.required],
    skills: [[], [Validators.required]],
  });

  override writeValue(value: object): void {
    if (value) {
      this.formControl.patchValue(value);
    }
  }
}
