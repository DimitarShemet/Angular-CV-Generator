import { IResponsibilities } from './responsibilities.interface';
import { ISkills } from './skills.interface';

export interface IProject {
  id: number;
  attributes: IProjectAttributes;
}
export interface IProjectAttributes {
  [key: string]: any;
  name: string;
  description: string;
  domain: string;
  from: Date;
  to: Date;
  internalName: string;
  skills: ISkills;
  responsibilities: IResponsibilities;
}

export interface IProjectsResponse {
  data: IProject[];
}

export interface IProjectResponse {
  data: IProject;
}
