// Import dependencies.
import React, { Component } from 'react';

// Import scene styles.
import ComponentOneStyles from './styles.scss';

class ComponentOne extends React.Component{
  // Component constructor.
  constructor(props){
    console.log(props);
    super(props);
    this.state = {
      componentTwoBackground: 'none',
      componentThreeBackground: 'none',
      componentFourBackground: 'none',
      componentFiveBackground: 'none',
      componentSixBackground: 'none'
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
      <div className="component-one">
        <p>Component 1</p>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="componentTwoBackground">
              Component 2 background color:
              <select value={this.state.value} onChange={this.handleChange} name="componentTwoBackground" id="">
                <option value="white">White</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </select>
            </label>
          </div>
          <div>
            <label htmlFor="componentThreeBackground">
              Component 3 background color:
              <select value={this.state.value} onChange={this.handleChange} name="componentThreeBackground" id="">
                <option value="white">White</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </select>
            </label>
          </div>
          <div>
            <label htmlFor="componentFourBackground">
              Component 4 background color:
              <select value={this.state.value} onChange={this.handleChange} name="componentFourBackground" id="">
                <option value="white">White</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </select>
            </label>
          </div>
          <div>
            <label htmlFor="componentFiveBackground">
              Component 5 background color:
              <select value={this.state.value} onChange={this.handleChange} name="componentFiveBackground" id="">
                <option value="white">White</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </select>
            </label>
          </div>
          <div>
            <label htmlFor="componentSixBackground">
              Component 6 background color:
              <select value={this.state.value} onChange={this.handleChange} name="componentSixBackground" id="">
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
export default ComponentOne;
