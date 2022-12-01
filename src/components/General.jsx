import React from "react";

function General(props) {
  return (
    <div className='general'>
      <form className='general--form'>
        <input
          type='text'
          placeholder='First Name'
          name='firstName'
          value={props.state.firstName}
          onChange={props.handleGeneral}
        />
        <input
          type='text'
          placeholder='Last Name'
          name='lastName'
          value={props.state.lastName}
          onChange={props.handleGeneral}
        />
        <input
          type='text'
          placeholder='Location'
          name='location'
          value={props.state.location}
          onChange={props.handleGeneral}
        />
        <input
          type='email'
          placeholder='Email'
          name='email'
          value={props.state.email}
          onChange={props.handleGeneral}
        />
        <input
          type='tel'
          placeholder='Phone #'
          name='phone'
          value={props.state.phone}
          onChange={props.handleGeneral}
        />
      </form>
    </div>
  );
}

export default General;
