import { Component } from 'react';
import css from './ToDoEditor.module.css';

class ToDoEditor extends Component {
  state = {
    message: '',
  };

  handlerChange = e => {
    this.setState({ message: e.target.value });
  };

  handlerSubmit = e => {
    e.preventDefault();
    console.log(this.state)
    this.reset()
    this.props.onSubmit(this.state.message)
  };

  reset = () => {
    this.setState({message: ''})
  }

  render() {
    const { message } = this.state;
    return (
      <div>
        <form className={css.wrap} onSubmit={this.handlerSubmit}>
          <textarea
            className={css.texarea}
            value={message}
            onChange={this.handlerChange}
          ></textarea>
          <button type="submit" className={css.create_Btn}>
            Create
          </button>
        </form>
      </div>
    );
  }
}

export default ToDoEditor;
