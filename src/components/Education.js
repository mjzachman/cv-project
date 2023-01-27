import React, { Component } from "react";
import InputDiv from "./InputDiv";

class Education extends Component {
  constructor() {
    super();


    
  }
  
  render() {
    


    return (
      <div className="section">
        <h2>Education</h2>
        <form>
        <fieldset class="short-form">
            <InputDiv 
              id="eduInst"
              type="text"
              text="Institution Name: "
              />
            <InputDiv 
              id="eduStudy"
              type="text"
              text="Area of Study: "
              />
            <InputDiv 
              id="eduLevel"
              type="text"
              text="Level of Education Completed: "
              />
            <InputDiv 
              id="eduDate"
              type="date"
              text="Date Completed: "
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

export default Education;