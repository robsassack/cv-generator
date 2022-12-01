import React from "react";

function Experience(props) {
  const experienceForm = () => {
    return props.state.experience.map((experience, index) => {
      return (
        <div className='experience--form' key={index}>
          <input
            type='text'
            placeholder='Company'
            name='company'
            value={experience.company}
            onChange={(event) => props.handleExperience(event, index)}
          />
          <input
            type='text'
            placeholder='Title'
            name='title'
            value={experience.title}
            onChange={(event) => props.handleExperience(event, index)}
          />
          <input
            type='text'
            placeholder='Location'
            name='location'
            value={experience.location}
            onChange={(event) => props.handleExperience(event, index)}
          />
          <input
            type='text'
            placeholder='Start Date'
            name='start'
            value={experience.start}
            onChange={(event) => props.handleExperience(event, index)}
          />
          <input
            type='text'
            placeholder='End Date'
            name='end'
            value={experience.end}
            onChange={(event) => props.handleExperience(event, index)}
          />
          <textarea
            placeholder='Description'
            name='description'
            value={experience.description}
            onChange={(event) => props.handleExperience(event, index)}
          />
          <button onClick={(index) => props.removeExperience(index)}>
            Remove experience
          </button>
        </div>
      );
    });
  };

  return (
    <div className='experience'>
      {experienceForm()}
      <button onClick={props.addExperience}>Add experience</button>
    </div>
  );
}

export default Experience;
