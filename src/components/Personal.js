// Personal.js

import React, { Component } from "react";


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
            <div class="input-div">
                <label htmlFor="nameInput">First Name:</label>
                <input
                  type="text"
                  id="name"
                />
            </div>
            <div class="input-div">
                <label htmlFor="emailInput">Middle Name:</label>
                <input
                  type="text"
                  id="name"
                />
            </div>
            <div class="input-div">
                <label htmlFor="phoneInput">Last Name:</label>
                <input
                  type="text"
                  id="name"
                />
            </div>
            <div class="input-div">
                <label htmlFor="nameInput">Age:</label>
                <input
                  type="number"
                  id="age"
                />
            </div>
            <div class="input-div">
                <label htmlFor="emailInput">Email Address:</label>
                <input
                  type="email"
                  id="email"
                />
            </div>
            <div class="input-div">
                <label htmlFor="phoneInput">Phone Number:</label>
                <input
                  type="tel"
                  id="phone"
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

export default Personal;