// export interface ITasksState {}

// const initialState: ICardsState {

// }

import * as ActionTypes from './types';
import { TaskState, TaskAction } from '.';
import { ITask } from '../../shared/interfaces';
import { v4 as uuidv4 } from 'uuid';
import { dateCreate } from '../../shared/helpers';
import { convertGuidToInt } from '../../shared/helpers';

const initialState: TaskState = {
  tasks: [],
};

export const tasksReducer = (
  state: TaskState = initialState,
  action: TaskAction
) => {
  switch (action.type) {
    case ActionTypes.ADD_TASK:
      const newTask: ITask = {
        title: action.task.title,
        description: action.task.description,
        id: convertGuidToInt(uuidv4()),
        dateOfCreate: dateCreate(),
        expiredDate: action.task.expiredDate,
      };

      return {
        ...state,
        newTask,
      };

    default:
      return state;
  }
};
