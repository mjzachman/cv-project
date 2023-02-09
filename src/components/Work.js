import React, { Component } from "react";
import InputDiv from "./InputDiv";

class Work extends Component {
  constructor() {
    super();
    this.state = {
      job: '',
      company: '',
      start: '',
      end: '',
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
          <h2>Work History</h2>
          <form onSubmit={this.handleSubmit}>
          <fieldset className = "short-form">
            <div className="input-div">
            <label htmlFor='job'>Job Title: </label>
              <p className="data"> {this.state.job} </p>
            </div>
            <div className="input-div">
            <label htmlFor='company'>Company: </label>
              <p className="data"> {this.state.company} </p>
            </div>
            <div className="input-div">
            <label htmlFor='start'>Start Date: </label>
              <p className="data"> {this.state.start}  </p>
            </div>
            <div className="input-div">
            <label htmlFor='end'>End Date: </label>
              <p className="data"> {this.state.end} </p>
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
          <h2>Work History</h2>
          <form onSubmit={this.handleSubmit}>
          <fieldset className = "short-form">
            <div className="input-div">
              <label htmlFor='job'>Job Title: </label>
              <input
              type= 'text'
              name= 'job'
              value= {this.state.job}
              onChange = {this.handleInputChange}
              />
            </div>
            <div className="input-div">
              <label htmlFor='company'>Company: </label>
              <input
              type= 'text'
              name= 'company'
              value= {this.state.company}
              onChange = {this.handleInputChange}
              />
            </div>
            <div className="input-div">
              <label htmlFor='start'>Start Date: </label>
              <input
              type= 'date'
              name= 'start'
              value= {this.state.start}
              onChange = {this.handleInputChange}
              />
            </div>
            <div className="input-div">
              <label htmlFor='end'>End Date: </label>
              <input
              type= 'date'
              name= 'end'
              value= {this.state.end}
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

export default Work;