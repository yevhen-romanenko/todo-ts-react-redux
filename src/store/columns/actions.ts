// import {
//   fetchColumsReq,
//   deleteColumnsReq,
//   updateColumnReq,
//   addColumnReq,
//   swapColumnPositionReq,
// } from '../../api/columns';

import { IColumn } from '../../shared/interfaces';
import { fetchColumsReq } from '../../api/columns';

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

export const deleteColumn = (column: IColumn): ColumnActionTypes => ({
  type: DELETE_COLUMN,
  column,
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

// const justSetAllColumns = (columns: any) => ({
//   type: ActionTypes.SET_COLUMNS,
//   payload: columns,
// });

// const deletingColumnThunk = (id:number) => {
//   (dispatch, getState) => {
//     dispatch()
//   }
// }

// export function setAllColumns() {
//   return async (dispatch: DispatchType) => {
//     try {
//       const response = await fetchColumsReq();
//       console.log('setAllColumns action', response.data);
//       dispatch({
//         type: ActionTypes.SET_COLUMNS,
//         payload: response.data,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// }

// export function deleteColumn(id: number) {
//   return async (dispatch: DispatchType) => {
//     try {
//       dispatch({
//         type: ActionTypes.DELETE_COLUMN,
//         payload: id,
//       });
//       const response = await deleteColumnsReq(id);

//       console.log('DeleteColumnReqfromAction', response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };
// }

// export function addColumn(title: string) {
//   return async (dispatch: DispatchType) => {
//     try {
//       dispatch({
//         type: ActionTypes.ADD_COLUMN,
//         payload: title,
//       });
//       const response = addColumnReq(title);

//       console.log('AddColumnReqfromAction', response);
//       fetchColumsReq();
//     } catch (error) {
//       console.log(error);
//     }
//   };
// }

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

// export const requestDeleteColumnAndFetch = (id:any) => (
//     dispatch => {
//       dispatch(deleteColumn(id)).then(column:any => dispatch(setAllColumns()));
//     }
//   )

// export function simulateHttpRequest(action: ColumnAction) {
//   return (dispatch: DispatchType) => {
//     setTimeout(() => {
//       dispatch(action);
//     }, 0);
//   };
// }
