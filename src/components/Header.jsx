import React from 'react';
import createReactClass from 'create-react-class';
import './style/Header.less';

export default createReactClass({
    render() {
        return (
          <nav className="navbar navbar-expand-md navbar-light fixed-top" >
            <div className="container">
              <img src="./images/logoententa.png" alt="ententa log" className="img-fluid ententa-logo"/>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto"></ul>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-span" href="#content-main">головна</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-span" href="#content-about">про нас</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-span" href="#content-team">команда</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-span" href="#content-video">послуги</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-span" href="#content-video">контакти</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        );
    },
});
