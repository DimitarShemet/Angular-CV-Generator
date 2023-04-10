import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { PagePath } from 'src/app/shared/enums/routing-path.enums';
import { ProjectsApiService } from 'src/app/shared/services/api/projects.api.service';
import { EditProject } from 'src/app/store/actions/projects-actions';

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
    private store: Store,
    private router: Router
  ) {
    this.form = fb.group({
      projectForm: [null, Validators.required],
    });
  }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.form.get('projectForm').patchValue(data['project'].attributes);
      this.id = data['project'].id;
    });
  }

  submitForm() {
    const formValue = this.form.get('projectForm').value;
    this.projectsApiService.editProject(this.id, formValue);
    this.store.dispatch(
      new EditProject({ id: this.id, projectAttributes: formValue })
    );
    this.router.navigate([PagePath.ProjectsFullPath]);
  }
}
