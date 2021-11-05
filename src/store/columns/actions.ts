import { IColumn } from '../../shared/interfaces';
import {
  addColumnReq,
  fetchColumsReq,
  updateColumnReq,
} from '../../api/columns';

import { Dispatch } from 'redux';
import {
  ADD_COLUMN,
  ColumnActionTypes,
  DELETE_COLUMN,
  EDIT_COLUMN,
  SET_COLUMNS,
  SET_FETCHING_COLUMNS,
  SET_FETCH_COLUMNS_ERROR,
  SET_FETCH_COLUMNS_SUCCESS,
} from '.';

export const addColumn = (column: IColumn): ColumnActionTypes => ({
  type: ADD_COLUMN,
  column,
});

export const editColumn = (column: IColumn): ColumnActionTypes => ({
  type: EDIT_COLUMN,
  column,
});

export const deleteColumn = (columnID: number): ColumnActionTypes => ({
  type: DELETE_COLUMN,
  id: columnID,
});

export const setColumns = (columns: IColumn[]): ColumnActionTypes => ({
  type: SET_COLUMNS,
  columns,
});

export const setFetchingColumns = (): ColumnActionTypes => ({
  type: SET_FETCHING_COLUMNS,
});
export const setFetchColumnsSuccess = (): ColumnActionTypes => ({
  type: SET_FETCH_COLUMNS_SUCCESS,
});
export const setFetchColumnsError = (error: string): ColumnActionTypes => ({
  type: SET_FETCH_COLUMNS_ERROR,
  error,
});

export const fetchColumnsThunk =
  () => async (dispatch: Dispatch<ColumnActionTypes>) => {
    try {
      // dispatch(setFetchingColumns());
      const response = await fetchColumsReq();
      // dispatch(setFetchColumnsSuccess());
      dispatch(setColumns(response.data));
    } catch (err: any) {
      dispatch(setFetchColumnsError(err.message));
    }
  };

export const addColumnsThunk =
  (title: string) => async (dispatch: Dispatch<ColumnActionTypes>) => {
    try {
      const response = await addColumnReq(title);

      dispatch(addColumn(response.data));
    } catch (err: any) {
      dispatch(setFetchColumnsError(err.message));
    }
  };

export const editColumnsTitleThunk =
  (columnId: number, newTitle: string) =>
  async (dispatch: Dispatch<ColumnActionTypes>) => {
    try {
      const response = await updateColumnReq(columnId, newTitle);

      dispatch(editColumn(response.data));
    } catch (err: any) {
      dispatch(setFetchColumnsError(err.message));
    }
  };

// export function editColumnTitle(columnId: number, newTitle: string) {
//   return async (dispatch: DispatchType) => {
//     try {
//       dispatch({
//         type: ActionTypes.EDIT_COLUMN_TITLE,
//         payload: { columnId, newTitle },
//       });

//       const response = await updateColumnReq(columnId, newTitle);
//       console.log(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };
// }

// export function changeColumnPosition(columnId: number, direction: number) {
//   return async (dispatch: DispatchType) => {
//     try {
//       dispatch({
//         type: ActionTypes.MOVE_COLUMN,
//         payload: { columnId, direction },
//       });

//       const response = await swapColumnPositionReq(columnId, direction);
//       console.log('SwapColumnPositionReqfromAction', response);
//       console.log(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };
// }
