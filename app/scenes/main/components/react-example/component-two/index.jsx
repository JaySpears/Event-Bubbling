// Import dependencies.
import React, { Component } from 'react';

// Import scene styles.
import ComponentTwoStyles from './styles.scss';

// Import components.
import ComponentOne from '../component-one/index.jsx';

class ComponentTwo extends React.Component{
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
      backgroundColor: styles.componentTwoBackground
    });
    this.props.onChange(styles);
  }

  render(){
    return(
      <div className="component-two" style={{"backgroundColor" : this.state.backgroundColor}}>
        <p>Component 2</p>
        <ComponentOne onSubmit={this.handleChange}/>
      </div>
    );
  }
}

// Export scene.
export default ComponentTwo;
