import React from "react";

class Experience extends React.Component {
  experienceForm = () => {
    return this.props.state.experience.map((experience, index) => {
      return (
        <div className='experience--form' key={index}>
          {/* title: '',
            location: '',
            start: '',
            end: '',
            description: '', */}
          <input
            type='text'
            placeholder='Company'
            name='company'
            value={experience.company}
            onChange={(event) => this.props.handleExperience(event, index)}
          />
          <input
            type='text'
            placeholder='Title'
            name='title'
            value={experience.title}
            onChange={(event) => this.props.handleExperience(event, index)}
          />
          <input
            type='text'
            placeholder='Location'
            name='location'
            value={experience.location}
            onChange={(event) => this.props.handleExperience(event, index)}
          />
          <input
            type='text'
            placeholder='Start Date'
            name='start'
            value={experience.start}
            onChange={(event) => this.props.handleExperience(event, index)}
          />
          <input
            type='text'
            placeholder='End Date'
            name='end'
            value={experience.end}
            onChange={(event) => this.props.handleExperience(event, index)}
          />
          <textarea
            placeholder='Description'
            name='description'
            value={experience.description}
            onChange={(event) => this.props.handleExperience(event, index)}
          />
          <button onClick={(index) => this.props.removeExperience(index)}>
            Remove experience
          </button>
        </div>
      );
    });
  };

  render() {
    return (
      <div className='experience'>
        {this.experienceForm()}
        <button onClick={this.props.addExperience}>Add experience</button>
      </div>
    );
  }
}

export default Experience;
