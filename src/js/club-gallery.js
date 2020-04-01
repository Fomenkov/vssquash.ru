// --- Club page photo gallery --- //

window.onload = function () {
	let largeImg = document.querySelector('.js-large-img');
	let gallery = document.querySelectorAll('.js-gallery-picture');

	for ( let i = 0; i < gallery.length; i++){
		let galleryImg = gallery[i];
		galleryImg.addEventListener("click", function () {
			let source = galleryImg.getAttribute('src');
			largeImg.setAttribute('src', source);
			largeImg.classList.add('fade');
			setTimeout(function () {
				largeImg.classList.remove('fade');
			}, 500);
		});
	}
};

// --- / Club page photo gallery --- //
