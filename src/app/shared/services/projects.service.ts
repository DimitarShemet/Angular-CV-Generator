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
  formatProjectsResponse(projects: any): Array<any> {
    return projects.map((elem: any) => ({
      ...elem,
      attributes: {
        ...elem.attributes,
        responsibilities: elem.attributes.responsibilities.data.map(
          (elem: any) => elem.id
        ),
        skills: elem.attributes.skills.data.map((elem: any) => elem.id),
      },
    }));
  }
  formatProjectResponse(project: any): any {
    return {
      ...project,
      attributes: {
        ...project.attributes,
        responsibilities: project.attributes.responsibilities.data.map(
          (elem: any) => elem.id
        ),
        skills: project.attributes.skills.data.map((elem: any) => elem.id),
      },
    };
  }
}
