import React, { Component } from "react";


class InputDiv extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    
    
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    const { id, type, text } = this.props;

    return (
        <div className="input-div">
            <label htmlFor={id}>{text}</label>
            <input
            type= {type}
            id= {id}
            onChange = {this.handleChange}
            />
        </div>
    );
  }
}

export default InputDiv;