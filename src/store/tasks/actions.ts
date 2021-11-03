import { DispatchType } from '.';
import { deleteTaskReq } from '../../api/tasks';
// import { ITask } from '../../shared/interfaces';
import * as ActionTypes from './types';

// export function addTask(task: ITask) {
//   const action: TaskAction = {
//     type: ActionTypes.ADD_TASK,
//     task,
//   };

//   // return simulateHttpRequest(action);
// }

export function deleteTask(columnID: number, id: number) {
  return async (dispatch: DispatchType) => {
    try {
      dispatch({
        type: ActionTypes.DELETE_TASK,
        payload: { columnID, id },
      });
      const response = await deleteTaskReq(columnID, id);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
}

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
