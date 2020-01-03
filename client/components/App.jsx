import React from 'react';
import List from './List.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: ''
    }

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div>
        {this.state.firstName === this.props.firstName && this.state.lastName === this.props.lastName ? (
        <List/>
        ) : (
          <form>
            <label>
              First Name:
              <input name='firstName' onChange={this.onChangeHandler}/>
            </label>
            <label>
              Last Name:
              <input name='lastName' onChange={this.onChangeHandler}/>
            </label>
          </form>
        )}
      </div>
    );
  }
}