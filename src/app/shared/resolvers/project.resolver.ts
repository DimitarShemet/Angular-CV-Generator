import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { IProject } from '../interfaces/project.interface';
import { ProjectsApiService } from '../services/api/projects.api.service';

@Injectable({ providedIn: 'root' })
export class ProjectResolver implements Resolve<IProject> {
  constructor(private projectsApiService: ProjectsApiService) {}
  resolve(route: ActivatedRouteSnapshot) {
    return this.projectsApiService.getProjectById(+route.params['id']);
  }
}
