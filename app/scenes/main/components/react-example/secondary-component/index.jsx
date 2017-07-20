// Import dependencies.
import React, { Component } from 'react';

// Import scene styles.
import SecondaryComponentStyles from './styles.scss';

// Import components.
import TertiaryComponent from '../tertiary-component/index.jsx';

class SecondaryComponent extends React.Component{
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
      backgroundColor: styles.secondaryBackground
    });
    this.props.onChange(styles);
  }

  render(){
    return(
      <div className="secondary" style={{"backgroundColor" : this.state.backgroundColor}}>
        <p>Secondary Component</p>
        <TertiaryComponent onSubmit={this.handleChange}/>
      </div>
    );
  }
}

// Export scene.
export default SecondaryComponent;
