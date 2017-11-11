import React from 'react';
import createReactClass from 'create-react-class';
import './style/Contact.less';

export default createReactClass({
    componentDidMount(){
        
    },
    render(){
        return (
            <div className="contact-block" id="content-contact">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>контакти</h1>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <h4>Дорогожицька вулиця, буд. 1, Києв, Україна</h4>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <h4>+38 (093) 814 13 26</h4>
                        </div>
                    </div>
                </div>
                <div id="map">

                </div>

            </div>
        );
    }
});
//
