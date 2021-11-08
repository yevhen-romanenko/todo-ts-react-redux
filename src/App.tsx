import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';

import './App.css';
import { AddNewColumnButton, TodoColumn } from './modules/columns/components';

import { IColumn, ITask } from './shared/interfaces';
import { fetchColumnsThunk } from './store/columns';
import { fetchTasksThunk } from './store/tasks';
import store from './store';

interface IColumnProps {
  columns: IColumn[];
  tasks: ITask[];
}

export const App: FC<IColumnProps> = (props) => {
  // const dispatch = useDispatch();
  useEffect(() => {
    store.subscribe(() => {
      console.log(store.getState());
    });

    store.dispatch(fetchColumnsThunk() as any);
    store.dispatch(fetchTasksThunk() as any);
  }, []);

  const { columns, tasks } = props;

  // const columns: Array<IColumn> = useSelector((state: any) => state.columns);
  // const tasks: Array<ITask> = useSelector((state: any) => state.tasks);

  return (
    <div className='App'>
      <h2 style={{ width: '100%', textAlign: 'center' }}>TODO APP</h2>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {columns.map((column, index) => (
          <TodoColumn
            columnID={column.id}
            key={column.id}
            title={column.title}
            tasks={tasks.filter((task) => task.columnId === column.id)}
            canMoveLeft={index !== 0}
            canMoveRight={index !== columns.length - 1}></TodoColumn>
        ))}
        <AddNewColumnButton></AddNewColumnButton>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  columns: state.columns,
  tasks: state.tasks,
});

export default connect(mapStateToProps)(App);
