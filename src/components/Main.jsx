import React from 'react';
import createReactClass from 'create-react-class';
import './style/Main.less';

export default createReactClass({
    getInitialState(){
        return ({
            name: '',
            email: '',
            phone: '',
            msg: ''
        });
    },
    handleName(event){
        this.setState({  name: event.target.value });
    },
    handleEmail(event){
        this.setState({  email: event.target.value });
    },
    handlePhone(event){
        this.setState({  phone: event.target.value });
    },
    handleMSG(event){
        this.setState({  msg: event.target.value });
    },
    handleForm(event){
        $.ajax({
            url: 'http://localhost:8080/ententa/set',
            type: 'post',
            dataType: 'json'
            data: this.state,
            success: function(response) {
                console.log(response);
            }
        })
        //console.log(this.state);
    },
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
                                <label htmlFor="user-name" className="col-3 col-form-label"><span className="red-star"><sup>*</sup></span> П.І.Б</label>
                                <div className="col-9">
                                    <input id="user-name" className="form-control" onChange={this.handleName} value={this.state.name} type="text"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="user-email" className="col-3 col-form-label"><span className="red-star"><sup>*</sup></span> Електронна пошта</label>
                            <div className="col-9">
                                    <input id="user-email" className="form-control" onChange={this.handleEmail} value={this.state.email} type="text"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="user-phone" className="col-3 col-form-label"><span className="red-star"><sup>*</sup></span> Номер телефону</label>
                            <div className="col-9">
                                    <input id="user-phone"  className="form-control" onChange={this.handlePhone} value={this.state.phone} type="text"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="user-msg" className="col-3 col-form-label"><span className="red-star"><sup>*</sup></span> Повідомлення</label>
                            <div className="col-9">
                                    <textarea id="user-msg" className="form-control" type="text" onChange={this.handleMSG} value={this.state.msg}></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-success" onClick={this.handleForm}>Відправити</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
});
