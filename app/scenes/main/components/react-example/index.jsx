// Import dependencies.
import React, { Component } from 'react';

// Import scene styles.
import MainSceneStyles from './styles.scss';

// Import components.
import ComponentThree from './component-three/index.jsx';
import ComponentFour from './component-four/index.jsx';

class MainScene extends React.Component{
  // Component constructor.
  constructor(props){
    super(props);
    this.state = {
      styles: {}
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(styles){
    this.setState({
      styles: styles
    });
    event.preventDefault();
  }

  render(){
    return(
      <div className="react-example">
        <h1>Event Bubbling</h1>
        <h3>React VS Redux</h3>
        <p>Passing data from one component to another in an React application can be very tedious to create and hard to maintain based on the size of the application. Triggering an event to pass data from the child component all the way up to parent, passing data down from the parent to the child components, or sequentially depending on the requirements of your application. To fully understand the differences in the native react behavior for event bubbling compared to redux, I decided to create simple examples that update background colors of the components when an event is triggered from the lowest component possible.</p>
        <ComponentThree onChange={this.handleChange}/>
        <ComponentFour styles={this.state.styles}/>
        <img src="app/assets/images/react-example.png" alt=""/>
      </div>
    );
  }
}

// Export scene.
export default MainScene;
