import css from './ToDoList.module.css';
import TodoItem from '../TodoItem/TodoItem';

export default function ToDoList({ todos, onDeleteToDo, toggle}) {
  return (
    <div className={css.wrapper}>
      <ul className={css.list}>
        {todos.map(({ id, text, completed }) => (
          <li className={css.item} key={id}>
            <TodoItem 
            text={text} 
            completed={completed} 
            onDeleteToDo={() => onDeleteToDo(id)}
            toggle={() => toggle(id)}/>
          </li>
        ))}
      </ul>
    </div>
  );
}

