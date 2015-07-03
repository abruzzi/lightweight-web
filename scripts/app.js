$(function() {
	$('.story').hide().first().show();
	$('.dot').on('click', function() {
		$('.story').hide();
		$(this).addClass('active').siblings().removeClass('active');
		$('#'+$(this).attr('href')).show();
	});
});