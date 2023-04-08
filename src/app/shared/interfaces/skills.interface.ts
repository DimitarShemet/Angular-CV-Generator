export interface ISkills {
  data: ISkill[];
}
export interface ISkill {
  id: number;
  attributes: ISkillAttributes;
}
export interface ISkillAttributes {
  name: string;
}
