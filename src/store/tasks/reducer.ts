// export interface ITasksState {}

// const initialState: ICardsState {

// }

import * as ActionTypes from './types';
import { TaskState, TaskAction } from '.';
// import { ITask } from '../../shared/interfaces';
// import { v4 as uuidv4 } from 'uuid';
// import { dateCreate } from '../../shared/helpers';
// import { convertGuidToInt } from '../../shared/helpers';

const initialState: TaskState = {
    taskItems: [],
};

export const tasksReducer = (state: TaskState = initialState, action: TaskAction) => {
    switch (action.type) {
        case ActionTypes.SET_TASKS:
            return {
                ...state,
                taskItems: action.payload,
            };
        case ActionTypes.ADD_TASK:
            return {
                ...state,
            };

        case ActionTypes.DELETE_TASK:
            console.log('del task reducer', action.payload);
            const id = action.payload;
            const newTasksState = state.taskItems.filter((taskItem) => taskItem.id !== id);
            state.taskItems = newTasksState;
            return {
                ...state,
            };

        default:
            return state;
    }
};
