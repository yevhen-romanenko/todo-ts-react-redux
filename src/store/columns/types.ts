// import { Action } from 'redux';

import { IColumn } from '../../shared/interfaces';

// export type TColumnsActions = {};
export const SET_COLUMNS = 'SET_COLUMNS';
export const ADD_COLUMN = 'ADD_COLUMN';
export const MOVE_COLUMN = 'MOVE_COLUMN';
export const DELETE_COLUMN = 'DELETE_COLUMN';
export const EDIT_COLUMN_TITLE = 'EDIT_COLUMN_TITLE';

export type ColumnState = {
  columnItems: IColumn[];
};

export type ColumnAction = {
  type: string;
  payload: any;
};

export type DispatchType = (args: ColumnAction) => ColumnAction;
