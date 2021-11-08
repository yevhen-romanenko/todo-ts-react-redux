import { v4 as uuidv4 } from 'uuid';
import { convertGuidToInt } from '../../shared/helpers';
import { dateCreate } from '../../shared/helpers';

const apiTasksStore: any = {
  tasks: [
    {
      id: 0,
      columnId: 0,
      title: 'static column // static card-task',
      description: 'we created a static list and a static card',
      dateOfCreate: '2021/10/18 13:17',
      expiredDate: '2021/10/23 13:17',
    },
    {
      id: 1,
      columnId: 0,
      title: 'Styled components (Material UI)',
      description: 'we used material UI React and styled components',
      dateOfCreate: '2021/10/08 13:17',
      expiredDate: '2022/10/28 13:17',
    },
    {
      id: 2,
      columnId: 1,
      title: 'first reducer',
      description: 'we created our first reducer',
      dateOfCreate: '2021/10/18 13:17',
      expiredDate: '2023/10/28 13:17',
    },
    {
      id: 3,
      columnId: 1,
      title: 'render tasks and columns',
      description: 'render many tasks on our Column component with static data',
      dateOfCreate: '2021/10/18 13:17',
      expiredDate: '2024/10/28 13:17',
    },
    {
      id: 4,
      columnId: 1,
      title: 'add buttons for AddCard and AddList',
      description:
        'Add and implement reusable componnet button for AddCard and AddList ',
      dateOfCreate: '2021/10/18 12:44',
      expiredDate: '2025/10/18 13:17',
    },
    {
      id: 5,
      columnId: 2,
      title: 'one more task',
      description: 'add Typescript to the project',
      dateOfCreate: '2021/10/18 13:17',
      expiredDate: '2024/10/28 13:17',
    },
    {
      id: 6,
      columnId: 2,
      title: 'new structure of project',
      description:
        'rewrite your TODO APP to new structure looks like as example ',
      dateOfCreate: '2021/10/18 13:17',
      expiredDate: '2025/10/28 13:17',
    },
    {
      id: 7,
      columnId: 2,
      title: 'working with reducers again',
      description:
        'Try to add API to your project and work with middlewares (redux-thunk)',
      dateOfCreate: '2021-10-18 12:44',
      expiredDate: '2025/10/18 13:17',
    },
  ],
};

export const fetchTasksReq = () => {
  // console.log('fetchTask request from api');
  return {
    statusText: 'Ok',
    status: 200,
    headers: {},
    config: {} as any,
    data: apiTasksStore.tasks,
  };
};

export const deleteTaskReq = (id: number) => {
  const newTaskStore = apiTasksStore.tasks.filter(
    (task: any) => task.id !== id
  );

  console.log('API deleteTask req', newTaskStore);

  return {
    statusText: 'Ok',
    status: 200,
    headers: {},
    config: {} as any,
    data: newTaskStore,
  };
};

export const addTaskReq = (
  columnID: number,
  titleData: string,
  descriptionData: string,
  expiredDateData: string
) => {
  const newTask = {
    id: convertGuidToInt(uuidv4()),
    columnId: columnID,
    title: titleData,
    description: descriptionData,
    dateOfCreate: dateCreate(),
    expiredDate: expiredDateData,
  };

  apiTasksStore.tasks.push(newTask);

  return {
    statusText: 'Ok',
    status: 200,
    headers: {},
    config: {} as any,
    data: apiTasksStore.tasks,
  };
};

export const updateTaskReq = (
  taskId: number,
  newTitle: string,
  newDesc: string
) => {
  const updatedTask = apiTasksStore.tasks.find(
    (task: any) => task.id === taskId
  );
  updatedTask.title = newTitle;
  updatedTask.description = newDesc;

  return {
    statusText: 'Ok',
    status: 200,
    headers: {},
    config: {} as any,
    data: apiTasksStore.tasks,
  };
};
