import { DispatchType } from '.';
import { fetchColumsReq, deleteColumnsReq, updateColumnReq, addColumnReq, swapColumnPositionReq } from '../../api/columns';
// import { IColumn } from '../../shared/interfaces';
// import { ITask } from '../../shared/interfaces';
import * as ActionTypes from './types';

export function setAllColumns() {
    return async (dispatch: DispatchType) => {
        try {
            const response = await fetchColumsReq();
            console.log('setAllColumns action', response.data);
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
            console.log('DeleteColumnReqfromAction', response);
            fetchColumsReq();
        } catch (error) {
            console.log(error);
        }
    };
}

export function addColumn(title: string) {
    return async (dispatch: DispatchType) => {
        try {
            dispatch({
                type: ActionTypes.ADD_COLUMN,
                payload: title,
            });
            const response = addColumnReq(title);

            console.log('AddColumnReqfromAction', response);
            fetchColumsReq();
        } catch (error) {
            console.log(error);
        }
    };
}

export function editColumnTitle(columnId: number, newTitle: string) {
    return async (dispatch: DispatchType) => {
        try {
            dispatch({
                type: ActionTypes.EDIT_COLUMN_TITLE,
                payload: { columnId, newTitle },
            });

            const response = await updateColumnReq(columnId, newTitle);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };
}

export function changeColumnPosition(columnId: number, direction: number) {
    return async (dispatch: DispatchType) => {
        try {
            dispatch({
                type: ActionTypes.EDIT_COLUMN_TITLE,
                payload: { columnId, direction },
            });

            const response = await swapColumnPositionReq(columnId, direction);
            console.log('SwapColumnPositionReqfromAction', response);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };
}

// export function simulateHttpRequest(action: ColumnAction) {
//   return (dispatch: DispatchType) => {
//     setTimeout(() => {
//       dispatch(action);
//     }, 0);
//   };
// }
