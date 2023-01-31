import React, { Component } from "react";
import InputDiv from "./InputDiv";

class Personal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: '',
      age: '',
      email: '',
      phone: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }

  render() {
  
    return (
      <div className="section">
        <h2>Personal Information</h2>
        <form onSubmit={this.handleSubmit}>
        <fieldset className = "short-form">
          <div className="input-div">
            <label htmlFor='first'>Full Name: </label>
            <input
            type= 'text'
            name= 'first'
            value= {this.state.first}
            onChange = {this.handleInputChange}
            />
          </div>
          <div className="input-div">
            <label htmlFor='age'>Age: </label>
            <input
            type= 'number'
            name= 'age'
            value= {this.state.age}
            onChange = {this.handleInputChange}
            />
          </div>
          <div className="input-div">
            <label htmlFor='email'>E-mail Address: </label>
            <input
            type= 'email'
            name= 'email'
            value= {this.state.email}
            onChange = {this.handleInputChange}
            />
          </div>
          <div className="input-div">
            <label htmlFor='phone'>Phone Number: </label>
            <input
            type= 'tel'
            name= 'phone'
            value= {this.state.phone}
            onChange = {this.handleInputChange}
            />
          </div>
        </fieldset>
        <button type="submit">
          Submit
        </button>
      </form>
      </div>
    );
  }
}

export default Personal;