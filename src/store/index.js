import { createStore } from "redux";

import { reducer } from './root-reducer';
import { loadState, saveState } from "./localStorage";
import { throttle } from "lodash";

export const cofigureStore = () => {
  const persistedState = loadState();
  const store = createStore(
    reducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  store.subscribe(throttle(() => {
    saveState({
      todos: store.getState().todos
    })
  }, 1000))
  return store
}