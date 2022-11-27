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
            value={this.props.firstName}
            onChange={this.props.handleGeneral}
          />
          <input
            type='text'
            placeholder='Last Name'
            name='lastName'
            value={this.props.lastName}
            onChange={this.props.handleGeneral}
          />
          <input
            type='email'
            placeholder='Email'
            name='email'
            value={this.props.email}
            onChange={this.props.handleGeneral}
          />
          <input
            type='tel'
            placeholder='Phone #'
            name='phone'
            value={this.props.phone}
            onChange={this.props.handleGeneral}
          />
        </form>
      </div>
    );
  }
}

export default General;
