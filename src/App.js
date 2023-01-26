// App.js

import React, { Component } from "react";
import Personal from "./components/Personal";
import Education from "./components/Education";
import Work from "./components/Work";
import './styles/App.css';

class App extends Component {
  constructor() {
    super();


    
  }
  
  render() {
    


    return (
      <div className="App">
        <Personal />
        <Education />
        <Work />
      </div>
    );
  }
}

export default App;
