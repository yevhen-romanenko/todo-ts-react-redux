import React, { FC, useEffect, useState } from 'react';
import { useSelector, connect, ReactReduxContext, useDispatch } from 'react-redux';

import './App.css';
import { AddNewColumnButton, TodoColumn } from './modules/columns/components';

import { IColumn, ITask } from './shared/interfaces';
import { setAllColumns } from './store/columns';
import { setAllTasks } from './store/tasks';
import store from './store';

interface IColumnProps {
    columns: IColumn[];
    tasks: ITask[];
}

export const App: FC<IColumnProps> = (props) => {
    useEffect(() => {
        store.subscribe(() => {
            console.log(store.getState());
        });

        store.dispatch(setAllColumns() as any);
        store.dispatch(setAllTasks() as any);
    }, []);

    const { columns, tasks } = props;

    return (
        <div className="App">
            <h2 style={{ width: '100%', textAlign: 'center' }}>TODO APP</h2>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                {columns.map((column, index) => (
                    <TodoColumn
                        columnID={column.id}
                        key={column.id}
                        title={column.title}
                        tasks={tasks.filter((task) => task.columnId === column.id)}
                        canMoveLeft={index !== 0}
                        canMoveRight={index !== columns.length - 1}
                    ></TodoColumn>
                ))}
                <AddNewColumnButton></AddNewColumnButton>
            </div>
        </div>
    );
};


const mapStateToProps = (state: any) => ({
  
    columns: state.columns.columnItems,
    tasks: state.tasks.taskItems,
});

export default connect(mapStateToProps)(App);

// export default App;
