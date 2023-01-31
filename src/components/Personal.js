import React, { Component } from "react";
import InputDiv from "./InputDiv";

class Personal extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  

  handleSubmit(event) {
    //get the state of each input div
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    


    return (
      <div className="section">
        <h2>Personal Information</h2>
        <form onSubmit= {this.handleSubmit} >
        <fieldset>
            <InputDiv 
              id="userFirst"
              type="text"
              text="First Name: "
              />
            <InputDiv 
              id="userMid"
              type="text"
              text="Middle Name: "
              />
            <InputDiv 
              id="userLast"
              type="text"
              text="Last Name: "
              />
            <InputDiv 
              id="userAge"
              type="number"
              text="Age: "
              />
            <InputDiv 
              id="userEmail"
              type="email"
              text="Email Address: "
              />
            <InputDiv 
              id="userPhone"
              type="tel"
              text="Phone Number: "
              />
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