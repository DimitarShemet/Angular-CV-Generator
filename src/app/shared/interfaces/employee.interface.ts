import { ICv } from './cv.interface';
import { IProject } from './project.interface';
import { ISkills } from './skills.interface';

export interface IEmployeeDTO {
  id: number;
  username: string;
  email: string;
  confirmed: boolean;
  blocked: boolean;
  skills: {
    id: number;
    name: string;
  }[];
  languages: any[];
  education: any;
  description: string;
  firstName: string;
  lastName: string;
  cvs: ICv[];
}
export interface IEmployee {
  id: number;
  attributes: IEmployeeAttributes;
}

export interface IEmployeeAttributes {
  id: number;
  username: string;
  email: string;
  confirmed: boolean;
  blocked: boolean;
  skills: string | number[];
  languages: Array<any>;
  education: any;
  description: string;
  firstName: string;
  lastName: string;
  cvs: ICv[];
}
