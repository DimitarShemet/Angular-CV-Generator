import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormatService {
  constructor() {}

  formatSkillsProperty(arr: Array<any>) {
    return arr.map((elem) => ({
      ...elem,
      attributes: {
        ...elem.attributes,
        skills: elem.attributes.skills.data
          .map((elem: any) => elem.attributes.name)
          .toString(),
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
  formatEmployeesResponse(response: Array<any>): Array<any> {
    return response.map((elem: any) => ({ attributes: elem.id }));
  }
  // доделать
}
