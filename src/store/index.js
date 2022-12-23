import { createStore } from 'redux';
import { loadState, saveState } from './localStorage';
import { reducer } from './root-reducer';

export const cofigureStore = () => {
  const persistedState = loadState();
  const store = createStore(
    reducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  store.subscribe(() => {
    saveState({
      todos: store.getState().todos
    })
  })
  return store
}