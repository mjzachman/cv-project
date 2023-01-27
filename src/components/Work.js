// Work.js

import React, { Component } from "react";


class Work extends Component {
  constructor() {
    super();


    
  }
  
  render() {
    


    return (
      <div className="section">
        <h2>Work History</h2>
        <form>
        <fieldset id="edu-form">
            <div class="input-div">
                <label htmlFor="eduInst">Job Title:</label>
                <input
                  type="text"
                  id="jobTitle"
                />
            </div>
            <div class="input-div">
                <label htmlFor="eduStudy">Company Name:</label>
                <input
                  type="text"
                  id="compName"
                />
            </div>
            <div class="input-div">
                <label htmlFor="eduLevel">Start Date:</label>
                <input
                  type="date"
                  id="startDate"
                />
            </div>
            <div class="input-div">
                <label htmlFor="eduDate">End Date:</label>
                <input
                  type="date"
                  id="endDate"
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

export default Work;