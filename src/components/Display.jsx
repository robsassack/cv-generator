import React from "react";
import { nanoid } from "nanoid";

class Display extends React.Component {
  displayEducation = () => {
    return this.props.info.education.map((education) => {
      return (
        <div className='display--education' key={nanoid()}>
          <div className='display--apart'>
            <h3>{education.school}</h3>
            <p>{education.location}</p>
          </div>
          <p>
            {education.degree} in {education.major}
          </p>
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
          <div className='display--apart'>
            <h3>{experience.company}</h3>
            <p>{experience.location}</p>
          </div>
          <div className='display--apart'>
            <p>{experience.title}</p>
            <p>
              {experience.start} - {experience.end}
            </p>
          </div>
          <p className='display--exp-desc'>{experience.description}</p>
        </div>
      );
    });
  };

  render() {
    return (
      <div className='display'>
        <div className='display--info'>
          <div className='display--general'>
            <h2>
              {this.props.info.firstName} {this.props.info.lastName}
            </h2>
            <p>{this.props.info.location}</p>
            <p>
              {this.props.info.phone} | {this.props.info.email}
            </p>
          </div>
        </div>
        <p className='display--title'>EDUCATION</p>
        {this.displayEducation()}
        <p className='display--title'>EXPERIENCE</p>
        {this.displayExperience()}
      </div>
    );
  }
}

export default Display;
