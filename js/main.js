
// Слайдер в адаптивной версии

let counter = 1;

$('.pic-box__item').click(function() {

    if (counter == 8) {
        $('.pic-box').animate({
            'left': -100 * counter + '%'
        },150, function() {
            $('.pic-box').css('left', '0');
        });

        counter = 1;

    }else {
        $('.pic-box').animate({
            'left': -100 * counter + '%'
        },150);

        counter++;
    }
});

$('.button-reserve').click(function(){
    $('.pop-up').css('display', 'flex');
});
$('.cancel').click( function(){
    $('.pop-up').slideUp(500); 
});

// Появление видео

$('#video').css('display','none');

$('.feature-item__play').click(function(){
    $('.feature-item:nth-child(2)').css('display','none');
    $('#video').css('display','block');
});


// проверка формы 

function checkField( a, b ) {
    if (b == '') {
        a.css('border', '1px solid orange');
    } else {
        a.css('border', '1px solid #C7C7C7');
    }
}
let date = $('[name="date"]');
let email = $('[name="user-email"]');
let name = $('[name="user-name"]');
let surname = $('[name="user-surname"]');
let phone = $('[name="user-phone"]');

let card = $('[name="user-card"]');
let cardExp = $('[name="user-card-exp"]');
let cvv = $('[name="CVV"]');

$('form').submit(function() {

    $('.error').remove();

    let dateVal = date.val();
    let emailVal = email.val();
    let nameVal = name.val();
    let surnameVal = surname.val();
    let phoneVal = phone.val();
    let cardVal = card.val();
    let cardExpVal = cardExp.val();
    let cvvVal = cvv.val();

    if ( dateVal == '' || emailVal == '' || nameVal == '' || surnameVal == '' || phoneVal == '' || cardVal == '' || cardExpVal == '' || cvvVal == '') {
        
        checkField( date, dateVal );
        checkField( email, emailVal );
        checkField( name, nameVal );
        checkField( surname, surnameVal );
        checkField( phone, phoneVal );
        checkField( card, cardVal );
        checkField( cardExp, cardExpVal );
        checkField( cvv, cvvVal );
        
        return false;
    }
    
});

$('input').keyup(function( event ) {

    $(this).prev('.error').remove();
    let nameVal = $(this).val();
    checkField( $(this), nameVal );
});
// Показать больше фото

$('.showmore').next().css('display', 'none')
$('.showless').css('display', 'none')

$('.showmore').click(function(){
    $(this).css('display', 'none');
    $(this).next().slideToggle();
    $('.showless').css('display', 'block')
});
$('.showless').click(function(){
    $(this).css('display', 'none');
    $(this).prev().slideToggle();
    $('.showmore').css('display', 'block')
});



