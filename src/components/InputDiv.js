import React, { Component } from "react";


class InputDiv extends Component {
  constructor(props) {
    super(props);


    
  }
  
  render() {
    const { id, type, text } = this.props;

    return (
        <div class="input-div">
            <label htmlFor={id}>{text}</label>
            <input
            type= {type}
            id= {id}
            />
        </div>
    );
  }
}

export default InputDiv;