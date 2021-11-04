// import { DispatchType } from '.';
import { fetchTasksReq } from '../../api/tasks';
import { ITask } from '../../shared/interfaces';
// import * as ActionTypes from './types';

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
export const deleteTask = (task: ITask): TaskActionTypes => ({
  type: DELETE_TASK,
  task,
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

// export function addTask(task: ITask) {
//   const action: TaskAction = {
//     type: ActionTypes.ADD_TASK,
//     task,
//   };

//   // return simulateHttpRequest(action);
// }

// export function setAllTasks() {
//     return async (dispatch: DispatchType) => {
//         try {
//             const response = await fetchTasksReq();
//             console.log('setAllTasks action', response.data);
//             dispatch({
//                 type: ActionTypes.SET_TASKS,
//                 payload: response.data,
//             });
//         } catch (error) {
//             console.log(error);
//         }
//     };
// }
// export function addTask(columnID: number, titleData: string, descriptionData: string, expiredDateData: string) {
//     return async (dispatch: DispatchType) => {
//         try {
//             dispatch({
//                 type: ActionTypes.ADD_TASK,
//                 payload: { columnID, titleData, descriptionData, expiredDateData },
//             });
//             const response = await addTaskReq(columnID, titleData, descriptionData, expiredDateData);
//             console.log(response);
//             await fetchTasksReq();
//         } catch (error) {
//             console.log(error);
//         }
//     };
// }

// export function deleteTask(id: number) {
//     return async (dispatch: DispatchType) => {
//         try {
//             dispatch({
//                 type: ActionTypes.DELETE_TASK,
//                 payload: { id },
//             });
//             const response = await deleteTaskReq(id);
//             console.log(response);
//             await fetchTasksReq();
//         } catch (error) {
//             console.log(error);
//         }
//     };
// }

// export function editTask(task: ITask) {
//   const action: TaskAction = {
//     type: ActionTypes.EDIT_TASK,
//     task,
//   };
//   // return simulateHttpRequest(action);
// }

// export function simulateHttpRequest(action: TaskAction) {
//   return (dispatch: DispatchType) => {
//     setTimeout(() => {
//       dispatch(action);
//     }, 500);
//   };
// }
