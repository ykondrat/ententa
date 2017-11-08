import React from 'react';
import createReactClass from 'create-react-class';
import './style/EntentaApp.less';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Objects from './Objects.jsx';
import Team from './Team.jsx';

export default createReactClass({
    componentDidMount(){
        $(document).ready(function(){
            $(".navbar-nav").on("click","a", function (event) {
                event.preventDefault();
                var id  = $(this).attr('href');

                //if (id === "#content-team") {
                    //top = $(id).offset().top - 100;
                //} else {
                var top = $(id).offset().top - 150;
                //}
                $('body,html').animate({scrollTop: top}, 1500);
            });
        });
    },
    render() {
        return (
            <div className="wrapper">
                <Header />
                <Main />
                <Objects />
                <Team />
            </div>
        );
    },
});
