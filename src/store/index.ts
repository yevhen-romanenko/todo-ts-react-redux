import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { tasksReducer } from './tasks';
import { columnsReducer } from './columns';

const rootReducer = combineReducers({
  tasks: tasksReducer,
  columns: columnsReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
