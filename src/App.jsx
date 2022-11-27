import React from "react";
import Display from "./components/Display";
import General from "./components/General";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    }
  }

  handleGeneral = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return <div className='App'>
      <div className='App--header'>
        <h1>CV Generator</h1>
        <Display info={this.state} />
        <General
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          handleGeneral={this.handleGeneral}
        />
      </div>
    </div>;
  }
}

export default App;
