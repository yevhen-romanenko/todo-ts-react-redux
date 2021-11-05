import * as ActionTypes from './types';
// import { ColumnState, ColumnAction } from '.';
import { IColumn } from '../../shared/interfaces';
import { ColumnActionTypes } from '.';
// import { v4 as uuidv4 } from 'uuid';
// import { convertGuidToInt } from '../../shared/helpers';
// import { tasksData } from '../../modules/columns/mock';

const initialState: Array<IColumn> = [];

export const columnsReducer = (
  state = initialState,
  action: ColumnActionTypes
) => {
  switch (action.type) {
    case ActionTypes.SET_COLUMNS:
      return action.columns;

    case ActionTypes.ADD_COLUMN:
      return [...state];

    case ActionTypes.EDIT_COLUMN:
      return [...state, action.column];

    case ActionTypes.DELETE_COLUMN:
      const id = action.id;
      const newColumnsState = state.filter(
        (columnItem) => columnItem.id !== id
      );
      state = newColumnsState;
      return [...state];
    case ActionTypes.SET_FETCHING_COLUMNS:
      return { ...state, isFetching: true };

    case ActionTypes.SET_FETCH_COLUMNS_ERROR:
      return { ...state, isFetching: false, error: action.error };

    case ActionTypes.SET_FETCH_COLUMNS_SUCCESS:
      return { ...state, isFetching: false, error: null };

    default:
      return state;
  }
};
