import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { cardsReducer } from './cards';
import { listsReducer } from './lists';

const rootReducer = combineReducers<{}>({
  cards: cardsReducer,
  lists: listsReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
