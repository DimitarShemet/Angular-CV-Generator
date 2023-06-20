import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ModulePath, PagePath } from 'src/app/shared/enums/routing-path.enums';
import { IEmployee } from 'src/app/shared/interfaces/employee.interface';
import { EmployeesApiService } from 'src/app/shared/services/api/employees.api.service';
import { FormatService } from 'src/app/shared/services/format.service';
import { loadEmployees } from 'src/app/store/actions/employees-actions';
import { employeesSelector } from 'src/app/store/selectors/employees-selectors';

@Component({
  selector: 'app-employees-page',
  templateUrl: './employees-page.component.html',
  styleUrls: ['./employees-page.component.scss'],
})
export class EmployeesPageComponent implements OnInit {
  $employees: Observable<IEmployee[]> = this.store.select(employeesSelector);
  employeeCreatePath =
    ModulePath.EmployeesFullPath + PagePath.EmployeeCreateFullPath;

  constructor(private store: Store, private router: Router) {}

  ngOnInit() {
    this.store.dispatch(loadEmployees());
  }
  openEmployeeEditPage(id: number) {
    this.router.navigate([
      ModulePath.EmployeesFullPath + PagePath.EmployeeEditFullPath + id,
    ]);
  }
}
