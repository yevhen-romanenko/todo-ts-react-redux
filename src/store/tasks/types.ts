import { ITask } from '../../shared/interfaces';

export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const SET_TASKS = 'SET_TASKS';
export const SET_FETCHING_TASKS = 'SET_FETCHING_TASKS';
export const SET_FETCH_TASKS_SUCCESS = 'SET_FETCH_TASKS_SUCCESS';
export const SET_FETCH_TASKS_ERROR = 'SET_FETCH_TASKS_ERROR';

export type TaskApiState = {
  isFetching: boolean;
  error: string | null;
};

export type AddTaskAction = {
  type: typeof ADD_TASK;
  task: ITask;
};

export type EditTaskAction = {
  type: typeof EDIT_TASK;
  task: ITask;
};

export type DeleteTaskAction = {
  type: typeof DELETE_TASK;
  id: number;
};

export type SetTasksAction = {
  type: typeof SET_TASKS;
  tasks: Array<ITask>;
};

export type SetFetchingTasksAction = {
  type: typeof SET_FETCHING_TASKS;
};

export type SetFetchTasksSuccessAction = {
  type: typeof SET_FETCH_TASKS_SUCCESS;
};

export type SetFetchTasksErrorAction = {
  type: typeof SET_FETCH_TASKS_ERROR;
  error: string;
};

export type TaskActionTypes =
  | SetTasksAction
  | EditTaskAction
  | DeleteTaskAction
  | AddTaskAction
  | SetFetchingTasksAction
  | SetFetchTasksSuccessAction
  | SetFetchTasksErrorAction;

export type DispatchType = (args: TaskActionTypes) => TaskActionTypes;
