$(document).ready(function(){
    		$('.slides-container').slick({
  			infinite: true,
 		 	slidesToShow: 3,
 		 	slidesToScroll: 1
			});

			$('.slides-container-tablet').slick({
  			infinite: true,
 		 	slidesToShow: 2,
 		 	slidesToScroll: 1
			});

			$('.slides-container-mob').slick({
  			infinite: true,
 		 	slidesToShow: 1,
 		 	slidesToScroll: 1,
 		 	arrows: false,
 		 	dots: true
			});

			$('.hooks').addClass('hooks_appear');
			$('.grid').addClass('grid_appear');
			$('.close_tag').addClass('close_tag_appear');
			$('.div').addClass('div_appear');
			$('.div_big').addClass('div_big_appear');
		});


//МИНИ-МЕНЮ
$(function(){
	$('.menu-btn').on('click', function(){
		$('.container-menu-mini').slideToggle();
		$('.menu-btn').toggleClass('menu-btn-active');
		$('html, body').toggleClass('scroll');
		$('.container-present').toggleClass('top');

		$('.hooks').toggleClass('display');
		$('.container-present__forename').toggleClass('container-present__forename_mini');
		$('.container-present').toggleClass('container-present_tab');
		$('.container-present__prof').toggleClass('container-present__prof_mini');
});
});

$(function(){
	$('.container-menu-mini__link').on('click', function(){
		$('html, body').removeClass('scroll');
		$('.container-menu-mini').slideToggle();

		$('.container-present__forename').toggleClass('container-present__forename_mini');
		$('.container-present__prof').toggleClass('container-present__prof_mini');
		$('.container-present').toggleClass('top');
		$('.hooks').toggleClass('display');
		$('.menu-btn').toggleClass('menu-btn-active');
});
});


//МОДАЛЬНОЕ ОКНО
//открыть по кнопке
$('.connect-button, .container-present__link, .container-present__link_special').click(function() {
	$('header, main, footer').css('filter', 'blur(5px)');
	$('.overlay-modal').fadeIn();
	$('body').css('overflow', 'hidden');
});

//закрыть на крестик
$('.close-modal').click(function() {
	$('.overlay-modal').fadeOut();
	$('header, main, footer').css('filter', 'none');
	$('body').css('overflow', 'auto');
});

//закрыть по клику вне окна
$(document).mouseup(function(e) {
	var modal = $('.modal');
	if (e.target!=modal[0]&&modal.has(e.target).length === 0) {
		$('.overlay-modal').fadeOut();
		$('header, main, footer').css('filter', 'none');
		$('body').css('overflow', 'auto');
	}
});

//ПЛАВНОЕ ПЕРЕМЕЩЕНИЕ К ЯКОРЯМ

$(document).ready(function(){
    $('.services, .footer-services').on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).position().top;
        //анимируем переход на расстояние
        $('body,html').animate({scrollTop: top}, 1000);
    });
});
