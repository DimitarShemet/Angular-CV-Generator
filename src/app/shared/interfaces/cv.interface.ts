import { IProject } from './project.interface';
import { ISkills } from './skills.interface';

export interface ICv {
  id: number;
  name: string;
  firstName: string;
  lastName: string;
  description: string;
  email: string;
  skills: ISkills;
  projects: IProject[];
}
