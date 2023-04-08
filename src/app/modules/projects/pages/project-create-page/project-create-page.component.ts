import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store, select } from '@ngrx/store';

import {
  IProject,
  IProjectDataAttributes,
} from 'src/app/shared/interfaces/project-data.interface';
import { ProjectsApiService } from 'src/app/shared/services/api/projects.api.service';
import { ProjectsService } from 'src/app/shared/services/projects.service';
import { AddProject } from 'src/app/store/actions/projects-actions';
import { projectsSelector } from 'src/app/store/reducers/projects.reducer';

@Component({
  selector: 'app-project-create-page',
  templateUrl: './project-create-page.component.html',
  styleUrls: ['./project-create-page.component.scss'],
})
export class ProjectCreatePageComponent {
  form: FormGroup;
  formControl = new FormControl('');
  projects: IProject[];

  constructor(
    fb: FormBuilder,
    private projectsApiService: ProjectsApiService,
    private projectsService: ProjectsService,
    public store: Store
  ) {
    this.form = fb.group({
      projectForm: [null, Validators.required],
    });
  }

  ngOnInit() {
    this.store.pipe(select(projectsSelector)).subscribe((projectsState) => {
      this.projects = projectsState;
      console.log(this.projects);
    });
    // this.projectsApiService.getProjects().subscribe((projects: IProject[]) => {
    //   this.projects = projects;
    // });
  }

  submitForm() {
    this.store.dispatch(
      new AddProject({
        project: {
          id: this.projectsService.getNewId(this.projects),
          attributes: this.form.get('projectForm')
            .value as IProjectDataAttributes,
        },
      })
    );

    this.projectsApiService
      .addProject(this.form.get('projectForm').value)
      .subscribe((answer) => console.log(answer));
  }
}
