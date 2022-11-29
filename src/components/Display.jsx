import React from "react";
import { nanoid } from "nanoid";

class Display extends React.Component {
  displayEducation = () => {
    return this.props.info.education.map((education) => {
      return (
        <div className='display--education' key={nanoid()}>
          <h3>{education.school}</h3>
          <p>{education.degree} in {education.major}</p>
          <p>{education.location}</p>
          <p>
            {education.start} - {education.end}
          </p>
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
      </div>
    );
  }
}

export default Display;
