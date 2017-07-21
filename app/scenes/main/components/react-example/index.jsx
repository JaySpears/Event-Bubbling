// Import dependencies.
import React, { Component } from 'react';

// Import scene styles.
import MainSceneStyles from './styles.scss';

// Import components.
import ComponentThree from './component-three/index.jsx';

class MainScene extends React.Component{
  // Component constructor.
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return(
      <div className="react-example">
        <ComponentThree/>
        <img src="app/assets/images/react-example.png" alt=""/>
      </div>
    );
  }
}

// Export scene.
export default MainScene;
