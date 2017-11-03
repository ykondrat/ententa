import React from 'react';
import createReactClass from 'create-react-class';
import './style/EntentaApp.less';
import Header from './Header.jsx';
import Main from './Main.jsx';

export default createReactClass({
    render() {
        return (
            <div className="wrapper">
                <Header />
                <Main />
            </div>
        );
    },
});
