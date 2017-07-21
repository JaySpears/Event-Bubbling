// Import dependencies.
import React, { Component } from 'react';

// Import scene styles.
import ComponentFourStyles from './styles.scss';

// Import components.
import ComponentFive from '../component-five/index.jsx';

class ComponentFour extends React.Component{
  // Component constructor.
  constructor(props){
    super(props);
    this.state = {
      backgroundColor: null,
      styles: {}
    };
  }

  componentWillMount() {
    this.setState({
      backgroundColor: this.props.styles.componentFourBackground,
      styles: this.props.styles
    });
  }

  componentWillReceiveProps(nextProps){
    if(this.props != nextProps) {
      this.setState({
        backgroundColor: nextProps.styles.componentFourBackground,
        styles: nextProps.styles
      });
    }
  }

  render(){
    return(
      <div className="component-four" style={{"backgroundColor" : this.state.backgroundColor}}>
        <p>Component 4</p>
        <ComponentFive styles={this.state.styles}/>
      </div>
    );
  }
}

// Export scene.
export default ComponentFour;
