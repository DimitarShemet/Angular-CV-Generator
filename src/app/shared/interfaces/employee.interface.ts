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
  cvs: any;
}
export interface IEmployee {
  id: number;
  attributes: {
    id: number;
    username: string;
    email: string;
    confirmed: boolean;
    blocked: boolean;
    skills: string;
    languages: Array<any>;
    education: any;
    description: string;
    firstName: string;
    lastName: string;
    cvs: any;
  };
}
