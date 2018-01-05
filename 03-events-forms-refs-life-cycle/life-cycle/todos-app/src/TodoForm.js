import React, { Component } from "react";
import PropTypes from "prop-types";
import "./TodoForm.css";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.currentTitle,
      description: this.props.currentDescription
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.title) {
      this.props.handleSubmit(this.state);
      this.setState({
        title: "",
        description: ""
      });
    }
  }

  render() {
    let buttonText = this.props.currentTitle ? "Edit this todo!" : "Add this todo!";
    let { title, description } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-area">
          <label>
            Title:
            <input
              type="text"
              placeholder="What do you need to do?"
              onChange={this.handleChange}
              name="title"
              value={title}
            />
          </label>
        </div>
        <div className="input-area">
          <label>
            Description:
            <input
              type="text"
              placeholder="Details, please!"
              onChange={this.handleChange}
              name="description"
              value={description}
            />
          </label>
        </div>
        <input type="submit" value={buttonText} />
      </form>
    );
  }
}

TodoForm.propTypes = {
  currentTitle: PropTypes.string.isRequired,
  currentDescription: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

TodoForm.defaultProps = {
  currentTitle: "",
  currentDescription: ""
};

export default TodoForm;
