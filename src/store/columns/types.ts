// import { Action } from 'redux';

import { IColumn } from '../../shared/interfaces';

// export type TColumnsActions = {};

export const ADD_COLUMN = 'ADD_COLUMN';
export const MOVE_COLUMN = 'MOVE_COLUMN';
export const DELETE_COLUMN = 'DELETE_COLUMN';
export const EDIT_COLUMN_TITLE = 'EDIT_COLUMN_TITLE';

export type ColumnState = {
  columns: IColumn[];
};

export type ColumnAction = {
  type: string;
  column: IColumn;
};

export type DispatchType = (args: ColumnAction) => ColumnAction;
