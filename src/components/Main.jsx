import React from 'react';
import createReactClass from 'create-react-class';
import './style/Main.less';

export default createReactClass({
  render(){
    return (
        <div className="main-block" id="content-main">
            <div className="container">
                <div className="center-div">
                    <h1 className="tagline">класний слоган</h1>
                    <h1 className="tagline">прогресивні юристи</h1>
                <button type="button" data-toggle="modal" data-target="#modal">написати нам</button>
                </div>
            </div>
            <div className="modal fade" id="modal" tabIndex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div className="modal-body">
                            <div className="form-group row">
                                <label htmlFor="example-text-input" className="col-3 col-form-label"><span className="red-star"><sup>*</sup></span> П.І.Б</label>
                                <div className="col-9">
                                    <input className="form-control" type="text"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="example-text-input" className="col-3 col-form-label"><span className="red-star"><sup>*</sup></span> Електронна пошта</label>
                            <div className="col-9">
                                    <input className="form-control" type="text"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="example-text-input" className="col-3 col-form-label"><span className="red-star"><sup>*</sup></span> Номер телефону</label>
                            <div className="col-9">
                                    <input className="form-control" type="text"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="example-text-input" className="col-3 col-form-label"><span className="red-star"><sup>*</sup></span> Повідомлення</label>
                            <div className="col-9">
                                    <textarea className="form-control" type="text"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-success">Відправити</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
});
