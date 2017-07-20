// Import dependencies.
import React, { Component } from 'react';

// Import scene styles.
import MainSceneStyles from './styles.scss';

// Import components.
import PrimaryComponent from './primary-component/index.jsx';

class MainScene extends React.Component{
  // Component constructor.
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return(
      <div>
        <PrimaryComponent/>
      </div>
    );
  }
}

// Export scene.
export default MainScene;
