import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { PagePath } from 'src/app/shared/enums/routing-path.enums';
import { ISelectOptions } from 'src/app/shared/interfaces/label-options.interface';

import { IProject } from 'src/app/shared/interfaces/project.interface';
import { ProjectsApiService } from 'src/app/shared/services/api/projects.api.service';
import { ResponsibilitiesApiService } from 'src/app/shared/services/api/responsibilities-api.service';
import { SkillsApiService } from 'src/app/shared/services/api/skills-api.service';
import { ProjectsService } from 'src/app/shared/services/projects.service';
import { addProject } from 'src/app/store/actions/projects-actions';

@Component({
  selector: 'app-project-create-page',
  templateUrl: './project-create-page.component.html',
  styleUrls: ['./project-create-page.component.scss'],
})
export class ProjectCreatePageComponent {
  form: FormGroup;
  // написать не форму, а формконтрол?, формконтрол не содержит required?
  projects: IProject[];
  skillsOption: ISelectOptions;
  responsibilitiesOption: ISelectOptions;

  constructor(
    fb: FormBuilder,
    public store: Store,
    private router: Router,
    private skillsApiService: SkillsApiService,
    private responsibilitiesApiService: ResponsibilitiesApiService
  ) {
    this.form = fb.group({
      projectForm: [null, Validators.required],
    });
  }

  ngOnInit() {
    this.skillsApiService.getSkills().subscribe((value) => {
      this.skillsOption = value;
    });
    this.responsibilitiesApiService.getResponsibilities().subscribe((value) => {
      this.responsibilitiesOption = value;
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
