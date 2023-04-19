export interface IData<T, Y> {
  data: {
    id: T;
    attributes: {
      name: Y;
    };
  }[];
}
export interface IOption {
  label: string;
  value: number;
}
