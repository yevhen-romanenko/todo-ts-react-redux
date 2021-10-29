import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { tasksReducer } from './tasks';
import { columnsReducer, setAllColumns } from './columns';

// import { IColumn, ITask } from '../shared/interfaces';

// export interface IAppState  {
//   columnsState: IColumn[]
//   tasksState: ITask[]
// }

const rootReducer = combineReducers<{}>({
  tasks: tasksReducer,
  columns: columnsReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

store.dispatch(setAllColumns() as any);

export default store;
