import React from 'react';
import createReactClass from 'create-react-class';
import './style/Objects.less';

export default createReactClass({
    componentDidMount(){
        let height = $('.objects-block .row .info')[0].clientHeight;
        $('.objects-block .row .info').each(function(index){
            if ($(this)[0].clientHeight > height) {
                height = $(this)[0].clientHeight;
            }
        });
        $('.objects-block .row .info').each(function(index){
            $(this).css('height', height + 'px')
        });
    },
    render(){
        return (
            <div className="objects-block" id="content-about">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 obj-cont">
                            <img src="images/bla.png" className="img-fluid" alt=""/>
                            <div className="info">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis voluptate odit et repudiandae modi libero tempore unde asperiores? Asperiores quod quia molestias, distinctio unde corrupti? Quas, rem autem suscipit. Voluptatum?
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 obj-cont">
                            <img src="images/bla.png" className="img-fluid" alt=""/>
                            <div className="info">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus sapiente minima distinctio itaque vitae porro voluptatibus delectus voluptas excepturi dignissimos. Quasi similique aut cum voluptate repellat minima repellendus labore saepe!
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 obj-cont">
                            <img src="images/bla.png" className="img-fluid" alt=""/>
                            <div className="info">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga placeat error, facere voluptatibus sint exercitationem minus facilis numquam magnam! Dolorem, delectus, vero. Veritatis modi eius nihil aperiam doloremque, optio necessitatibus!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});
