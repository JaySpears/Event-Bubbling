// Import dependencies.
import React, { Component } from 'react';

// Import scene styles.
import TertiaryComponentStyles from './styles.scss';

class TertiaryComponent extends React.Component{
  // Component constructor.
  constructor(props){
    console.log(props);
    super(props);
    this.state = {
      primaryBackground: 'none',
      secondaryBackground: 'none'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state);
  }

  render(){
    return(
      <div className="tertiary">
        <p>Tertiary Component</p>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="primaryBackground">
              Primary background color:
              <select value={this.state.value} onChange={this.handleChange} name="primaryBackground" id="">
                <option value="white">White</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </select>
            </label>
          </div>
          <div>
            <label htmlFor="secondaryBackground">
              Secondary background color:
              <select value={this.state.value} onChange={this.handleChange} name="secondaryBackground" id="">
                <option value="white">White</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </select>
            </label>
          </div>
          <button type="submit">Bubble Event</button>
        </form>
      </div>
    );
  }
}

// Export scene.
export default TertiaryComponent;
