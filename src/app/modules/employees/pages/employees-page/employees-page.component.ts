import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { IEmployee } from 'src/app/shared/interfaces/employee.interface';
import { EmployeesApiService } from 'src/app/shared/services/api/employees.api.service';
import { FormatService } from 'src/app/shared/services/format.service';

@Component({
  selector: 'app-employees-page',
  templateUrl: './employees-page.component.html',
  styleUrls: ['./employees-page.component.scss'],
})
export class EmployeesPageComponent implements OnInit {
  employees: Array<any>;

  constructor(
    private employeesApiService: EmployeesApiService,

    private formatService: FormatService
  ) {}

  ngOnInit() {
    this.employeesApiService
      .getEmployees()
      .subscribe((employees: IEmployee[]) => {
        this.employees = this.formatService.formatEmployeesResponse(employees);
        console.log(this.employees);
      });
  }
}
