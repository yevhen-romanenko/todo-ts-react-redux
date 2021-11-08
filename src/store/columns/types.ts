import { IColumn } from '../../shared/interfaces';

// export type TColumnsActions = {};
export const SET_COLUMNS = 'SET_COLUMNS';
export const ADD_COLUMN = 'ADD_COLUMN';
export const SWAP_COLUMN = 'SWAP_COLUMN';
export const DELETE_COLUMN = 'DELETE_COLUMN';
export const EDIT_COLUMN = 'EDIT_COLUMN';

export const SET_FETCHING_COLUMNS = 'SET_FETCHING_COLUMNS';
export const SET_FETCH_COLUMNS_SUCCESS = 'SET_FETCH_COLUMNS_SUCCESS';
export const SET_FETCH_COLUMNS_ERROR = 'SET_FETCH_COLUMNS_ERROR';

export type ColumnApiState = {
  isFetching: boolean;
  error: string | null;
};

export type AddColumnAction = {
  type: typeof ADD_COLUMN;
  column: IColumn;
};

export type EditColumnAction = {
  type: typeof EDIT_COLUMN;
  column: IColumn;
};

export type DeleteColumnAction = {
  type: typeof DELETE_COLUMN;
  id: number;
};

export type SwapColumnPositionAction = {
  type: typeof SWAP_COLUMN;
  columns: Array<IColumn>;
};

export type SetColumnsAction = {
  type: typeof SET_COLUMNS;
  columns: Array<IColumn>;
};

export type SetFetchingColumnsAction = {
  type: typeof SET_FETCHING_COLUMNS;
};

export type SetFetchColumnsSuccessAction = {
  type: typeof SET_FETCH_COLUMNS_SUCCESS;
};

export type SetFetchColumnsErrorAction = {
  type: typeof SET_FETCH_COLUMNS_ERROR;
  error: string;
};

export type ColumnActionTypes =
  | SetColumnsAction
  | EditColumnAction
  | DeleteColumnAction
  | AddColumnAction
  | SwapColumnPositionAction
  | SetFetchingColumnsAction
  | SetFetchColumnsSuccessAction
  | SetFetchColumnsErrorAction;

export type DispatchType = (args: ColumnActionTypes) => ColumnActionTypes;
