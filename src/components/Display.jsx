import React from "react";
import { nanoid } from "nanoid";

class Display extends React.Component {
  displayEducation = () => {
    return this.props.info.education.map((education) => {
      return (
        <div className='display--education' key={nanoid()}>
          <h3>{education.school}</h3>
          <p>
            {education.degree} in {education.major}
          </p>
          <p>{education.location}</p>
          <p>
            {education.start} - {education.end}
          </p>
        </div>
      );
    });
  };

  displayExperience = () => {
    return this.props.info.experience.map((experience) => {
      return (
        <div className='display--experience' key={nanoid()}>
          <h3>{experience.company}</h3>
          <p>{experience.title}</p>
          <p>{experience.location}</p>
          <p>
            {experience.start} - {experience.end}
          </p>
          <p className='display--exp-desc'>{experience.description}</p>
        </div>
      );
    });
  };

  render() {
    return (
      <div className='display'>
        <div className='display--info'>
          <h2>
            {this.props.info.firstName} {this.props.info.lastName}
          </h2>
          <p>{this.props.info.location}</p>
          <p>{this.props.info.email}</p>
          <p>{this.props.info.phone}</p>
        </div>
        {this.displayEducation()}
        {this.displayExperience()}
      </div>
    );
  }
}

export default Display;
