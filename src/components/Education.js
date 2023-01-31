import React, { Component } from "react";
import InputDiv from "./InputDiv";

class Education extends Component {
  constructor() {
    super();
    this.state = {
      inst: '',
      area: '',
      level: '',
      date: ''
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
      <form onSubmit={this.handleSubmit}>
        <fieldset className = "short-form">
          <div className="input-div">
            <label htmlFor='inst'>Academic Institution: </label>
            <input
            type= 'text'
            name= 'inst'
            value= {this.state.inst}
            onChange = {this.handleInputChange}
            />
          </div>
          <div className="input-div">
            <label htmlFor='area'>Area of Study: </label>
            <input
            type= 'text'
            name= 'area'
            value= {this.state.area}
            onChange = {this.handleInputChange}
            />
          </div>
          <div className="input-div">
            <label htmlFor='level'>Level of Education Completed: </label>
            <input
            type= 'text'
            name= 'level'
            value= {this.state.level}
            onChange = {this.handleInputChange}
            />
          </div>
          <div className="input-div">
            <label htmlFor='date'>Completeion date: </label>
            <input
            type= 'date'
            name= 'date'
            value= {this.state.date}
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

export default Education;