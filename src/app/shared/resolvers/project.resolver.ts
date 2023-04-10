import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { ProjectsApiService } from '../services/api/projects.api.service';
import { Injectable } from '@angular/core';
import { IProject } from '../interfaces/project.interface';
@Injectable({ providedIn: 'root' })
export class ProjectResolver implements Resolve<IProject> {
  constructor(private projectsApiService: ProjectsApiService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.projectsApiService.getProject(+route.params['id']);
  }
}
