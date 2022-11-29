import React from "react";
import Display from "./components/Display";
import General from "./components/General";
import Education from "./components/Education";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: 'John',
      lastName: 'Smith',
      location: 'Washington, DC',
      email: 'john@smith.com',
      phone: '123-456-7890',
      education: [
        {
          school: 'United States University',
          degree: 'Bachelor of Science',
          major: 'Computer Science',
          location: 'Washington, DC',
          start: 'Jan 2020',
          end: 'Jan 2024',
        },
      ]
    }
  }

  handleGeneral = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleEducation = (event, index) => {
    const { name, value } = event.target;
    const education = this.state.education;
    education[index][name] = value;
    this.setState({ education });
  }

  addEducation = () => {
    this.setState((prevState) => {
      return {
        education: [
          ...prevState.education,
          {
            school: '',
            degree: '',
            major: '',
            location: '',
            start: '',
            end: '',
          }
        ]
      }
    });
  }

  removeEducation = (index) => {
    const education = this.state.education;
    education.splice(index, 1);
    this.setState({ education });
  }

  render() {
    return <div className='App'>
      <div className='App--header'>
        <h1>CV Generator</h1>
        <Display info={this.state} />
        <General
          state={this.state}
          handleGeneral={this.handleGeneral}
        />
        <br />
        <Education
          state={this.state}
          handleEducation={this.handleEducation}
          addEducation={this.addEducation}
          removeEducation={this.removeEducation}
        />
      </div>
    </div>;
  }
}

export default App;
