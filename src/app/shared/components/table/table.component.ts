import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzTableModule } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  standalone: true,
  imports: [CommonModule, NzTableModule, RouterModule],
})
export class TableComponent {
  @Input() tableData: any;
  @Input() tableHeader: string[];
  @Input() tableColumns: string[]; // создать сущность

  @Output() sendId = new EventEmitter<number>();

  onClick(id: number) {
    this.sendId.emit(id);
  }
}
