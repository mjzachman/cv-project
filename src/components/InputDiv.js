import React, { Component } from "react";


class InputDiv extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};


    
  }

  

  render() {
    const { name, type, text, value, handleInputChange } = this.props;

    return (
        <div className="input-div">
            <label htmlFor={name}>{text}</label>
            <input
            type= {type}
            name= {name}
            value={value}
            defaultValue=""
            onChange = {handleInputChange}
            />
        </div>
    );
  }
}

export default InputDiv;