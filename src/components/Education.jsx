import React from "react";

function Education(props) {
  const educationForm = () => {
    return props.state.education.map((education, index) => {
      return (
        <div className='education--form' key={index}>
          <input
            type='text'
            placeholder='School'
            name='school'
            value={education.school}
            onChange={(event) => props.handleEducation(event, index)}
          />
          <input
            type='text'
            placeholder='Degree'
            name='degree'
            value={education.degree}
            onChange={(event) => props.handleEducation(event, index)}
          />
          <input
            type='text'
            placeholder='Major'
            name='major'
            value={education.major}
            onChange={(event) => props.handleEducation(event, index)}
          />
          <input
            type='text'
            placeholder='Location'
            name='location'
            value={education.location}
            onChange={(event) => props.handleEducation(event, index)}
          />
          <input
            type='text'
            placeholder='Start Date'
            name='start'
            value={education.start}
            onChange={(event) => props.handleEducation(event, index)}
          />
          <input
            type='text'
            placeholder='End Date'
            name='end'
            value={education.end}
            onChange={(event) => props.handleEducation(event, index)}
          />
          <button onClick={(index) => props.removeEducation(index)}>
            Remove education
          </button>
        </div>
      );
    });
  };

  return (
    <div className='education'>
      {educationForm()}
      <button onClick={props.addEducation}>Add education</button>
    </div>
  );
}

export default Education;
