import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { PagePath } from 'src/app/shared/enums/routing-path.enums';

import {
  IProject,
  IProjectAttributes,
} from 'src/app/shared/interfaces/project.interface';
import { ProjectsApiService } from 'src/app/shared/services/api/projects.api.service';
import { ProjectsService } from 'src/app/shared/services/projects.service';
import {
  AddProject,
  LoadProjects,
} from 'src/app/store/actions/projects-actions';

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
    public store: Store,
    private router: Router
  ) {
    this.form = fb.group({
      projectForm: [null, Validators.required],
    });
  }

  ngOnInit() {
    this.projectsApiService.getProjects().subscribe((projects: IProject[]) => {
      this.projects = projects;
      this.store.dispatch(new LoadProjects({ projects: this.projects }));
    });
  }

  submitForm() {
    this.store.dispatch(
      new AddProject({
        project: {
          id: this.projectsService.getNewId(this.projects),
          attributes: this.form.get('projectForm').value as IProjectAttributes,
        },
      })
    );

    this.projectsApiService
      .addProject(this.form.get('projectForm').value)
      .subscribe((answer) => console.log(answer));

    this.router.navigate([PagePath.ProjectsFullPath]);
  }
}
