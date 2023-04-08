import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ProjectEditPageComponent } from './pages/project-edit-page/project-edit-page.component';
import { ProjectCreatePageComponent } from './pages/project-create-page/project-create-page.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { TableComponent } from 'src/app/shared/components/table/table.component';
import { ProjectFormComponent } from 'src/app/shared/components/project-form/project-form.component';
import { TranslateModule } from '@ngx-translate/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProjectsPageComponent,
    ProjectEditPageComponent,
    ProjectCreatePageComponent,
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    ProjectFormComponent,
    TranslateModule,
    NzButtonModule,
    ReactiveFormsModule,
    TableComponent,
  ],
})
export class ProjectsModule {}
