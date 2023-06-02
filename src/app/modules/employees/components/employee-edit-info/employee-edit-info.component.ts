import { Component } from '@angular/core';
import { EmployeeFormComponent } from '../../../../shared/components/employee-form/employee-form.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-edit-info',
  templateUrl: './employee-edit-info.component.html',
  styleUrls: ['./employee-edit-info.component.scss'],
  standalone: true,
  imports: [EmployeeFormComponent, CommonModule, ReactiveFormsModule],
})
export class EmployeeEditInfoComponent {}
