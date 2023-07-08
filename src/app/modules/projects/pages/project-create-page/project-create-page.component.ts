import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { PagePath } from 'src/app/shared/enums/routing-path.enums';
import { addProject } from 'src/app/store/actions/projects-actions';

@Component({
  selector: 'app-project-create-page',
  templateUrl: './project-create-page.component.html',
  styleUrls: ['./project-create-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCreatePageComponent {
  form: FormGroup;
  // написать не форму, а формконтрол?, формконтрол не содержит required?

  constructor(fb: FormBuilder, public store: Store, private router: Router) {
    this.form = fb.group({
      projectForm: null,
    });
  }

  submitForm() {
    // переписать и диспатчиить ответ
    this.store.dispatch(
      addProject({ projectAttributes: this.form.get('projectForm').value })
    );

    this.router.navigate([PagePath.ProjectsFullPath]);
  }
}
