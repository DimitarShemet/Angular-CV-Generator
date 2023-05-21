import { Injectable } from '@angular/core';
import { IProject, IProjectDTO } from '../interfaces/project.interface';
import { IEmployee, IEmployeeDTO } from '../interfaces/employee.interface';

@Injectable({
  providedIn: 'root',
})
export class FormatService {
  constructor() {}

  formatProjectsSkillsProperty(projects: IProjectDTO[]): IProject[] {
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
  formatEmployeesResponse(response: IEmployeeDTO[]): IEmployee[] {
    return response.map((elem) => ({
      id: elem.id,
      attributes: {
        ...elem,
        skills: elem.skills.map((elem: any) => elem.name).toString(),
      },
    }));
  }
}
