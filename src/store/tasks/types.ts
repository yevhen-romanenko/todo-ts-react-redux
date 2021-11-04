import { ITask } from '../../shared/interfaces';

export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const SET_TASKS = 'SET_TASKS';

// export type TTaskActions = ADD_TASK | DELETE_TASK | EDIT_TASK

export type TaskState = {
    taskItems: ITask[];
};

export type TaskAction = {
    type: string;
    payload: any;
};

export type DispatchType = (args: TaskAction) => TaskAction;
