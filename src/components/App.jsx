import { nanoid } from 'nanoid';
import ToDoList from './ToDo/ToDoList/ToDoList';
// import initialTodos from './data/todos.json';
import Statistics from './ToDo/Statistics/Statistics'
import ToDoEditor from './ToDo/ToDoEditor/ToDoEditor';
import Filter from './ToDo/Filter/Filter';
import { Component } from 'react';

class App extends Component {
  state = {
    todos: [],
    filter: '',
  };

  componentDidMount() {
    const localTodos = localStorage.getItem('todos')
    const parsedTodos = JSON.parse(localTodos)
    
    if(parsedTodos) {
      this.setState({todos: parsedTodos})
    }

  }
  componentDidUpdate(prevProps, prevState) {
    if(this.state.todos !== prevState.todos) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos))
    }
  }

  addToDo = message => {
    const newTodo = {
      id: nanoid(),
      text: message,
      completed: false,
    };
    if(message === '') {
      return alert('Write some text, please')
    }
    this.setState(({ todos }) => ({
      todos: [newTodo, ...todos],
    }));
  };

  calculateCompletedCount = () => {
    const { todos } = this.state;
    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );
  }
  toggleCompleted = toDoId => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo =>
        todo.id === toDoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  deleteToDo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getFilteredTodo = () => {
    const { todos, filter } = this.state;
    const normalizedFiler = filter.toLowerCase();
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFiler)
    );
  };



  render() {
    const { todos, filter } = this.state;
    const totalCount = todos.length;
    const completedTodo = this.calculateCompletedCount()
    const filteredTodo = this.getFilteredTodo();

    return (
      <div>
        <Statistics total={totalCount} countCompleted={completedTodo} />

        <ToDoEditor onSubmit={this.addToDo} />

        <Filter value={filter} onChange={this.changeFilter} />

        <ToDoList
          todos={filteredTodo}
          onDeleteToDo={this.deleteToDo}
          toggle={this.toggleCompleted}
        />
      </div>
    );
  }
}

export default App;
