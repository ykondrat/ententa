import React from 'react';
import createReactClass from 'create-react-class';
import './style/Footer.less';

export default createReactClass({
    render(){
        return (
            <div className="footer-block">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <p>&copy; 2017 ENTENTA - All Rights Reserved (dev: Yevhen Kondratyev)</p>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <p className="logo-link">
                                <i className="fa fa-2x fa-facebook-square" aria-hidden="true"></i>
                                <i className="fa fa-2x fa-linkedin-square" aria-hidden="true"></i>
                            </p>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
});
