import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
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

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(loadEmployees());
  }
}
