let counter = 0;
$(document).ready(function(){
    $(".navbar-nav").on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href');
        let top = 0;

        if (id === "#content-team") {
            top = $(id).offset().top - 100;
        } else {
            top = $(id).offset().top - 150;
        }
        $('body,html').animate({ scrollTop: top }, 1500);
    });
    $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });
    setBlock();
});
$(window).resize(function() {
    $('.objects-block .row .info').css('height', 'auto');
    $('.info-services').css('height', 'auto');
    setBlock();
});
function initMap() {
    let uluru = { lat: 50.469875, lng: 30.462123 };
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru
    });
    let marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}
function setBlock() {
    let height = $('.objects-block .row .info')[0].clientHeight;
    let height2 = $('.info-services')[0].clientHeight;
    $('.objects-block .row .info').each(function(index){
        if ($(this)[0].clientHeight > height) {
            height = $(this)[0].clientHeight;
        }
    });
    $('.info-services').each(function(index){
        if ($(this)[0].clientHeight > height2) {
            height2 = $(this)[0].clientHeight;
        }
    });
    $('.objects-block .row .info').each(function(index){
        $(this).css('height', height + 'px')
    });
    $('.info-services').each(function(index){
        $(this).css('height', height2 + 'px')
    });
}
$('#user-phone').mask('+38(099)-999-9999').val('+38(0');
$('#user-msg').on('keyup', function() {
    counter = this.value.length;
    $('#counter').text(counter);
});
function handleClick() {
    $('.error').remove();
    $('.success').remove();
    let name = $('#user-name').val().trim().split(' ');
    let email =  $('#user-email').val().trim();
    let phone = $('#user-phone').val().trim();
    let msg = $('#user-msg').val().trim();
    let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    let sender = true;

    if (name.length != 3) {
        sender = false;
        $('<p class="error">Please provide your full name</p>').appendTo('.error-div');
        return (false);
    } else {
        for (let i = 0; i < name.length; i++) {
            if (name[i].length < 2) {
                sender = false;
                $('<p class="error">Please provide your full name</p>').appendTo('.error-div');
                return (false);
            }
        }
    }
    if (!filter.test(email)) {
        sender = false;
        $('<p class="error">Please provide valid email</p>').appendTo('.error-div');
        return (false);
    }
    if (phone.length != 17) {
        sender = false;
        $('<p class="error">Please provide valid phone number</p>').appendTo('.error-div');
        return (false);
    }
    if (msg.length < 2 || msg.length > 1000) {
        sender = false;
        $('<p class="error">Message must be lether then 1000 characters</p>').appendTo('.error-div');
        return (false);
    }
    if (sender) {
        $.ajax({
            url: 'http://localhost:8080/ententa/add',
            type: 'POST',
            data: {
                name: $('#user-name').val().trim(),
                email: $('#user-email').val().trim(),
                phone: $('#user-phone').val().trim(),
                msg: $('#user-msg').val().trim()
            },
            success: function(response) {
                $('#user-name').val('');
                $('#user-email').val('');
                $('#user-phone').val('+38(0');
                $('#user-msg').val('');
                counter = 0;
                $('#counter').text(counter);
                $('<p class="success">Thanks for your connection we will connect in the nearest time</p>').appendTo('.error-div');
                setTimeout(function(){
                    $('.success').remove();
                }, 5000);
            }
        });
    }
}
