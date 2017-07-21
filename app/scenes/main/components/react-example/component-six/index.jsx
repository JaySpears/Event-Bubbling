// Import dependencies.
import React, { Component } from 'react';

// Import scene styles.
import ComponentSixStyles from './styles.scss';

class ComponentSix extends React.Component{
  // Component constructor.
  constructor(props){
    super(props);
    this.state = {
      backgroundColor: null
    };
  }

  componentWillMount() {
    this.setState({
      backgroundColor: this.props.styles.componentSixBackground
    });
  }

  componentWillReceiveProps(nextProps){
    if(this.props != nextProps) {
      this.setState({
        backgroundColor: nextProps.styles.componentSixBackground
      });
    }
  }

  render(){
    return(
      <div className="component-six" style={{"backgroundColor" : this.state.backgroundColor}}>
        <p>Component 6</p>
      </div>
    );
  }
}

// Export scene.
export default ComponentSix;
