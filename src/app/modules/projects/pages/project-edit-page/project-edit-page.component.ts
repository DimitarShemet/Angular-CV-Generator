import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { PagePath } from 'src/app/shared/enums/routing-path.enums';
import { changeProject } from 'src/app/store/actions/projects-actions';

@Component({
  selector: 'app-project-edit-page',
  templateUrl: './project-edit-page.component.html',
  styleUrls: ['./project-edit-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectEditPageComponent {
  form: FormGroup;
  formControl = new FormControl('');
  id: number;
  projectsPagePath = PagePath.ProjectsFullPath;

  constructor(
    fb: FormBuilder,
    private route: ActivatedRoute,
    private store: Store,
    private router: Router
  ) {
    this.form = fb.group({
      projectForm: null,
    });
  }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.form.get('projectForm').patchValue(data['project'].attributes);
      console.log(data['project'].attributes);
      this.id = data['project'].id;
    });
  }

  submitForm() {
    const formValue = this.form.get('projectForm').value;
    console.log(formValue);
    this.store.dispatch(
      changeProject({ id: this.id, projectAttributes: formValue })
    );
    this.router.navigate([this.projectsPagePath]);
  }
}
