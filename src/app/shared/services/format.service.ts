import { Injectable } from '@angular/core';
import { IProject, IProjectDTO } from '../interfaces/project.interface';
import { IEmployee } from '../interfaces/employee.interface';

@Injectable({
  providedIn: 'root',
})
export class FormatService {
  constructor() {}

  formatSkillsProperty(projects: IProjectDTO[]): IProject[] {
    return projects.map((elem) => ({
      ...elem,
      attributes: {
        ...elem.attributes,
        skills: elem.attributes.skills.data

          .map((elem) => elem.attributes.name)
          .toString(),
      },
    }));
  }

  formatProjectResponse(project: IProjectDTO): IProject {
    return {
      ...project,
      attributes: {
        ...project.attributes,
        responsibilities: project.attributes.responsibilities.data.map(
          (elem) => elem.id
        ),
        skills: project.attributes.skills.data.map((elem) => elem.id),
      },
    };
  }
  formatEmployeesResponse(response: IEmployee[]): Array<any> {
    return response.map((elem: any) => ({ attributes: elem.id }));
  }
  // не забыть типизировать employeesResponse
}
