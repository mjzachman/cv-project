import React, { Component } from "react";
import InputDiv from "./InputDiv";

class Personal extends Component {
  constructor() {
    super();


    
  }
  
  render() {
    


    return (
      <div className="section">
        <h2>Personal Information</h2>
        <form>
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