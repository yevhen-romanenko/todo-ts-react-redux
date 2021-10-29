import { DispatchType, ColumnAction } from '.';
import { fetchColumsReq, deleteColumnsReq } from '../../api/columns';
import { IColumn } from '../../shared/interfaces';
// import { ITask } from '../../shared/interfaces';
import * as ActionTypes from './types';

export function setAllColumns() {
  return async (dispatch: DispatchType) => {
    try {
      const response = await fetchColumsReq();

      dispatch({
        type: ActionTypes.SET_COLUMNS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteColumn(id: number) {
  return async (dispatch: DispatchType) => {
    try {
      dispatch({
        type: ActionTypes.DELETE_COLUMN,
        payload: id,
      });
      const response = await deleteColumnsReq(id);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
}

export function addColumn(title: string) {
  return (dispatch: DispatchType) => {
    const action: ColumnAction = {
      type: ActionTypes.ADD_COLUMN,
      payload: title,
    };
  };
}

export function editColumnTitle(columnId: number, newTitle: string) {
  const action: ColumnAction = {
    type: ActionTypes.EDIT_COLUMN_TITLE,
    payload: { columnId, newTitle },
  };

  // simulateHttpRequest(action);
}

// export function simulateHttpRequest(action: ColumnAction) {
//   return (dispatch: DispatchType) => {
//     setTimeout(() => {
//       dispatch(action);
//     }, 0);
//   };
// }
