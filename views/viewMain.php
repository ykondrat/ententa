<?php
    require_once (ROOT.'/views/viewHeader.php');
?>
<div class="wrapper">
    <nav class="navbar navbar-expand-md navbar-light fixed-top" >
        <div class="container">
            <img src="public/images/logoententa.png" alt="ententa log" class="img-fluid ententa-logo"/>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav mr-auto"></ul>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-span" href="#content-main">головна</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-span" href="#content-about">про нас</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-span" href="#content-team">команда</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-span" href="#content-services">послуги</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-span" href="#content-contact">контакти</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="main-block" id="content-main">
        <div class="container">
            <div class="center-div">
                <h1 class="tagline">класний слоган</h1>
                <h1 class="tagline">прогресивні юристи</h1>
            <button type="button" data-toggle="modal" data-target="#modal">написати нам</button>
            </div>
        </div>
        <div class="modal fade" id="modal" tab-index="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <div class="modal-header">
                        <div class="error-div"></div>
                    </div>
                    <div class="modal-body">
                        <div class="form-group row">
                            <label html-for="user-name" class="col-3 col-form-label"><span class="red-star"><sup>*</sup></span> П.І.Б</label>
                            <div class="col-9">
                                <input id="user-name" class="form-control" type="text"/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label html-for="user-email" class="col-3 col-form-label"><span class="red-star"><sup>*</sup></span> Електронна пошта</label>
                            <div class="col-9">
                                <input id="user-email" class="form-control" type="text"/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label html-for="user-phone" class="col-3 col-form-label"><span class="red-star"><sup>*</sup></span> Номер телефону</label>
                            <div class="col-9">
                                <input id="user-phone"  class="form-control" type="text"/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label html-for="user-msg" class="col-3 col-form-label"><span class="red-star"><sup>*</sup></span> Повідомлення</label>
                            <div class="col-9">
                                <textarea id="user-msg" class="form-control" type="text"></textarea>
                                <p class="text-counter"><span id="counter">0</span>/1000</p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <div class="g-recaptcha" data-sitekey="6LfD7D0UAAAAALuz5WBGnKm8VgXoDNimEKprdks7"></div>
                        <button type="button" class="btn btn-ententa" onclick="handleClick()">Відправити</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="objects-block" id="content-about">
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 obj-cont">
                    <img src="public/images/bla.png" class="img-fluid" alt=""/>
                    <div class="info">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis voluptate odit et repudiandae modi libero tempore unde asperiores? Asperiores quod quia molestias, distinctio unde corrupti? Quas, rem autem suscipit. Voluptatum?
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 obj-cont">
                    <img src="public/images/bla.png" class="img-fluid" alt=""/>
                    <div class="info">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus sapiente minima distinctio itaque vitae porro voluptatibus delectus voluptas excepturi dignissimos. Quasi similique aut cum voluptate repellat minima repellendus labore saepe!
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 obj-cont">
                    <img src="public/images/bla.png" class="img-fluid" alt=""/>
                    <div class="info">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga placeat error, facere voluptatibus sint exercitationem minus facilis numquam magnam! Dolorem, delectus, vero. Veritatis modi eius nihil aperiam doloremque, optio necessitatibus!
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="team-block" id="content-team">
        <div class="container">
            <div class="row">
                <div class="col-8 col-sm-8 col-md-4 col-lg-4 col-xl-4 team-cont">
                    <img src="public/images/Abraham.jpg" class="img-fluid" alt=""/>
                    <div class="info">
                        <h3 style="margin-top: 15px">Name</h3>
                        <h3>Surname</h3>
                        <p style="margin-top: 15px">+3808080808</p>
                        <p>email@gmail.com</p>
                    </div>
                </div>
                <div class="col-8 col-sm-8 col-md-4 col-lg-4 col-xl-4 team-cont">
                    <img src="public/images/Abraham.jpg" class="img-fluid" alt=""/>
                    <div class="info">
                        <h3 style="margin-top: 15px">Name</h3>
                        <h3>Surname</h3>
                        <p style="margin-top: 15px">+3808080808</p>
                        <p>email@gmail.com</p>
                    </div>
                </div>
                <div class="col-8 col-sm-8 col-md-4 col-lg-4 col-xl-4 team-cont">
                    <img src="public/images/Abraham.jpg" class="img-fluid" alt=""/>
                    <div class="info">
                        <h3 style="margin-top: 15px">Name</h3>
                        <h3>Surname</h3>
                        <p style="margin-top: 15px">+3808080808</p>
                        <p>email@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="services-block" id="content-services">
        <div class="container">
            <div class="row regular slider" data-slick='{"slidesToShow": 3, "slidesToScroll": 1}'>
                <div class="services-cont">
                    <div class="header-services">
                        <h3>Service 1</h3>
                    </div>
                    <div class="info-services">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia veniam commodi labore sunt pariatur consequuntur, laudantium illo totam nobis? Consequatur, incidunt obcaecati ducimus magnam harum nobis officiis, ut. Modi, sapiente.
                    </div>
                </div>
                <div class="services-cont">
                    <div class="header-services">
                        <h3>Service 2</h3>
                    </div>
                    <div class="info-services">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa ipsum, voluptatibus vitae. Commodi quas dolorem modi repellendus totam, suscipit aut aspernatur sapiente vitae facilis perferendis recusandae explicabo et ex assumenda!
                    </div>
                </div>
                <div class="services-cont">
                    <div class="header-services">
                        <h3>Service 3</h3>
                    </div>
                    <div class="info-services">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur a, earum itaque unde sint sequi. Expedita praesentium adipisci natus, voluptate obcaecati illo! Eaque mollitia, ratione assumenda error sapiente delectus, illum!
                    </div>
                </div>
                <div class="services-cont">
                    <div class="header-services">
                        <h3>Service 4</h3>
                    </div>
                    <div class="info-services">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur a, earum itaque unde sint sequi. Expedita praesentium adipisci natus, voluptate obcaecati illo! Eaque mollitia, ratione assumenda error sapiente delectus, illum!
                    </div>
                </div>
                <div class="services-cont">
                    <div class="header-services">
                        <h3>Service 5</h3>
                    </div>
                    <div class="info-services">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur a, earum itaque unde sint sequi. Expedita praesentium adipisci natus, voluptate obcaecati illo! Eaque mollitia, ratione assumenda error sapiente delectus, illum!
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="contact-block" id="content-contact">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>контакти</h1>
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <h4>Дорогожицька вулиця, буд. 1, Києв, Україна</h4>
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <h4>+38 (093) 814 13 26</h4>
                </div>
            </div>
        </div>
        <div id="map">

        </div>

    </div>
    <div class="footer-block">
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <p>&copy; 2017 ENTENTA - All Rights Reserved (dev: Yevhen Kondratyev)</p>
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <p class="logo-link">
                        <a href="https://facebook.com" target="_blank"><i class="fa fa-2x fa-facebook-square" aria-hidden="true"></i></a>
                        <a href="https://linkedin.com" target="_blank"><i class="fa fa-2x fa-linkedin-square" aria-hidden="true"></i></a>
                    </p>
                </div>
            </div>
        </div>


    </div>
</div>
<?php
    require_once (ROOT.'/views/viewFooter.php');
?>
