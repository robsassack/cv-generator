import React from "react";

class General extends React.Component {
  render() {
    return (
      <div className='general'>
        <form className='general--form'>
          <input
            type='text'
            placeholder='First Name'
            name='firstName'
            value={this.props.state.firstName}
            onChange={this.props.handleGeneral}
          />
          <input
            type='text'
            placeholder='Last Name'
            name='lastName'
            value={this.props.state.lastName}
            onChange={this.props.handleGeneral}
          />
          <input
            type='text'
            placeholder='Location'
            name='location'
            value={this.props.state.location}
            onChange={this.props.handleGeneral}
          />
          <input
            type='email'
            placeholder='Email'
            name='email'
            value={this.props.state.email}
            onChange={this.props.handleGeneral}
          />
          <input
            type='tel'
            placeholder='Phone #'
            name='phone'
            value={this.props.state.phone}
            onChange={this.props.handleGeneral}
          />
        </form>
      </div>
    );
  }
}

export default General;
