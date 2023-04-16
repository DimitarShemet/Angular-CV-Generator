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
import { ISelectOptions } from 'src/app/shared/interfaces/label-options.interface';
import { ProjectsApiService } from 'src/app/shared/services/api/projects.api.service';
import { ResponsibilitiesApiService } from 'src/app/shared/services/api/responsibilities-api.service';
import { SkillsApiService } from 'src/app/shared/services/api/skills-api.service';

import { changeProject } from 'src/app/store/actions/projects-actions';
import { getSkills } from 'src/app/store/actions/skills-actions';

@Component({
  selector: 'app-project-edit-page',
  templateUrl: './project-edit-page.component.html',
  styleUrls: ['./project-edit-page.component.scss'],
})
export class ProjectEditPageComponent {
  form: FormGroup;
  formControl = new FormControl('');
  id: number;
  skillsOption: ISelectOptions;
  responsibilitiesOption: ISelectOptions;

  constructor(
    fb: FormBuilder,
    private projectsApiService: ProjectsApiService,
    private route: ActivatedRoute,
    private store: Store,
    private router: Router,
    private skillsApiService: SkillsApiService,
    private responsibilitiesApiService: ResponsibilitiesApiService
  ) {
    this.form = fb.group({
      projectForm: [null, Validators.required],
    });
  }

  ngOnInit() {
    this.store.dispatch(getSkills());
    this.route.data.subscribe((data) => {
      this.form.get('projectForm').patchValue(data['project'].attributes);
      this.id = data['project'].id;
    });
    this.skillsApiService.getSkills().subscribe((value) => {
      this.skillsOption = value;
    });
    this.responsibilitiesApiService.getResponsibilities().subscribe((value) => {
      this.responsibilitiesOption = value;
    });
  }

  submitForm() {
    const formValue = this.form.get('projectForm').value;
    this.store.dispatch(
      changeProject({ id: this.id, projectAttributes: formValue })
    );
    this.router.navigate([PagePath.ProjectsFullPath]);
  }
}
