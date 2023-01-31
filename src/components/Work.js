import React, { Component } from "react";
import InputDiv from "./InputDiv";

class Work extends Component {
  constructor() {
    super();


    
  }
  
  render() {
    


    return (
      <div className="section">
        <h2>Work History</h2>
        <form>
        <fieldset className="short-form">
            <InputDiv 
              id="jobTitle"
              type="text"
              text="Job Title: "
              />
            <InputDiv 
              id="compName"
              type="text"
              text="Company Name: "
              />
            <InputDiv 
              id="startDate"
              type="date"
              text="Start Date: "
              />
            <InputDiv 
              id="endDate"
              type="date"
              text="End Date: "
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

export default Work;