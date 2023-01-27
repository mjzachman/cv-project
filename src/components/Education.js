// Education.js

import React, { Component } from "react";


class Education extends Component {
  constructor() {
    super();


    
  }
  
  render() {
    


    return (
      <div className="section">
        <h2>Education</h2>
        <form>
        <fieldset id="edu-form">
            <div class="input-div">
                <label htmlFor="eduInst">Insitution Name:</label>
                <input
                  type="text"
                  id="eduInst"
                />
            </div>
            <div class="input-div">
                <label htmlFor="eduStudy">Area of Study:</label>
                <input
                  type="text"
                  id="eduStudy"
                />
            </div>
            <div class="input-div">
                <label htmlFor="eduLevel">Level of Education completed:</label>
                <input
                  type="text"
                  id="eduLevel"
                />
            </div>
            <div class="input-div">
                <label htmlFor="eduDate">Completion Date:</label>
                <input
                  type="date"
                  id="eduDate"
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