import { addTaskReq, fetchTasksReq, updateTaskReq } from '../../api/tasks';
import { ITask } from '../../shared/interfaces';

import { Dispatch } from 'redux';
import {
  TaskActionTypes,
  ADD_TASK,
  EDIT_TASK,
  DELETE_TASK,
  SET_TASKS,
  SET_FETCHING_TASKS,
  SET_FETCH_TASKS_SUCCESS,
  SET_FETCH_TASKS_ERROR,
} from '.';

export const addTask = (task: ITask): TaskActionTypes => ({
  type: ADD_TASK,
  task,
});

export const editTask = (task: ITask): TaskActionTypes => ({
  type: EDIT_TASK,
  task,
});
export const deleteTask = (id: number): TaskActionTypes => ({
  type: DELETE_TASK,
  id,
});
export const setTasks = (tasks: ITask[]): TaskActionTypes => ({
  type: SET_TASKS,
  tasks,
});

export const setFetchingTasks = (): TaskActionTypes => ({
  type: SET_FETCHING_TASKS,
});

export const setFetchTasksSuccess = (): TaskActionTypes => ({
  type: SET_FETCH_TASKS_SUCCESS,
});

export const setFetchTasksError = (error: string): TaskActionTypes => ({
  type: SET_FETCH_TASKS_ERROR,
  error,
});

export const fetchTasksThunk =
  () => async (dispatch: Dispatch<TaskActionTypes>) => {
    try {
      //   dispatch(setFetchingTasks());
      const response = await fetchTasksReq();
      //   dispatch(setFetchTasksSuccess());
      dispatch(setTasks(response.data));
    } catch (err: any) {
      dispatch(setFetchTasksError(err.message));
    }
  };

export const addTasksThunk =
  (columnID: number, title: string, description: string, expiredDate: string) =>
  async (dispatch: Dispatch<TaskActionTypes>) => {
    try {
      const response = await addTaskReq(
        columnID,
        title,
        description,
        expiredDate
      );
      dispatch(addTask(response.data));
    } catch (err: any) {
      dispatch(setFetchTasksError(err.message));
    }
  };

export const editTaskThunk =
  (taskId: number, newTitle: string, newDescription: string) =>
  async (dispatch: Dispatch<TaskActionTypes>) => {
    try {
      const response = await updateTaskReq(taskId, newTitle, newDescription);
      dispatch(editTask(response.data));
    } catch (err: any) {
      dispatch(setFetchTasksError(err.message));
    }
  };
