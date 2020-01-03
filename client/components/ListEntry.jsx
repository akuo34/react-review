import React from 'react';

export default class ListEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <li>{this.props.todo}</li>
    )
  }
}