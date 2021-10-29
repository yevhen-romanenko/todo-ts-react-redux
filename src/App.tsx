import React, { FC } from 'react';
import { useSelector, connect } from 'react-redux';

import './App.css';
import { AddNewColumnButton, TodoColumn } from './modules/columns/components';
import { tasksData } from './modules/columns/mock';
import { IColumn } from './shared/interfaces';
// import { getColumns } from './store/columns';

interface IColumnProps {
  columns: IColumn[];
}

export const App: FC<IColumnProps> = (props) => {
  const { columns } = props;

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
});

export default connect(mapStateToProps)(App);

// export default App;
