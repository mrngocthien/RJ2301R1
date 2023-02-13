import React from 'react';

class Car extends React.Component {
    render() {
      return <h2>Hi, I am a {this.props.color} Car. I had lived in your Garage for 5 years !</h2>
    }
}

export  default Car;