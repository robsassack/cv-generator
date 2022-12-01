import React, { useState } from "react";
import Display from "./components/Display";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import "./styles/App.css";

function App() {
  const [state, setState] = useState({
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
  });

  function handleGeneral(event) {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  }

  function handleEducation(event, index) {
    const { name, value } = event.target;
    const education = state.education;
    education[index][name] = value;
    setState({ ...state, education });
  }

  function handleExperience(event, index) {
    const { name, value } = event.target;
    const experience = state.experience;
    experience[index][name] = value;
    setState({ ...state, experience });
  }

  function addEducation() {
    setState((prevState) => {
      return {
        ...prevState,
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
  }

  function removeEducation(index) {
    const education = state.education;
    education.splice(index, 1);
    setState({ ...state, education });
  }

  function addExperience() {
    setState((prevState) => {
      return {
        ...prevState,
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
  }

  function removeExperience(index) {
    const experience = state.experience;
    experience.splice(index, 1);
    setState({ ...state, experience });
  }

  function clearForm() {
    setState({
      firstName: "",
      lastName: "",
      location: "",
      email: "",
      phone: "",
      education: [],
      experience: [],
    });
  }

  return (
    <div className='App'>
      <div className='App--header'>
        <h1>CV Generator</h1>
      </div>
      <div className='App--content'>
        <div className='App--form'>
          <General state={state} handleGeneral={handleGeneral} />
          <br />
          <Education
            state={state}
            handleEducation={handleEducation}
            addEducation={addEducation}
            removeEducation={removeEducation}
          />
          <br />
          <Experience
            state={state}
            handleExperience={handleExperience}
            addExperience={addExperience}
            removeExperience={removeExperience}
          />
          <br />
          <button onClick={clearForm}>Reset</button>
        </div>
        <div className='App--display'>
          <Display info={state} />
        </div>
      </div>
    </div>
  );
}

export default App;
