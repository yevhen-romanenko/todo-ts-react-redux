import * as ActionTypes from './types';
import { ColumnState, ColumnAction } from '.';
import { IColumn } from '../../shared/interfaces';
import { v4 as uuidv4 } from 'uuid';
import { convertGuidToInt } from '../../shared/helpers';

const initialState: ColumnState = {
  columns: [],
};

export const columnsReducer = (
  state: ColumnState = initialState,
  action: ColumnAction
) => {
  switch (action.type) {
    case ActionTypes.ADD_COLUMN:
      const newColumn: IColumn = {
        title: action.column.title,
        tasks: [],
        id: convertGuidToInt(uuidv4()),
      };

      return {
        ...state,
        newColumn,
      };

    default:
      return state;
  }
};
