import React from 'react';
import createReactClass from 'create-react-class';
import './style/Team.less';

export default createReactClass({
    render(){
        return (
            <div className="team-block" id="content-team">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 team-cont">
                            <img src="images/Abraham.jpg" className="img-fluid" alt=""/>
                            <div className="info">
                                <h3 style={{ marginTop: '15px' }}>Name</h3>
                                <h3>Surname</h3>
                                <p style={{ marginTop: '15px' }}>+3808080808</p>
                                <p>email@gmail.com</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 team-cont">
                            <img src="images/Abraham.jpg" className="img-fluid" alt=""/>
                            <div className="info">
                                <h3 style={{ marginTop: '15px' }}>Name</h3>
                                <h3>Surname</h3>
                                <p style={{ marginTop: '15px' }}>+3808080808</p>
                                <p>email@gmail.com</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 team-cont">
                            <img src="images/Abraham.jpg" className="img-fluid" alt=""/>
                            <div className="info">
                                <h3 style={{ marginTop: '15px' }}>Name</h3>
                                <h3>Surname</h3>
                                <p style={{ marginTop: '15px' }}>+3808080808</p>
                                <p>email@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});
