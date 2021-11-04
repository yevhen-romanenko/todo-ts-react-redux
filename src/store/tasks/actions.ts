import { DispatchType } from '.';
import { addTaskReq, deleteTaskReq, fetchTasksReq } from '../../api/tasks';
// import { ITask } from '../../shared/interfaces';
import * as ActionTypes from './types';

// export function addTask(task: ITask) {
//   const action: TaskAction = {
//     type: ActionTypes.ADD_TASK,
//     task,
//   };

//   // return simulateHttpRequest(action);
// }

export function setAllTasks() {
    return async (dispatch: DispatchType) => {
        try {
            const response = await fetchTasksReq();
            console.log('setAllTasks action', response.data);
            dispatch({
                type: ActionTypes.SET_TASKS,
                payload: response.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
}
export function addTask(columnID: number, titleData: string, descriptionData: string, expiredDateData: string) {
    return async (dispatch: DispatchType) => {
        try {
            dispatch({
                type: ActionTypes.ADD_TASK,
                payload: { columnID, titleData, descriptionData, expiredDateData },
            });
            const response = await addTaskReq(columnID, titleData, descriptionData, expiredDateData);
            console.log(response);
            await fetchTasksReq();
        } catch (error) {
            console.log(error);
        }
    };
}

export function deleteTask(id: number) {
    return async (dispatch: DispatchType) => {
        try {
            dispatch({
                type: ActionTypes.DELETE_TASK,
                payload: { id },
            });
            const response = await deleteTaskReq(id);
            console.log(response);
            await fetchTasksReq();
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
