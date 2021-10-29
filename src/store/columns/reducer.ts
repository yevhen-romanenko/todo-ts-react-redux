import * as ActionTypes from './types';
import { ColumnState, ColumnAction } from '.';
import { IColumn } from '../../shared/interfaces';
import { v4 as uuidv4 } from 'uuid';
import { convertGuidToInt } from '../../shared/helpers';
// import { tasksData } from '../../modules/columns/mock';

const initialState: ColumnState = {
  columnItems: [],
};

export const columnsReducer = (
  state: ColumnState = initialState,
  action: ColumnAction
) => {
  switch (action.type) {
    case ActionTypes.SET_COLUMNS:
      return {
        ...state,
        columnItems: action.payload,
      };

    case ActionTypes.ADD_COLUMN:
      const newColumn: IColumn = {
        title: action.payload,
        tasks: [],
        id: convertGuidToInt(uuidv4()),
      };

      return {
        ...state,
        newColumn,
      };

    case ActionTypes.DELETE_COLUMN:
      const id = action.payload;
      const newColumnsState = state.columnItems.filter(
        (columnItem) => columnItem.id !== id
      );
      state.columnItems = newColumnsState;
      return {
        ...state,
      };

    default:
      return state;
  }
};
