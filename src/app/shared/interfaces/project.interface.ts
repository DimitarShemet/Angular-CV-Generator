import { IResponsibilities } from './responsibilities.interface';
import { ISkills } from './skills.interface';

export interface IProjectsResponse {
  data: IProjectDTO[];
}

export interface IProjectResponse {
  data: IProjectDTO;
}
export interface IProjectDTO {
  id: number;
  attributes: IProjectDTOAttributes;
}
export interface IProjectDTOAttributes {
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
export interface IProject {
  id: number;
  attributes: IProjectAttributes;
  name?: string;
}

export interface IProjectAttributes {
  [key: string]: any;
  name: string;
  description: string;
  domain: string;
  from: Date;
  to: Date;
  internalName: string;
  skills: number[] | string;
  responsibilities: ISkills | number[];
}
