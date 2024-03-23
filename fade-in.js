$(function () {
	$('.main-class').scroll(function () {
		$('.js-fade').each(function () {
			var pos = $(this).offset().top;
			var scroll = $('.main-class').scrollTop();
			var windowHeight = $('.main-class').height();
			if (scroll > pos - windowHeight + 600) {
				$(this).addClass('scroll');
			}
		});
	});
});