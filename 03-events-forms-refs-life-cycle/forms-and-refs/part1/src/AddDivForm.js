import React, { Component } from "react";

class AddDivForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: "",
      height: "",
      backgroundColor: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    if (e.target.id === "backgroundColor")
      this.setState({ [e.target.id]: e.target.value.slice(0, 6) });
    else this.setState({ [e.target.id]: e.target.value.slice(0, 3) });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fnAdd({
      width: this.state.width + "px",
      height: this.state.height + "px",
      backgroundColor: "#" + this.state.backgroundColor
    });
    this.setState({
      width: "",
      height: "",
      backgroundColor: ""
    });
  }

  render() {
    let error = this.validate();
    return (
      <form>
        {error || <h3> Yay! Now Submit!!! </h3>}
        <label htmlFor="width">Width:</label>
        <input
          name="width"
          id="width"
          placeholder="Put width in px"
          value={this.state.width}
          onChange={this.handleChange}
        />
        <label htmlFor="height">Height:</label>
        <input
          name="height"
          id="height"
          placeholder="Put height in px"
          value={this.state.height}
          onChange={this.handleChange}
        />
        <label htmlFor="backgroundColor">Color:</label>
        <input
          name="backgroundColor"
          id="backgroundColor"
          placeholder="Put backgroundColor in hex color code"
          value={this.state.backgroundColor}
          onChange={this.handleChange}
        />
        {error ? (
          <button onClick={e => e.preventDefault()}>Can't submit yet</button>
        ) : (
          <button onClick={this.handleSubmit.bind(this)}>Add new div</button>
        )}
      </form>
    );
  }
  //Is this the best place to put this
  validate() {
    let error = "";
    if (
      this.state.backgroundColor.search(/[^0-9A-F1-f]/) > -1 ||
      this.state.backgroundColor.length < 6
    ) {
      error = (
        <h3 style={{ color: "red" }}>
          Color must be in hex (0-9 or A-F) and 6 digits long
        </h3>
      );
    }
    if (
      this.state.width.search(/[^0-9]/) > -1 ||
      this.state.height.search(/[^0-9]/) > -1
    ) {
      error = (
        <h3 style={{ color: "red" }}>Width and height must be numbers only</h3>
      );
    }
    if (
      this.state.width === "" ||
      this.state.height === "" ||
      this.state.backgroundColor === ""
    ) {
      error = <p> Please fill in the following fields </p>;
    }
    if (error === "") return null;
    return error;
  }
}

export default AddDivForm;
