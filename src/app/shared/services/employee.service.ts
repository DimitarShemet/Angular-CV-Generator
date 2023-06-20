import { Injectable } from '@angular/core';
import { ICv } from '../interfaces/cv.interface';
import {
  IEmployee,
  IEmployeeAttributes,
} from '../interfaces/employee.interface';
import { IProject } from '../interfaces/project.interface';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor() {}
  updateCvs(
    cvs: ICv[],
    id: number,
    name: string,
    employee: any,
    projects: IProject[]
  ) {
    const newCvs = [...cvs];
    const currentCvIndex = newCvs.findIndex((elem) => elem.id === id);
    newCvs[currentCvIndex] = {
      id: id,
      name: name,
      ...employee,
      projects: projects,
    };
  }
  getNewId(cvs: ICv[]): number {
    return cvs
      ? cvs.reduce((maxId, cv) => {
          const currId = cv.id;
          return currId > maxId ? currId : maxId;
        }, 0) + 1
      : 0;
  }
}
