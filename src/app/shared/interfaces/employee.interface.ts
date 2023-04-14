import { ISkills } from './skills.interface';

export interface IEmployee {
  attributes: {
    id: number;
    username: string;
    email: string;
    confirmed: boolean;
    blocked: boolean;
    skills: ISkills;
    languages: Array<any>;
    education: any;
    description: string;
    firstName: string;
    lastName: string;
    cvs: any;
  };
}
// дженерик
