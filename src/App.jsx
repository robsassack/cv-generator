import React from "react";
import Display from "./components/Display";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "John",
      lastName: "Smith",
      location: "Washington, DC",
      email: "john@smith.com",
      phone: "123-456-7890",
      education: [
        {
          school: "United States University",
          degree: "Bachelor of Science",
          major: "Computer Science",
          location: "Washington, DC",
          start: "Jan 2020",
          end: "Jan 2024",
        },
      ],
      experience: [
        {
          company: "Google",
          title: "Web Developer",
          location: "Washington, DC",
          start: "Feb 2024",
          end: "Present",
          description: `- Developed websites\n- Developed apps`,
        },
      ],
    };
  }

  handleGeneral = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleEducation = (event, index) => {
    const { name, value } = event.target;
    const education = this.state.education;
    education[index][name] = value;
    this.setState({ education });
  };

  handleExperience = (event, index) => {
    const { name, value } = event.target;
    console.log(value);
    const experience = this.state.experience;
    experience[index][name] = value;
    this.setState({ experience });
  };

  addEducation = () => {
    this.setState((prevState) => {
      return {
        education: [
          ...prevState.education,
          {
            school: "",
            degree: "",
            major: "",
            location: "",
            start: "",
            end: "",
          },
        ],
      };
    });
  };

  removeEducation = (index) => {
    const education = this.state.education;
    education.splice(index, 1);
    this.setState({ education });
  };

  addExperience = () => {
    this.setState((prevState) => {
      return {
        experience: [
          ...prevState.experience,
          {
            company: "",
            title: "",
            location: "",
            start: "",
            end: "",
            description: "",
          },
        ],
      };
    });
  };

  removeExperience = (index) => {
    const experience = this.state.experience;
    experience.splice(index, 1);
    this.setState({ experience });
  };

  clearForm = () => {
    this.setState({
      firstName: "",
      lastName: "",
      location: "",
      email: "",
      phone: "",
      education: [
      ],
      experience: [
      ],
    });
  }

  render() {
    return (
      <div className='App'>
        <div className='App--header'>
          <h1>CV Generator</h1>
        </div>
        <div className='App--content'>
          <div className='App--display'>
            <Display info={this.state} />
          </div>
          <div className='App--form'>
            <General state={this.state} handleGeneral={this.handleGeneral} />
            <br />
            <Education
              state={this.state}
              handleEducation={this.handleEducation}
              addEducation={this.addEducation}
              removeEducation={this.removeEducation}
            />
            <br />
            <Experience
              state={this.state}
              handleExperience={this.handleExperience}
              addExperience={this.addExperience}
              removeExperience={this.removeExperience}
            />
            <br />
            <button onClick={this.clearForm}>Reset</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
