import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzTableModule } from 'ng-zorro-antd/table';
import { ItableColumns } from '../../interfaces/table-columns.interface';
import { IProject } from '../../interfaces/project.interface';
import { IEmployee } from '../../interfaces/employee.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  standalone: true,
  imports: [CommonModule, NzTableModule, RouterModule],
})
export class TableComponent {
  @Input() tableData: IProject[] | any[];
  @Input() tableColumns: ItableColumns;

  @Output() sendProjectId = new EventEmitter<number>();

  onClick(id: number) {
    console.log(id);
    this.sendProjectId.emit(id);
  }
}
