import { Component } from 'react';
import PropTypes from 'prop-types';

class InputTodo extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
    };
  }

  onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title } = this.state;
    const { addTodoProps } = this.props;
    if (title.trim()) {
      addTodoProps(title);
      this.setState({
        title: '',
      });
    } else {
      alert('Please write item');
    }
  };

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add Todo..."
          value={title}
          name="title"
          onChange={this.onChange}
        />
        <button className="input-submit" type="submit">Submit</button>
      </form>
    );
  }
}

InputTodo.propTypes = { addTodoProps: PropTypes.func.isRequired };

export default InputTodo;
