import React from "react";

class Display extends React.Component {
  render() {
    return (
      <div className='display'>
        <div className='display--info'>
          <h3>
            {this.props.info.firstName} {this.props.info.lastName}
          </h3>
          <p>{this.props.info.email}</p>
          <p>{this.props.info.phone}</p>
        </div>
      </div>
    );
  }
}

export default Display;
