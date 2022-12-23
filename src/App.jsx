import { useSelector, useDispatch } from 'react-redux'
//store
import { addTodo, removeTodo, toggleTodo } from './store/todos/todos-actions';
import { selectVisibleTodos } from './store/todos/todos-selectors';
import { selectActiveFilter } from './store/filters/filters-selectors';
import { setFilter } from './store/filters/filters-actions';
//style
import './App.css';
//components
import { NewTodo } from './components/NewTodo';
import { TodoList } from './components/TodoList';
import { Filter } from './components/FIlters/Filter';

export const App = () => {
  //selectos
  const activeFilter = useSelector(selectActiveFilter);
  const todos = useSelector(state => selectVisibleTodos(state, activeFilter));
  //dispatch
  const dispatch = useDispatch();
  // functions
  const handleSubmit = (e) => {
    e.preventDefault();
    if(e.target.title.value === '') {
      return alert('Строка не может быть пустой')
    }
    dispatch(addTodo(e.target.title.value));
    e.target.reset();
  };

  return (
    <div className="App">
      <div className='header'>
        <h1>Hello Redux Todo</h1>
        <NewTodo handleSubmit={handleSubmit} />
      </div>
      <br />
      <Filter
        activeFilter={activeFilter}
        setFilter={(active) => dispatch(setFilter(active))}
      />
      <TodoList
        todos={todos}
        onToogle={(toggleId) => dispatch(toggleTodo(toggleId))}
        onRemove={(removeId) => dispatch(removeTodo(removeId))}
      />
    </div>
  );
};
