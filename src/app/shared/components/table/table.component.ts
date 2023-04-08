import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NzTableModule } from 'ng-zorro-antd/table';
import { ModulePath } from '../../enums/routing-path.enums';
import { PagePath } from '../../enums/routing-path.enums';
import { IProject } from '../../interfaces/project-data.interface';
import { GetArrayItemPipe } from '../../pipes/get-array-item.pipe';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  standalone: true,
  imports: [CommonModule, NzTableModule, RouterModule, GetArrayItemPipe],
})
export class TableComponent {
  tableItemLink = ModulePath.ProjectsFullPath + PagePath.ProjectEditFullPath;

  @Input() tableData: any;
  @Input() tableHeader: Array<string>;
  @Input() firstColumn: string;
  @Input() secondColumn: string;
  @Input() thirdColumn: string;
  @Input() fourColumn: string;
  @Input() fifthColumn: string;

  skillsOption: any = [
    { label: 'Vue', value: 1 },
    { label: 'javaScript', value: 2 },
    { label: 'Angular', value: 3 },
  ];
  responsibilitiesOption: any = [
    { label: 'общение с заказчиком', value: 1 },
    { label: 'дейлики', value: 2 },
    { label: 'back api', value: 3 },
  ];

  @Output() sendId = new EventEmitter<number>();

  onClick(id: number) {
    this.sendId.emit(id);
  }
}
