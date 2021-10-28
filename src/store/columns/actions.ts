import { DispatchType, ColumnAction } from '.';
import { IColumn } from '../../shared/interfaces';
// import { ITask } from '../../shared/interfaces';
import * as ActionTypes from './types';

export function addColumn(column: IColumn) {
  const action: ColumnAction = {
    type: ActionTypes.ADD_COLUMN,
    column,
  };

  simulateHttpRequest(action);
}

export function deleteColumn(column: IColumn) {
  const action: ColumnAction = {
    type: ActionTypes.DELETE_COLUMN,
    column,
  };

  simulateHttpRequest(action);
}

export function editColumnTitle(column: IColumn) {
  const action: ColumnAction = {
    type: ActionTypes.EDIT_COLUMN_TITLE,
    column,
  };

  simulateHttpRequest(action);
}

// export const moveList = (id, direction) => {
//     return (dispatch) => {
//       dispatch({
//         type: MOVE_LIST,
//         payload: { id, direction },
//       });
//     };
//   };

export function simulateHttpRequest(action: ColumnAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action);
    }, 500);
  };
}
