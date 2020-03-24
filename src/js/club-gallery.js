// --- Club page photo gallery --- //

$(function () {
	let $large = $('.js-gallery-large');
	let $pic = $('.js-gallery-picture');

	$pic.on('click',function(e){
		e.preventDefault();
		let $this = $(this);
		let target = $this.children('.img').attr('src');
		$large.children('.img').attr('src', target);
		$large.children('.img').addClass('fade');
		setTimeout(function () {
			$large.children('.img').removeClass('fade');
		}, 500);
		return false
	});
});

// --- / Club page photo gallery --- //
