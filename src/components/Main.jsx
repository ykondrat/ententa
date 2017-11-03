import React from 'react';
import createReactClass from 'create-react-class';
import './style/Main.less';

export default createReactClass({
  render(){
    return (
      <div className="main-block">
        <div className="container">
          <div className="center-div">
            <h1 className="tagline">класний слоган</h1>
            <h1 className="tagline">прогресивні юристи</h1>
          </div>
        </div>
      </div>
    );
  }
});
