import { Component, OnInit } from '@angular/core';
import { EmployeesApiService } from 'src/app/shared/services/api/employees.api.service';

@Component({
  selector: 'app-employees-page',
  templateUrl: './employees-page.component.html',
  styleUrls: ['./employees-page.component.scss'],
})
export class EmployeesPageComponent implements OnInit {
  constructor(private employeesApiService: EmployeesApiService) {}
  ngOnInit() {
    this.employeesApiService.getEmployees();
  }
}
