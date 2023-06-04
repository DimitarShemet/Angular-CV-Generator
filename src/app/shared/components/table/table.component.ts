import { CommonModule } from '@angular/common';
import {
  AfterViewChecked,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
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

  @Output() sendItemId = new EventEmitter<number>();

  clickItem(id: number) {
    this.sendItemId.emit(id);
  }
}
