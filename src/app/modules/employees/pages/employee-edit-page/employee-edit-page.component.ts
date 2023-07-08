import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-employee-edit-page',
  templateUrl: './employee-edit-page.component.html',
  styleUrls: ['./employee-edit-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeEditPageComponent {
  constructor() {}
}
