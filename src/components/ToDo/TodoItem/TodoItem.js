import css from './TodoItem.module.css'

const TodoItem = ({completed, text, onDeleteToDo,  toggle}) => (
    <>
    <input
              type="checkbox"
              checked={completed}
              onChange={toggle}

            />
            <p className={css.item_text}>{text}</p>
            <button
              onClick={onDeleteToDo}
              className={css.delete_btn}
              type="button"
            >
              Delete
            </button>
    </>
)

export default TodoItem