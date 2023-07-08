import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzTableModule } from 'ng-zorro-antd/table';
import { IProject } from '../../interfaces/project.interface';
import { ItableColumns } from '../../interfaces/table-columns.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  standalone: true,
  imports: [CommonModule, NzTableModule, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  @Input() tableData: IProject[] | any[];
  @Input() tableColumns: ItableColumns;

  @Output() sendItemId = new EventEmitter<number>();

  clickItem(id: number) {
    this.sendItemId.emit(id);
  }
}
