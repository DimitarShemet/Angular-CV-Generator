import { IResponsibilities } from './responsibilities.interface';
import { ISkills } from './skills.interface';

export interface IProjectDataAttributes {
  name: string;
  description: string;
  domain: string;
  from: Date;
  to: Date;
  internalName: string;
  skills: ISkills;
  responsibilities: IResponsibilities;
}
export interface IProject {
  id?: number;
  attributes: IProjectDataAttributes;
}
export interface IProjectsResponse {
  data: IProject[];
}
export interface IProjectResponse {
  data: IProject;
}
