import React from 'react';
import createReactClass from 'create-react-class';
import './style/Services.less';

export default createReactClass({
    render(){
        return (
            <div className="services-block" id="content-services">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 services-cont">
                            <div className="header-services">
                                <h3>Service 1</h3>
                            </div>
                            <div className="info-services">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia veniam commodi labore sunt pariatur consequuntur, laudantium illo totam nobis? Consequatur, incidunt obcaecati ducimus magnam harum nobis officiis, ut. Modi, sapiente.
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 services-cont">
                            <div className="header-services">
                                <h3>Service 2</h3>
                            </div>
                            <div className="info-services">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa ipsum, voluptatibus vitae. Commodi quas dolorem modi repellendus totam, suscipit aut aspernatur sapiente vitae facilis perferendis recusandae explicabo et ex assumenda!
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 services-cont">
                            <div className="header-services">
                                <h3>Service 3</h3>
                            </div>
                            <div className="info-services">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur a, earum itaque unde sint sequi. Expedita praesentium adipisci natus, voluptate obcaecati illo! Eaque mollitia, ratione assumenda error sapiente delectus, illum!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
