import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { IProject } from 'src/app/shared/interfaces/project-data.interface';
import { ProjectsApiService } from 'src/app/shared/services/api/projects.api.service';
import { projectsSelector } from 'src/app/store/reducers/projects.reducer';

@Component({
  selector: 'app-project-edit-page',
  templateUrl: './project-edit-page.component.html',
  styleUrls: ['./project-edit-page.component.scss'],
})
export class ProjectEditPageComponent {
  form: FormGroup;
  formControl = new FormControl('');
  id: number;

  constructor(
    fb: FormBuilder,
    private projectsApiService: ProjectsApiService,
    private route: ActivatedRoute,
    private store: Store
  ) {
    this.form = fb.group({
      projectForm: [null, Validators.required],
    });
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
    });
    // this.projectsApiService
    //   .getProject(this.id)
    //   .subscribe((response: IProject) => {
    //     this.form.get('projectForm').patchValue(response.attributes);
    //   });

    this.store.pipe(select(projectsSelector)).subscribe((projectsState) => {
      const project = projectsState.find(
        (project) => project.id === this.id
      ).attributes;

      this.form.get('projectForm').patchValue(project);
    });
  }

  submitForm() {
    this.projectsApiService.changeProject(
      this.id,
      this.form.get('projectForm').value
    );
  }
}
