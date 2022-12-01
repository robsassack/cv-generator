import React from "react";
import { nanoid } from "nanoid";

function Display(props) {
  const displayEducation = () => {
    return props.info.education.map((education) => {
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

  const displayExperience = () => {
    return props.info.experience.map((experience) => {
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

  return (
    <div className='display'>
      <div className='display--info'>
        <div className='display--general'>
          <h2>
            {props.info.firstName} {props.info.lastName}
          </h2>
          <p>{props.info.location}</p>
          <p>
            {props.info.phone} | {props.info.email}
          </p>
        </div>
      </div>
      <p className='display--title'>EDUCATION</p>
      {displayEducation()}
      <p className='display--title'>EXPERIENCE</p>
      {displayExperience()}
    </div>
  );
}

export default Display;
