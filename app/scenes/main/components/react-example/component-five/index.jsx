// Import dependencies.
import React, { Component } from 'react';

// Import scene styles.
import ComponentFiveStyles from './styles.scss';

// Import components.
import ComponentSix from '../component-six/index.jsx';

class ComponentFive extends React.Component{
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
      backgroundColor: this.props.styles.componentFiveBackground,
      styles: this.props.styles
    });
  }

  componentWillReceiveProps(nextProps){
    if(this.props != nextProps) {
      this.setState({
        backgroundColor: nextProps.styles.componentFiveBackground,
        styles: nextProps.styles
      });
    }
  }

  render(){
    return(
      <div className="component-five" style={{"backgroundColor" : this.state.backgroundColor}}>
        <p>Component 5</p>
        <ComponentSix styles={this.state.styles}/>
      </div>
    );
  }
}

// Export scene.
export default ComponentFive;
