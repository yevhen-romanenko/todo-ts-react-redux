import * as ActionTypes from './types';
import { TaskActionTypes } from '.';
import { ITask } from '../../shared/interfaces';

const initialState: Array<ITask> = [];

export const tasksReducer = (state = initialState, action: TaskActionTypes) => {
  switch (action.type) {
    case ActionTypes.SET_TASKS:
      return action.tasks;

    case ActionTypes.ADD_TASK:
      return [...state];

    case ActionTypes.EDIT_TASK:
      return [...state, action.task];

    case ActionTypes.DELETE_TASK:
      const id = action.id;

      const newTasksState = state.filter((taskItem) => taskItem.id !== id);
      state = newTasksState;
      return [...state];

    case ActionTypes.SET_FETCHING_TASKS:
      return { ...state, isFetching: true };

    case ActionTypes.SET_FETCH_TASKS_ERROR:
      return { ...state, isFetching: false, error: action.error };

    case ActionTypes.SET_FETCH_TASKS_SUCCESS:
      return { ...state, isFetching: false, error: null };

    default:
      return state;
  }
};
