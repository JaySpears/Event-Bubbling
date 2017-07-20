// Import dependencies.
import React, { Component } from 'react';

// Import scene styles.
import PrimaryComponentStyles from './styles.scss';

// Import components.
import SecondaryComponent from '../secondary-component/index.jsx';

class PrimaryComponent extends React.Component{
  // Component constructor.
  constructor(props){
    super(props);
    this.state = {
      backgroundColor: null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(styles){
    event.preventDefault();
    this.setState({
      backgroundColor: styles.primaryBackground
    });
  }

  render(){
    return(
      <div className="primary" style={{"backgroundColor" : this.state.backgroundColor}}>
        <p>Primary Component</p>
        <SecondaryComponent onChange={this.handleChange}/>
      </div>
    );
  }
}

// Export scene.
export default PrimaryComponent;
