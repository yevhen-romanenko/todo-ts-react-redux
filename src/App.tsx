import React, { FC, useEffect, useState } from 'react';
import {
  useSelector,
  connect,
  ReactReduxContext,
  useDispatch,
} from 'react-redux';

import './App.css';
import { AddNewColumnButton, TodoColumn } from './modules/columns/components';
// import { tasksData } from './modules/columns/mock';
import { IColumn } from './shared/interfaces';
import { setAllColumns } from './store/columns';
import store from './store';

interface IColumnProps {
  columns: IColumn[];
}

export const App: FC<IColumnProps> = (props) => {
  useEffect(() => {
    console.log('render App!');
    // store.subscribe(() => {
    //   console.log(store.getState());
    // });

    store.dispatch(setAllColumns() as any);

    return () => console.log('unmounting App...');
  }, []);

  // const [initialState, setInitialState] = useState([]);

  // useEffect(() => {
  //   async function fetchColumns() {
  //     const response = await
  //     // const fetchedColumns = await response.json(response);
  //     console.log('fetchedColumns', response);
  //     setInitialState(response.data);
  //   }
  //   fetchColumns();
  // }, []);

  // store.subscribe(() => {
  //   console.log(store.getState());
  // });

  // console.log('Initial state: ', store.getState());

  // const unsubscribe = store.subscribe(() =>
  //   console.log('State after dispatch: ', store.getState())
  // );

  const { columns } = props;
  // console.log(columns);

  return (
    <div className='App'>
      <h2 style={{ width: '100%', textAlign: 'center' }}>TODO APP</h2>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {columns.map((column, index) => (
          <TodoColumn
            columnID={column.id}
            key={column.id}
            title={column.title}
            tasks={column.tasks}
            canMoveLeft={index !== 0}
            canMoveRight={index !== columns.length - 1}></TodoColumn>
        ))}
        <AddNewColumnButton></AddNewColumnButton>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  columns: state.columns.columnItems,
  tasks: state.columns.columnItems.tasks,
});

export default connect(mapStateToProps)(App);

// export default App;
