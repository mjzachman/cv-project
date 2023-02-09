import React, { Component } from "react";
import InputDiv from "./InputDiv";

class Education extends Component {
  constructor() {
    super();
    this.state = {
      inst: '',
      area: '',
      level: '',
      date: '',
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
          <h2>Education</h2>
          <form onSubmit={this.handleSubmit}>
          <fieldset className = "short-form">
            <div className="input-div">
              <label htmlFor='inst'>Academic Institution: </label>
              <p className="data"> {this.state.inst} </p>
            </div>
            <div className="input-div">
              <label htmlFor='area'>Area of Study: </label>
              <p className="data"> {this.state.area} </p>
            </div>
            <div className="input-div">
              <label htmlFor='level'>Level of Education Completed: </label>
              <p className="data"> {this.state.level}  </p>
            </div>
            <div className="input-div">
              <label htmlFor='date'>Completeion date: </label>
              <p className="data"> {this.state.date} </p>
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
            <h2>Education</h2>
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
              <button type="submit"> Submit </button>
            </form>
          </div>
    );
    }
  }
}

export default Education;