export interface IResponsibilities {
  data: IResponsibility[];
}
export interface IResponsibility {
  id: number;
  attributes: IIResponsibilityAttributes;
}
export interface IIResponsibilityAttributes {
  name: string;
}
