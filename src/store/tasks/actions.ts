import { DispatchType, TaskAction } from '.';
import { ITask } from '../../shared/interfaces';
import * as ActionTypes from './types';

export function addTask(task: ITask) {
  const action: TaskAction = {
    type: ActionTypes.ADD_TASK,
    task,
  };

  return simulateHttpRequest(action);
}

export function deleteTask(task: ITask) {
  const action: TaskAction = {
    type: ActionTypes.DELETE_TASK,
    task,
  };
  return simulateHttpRequest(action);
}

export function editTask(task: ITask) {
  const action: TaskAction = {
    type: ActionTypes.EDIT_TASK,
    task,
  };
  return simulateHttpRequest(action);
}

export function simulateHttpRequest(action: TaskAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action);
    }, 500);
  };
}
