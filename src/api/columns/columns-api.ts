// import { IColumn } from '../../shared/interfaces';
// import { AxiosResponse } from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { convertGuidToInt } from '../../shared/helpers';

const apiStore: any = {
    columns: [
        {
            title: 'First Column',
            id: 0,
            tasks: [],
        },
        {
            title: 'Second Column',
            id: 1,
            tasks: [],
        },
        {
            title: 'Third Column',
            id: 2,
            tasks: [],
        },
    ],
};

export const fetchColumsReq = () => {
    console.log('fetchColumns request from api');
    return {
        statusText: 'Ok',
        status: 200,
        headers: {},
        config: {} as any,
        data: apiStore.columns,
    };
};

export const deleteColumnsReq = (id: number) => {
    const newApistore = apiStore.columns.filter((column: any) => column.id !== id);
    console.log('delete Column req', newApistore);
    return {
        statusText: 'Ok',
        status: 200,
        headers: {},
        config: {} as any,
        data: newApistore,
    };
};

export const addColumnReq = (data: any) => {
    const newColumn = {
        title: data,
        id: convertGuidToInt(uuidv4()),
        tasks: [],
    };

    apiStore.columns.push(newColumn);

    return {
        statusText: 'Ok',
        status: 200,
        headers: {},
        config: {} as any,
        data: apiStore.columns,
    };
};

export const updateColumnReq = (id: number, data: any) => {
    const updatedColumn = apiStore.columns.find((column: any) => column.id === id);
    updatedColumn.title = data;

    return {
        statusText: 'Ok',
        status: 200,
        headers: {},
        config: {} as any,
        data: apiStore.columns,
    };
};

export const swapColumnPositionReq = (id: number, direction: number) => {
    const newApiColumnsStore = apiStore.columns;

    const startIndexSwap = newApiColumnsStore.findIndex((column: any) => column.id === id);

    const tempColumn = newApiColumnsStore.splice(startIndexSwap, 1)[0];
    newApiColumnsStore.splice(startIndexSwap + direction, 0, tempColumn);

    console.log('SwapColumn req', newApiColumnsStore);
    return {
        statusText: 'Ok',
        status: 200,
        headers: {},
        config: {} as any,
        data: newApiColumnsStore,
    };
};
