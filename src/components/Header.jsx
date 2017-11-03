import React from 'react';
import createReactClass from 'create-react-class';
import './style/Header.less';

export default createReactClass({
    render() {
        return (
          <nav className="navbar navbar-expand-md navbar-light fixed-top ">
            <div className="container">
              <button className="navbar-brand btn">ententa</button>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto"></ul>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <span className="nav-span">головна</span>
                  </li>
                  <li className="nav-item">
                    <span className="nav-span">про нас</span>
                  </li>
                  <li className="nav-item">
                    <span className="nav-span">команда</span>
                  </li>
                  <li className="nav-item">
                    <span className="nav-span">послуги</span>
                  </li>
                  <li className="nav-item">
                    <span className="nav-span">контакти</span>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        );
    },
});
