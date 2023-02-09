import React, { Component } from "react";
// import InputDiv from "./InputDiv";

class Personal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      age: '',
      email: '',
      phone: '',
      edit: true
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
    this.setState((state) => ({
      edit: !state.edit
    }));
    event.preventDefault();
  }

  render() {
    if (this.state.edit === false){
      return (
        <div className="section">
          <h2>Personal Information</h2>
          <form onSubmit={this.handleSubmit}>
          <fieldset className = "short-form">
            <div className="input-div">
              <label htmlFor='first'>Full Name: </label>
              <p className="data"> {this.state.user} </p>
            </div>
            <div className="input-div">
              <label htmlFor='age'>Age: </label>
              <p className="data"> {this.state.age} </p>
            </div>
            <div className="input-div">
              <label htmlFor='email'>E-mail Address: </label>
              <p className="data"> {this.state.email}  </p>
            </div>
            <div className="input-div">
              <label htmlFor='phone'>Phone Number: </label>
              <p className="data"> {this.state.phone} </p>
            </div>
          </fieldset>
          <button type="submit">
            Edit
          </button>
        </form>
        </div>
      );
    } else {
      return (
        <div className="section">
          <h2>Personal Information</h2>
          <form onSubmit={this.handleSubmit}>
          <fieldset className = "short-form">
            <div className="input-div">
              <label htmlFor='user'>Full Name: </label>
              <input
              type= 'text'
              name= 'user'
              value= {this.state.user}
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
}

export default Personal;