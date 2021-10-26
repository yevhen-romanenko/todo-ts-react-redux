import { IColumn } from '../../../shared/interfaces';

export const tasksData: IColumn[] = [
  {
    title: 'First List',
    id: 0,
    tasks: [
      {
        id: 0,
        title: 'static list // static card',
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
    title: 'Second List',
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
        title: 'render tasks and lists',
        description: 'render many tasks on our list with static data',
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
];
