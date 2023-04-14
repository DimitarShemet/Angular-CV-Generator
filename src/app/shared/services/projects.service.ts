import { Injectable } from '@angular/core';
import { IProject } from '../interfaces/project.interface';
import { ProjectsApiService } from './api/projects.api.service';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor() {}

  getNewId(projects: IProject[]): number {
    return (
      projects.reduce((maxId: number, project: IProject) => {
        const currId = project.id;
        return currId > maxId ? currId : maxId;
      }, 0) + 1
    );
  }
}
// снести
