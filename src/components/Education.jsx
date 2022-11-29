import React from "react";

class Education extends React.Component {
  educationForm = () => {
    return this.props.state.education.map((education, index) => {
      return (
        <div className="education--form" key={index}>
          <input
            type="text"
            placeholder="School"
            name="school"
            value={education.school}
            onChange={(event) => this.props.handleEducation(event, index)}
          />
          <input
            type="text"
            placeholder="Degree"
            name="degree"
            value={education.degree}
            onChange={(event) => this.props.handleEducation(event, index)}
          />
          <input
            type="text"
            placeholder="Major"
            name="major"
            value={education.major}
            onChange={(event) => this.props.handleEducation(event, index)}
          />
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={education.location}
            onChange={(event) => this.props.handleEducation(event, index)}
          />
          <input
            type="text"
            placeholder="Start Date"
            name="start"
            value={education.start}
            onChange={(event) => this.props.handleEducation(event, index)}
          />
          <input
            type="text"
            placeholder="End Date"
            name="end"
            value={education.end}
            onChange={(event) => this.props.handleEducation(event, index)}
          />
          <button onClick={(index) => this.props.removeEducation(index)}>Remove education</button>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="education">
        {this.educationForm()}
        <button onClick={this.props.addEducation}>Add education</button>
      </div>
    );
  }
}

export default Education;
