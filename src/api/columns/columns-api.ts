// import { IColumn } from '../../shared/interfaces';
// import { AxiosResponse } from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { convertGuidToInt } from '../../shared/helpers';

const apiStore: any = {
  columns: [
    {
      title: 'First Column',
      id: 0,
      tasks: [
        {
          id: 0,
          title: 'static column // static card-task',
          description: 'we created a static list and a static card',
          dateOfCreate: '2021/10/18 13:17',
          expiredDate: '2021/10/23 13:17',
        },
        {
          id: 1,
          title: 'Styled components (Material UI)',
          description: 'we used material UI React and styled components',
          dateOfCreate: '2021/10/08 13:17',
          expiredDate: '2021/10/28 13:17',
        },
      ],
    },
    {
      title: 'Second Column',
      id: 1,
      tasks: [
        {
          id: 0,
          title: 'first reducer',
          description: 'we created our first reducer',
          dateOfCreate: '2021/10/18 13:17',
          expiredDate: '2021/10/28 13:17',
        },
        {
          id: 1,
          title: 'render tasks and columns',
          description:
            'render many tasks on our Column component with static data',
          dateOfCreate: '2021/10/18 13:17',
          expiredDate: '2021/10/28 13:17',
        },
        {
          id: 2,
          title: 'add buttons for AddCard and AddList',
          description:
            'Add and implement reusable componnet button for AddCard and AddList ',
          dateOfCreate: '2021-10-18 12:44',
          expiredDate: '2021/10/18 13:17',
        },
      ],
    },
    {
      title: 'Third Column',
      id: 2,
      tasks: [
        {
          id: 0,
          title: 'one more task',
          description: 'add Typescript to the project',
          dateOfCreate: '2021/10/18 13:17',
          expiredDate: '2021/10/28 13:17',
        },
        {
          id: 1,
          title: 'new structure of project',
          description:
            'rewrite your TODO APP to new structure looks like as example ',
          dateOfCreate: '2021/10/18 13:17',
          expiredDate: '2021/10/28 13:17',
        },
        {
          id: 2,
          title: 'working with reducers again',
          description:
            'Try to add API to your project and work with middlewares (redux-thunk)',
          dateOfCreate: '2021-10-18 12:44',
          expiredDate: '2021/10/18 13:17',
        },
      ],
    },
  ],
};

export const fetchColumsReq = () => {
  console.log('fetch all data request from api');
  return {
    statusText: 'Ok',
    status: 200,
    headers: {},
    config: {} as any,
    data: apiStore.columns,
  };
};

export const deleteColumnsReq = (id: number) => {
  const newApistore = apiStore.columns.filter(
    (column: any) => column.id !== id
  );
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
    tasks: [],
    id: convertGuidToInt(uuidv4()),
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
  const updatedColumn = apiStore.columns.find(
    (column: any) => column.id === id
  );
  updatedColumn.title = data;

  return {
    statusText: 'Ok',
    status: 200,
    headers: {},
    config: {} as any,
    data: apiStore.columns,
  };
};
