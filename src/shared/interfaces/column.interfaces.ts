import { ITask } from '.';

export interface IColumn {
  id: number;
  title: string;
  tasks: ITask[];
}
