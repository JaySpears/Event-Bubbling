// Import dependencies.
import React, { Component } from 'react';

// Import scene styles.
import ComponentThreeStyles from './styles.scss';

// Import components.
import ComponentTwo from '../component-two/index.jsx';

class ComponentThree extends React.Component{
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
      backgroundColor: styles.componentThreeBackground
    });
    this.props.onChange(styles);
  }

  render(){
    return(
      <div className="component-three" style={{"backgroundColor" : this.state.backgroundColor}}>
        <p>Component 3</p>
        <ComponentTwo onChange={this.handleChange}/>
      </div>
    );
  }
}

// Export scene.
export default ComponentThree;
